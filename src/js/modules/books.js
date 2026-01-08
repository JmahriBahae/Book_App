// Book-related functionality
import { translations } from './translations.js';
import { state, dom } from './state.js';
import * as api from './api.js';
import { formatDate, escapeHtml, applyLanguage } from './ui.js';

// Load books from database
export async function loadBooks() {
    try {
        state.books = await api.getAllBooks();
        renderBooks();
    } catch (error) {
        console.error('Load books error:', error);
    }
}

// Get filtered and sorted books
export function getFilteredBooks() {
    const searchTerm = dom.searchInput?.value.toLowerCase() || '';
    const genreFilterValue = dom.genreFilter?.value || '';
    const readFilterValue = dom.readFilter?.value || '';
    
    let filtered = state.books.filter(book => {
        const matchesSearch = !searchTerm || 
            book.title.toLowerCase().includes(searchTerm) ||
            (book.author && book.author.toLowerCase().includes(searchTerm));
        
        const matchesGenre = !genreFilterValue || book.genre === genreFilterValue;
        
        let matchesRead = true;
        if (readFilterValue === 'read') matchesRead = book.is_read;
        if (readFilterValue === 'unread') matchesRead = !book.is_read;
        
        return matchesSearch && matchesGenre && matchesRead;
    });
    
    // Sort
    filtered.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        return state.sortAscending ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
    });
    
    return filtered;
}

// Render books list
export function renderBooks() {
    const filtered = getFilteredBooks();
    const t = translations[state.currentLanguage];
    
    if (!dom.booksList || !dom.emptyState) return;
    
    if (filtered.length === 0) {
        dom.booksList.innerHTML = '';
        dom.emptyState.classList.remove('hidden');
        return;
    }
    
    dom.emptyState.classList.add('hidden');
    
    dom.booksList.innerHTML = filtered.map(book => {
        const genreLabel = book.genre ? t.genres[book.genre] || book.genre : '';
        const readLabel = book.is_read ? t.read : t.unread;
        const readClass = book.is_read ? 'read' : 'unread';
        const langLabel = book.language === 'arabic' ? t.arabic : t.latin;
        const langClass = book.language === 'arabic' ? 'arabic' : 'latin';
        const dateFormatted = formatDate(book.date_added);
        
        return `
            <div class="book-card" data-id="${book.id}">
                <div class="book-card-actions">
                    <button class="btn-icon edit-btn" title="${t.editBtn}" data-id="${book.id}">✏️</button>
                    <button class="btn-icon delete-btn" title="${t.deleteBtn}" data-id="${book.id}">🗑️</button>
                </div>
                <div class="book-card-title">${escapeHtml(book.title)}</div>
                ${book.author ? `<div class="book-card-author">${escapeHtml(book.author)}</div>` : ''}
                <div class="book-card-meta">
                    ${genreLabel ? `<span class="book-card-badge">${genreLabel}</span>` : ''}
                    <span class="book-card-badge ${readClass}">${readLabel}</span>
                    <span class="book-card-badge ${langClass}">${langLabel}</span>
                </div>
                ${book.notes ? `<div class="book-card-notes">${escapeHtml(book.notes)}</div>` : ''}
                <div class="book-card-date">${t.addedOn} ${dateFormatted}</div>
            </div>
        `;
    }).join('');
}

// Open book modal for add/edit
export function openBookModal(book = null) {
    const t = translations[state.currentLanguage];
    
    state.editingBookId = book ? book.id : null;
    if (dom.modalTitle) dom.modalTitle.textContent = book ? t.editBookTitle : t.addBookTitle;
    
    if (dom.bookIdInput) dom.bookIdInput.value = book ? book.id : '';
    if (dom.bookTitleInput) dom.bookTitleInput.value = book ? book.title : '';
    if (dom.bookAuthorInput) dom.bookAuthorInput.value = book ? book.author || '' : '';
    if (dom.bookGenreSelect) dom.bookGenreSelect.value = book ? book.genre || '' : '';
    if (dom.bookNotesInput) dom.bookNotesInput.value = book ? book.notes || '' : '';
    if (dom.bookIsReadInput) dom.bookIsReadInput.checked = book ? book.is_read : false;
    
    if (dom.duplicateWarning) dom.duplicateWarning.classList.add('hidden');
    if (dom.bookModal) dom.bookModal.classList.remove('hidden');
    if (dom.bookTitleInput) dom.bookTitleInput.focus();
}

// Close book modal
export function closeBookModal() {
    if (dom.bookModal) dom.bookModal.classList.add('hidden');
    if (dom.bookForm) dom.bookForm.reset();
    state.editingBookId = null;
}

// Handle book form submission
export async function handleBookSubmit(e) {
    e.preventDefault();
    
    const title = dom.bookTitleInput?.value.trim() || '';
    const author = dom.bookAuthorInput?.value.trim() || '';
    
    if (!title) return;
    
    // Check for duplicates
    const isDuplicate = await api.checkDuplicate(title, author, state.editingBookId);
    
    if (isDuplicate) {
        if (dom.duplicateWarning) dom.duplicateWarning.classList.remove('hidden');
        return;
    }
    
    const bookData = {
        title,
        author: author || null,
        genre: dom.bookGenreSelect?.value || null,
        notes: dom.bookNotesInput?.value.trim() || null,
        is_read: dom.bookIsReadInput?.checked || false
    };
    
    try {
        if (state.editingBookId) {
            const existingBook = state.books.find(b => b.id === state.editingBookId);
            await api.updateBook({
                id: state.editingBookId,
                ...bookData,
                language: existingBook.language,
                date_added: existingBook.date_added
            });
        } else {
            await api.addBook(bookData);
        }
        
        await loadBooks();
        closeBookModal();
    } catch (error) {
        console.error('Save book error:', error);
    }
}

// Open delete confirmation modal
export function openDeleteModal(bookId) {
    state.deleteBookId = bookId;
    if (dom.deleteModal) dom.deleteModal.classList.remove('hidden');
}

// Close delete modal
export function closeDeleteModal() {
    if (dom.deleteModal) dom.deleteModal.classList.add('hidden');
    state.deleteBookId = null;
}

// Confirm and execute delete
export async function confirmDelete() {
    if (!state.deleteBookId) return;
    
    try {
        await api.deleteBook(state.deleteBookId);
        await loadBooks();
        closeDeleteModal();
    } catch (error) {
        console.error('Delete book error:', error);
    }
}
