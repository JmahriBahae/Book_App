// Event listeners setup
import { translations } from './translations.js';
import { state, dom } from './state.js';
import { applyLanguage } from './ui.js';
import { renderBooks, openBookModal, closeBookModal, handleBookSubmit, openDeleteModal, closeDeleteModal, confirmDelete, openNotesModal, closeNotesModal } from './books.js';
import { openStatsModal, closeStatsModal, openSettingsModal, closeSettingsModal, saveSettingsFromModal, openHelpModal, closeHelpModal, browseFolder, closeAllModals } from './modals.js';

export function setupEventListeners(confirmSetup) {
    // Setup screen
    if (dom.browseBtn) {
        dom.browseBtn.addEventListener('click', () => browseFolder(dom.dataPathInput));
    }
    if (dom.setupConfirmBtn) {
        dom.setupConfirmBtn.addEventListener('click', confirmSetup);
    }
    if (dom.setupLanguageSelect) {
        dom.setupLanguageSelect.addEventListener('change', () => {
            state.currentLanguage = dom.setupLanguageSelect.value;
            applyLanguage();
        });
    }
    
    // Error screen
    if (dom.reconfigureBtn) {
        dom.reconfigureBtn.addEventListener('click', () => {
            if (dom.dataPathInput) dom.dataPathInput.value = state.settings?.data_path || '';
            dom.setupScreen?.classList.remove('hidden');
            dom.errorScreen?.classList.add('hidden');
            dom.mainScreen?.classList.add('hidden');
        });
    }
    
    // Main screen - search and filters
    if (dom.searchInput) {
        dom.searchInput.addEventListener('input', renderBooks);
    }
    if (dom.genreFilter) {
        dom.genreFilter.addEventListener('change', renderBooks);
    }
    if (dom.readFilter) {
        dom.readFilter.addEventListener('change', renderBooks);
    }
    if (dom.sortBtn) {
        dom.sortBtn.addEventListener('click', () => {
            state.sortAscending = !state.sortAscending;
            const t = translations[state.currentLanguage];
            if (dom.sortLabel) dom.sortLabel.textContent = state.sortAscending ? t.sortAZ : t.sortZA;
            renderBooks();
        });
    }
    
    // Add book button
    if (dom.addBookBtn) {
        dom.addBookBtn.addEventListener('click', () => openBookModal());
    }
    
    // Book list click delegation
    if (dom.booksList) {
        dom.booksList.addEventListener('click', (e) => {
            const notesBtn = e.target.closest('.notes-btn');
            const editBtn = e.target.closest('.edit-btn');
            const deleteBtn = e.target.closest('.delete-btn');
            
            if (notesBtn) {
                const bookId = parseInt(notesBtn.dataset.id);
                openNotesModal(bookId);
            }
            
            if (editBtn) {
                const bookId = parseInt(editBtn.dataset.id);
                const book = state.books.find(b => b.id === bookId);
                if (book) openBookModal(book);
            }
            
            if (deleteBtn) {
                const bookId = parseInt(deleteBtn.dataset.id);
                openDeleteModal(bookId);
            }
        });
    }
    
    // Book modal
    const modalClose = document.getElementById('modal-close');
    const cancelBtn = document.getElementById('cancel-btn');
    if (modalClose) modalClose.addEventListener('click', closeBookModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeBookModal);
    if (dom.bookForm) {
        dom.bookForm.addEventListener('submit', handleBookSubmit);
    }
    if (dom.bookTitleInput) {
        dom.bookTitleInput.addEventListener('input', () => {
            if (dom.duplicateWarning) dom.duplicateWarning.classList.add('hidden');
        });
    }
    if (dom.bookAuthorInput) {
        dom.bookAuthorInput.addEventListener('input', () => {
            if (dom.duplicateWarning) dom.duplicateWarning.classList.add('hidden');
        });
    }
    
    // Stats modal
    const statsBtn = document.getElementById('stats-btn');
    const statsClose = document.getElementById('stats-close');
    if (statsBtn) statsBtn.addEventListener('click', openStatsModal);
    if (statsClose) statsClose.addEventListener('click', closeStatsModal);
    
    // Settings modal
    const settingsBtn = document.getElementById('settings-btn');
    const settingsClose = document.getElementById('settings-close');
    if (settingsBtn) settingsBtn.addEventListener('click', openSettingsModal);
    if (settingsClose) settingsClose.addEventListener('click', closeSettingsModal);
    if (dom.settingsBrowseBtn) {
        dom.settingsBrowseBtn.addEventListener('click', () => browseFolder(dom.settingsDataPath));
    }
    if (dom.settingsSaveBtn) {
        dom.settingsSaveBtn.addEventListener('click', saveSettingsFromModal);
    }
    
    // Help modal
    const helpBtn = document.getElementById('help-btn');
    const helpClose = document.getElementById('help-close');
    if (helpBtn) helpBtn.addEventListener('click', openHelpModal);
    if (helpClose) helpClose.addEventListener('click', closeHelpModal);
    
    // Delete modal
    const deleteClose = document.getElementById('delete-close');
    const deleteCancelBtn = document.getElementById('delete-cancel-btn');
    const deleteConfirmBtn = document.getElementById('delete-confirm-btn');
    if (deleteClose) deleteClose.addEventListener('click', closeDeleteModal);
    if (deleteCancelBtn) deleteCancelBtn.addEventListener('click', closeDeleteModal);
    if (deleteConfirmBtn) deleteConfirmBtn.addEventListener('click', confirmDelete);
    
    // Notes modal
    const notesClose = document.getElementById('notes-close');
    if (notesClose) notesClose.addEventListener('click', closeNotesModal);
    
    // Close modals on backdrop click
    const modals = [dom.bookModal, dom.statsModal, dom.settingsModal, dom.helpModal, dom.deleteModal, dom.notesModal];
    modals.forEach(modal => {
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.add('hidden');
                }
            });
        }
    });
    
    // Close modals on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });
}
