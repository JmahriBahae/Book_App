import { translations, GENRES } from './translations.js';

// Tauri API - initialized after DOM loads
let invoke, open, join;

// State
let currentLanguage = 'fr';
let books = [];
let settings = null;
let sortAscending = true;
let editingBookId = null;
let deleteBookId = null;

// DOM Elements
const setupScreen = document.getElementById('setup-screen');
const errorScreen = document.getElementById('error-screen');
const mainScreen = document.getElementById('main-screen');
const dataPathInput = document.getElementById('data-path-input');
const browseBtn = document.getElementById('browse-btn');
const setupLanguageSelect = document.getElementById('setup-language');
const setupConfirmBtn = document.getElementById('setup-confirm-btn');
const reconfigureBtn = document.getElementById('reconfigure-btn');
const errorPath = document.getElementById('error-path');

const searchInput = document.getElementById('search-input');
const genreFilter = document.getElementById('genre-filter');
const readFilter = document.getElementById('read-filter');
const sortBtn = document.getElementById('sort-btn');
const sortLabel = document.getElementById('sort-label');
const addBookBtn = document.getElementById('add-book-btn');
const booksList = document.getElementById('books-list');
const emptyState = document.getElementById('empty-state');

const bookModal = document.getElementById('book-modal');
const bookForm = document.getElementById('book-form');
const bookIdInput = document.getElementById('book-id');
const bookTitleInput = document.getElementById('book-title');
const bookAuthorInput = document.getElementById('book-author');
const bookGenreSelect = document.getElementById('book-genre');
const bookNotesInput = document.getElementById('book-notes');
const bookIsReadInput = document.getElementById('book-is-read');
const duplicateWarning = document.getElementById('duplicate-warning');
const modalTitle = document.getElementById('modal-title');

const statsModal = document.getElementById('stats-modal');
const statsContent = document.getElementById('stats-content');
const settingsModal = document.getElementById('settings-modal');
const settingsLanguageSelect = document.getElementById('settings-language');
const settingsDataPath = document.getElementById('settings-data-path');
const settingsBrowseBtn = document.getElementById('settings-browse-btn');
const settingsSaveBtn = document.getElementById('settings-save-btn');
const helpModal = document.getElementById('help-modal');
const helpContent = document.getElementById('help-content');
const deleteModal = document.getElementById('delete-modal');

// Initialize Tauri APIs
function initTauriAPIs() {
    invoke = window.__TAURI__.tauri.invoke;
    open = window.__TAURI__.dialog.open;
    join = window.__TAURI__.path.join;
}

// Initialize
async function init() {
    try {
        // Wait for Tauri to be ready
        initTauriAPIs();
        
        settings = await invoke('get_settings');
        
        if (settings) {
            currentLanguage = settings.language || 'fr';
            const dataExists = await invoke('check_data_folder_exists', { path: settings.data_path });
            
            if (dataExists) {
                await invoke('init_database', { dataPath: settings.data_path });
                await loadBooks();
                showScreen('main');
            } else {
                errorPath.textContent = settings.data_path;
                showScreen('error');
            }
        } else {
            // First launch - set default path
            const defaultPath = await getDefaultDataPath();
            dataPathInput.value = defaultPath;
            showScreen('setup');
        }
        
        applyLanguage();
        setupEventListeners();
        populateGenreSelects();
    } catch (error) {
        console.error('Init error:', error);
        showScreen('setup');
    }
}

async function getDefaultDataPath() {
    try {
        const exePath = await window.__TAURI__.path.appDir();
        return await join(exePath, 'BookData');
    } catch {
        return 'BookData';
    }
}

function showScreen(screen) {
    setupScreen.classList.add('hidden');
    errorScreen.classList.add('hidden');
    mainScreen.classList.add('hidden');
    
    if (screen === 'setup') {
        setupScreen.classList.remove('hidden');
    } else if (screen === 'error') {
        errorScreen.classList.remove('hidden');
    } else if (screen === 'main') {
        mainScreen.classList.remove('hidden');
    }
}

function applyLanguage() {
    const t = translations[currentLanguage];
    const html = document.documentElement;
    
    // Set direction
    if (currentLanguage === 'ar') {
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', 'ar');
    } else {
        html.setAttribute('dir', 'ltr');
        html.setAttribute('lang', currentLanguage);
    }
    
    // Setup screen
    document.getElementById('setup-title').textContent = t.setupTitle;
    document.getElementById('setup-desc').textContent = t.setupDesc;
    document.getElementById('setup-path-label').textContent = t.setupPathLabel;
    document.getElementById('setup-lang-label').textContent = t.setupLangLabel;
    browseBtn.textContent = t.browse;
    setupConfirmBtn.textContent = t.confirm;
    
    // Error screen
    document.getElementById('error-title').textContent = t.errorTitle;
    document.getElementById('error-desc').textContent = t.errorDesc;
    document.getElementById('error-path-label').innerHTML = t.errorPathLabel + ' <span id="error-path">' + (settings?.data_path || '') + '</span>';
    reconfigureBtn.textContent = t.reconfigure;
    
    // Main screen
    searchInput.placeholder = t.search;
    document.getElementById('filter-all').textContent = t.allGenres;
    document.getElementById('filter-all-status').textContent = t.all;
    document.getElementById('filter-read').textContent = t.read;
    document.getElementById('filter-unread').textContent = t.unread;
    sortLabel.textContent = sortAscending ? t.sortAZ : t.sortZA;
    addBookBtn.textContent = t.addBook;
    
    // Book form
    document.getElementById('label-title').textContent = t.title;
    document.getElementById('label-author').textContent = t.author;
    document.getElementById('label-genre').textContent = t.genre;
    document.getElementById('label-notes').textContent = t.notes;
    document.getElementById('label-read').textContent = t.isRead;
    document.getElementById('cancel-btn').textContent = t.cancel;
    document.getElementById('save-btn').textContent = t.save;
    document.getElementById('duplicate-text').textContent = t.duplicateWarning;
    
    // Delete modal
    document.getElementById('delete-title').textContent = t.deleteTitle;
    document.getElementById('delete-message').textContent = t.deleteMessage;
    document.getElementById('delete-cancel-btn').textContent = t.cancel;
    document.getElementById('delete-confirm-btn').textContent = t.delete;
    
    // Stats modal
    document.getElementById('stats-title').textContent = t.statsTitle;
    
    // Settings modal
    document.getElementById('settings-title').textContent = t.settingsTitle;
    document.getElementById('settings-lang-label').textContent = t.settingsLangLabel;
    document.getElementById('settings-path-label').textContent = t.settingsPathLabel;
    settingsBrowseBtn.textContent = t.browse;
    settingsSaveBtn.textContent = t.save;
    
    // Help modal
    document.getElementById('help-title').textContent = t.helpTitle;
    
    // Empty state
    document.getElementById('empty-message').textContent = t.emptyMessage;
    document.getElementById('empty-hint').textContent = t.emptyHint;
    
    // Update genre selects
    populateGenreSelects();
    
    // Re-render books
    renderBooks();
    
    // Update help content
    updateHelpContent();
}

function populateGenreSelects() {
    const t = translations[currentLanguage];
    
    // Book form genre select
    bookGenreSelect.innerHTML = `<option value="">${t.selectGenre}</option>`;
    GENRES.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = t.genres[genre];
        bookGenreSelect.appendChild(option);
    });
    
    // Filter genre select
    const currentFilter = genreFilter.value;
    genreFilter.innerHTML = `<option value="">${t.allGenres}</option>`;
    GENRES.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = t.genres[genre];
        genreFilter.appendChild(option);
    });
    genreFilter.value = currentFilter;
}

function updateHelpContent() {
    const t = translations[currentLanguage];
    
    helpContent.innerHTML = `
        <h3>${t.helpUsageTitle}</h3>
        <p>${t.helpUsageContent}</p>
        
        <h3>${t.helpAddTitle}</h3>
        <p>${t.helpAddContent}</p>
        
        <h3>${t.helpSearchTitle}</h3>
        <p>${t.helpSearchContent}</p>
        
        <h3>${t.helpDataTitle}</h3>
        <p>${t.helpDataContent}</p>
        
        <h3>${t.helpBackupTitle}</h3>
        <p>${t.helpBackupContent}</p>
        
        <div class="help-about">
            <h3>${t.helpAboutTitle}</h3>
            <p><strong>${t.helpAuthor}</strong> JMAHRI Bahae-Eddine</p>
            <p><strong>${t.helpYear}</strong> 2026</p>
            <p><strong>${t.helpLicense}</strong> ${t.helpLicenseValue}</p>
            <p><strong>${t.helpTech}</strong> Tauri, SQLite</p>
        </div>
    `;
}

async function loadBooks() {
    try {
        books = await invoke('get_all_books');
        renderBooks();
    } catch (error) {
        console.error('Load books error:', error);
    }
}

function getFilteredBooks() {
    const searchTerm = searchInput.value.toLowerCase();
    const genreFilterValue = genreFilter.value;
    const readFilterValue = readFilter.value;
    
    let filtered = books.filter(book => {
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
        return sortAscending ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
    });
    
    return filtered;
}

function renderBooks() {
    const filtered = getFilteredBooks();
    const t = translations[currentLanguage];
    
    if (filtered.length === 0) {
        booksList.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }
    
    emptyState.classList.add('hidden');
    
    booksList.innerHTML = filtered.map(book => {
        const genreLabel = book.genre ? t.genres[book.genre] || book.genre : '';
        const readLabel = book.is_read ? t.read : t.unread;
        const readClass = book.is_read ? 'read' : 'unread';
        const langLabel = book.language === 'arabic' ? t.arabic : t.latin;
        const langClass = book.language === 'arabic' ? 'arabic' : 'latin';
        const dateFormatted = formatDate(book.date_added);
        
        return `
            <div class="book-card" data-id="${book.id}">
                <div class="book-card-actions">
                    <button class="btn-icon edit-btn" title="Edit" data-id="${book.id}">✏️</button>
                    <button class="btn-icon delete-btn" title="Delete" data-id="${book.id}">🗑️</button>
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

function formatDate(dateStr) {
    try {
        const date = new Date(dateStr);
        return date.toLocaleDateString(currentLanguage === 'ar' ? 'ar-MA' : currentLanguage === 'en' ? 'en-US' : 'fr-FR');
    } catch {
        return dateStr;
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

async function openBookModal(book = null) {
    const t = translations[currentLanguage];
    
    editingBookId = book ? book.id : null;
    modalTitle.textContent = book ? t.editBookTitle : t.addBookTitle;
    
    bookIdInput.value = book ? book.id : '';
    bookTitleInput.value = book ? book.title : '';
    bookAuthorInput.value = book ? book.author || '' : '';
    bookGenreSelect.value = book ? book.genre || '' : '';
    bookNotesInput.value = book ? book.notes || '' : '';
    bookIsReadInput.checked = book ? book.is_read : false;
    
    duplicateWarning.classList.add('hidden');
    bookModal.classList.remove('hidden');
    bookTitleInput.focus();
}

function closeBookModal() {
    bookModal.classList.add('hidden');
    bookForm.reset();
    editingBookId = null;
}

async function handleBookSubmit(e) {
    e.preventDefault();
    
    const title = bookTitleInput.value.trim();
    const author = bookAuthorInput.value.trim();
    
    if (!title) return;
    
    // Check for duplicates
    const isDuplicate = await invoke('check_duplicate', {
        title,
        author,
        excludeId: editingBookId
    });
    
    if (isDuplicate) {
        duplicateWarning.classList.remove('hidden');
        return;
    }
    
    const bookData = {
        title,
        author: author || null,
        genre: bookGenreSelect.value || null,
        notes: bookNotesInput.value.trim() || null,
        is_read: bookIsReadInput.checked
    };
    
    try {
        if (editingBookId) {
            const existingBook = books.find(b => b.id === editingBookId);
            await invoke('update_book', {
                book: {
                    id: editingBookId,
                    ...bookData,
                    language: existingBook.language,
                    date_added: existingBook.date_added
                }
            });
        } else {
            await invoke('add_book', { book: bookData });
        }
        
        await loadBooks();
        closeBookModal();
    } catch (error) {
        console.error('Save book error:', error);
    }
}

function openDeleteModal(bookId) {
    deleteBookId = bookId;
    deleteModal.classList.remove('hidden');
}

function closeDeleteModal() {
    deleteModal.classList.add('hidden');
    deleteBookId = null;
}

async function confirmDelete() {
    if (!deleteBookId) return;
    
    try {
        await invoke('delete_book', { id: deleteBookId });
        await loadBooks();
        closeDeleteModal();
    } catch (error) {
        console.error('Delete book error:', error);
    }
}

async function openStatsModal() {
    const t = translations[currentLanguage];
    
    try {
        const stats = await invoke('get_statistics');
        
        const genresList = stats.by_genre.map(g => {
            const genreLabel = g.genre === 'Non spécifié' ? t.notSpecified : (t.genres[g.genre] || g.genre);
            return `<li><span>${genreLabel}</span><span>${g.count}</span></li>`;
        }).join('');
        
        statsContent.innerHTML = `
            <div class="stats-section">
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-value">${stats.total_books}</div>
                        <div class="stat-label">${t.totalBooks}</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">${stats.books_read}</div>
                        <div class="stat-label">${t.booksRead}</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">${stats.books_unread}</div>
                        <div class="stat-label">${t.booksUnread}</div>
                    </div>
                </div>
            </div>
            
            <div class="stats-section">
                <h3>${t.byLanguage}</h3>
                <ul class="stats-list">
                    <li><span>${t.arabic}</span><span>${stats.by_language.arabic}</span></li>
                    <li><span>${t.latin}</span><span>${stats.by_language.latin}</span></li>
                </ul>
            </div>
            
            <div class="stats-section">
                <h3>${t.byGenre}</h3>
                <ul class="stats-list">${genresList}</ul>
            </div>
        `;
        
        statsModal.classList.remove('hidden');
    } catch (error) {
        console.error('Load stats error:', error);
    }
}

function closeStatsModal() {
    statsModal.classList.add('hidden');
}

function openSettingsModal() {
    settingsLanguageSelect.value = currentLanguage;
    settingsDataPath.value = settings?.data_path || '';
    settingsModal.classList.remove('hidden');
}

function closeSettingsModal() {
    settingsModal.classList.add('hidden');
}

async function saveSettings() {
    const newLanguage = settingsLanguageSelect.value;
    const newPath = settingsDataPath.value;
    
    try {
        await invoke('save_settings', {
            dataPath: newPath,
            language: newLanguage
        });
        
        currentLanguage = newLanguage;
        settings = { data_path: newPath, language: newLanguage };
        
        applyLanguage();
        closeSettingsModal();
    } catch (error) {
        console.error('Save settings error:', error);
    }
}

function openHelpModal() {
    helpModal.classList.remove('hidden');
}

function closeHelpModal() {
    helpModal.classList.add('hidden');
}

async function browseFolder(inputElement) {
    try {
        const selected = await open({
            directory: true,
            multiple: false,
            title: 'Select Data Folder'
        });
        
        if (selected) {
            inputElement.value = selected;
        }
    } catch (error) {
        console.error('Browse error:', error);
    }
}

async function confirmSetup() {
    const dataPath = dataPathInput.value;
    const language = setupLanguageSelect.value;
    
    if (!dataPath) return;
    
    try {
        await invoke('save_settings', { dataPath, language });
        await invoke('init_database', { dataPath });
        
        settings = { data_path: dataPath, language };
        currentLanguage = language;
        
        applyLanguage();
        await loadBooks();
        showScreen('main');
    } catch (error) {
        console.error('Setup error:', error);
    }
}

function setupEventListeners() {
    // Setup screen
    browseBtn.addEventListener('click', () => browseFolder(dataPathInput));
    setupConfirmBtn.addEventListener('click', confirmSetup);
    setupLanguageSelect.addEventListener('change', () => {
        currentLanguage = setupLanguageSelect.value;
        applyLanguage();
    });
    
    // Error screen
    reconfigureBtn.addEventListener('click', () => {
        dataPathInput.value = settings?.data_path || '';
        showScreen('setup');
    });
    
    // Main screen
    searchInput.addEventListener('input', renderBooks);
    genreFilter.addEventListener('change', renderBooks);
    readFilter.addEventListener('change', renderBooks);
    sortBtn.addEventListener('click', () => {
        sortAscending = !sortAscending;
        const t = translations[currentLanguage];
        sortLabel.textContent = sortAscending ? t.sortAZ : t.sortZA;
        renderBooks();
    });
    
    addBookBtn.addEventListener('click', () => openBookModal());
    
    // Book list click delegation
    booksList.addEventListener('click', (e) => {
        const editBtn = e.target.closest('.edit-btn');
        const deleteBtn = e.target.closest('.delete-btn');
        
        if (editBtn) {
            const bookId = parseInt(editBtn.dataset.id);
            const book = books.find(b => b.id === bookId);
            if (book) openBookModal(book);
        }
        
        if (deleteBtn) {
            const bookId = parseInt(deleteBtn.dataset.id);
            openDeleteModal(bookId);
        }
    });
    
    // Book modal
    document.getElementById('modal-close').addEventListener('click', closeBookModal);
    document.getElementById('cancel-btn').addEventListener('click', closeBookModal);
    bookForm.addEventListener('submit', handleBookSubmit);
    bookTitleInput.addEventListener('input', () => duplicateWarning.classList.add('hidden'));
    bookAuthorInput.addEventListener('input', () => duplicateWarning.classList.add('hidden'));
    
    // Stats modal
    document.getElementById('stats-btn').addEventListener('click', openStatsModal);
    document.getElementById('stats-close').addEventListener('click', closeStatsModal);
    
    // Settings modal
    document.getElementById('settings-btn').addEventListener('click', openSettingsModal);
    document.getElementById('settings-close').addEventListener('click', closeSettingsModal);
    settingsBrowseBtn.addEventListener('click', () => browseFolder(settingsDataPath));
    settingsSaveBtn.addEventListener('click', saveSettings);
    
    // Help modal
    document.getElementById('help-btn').addEventListener('click', openHelpModal);
    document.getElementById('help-close').addEventListener('click', closeHelpModal);
    
    // Delete modal
    document.getElementById('delete-close').addEventListener('click', closeDeleteModal);
    document.getElementById('delete-cancel-btn').addEventListener('click', closeDeleteModal);
    document.getElementById('delete-confirm-btn').addEventListener('click', confirmDelete);
    
    // Close modals on backdrop click
    [bookModal, statsModal, settingsModal, helpModal, deleteModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    });
    
    // Close modals on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            [bookModal, statsModal, settingsModal, helpModal, deleteModal].forEach(modal => {
                modal.classList.add('hidden');
            });
        }
    });
}

// Start app
init();
