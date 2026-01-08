// Translations
const translations = {
    fr: {
        // Setup
        setupTitle: "Configuration initiale",
        setupDesc: "Choisissez l'emplacement où vos données seront enregistrées.",
        setupPathLabel: "Dossier de données:",
        setupLangLabel: "Langue de l'interface:",
        browse: "Parcourir",
        confirm: "Confirmer",

        // Error screen
        errorTitle: "⚠️ Dossier de données introuvable",
        errorDesc: "Le dossier de données configuré n'existe plus. Veuillez reconfigurer l'emplacement.",
        errorPathLabel: "Chemin configuré:",
        reconfigure: "Reconfigurer",

        // Main
        search: "Rechercher...",
        allGenres: "Tous les genres",
        all: "Tous",
        read: "Lu",
        unread: "Non lu",
        sortAZ: "A-Z",
        sortZA: "Z-A",
        addBook: "+ Ajouter un livre",

        // Book form
        addBookTitle: "Ajouter un livre",
        editBookTitle: "Modifier le livre",
        title: "Titre *",
        author: "Auteur",
        genre: "Genre",
        notes: "Notes",
        isRead: "Lu",
        cancel: "Annuler",
        save: "Enregistrer",
        duplicateWarning: "⚠️ Un livre avec le même titre et auteur existe déjà.",
        selectGenre: "-- Sélectionner --",

        // Delete
        deleteTitle: "Confirmer la suppression",
        deleteMessage: "Êtes-vous sûr de vouloir supprimer ce livre ?",
        delete: "Supprimer",

        // Stats
        statsTitle: "Statistiques",
        totalBooks: "Total",
        booksRead: "Lus",
        booksUnread: "Non lus",
        byGenre: "Par genre",
        byLanguage: "Par langue",
        arabic: "Arabe",
        latin: "Latin (FR/EN)",
        notSpecified: "Non spécifié",

        // Settings
        settingsTitle: "Paramètres",
        settingsLangLabel: "Langue de l'interface:",
        settingsPathLabel: "Dossier de données:",

        // Help
        helpTitle: "Aide",
        helpUsageTitle: "Comment utiliser BookApp",
        helpUsageContent: "BookApp vous permet de gérer votre bibliothèque personnelle. Vous pouvez ajouter, modifier et supprimer des livres, ainsi que les rechercher et les filtrer.",
        helpAddTitle: "Ajouter un livre",
        helpAddContent: "Cliquez sur le bouton \"+ Ajouter un livre\" pour ajouter un nouveau livre. Seul le titre est obligatoire. La langue est détectée automatiquement: si le titre contient des caractères arabes, le livre sera classé en arabe, sinon en latin (français/anglais).",
        helpSearchTitle: "Recherche et filtres",
        helpSearchContent: "Utilisez la barre de recherche pour trouver un livre par titre ou auteur. Vous pouvez également filtrer par genre ou statut de lecture, et trier par ordre alphabétique.",
        helpDataTitle: "Données et portabilité",
        helpDataContent: "Vos données sont enregistrées dans le dossier que vous avez choisi lors de la configuration. Pour transférer votre bibliothèque sur un autre ordinateur, copiez le dossier BookData ainsi que l'application BookApp.exe.",
        helpBackupTitle: "Sauvegarde",
        helpBackupContent: "Pour sauvegarder votre bibliothèque, faites simplement une copie du dossier de données (BookData). Le fichier books.db contient toutes vos données.",
        helpAboutTitle: "À propos",
        helpAuthor: "Auteur:",
        helpYear: "Année:",
        helpLicense: "Licence:",
        helpLicenseValue: "Utilisation libre",
        helpTech: "Technologies:",

        // Empty state
        emptyMessage: "Aucun livre dans votre bibliothèque.",
        emptyHint: "Cliquez sur \"Ajouter un livre\" pour commencer.",

        // Date
        addedOn: "Ajouté le",

        // Genres
        genres: {
            "Fiction": "Fiction",
            "Non-fiction": "Non-fiction",
            "Science": "Science",
            "History": "Histoire",
            "Biography": "Biographie",
            "Philosophy": "Philosophie",
            "Religion": "Religion",
            "Poetry": "Poésie",
            "Self-help": "Développement personnel",
            "Technology": "Technologie",
            "Children": "Jeunesse",
            "Comics": "BD / Manga",
            "Other": "Autre"
        }
    },
    en: {
        // Setup
        setupTitle: "Initial Setup",
        setupDesc: "Choose where your data will be saved.",
        setupPathLabel: "Data folder:",
        setupLangLabel: "Interface language:",
        browse: "Browse",
        confirm: "Confirm",

        // Error screen
        errorTitle: "⚠️ Data folder not found",
        errorDesc: "The configured data folder no longer exists. Please reconfigure the location.",
        errorPathLabel: "Configured path:",
        reconfigure: "Reconfigure",

        // Main
        search: "Search...",
        allGenres: "All genres",
        all: "All",
        read: "Read",
        unread: "Unread",
        sortAZ: "A-Z",
        sortZA: "Z-A",
        addBook: "+ Add a book",

        // Book form
        addBookTitle: "Add a book",
        editBookTitle: "Edit book",
        title: "Title *",
        author: "Author",
        genre: "Genre",
        notes: "Notes",
        isRead: "Read",
        cancel: "Cancel",
        save: "Save",
        duplicateWarning: "⚠️ A book with the same title and author already exists.",
        selectGenre: "-- Select --",

        // Delete
        deleteTitle: "Confirm deletion",
        deleteMessage: "Are you sure you want to delete this book?",
        delete: "Delete",

        // Stats
        statsTitle: "Statistics",
        totalBooks: "Total",
        booksRead: "Read",
        booksUnread: "Unread",
        byGenre: "By genre",
        byLanguage: "By language",
        arabic: "Arabic",
        latin: "Latin (FR/EN)",
        notSpecified: "Not specified",

        // Settings
        settingsTitle: "Settings",
        settingsLangLabel: "Interface language:",
        settingsPathLabel: "Data folder:",

        // Help
        helpTitle: "Help",
        helpUsageTitle: "How to use BookApp",
        helpUsageContent: "BookApp allows you to manage your personal library. You can add, edit, and delete books, as well as search and filter them.",
        helpAddTitle: "Add a book",
        helpAddContent: "Click the \"+ Add a book\" button to add a new book. Only the title is required. The language is detected automatically: if the title contains Arabic characters, the book will be classified as Arabic, otherwise as Latin (French/English).",
        helpSearchTitle: "Search and filters",
        helpSearchContent: "Use the search bar to find a book by title or author. You can also filter by genre or reading status, and sort alphabetically.",
        helpDataTitle: "Data and portability",
        helpDataContent: "Your data is saved in the folder you chose during setup. To transfer your library to another computer, copy the BookData folder along with the BookApp.exe application.",
        helpBackupTitle: "Backup",
        helpBackupContent: "To backup your library, simply make a copy of the data folder (BookData). The books.db file contains all your data.",
        helpAboutTitle: "About",
        helpAuthor: "Author:",
        helpYear: "Year:",
        helpLicense: "License:",
        helpLicenseValue: "Free use",
        helpTech: "Technologies:",

        // Empty state
        emptyMessage: "No books in your library.",
        emptyHint: "Click \"Add a book\" to get started.",

        // Date
        addedOn: "Added on",

        // Genres
        genres: {
            "Fiction": "Fiction",
            "Non-fiction": "Non-fiction",
            "Science": "Science",
            "History": "History",
            "Biography": "Biography",
            "Philosophy": "Philosophy",
            "Religion": "Religion",
            "Poetry": "Poetry",
            "Self-help": "Self-help",
            "Technology": "Technology",
            "Children": "Children's",
            "Comics": "Comics / Manga",
            "Other": "Other"
        }
    },
    ar: {
        // Setup
        setupTitle: "الإعداد الأولي",
        setupDesc: "اختر المكان الذي سيتم فيه حفظ بياناتك.",
        setupPathLabel: "مجلد البيانات:",
        setupLangLabel: "لغة الواجهة:",
        browse: "استعراض",
        confirm: "تأكيد",

        // Error screen
        errorTitle: "⚠️ مجلد البيانات غير موجود",
        errorDesc: "مجلد البيانات المحدد لم يعد موجوداً. يرجى إعادة تحديد الموقع.",
        errorPathLabel: "المسار المحدد:",
        reconfigure: "إعادة الإعداد",

        // Main
        search: "بحث...",
        allGenres: "جميع الأنواع",
        all: "الكل",
        read: "مقروء",
        unread: "غير مقروء",
        sortAZ: "أ-ي",
        sortZA: "ي-أ",
        addBook: "+ إضافة كتاب",

        // Book form
        addBookTitle: "إضافة كتاب",
        editBookTitle: "تعديل الكتاب",
        title: "العنوان *",
        author: "المؤلف",
        genre: "النوع",
        notes: "ملاحظات",
        isRead: "مقروء",
        cancel: "إلغاء",
        save: "حفظ",
        duplicateWarning: "⚠️ يوجد كتاب بنفس العنوان والمؤلف.",
        selectGenre: "-- اختر --",

        // Delete
        deleteTitle: "تأكيد الحذف",
        deleteMessage: "هل أنت متأكد من حذف هذا الكتاب؟",
        delete: "حذف",

        // Stats
        statsTitle: "الإحصائيات",
        totalBooks: "المجموع",
        booksRead: "مقروءة",
        booksUnread: "غير مقروءة",
        byGenre: "حسب النوع",
        byLanguage: "حسب اللغة",
        arabic: "عربي",
        latin: "لاتيني (فر/إن)",
        notSpecified: "غير محدد",

        // Settings
        settingsTitle: "الإعدادات",
        settingsLangLabel: "لغة الواجهة:",
        settingsPathLabel: "مجلد البيانات:",

        // Help
        helpTitle: "مساعدة",
        helpUsageTitle: "كيفية استخدام BookApp",
        helpUsageContent: "يتيح لك BookApp إدارة مكتبتك الشخصية. يمكنك إضافة وتعديل وحذف الكتب، بالإضافة إلى البحث والتصفية.",
        helpAddTitle: "إضافة كتاب",
        helpAddContent: "انقر على زر \"+ إضافة كتاب\" لإضافة كتاب جديد. العنوان فقط مطلوب. يتم اكتشاف اللغة تلقائياً: إذا كان العنوان يحتوي على أحرف عربية، سيتم تصنيف الكتاب كعربي، وإلا كلاتيني (فرنسي/إنجليزي).",
        helpSearchTitle: "البحث والتصفية",
        helpSearchContent: "استخدم شريط البحث للعثور على كتاب حسب العنوان أو المؤلف. يمكنك أيضاً التصفية حسب النوع أو حالة القراءة، والترتيب أبجدياً.",
        helpDataTitle: "البيانات والنقل",
        helpDataContent: "يتم حفظ بياناتك في المجلد الذي اخترته أثناء الإعداد. لنقل مكتبتك إلى جهاز آخر، انسخ مجلد BookData مع تطبيق BookApp.exe.",
        helpBackupTitle: "النسخ الاحتياطي",
        helpBackupContent: "لعمل نسخة احتياطية من مكتبتك، قم ببساطة بنسخ مجلد البيانات (BookData). يحتوي ملف books.db على جميع بياناتك.",
        helpAboutTitle: "حول",
        helpAuthor: "المؤلف:",
        helpYear: "السنة:",
        helpLicense: "الترخيص:",
        helpLicenseValue: "استخدام مجاني",
        helpTech: "التقنيات:",

        // Empty state
        emptyMessage: "لا توجد كتب في مكتبتك.",
        emptyHint: "انقر على \"+ إضافة كتاب\" للبدء.",

        // Date
        addedOn: "أضيف في",

        // Genres
        genres: {
            "Fiction": "خيال",
            "Non-fiction": "غير خيالي",
            "Science": "علوم",
            "History": "تاريخ",
            "Biography": "سيرة ذاتية",
            "Philosophy": "فلسفة",
            "Religion": "دين",
            "Poetry": "شعر",
            "Self-help": "تطوير الذات",
            "Technology": "تكنولوجيا",
            "Children": "أطفال",
            "Comics": "قصص مصورة / مانغا",
            "Other": "أخرى"
        }
    }
};

const GENRES = [
    "Fiction",
    "Non-fiction", 
    "Science",
    "History",
    "Biography",
    "Philosophy",
    "Religion",
    "Poetry",
    "Self-help",
    "Technology",
    "Children",
    "Comics",
    "Other"
];

// Tauri API - initialized after DOM loads
let invoke, open, join;

// State
let currentLanguage = 'fr';
let books = [];
let settings = null;
let sortAscending = true;
let editingBookId = null;
let deleteBookId = null;

// DOM Elements - initialized after DOM loads
let setupScreen, errorScreen, mainScreen, dataPathInput, browseBtn;
let setupLanguageSelect, setupConfirmBtn, reconfigureBtn, errorPath;
let searchInput, genreFilter, readFilter, sortBtn, sortLabel;
let addBookBtn, booksList, emptyState;
let bookModal, bookForm, bookIdInput, bookTitleInput, bookAuthorInput;
let bookGenreSelect, bookNotesInput, bookIsReadInput, duplicateWarning, modalTitle;
let statsModal, statsContent, settingsModal, settingsLanguageSelect;
let settingsDataPath, settingsBrowseBtn, settingsSaveBtn;
let helpModal, helpContent, deleteModal;

// Initialize DOM references
function initDOMElements() {
    setupScreen = document.getElementById('setup-screen');
    errorScreen = document.getElementById('error-screen');
    mainScreen = document.getElementById('main-screen');
    dataPathInput = document.getElementById('data-path-input');
    browseBtn = document.getElementById('browse-btn');
    setupLanguageSelect = document.getElementById('setup-language');
    setupConfirmBtn = document.getElementById('setup-confirm-btn');
    reconfigureBtn = document.getElementById('reconfigure-btn');
    errorPath = document.getElementById('error-path');

    searchInput = document.getElementById('search-input');
    genreFilter = document.getElementById('genre-filter');
    readFilter = document.getElementById('read-filter');
    sortBtn = document.getElementById('sort-btn');
    sortLabel = document.getElementById('sort-label');
    addBookBtn = document.getElementById('add-book-btn');
    booksList = document.getElementById('books-list');
    emptyState = document.getElementById('empty-state');

    bookModal = document.getElementById('book-modal');
    bookForm = document.getElementById('book-form');
    bookIdInput = document.getElementById('book-id');
    bookTitleInput = document.getElementById('book-title');
    bookAuthorInput = document.getElementById('book-author');
    bookGenreSelect = document.getElementById('book-genre');
    bookNotesInput = document.getElementById('book-notes');
    bookIsReadInput = document.getElementById('book-is-read');
    duplicateWarning = document.getElementById('duplicate-warning');
    modalTitle = document.getElementById('modal-title');

    statsModal = document.getElementById('stats-modal');
    statsContent = document.getElementById('stats-content');
    settingsModal = document.getElementById('settings-modal');
    settingsLanguageSelect = document.getElementById('settings-language');
    settingsDataPath = document.getElementById('settings-data-path');
    settingsBrowseBtn = document.getElementById('settings-browse-btn');
    settingsSaveBtn = document.getElementById('settings-save-btn');
    helpModal = document.getElementById('help-modal');
    helpContent = document.getElementById('help-content');
    deleteModal = document.getElementById('delete-modal');
}

// Initialize Tauri APIs
function initTauriAPIs() {
    invoke = window.__TAURI__.tauri.invoke;
    open = window.__TAURI__.dialog.open;
    join = window.__TAURI__.path.join;
}

// Initialize
async function init() {
    // Initialize DOM elements first
    initDOMElements();
    
    // Initialize Tauri APIs
    initTauriAPIs();
    
    // Setup event listeners immediately so UI is responsive
    setupEventListeners();
    populateGenreSelects();
    applyLanguage();
    
    try {
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
        
        // Re-apply language in case it changed from settings
        applyLanguage();
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

// Helper to safely set text content
function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

function setHtml(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
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
    setText('setup-title', t.setupTitle);
    setText('setup-desc', t.setupDesc);
    setText('setup-path-label', t.setupPathLabel);
    setText('setup-lang-label', t.setupLangLabel);
    if (browseBtn) browseBtn.textContent = t.browse;
    if (setupConfirmBtn) setupConfirmBtn.textContent = t.confirm;
    
    // Error screen
    setText('error-title', t.errorTitle);
    setText('error-desc', t.errorDesc);
    setHtml('error-path-label', t.errorPathLabel + ' <span id="error-path">' + (settings?.data_path || '') + '</span>');
    if (reconfigureBtn) reconfigureBtn.textContent = t.reconfigure;
    
    // Main screen
    if (searchInput) searchInput.placeholder = t.search;
    setText('filter-all', t.allGenres);
    setText('filter-all-status', t.all);
    setText('filter-read', t.read);
    setText('filter-unread', t.unread);
    if (sortLabel) sortLabel.textContent = sortAscending ? t.sortAZ : t.sortZA;
    if (addBookBtn) addBookBtn.textContent = t.addBook;
    
    // Book form
    setText('label-title', t.title);
    setText('label-author', t.author);
    setText('label-genre', t.genre);
    setText('label-notes', t.notes);
    setText('label-read', t.isRead);
    setText('cancel-btn', t.cancel);
    setText('save-btn', t.save);
    setText('duplicate-text', t.duplicateWarning);
    
    // Delete modal
    setText('delete-title', t.deleteTitle);
    setText('delete-message', t.deleteMessage);
    setText('delete-cancel-btn', t.cancel);
    setText('delete-confirm-btn', t.delete);
    
    // Stats modal
    setText('stats-title', t.statsTitle);
    
    // Settings modal
    setText('settings-title', t.settingsTitle);
    setText('settings-lang-label', t.settingsLangLabel);
    setText('settings-path-label', t.settingsPathLabel);
    if (settingsBrowseBtn) settingsBrowseBtn.textContent = t.browse;
    if (settingsSaveBtn) settingsSaveBtn.textContent = t.save;
    
    // Help modal
    setText('help-title', t.helpTitle);
    
    // Empty state
    setText('empty-message', t.emptyMessage);
    setText('empty-hint', t.emptyHint);
    
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

// Start app when DOM is ready
document.addEventListener('DOMContentLoaded', init);
