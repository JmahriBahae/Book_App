// Application state management
export const state = {
    currentLanguage: 'fr',
    books: [],
    settings: null,
    sortAscending: true,
    editingBookId: null,
    deleteBookId: null
};

// DOM elements - initialized after DOM loads
export const dom = {
    // Screens
    setupScreen: null,
    errorScreen: null,
    mainScreen: null,
    
    // Setup screen
    dataPathInput: null,
    browseBtn: null,
    setupLanguageSelect: null,
    setupConfirmBtn: null,
    
    // Error screen
    reconfigureBtn: null,
    errorPath: null,
    
    // Main screen
    searchInput: null,
    genreFilter: null,
    readFilter: null,
    sortBtn: null,
    sortLabel: null,
    addBookBtn: null,
    booksTable: null,
    booksList: null,
    emptyState: null,
    
    // Book modal
    bookModal: null,
    bookForm: null,
    bookIdInput: null,
    bookTitleInput: null,
    bookAuthorInput: null,
    bookGenreSelect: null,
    bookNotesInput: null,
    bookIsReadInput: null,
    duplicateWarning: null,
    modalTitle: null,
    
    // Other modals
    statsModal: null,
    statsContent: null,
    settingsModal: null,
    settingsLanguageSelect: null,
    settingsDataPath: null,
    settingsBrowseBtn: null,
    settingsSaveBtn: null,
    helpModal: null,
    helpContent: null,
    deleteModal: null
};

// Initialize DOM references
export function initDOMElements() {
    dom.setupScreen = document.getElementById('setup-screen');
    dom.errorScreen = document.getElementById('error-screen');
    dom.mainScreen = document.getElementById('main-screen');
    dom.dataPathInput = document.getElementById('data-path-input');
    dom.browseBtn = document.getElementById('browse-btn');
    dom.setupLanguageSelect = document.getElementById('setup-language');
    dom.setupConfirmBtn = document.getElementById('setup-confirm-btn');
    dom.reconfigureBtn = document.getElementById('reconfigure-btn');
    dom.errorPath = document.getElementById('error-path');

    dom.searchInput = document.getElementById('search-input');
    dom.genreFilter = document.getElementById('genre-filter');
    dom.readFilter = document.getElementById('read-filter');
    dom.sortBtn = document.getElementById('sort-btn');
    dom.sortLabel = document.getElementById('sort-label');
    dom.addBookBtn = document.getElementById('add-book-btn');
    dom.booksTable = document.getElementById('books-table');
    dom.booksList = document.getElementById('books-list');
    dom.emptyState = document.getElementById('empty-state');

    dom.bookModal = document.getElementById('book-modal');
    dom.bookForm = document.getElementById('book-form');
    dom.bookIdInput = document.getElementById('book-id');
    dom.bookTitleInput = document.getElementById('book-title');
    dom.bookAuthorInput = document.getElementById('book-author');
    dom.bookGenreSelect = document.getElementById('book-genre');
    dom.bookNotesInput = document.getElementById('book-notes');
    dom.bookIsReadInput = document.getElementById('book-is-read');
    dom.duplicateWarning = document.getElementById('duplicate-warning');
    dom.modalTitle = document.getElementById('modal-title');

    dom.statsModal = document.getElementById('stats-modal');
    dom.statsContent = document.getElementById('stats-content');
    dom.settingsModal = document.getElementById('settings-modal');
    dom.settingsLanguageSelect = document.getElementById('settings-language');
    dom.settingsDataPath = document.getElementById('settings-data-path');
    dom.settingsBrowseBtn = document.getElementById('settings-browse-btn');
    dom.settingsSaveBtn = document.getElementById('settings-save-btn');
    dom.helpModal = document.getElementById('help-modal');
    dom.helpContent = document.getElementById('help-content');
    dom.deleteModal = document.getElementById('delete-modal');
}
