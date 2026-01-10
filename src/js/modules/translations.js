// Translations for French, English, and Arabic
export const translations = {
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
        filterLatin: "Latin (FR/EN)",
        filterArabic: "Arabe",
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

        // Notes modal
        notesTitle: "Notes",

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
        helpAddContent: "Cliquez sur le bouton \"+ Ajouter un livre\" pour ajouter un nouveau livre. Seul le titre est obligatoire. La langue est détectée automatiquement : si le titre contient des caractères arabes, le livre sera classé en arabe, sinon en latin (français/anglais). Vous pouvez également ajouter des notes à chaque livre.",
        helpSearchTitle: "Recherche et filtres",
        helpSearchContent: "Utilisez la barre de recherche pour trouver un livre par titre ou auteur. Filtrez par genre, statut de lecture (lu/non lu), ou par langue (Latin/Arabe) en utilisant les cases à cocher. Triez par ordre alphabétique avec le bouton A-Z.",
        helpNotesTitle: "Notes",
        helpNotesContent: "Si un livre contient des notes, une icône \"\ud83d\udc41\ufe0f\" apparaît dans la colonne Actions. Cliquez dessus pour afficher les notes.",
        helpDataTitle: "Données et portabilité",
        helpDataContent: "Vos données sont enregistrées dans le dossier que vous avez choisi lors de la configuration. Pour transférer votre bibliothèque sur un autre ordinateur, copiez le dossier BookData ainsi que l'application BookApp.exe.",
        helpBackupTitle: "Sauvegarde",
        helpBackupContent: "Pour sauvegarder votre bibliothèque, faites simplement une copie du dossier de données (BookData). Le fichier books.db contient toutes vos données.",
        helpAboutTitle: "À propos",
        helpAuthor: "Auteur :",
        helpYear: "Année :",
        helpLicense: "Licence :",
        helpLicenseValue: "Utilisation libre",
        helpTech: "Technologies :",

        // Empty state
        emptyMessage: "Aucun livre dans votre bibliothèque.",
        emptyHint: "Cliquez sur \"Ajouter un livre\" pour commencer.",

        // Date
        addedOn: "Ajouté le",

        // Header buttons
        statsBtn: "Statistiques",
        settingsBtn: "Paramètres",
        helpBtn: "Aide",

        // Table headers
        thTitle: "Titre",
        thAuthor: "Auteur",
        thGenre: "Genre",
        thStatus: "Statut",
        thLang: "Langue",
        thDate: "Ajouté",

        // Book card actions
        notesBtn: "Voir les notes",
        editBtn: "Modifier",
        deleteBtn: "Supprimer",

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
        filterLatin: "Latin (FR/EN)",
        filterArabic: "Arabic",
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

        // Notes modal
        notesTitle: "Notes",

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
        helpAddContent: "Click the \"+ Add a book\" button to add a new book. Only the title is required. The language is detected automatically: if the title contains Arabic characters, the book will be classified as Arabic, otherwise as Latin (French/English). You can also add notes to each book.",
        helpSearchTitle: "Search and filters",
        helpSearchContent: "Use the search bar to find a book by title or author. Filter by genre, reading status (read/unread), or by language (Latin/Arabic) using the checkboxes. Sort alphabetically with the A-Z button.",
        helpNotesTitle: "Notes",
        helpNotesContent: "If a book has notes, an \"\ud83d\udc41\ufe0f\" icon appears in the Actions column. Click it to view the notes.",
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

        // Header buttons
        statsBtn: "Statistics",
        settingsBtn: "Settings",
        helpBtn: "Help",

        // Table headers
        thTitle: "Title",
        thAuthor: "Author",
        thGenre: "Genre",
        thStatus: "Status",
        thLang: "Language",
        thDate: "Added",

        // Book card actions
        notesBtn: "View notes",
        editBtn: "Edit",
        deleteBtn: "Delete",

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
        filterLatin: "لاتيني (فر/إن)",
        filterArabic: "عربي",
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

        // Notes modal
        notesTitle: "ملاحظات",

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
        helpAddContent: "انقر على زر \"+ إضافة كتاب\" لإضافة كتاب جديد. العنوان فقط مطلوب. يتم اكتشاف اللغة تلقائياً: إذا كان العنوان يحتوي على أحرف عربية، سيتم تصنيف الكتاب كعربي، وإلا كلاتيني (فرنسي/إنجليزي). يمكنك أيضاً إضافة ملاحظات لكل كتاب.",
        helpSearchTitle: "البحث والتصفية",
        helpSearchContent: "استخدم شريط البحث للعثور على كتاب حسب العنوان أو المؤلف. صفِّ حسب النوع، حالة القراءة (مقروء/غير مقروء)، أو حسب اللغة (لاتيني/عربي) باستخدام مربعات الاختيار. رتّب أبجدياً بزر أ-ي.",
        helpNotesTitle: "الملاحظات",
        helpNotesContent: "إذا كان الكتاب يحتوي على ملاحظات، تظهر أيقونة \"\ud83d\udc41\ufe0f\" في عمود الإجراءات. انقر عليها لعرض الملاحظات.",
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

        // Header buttons
        statsBtn: "الإحصائيات",
        settingsBtn: "الإعدادات",
        helpBtn: "مساعدة",

        // Table headers
        thTitle: "العنوان",
        thAuthor: "المؤلف",
        thGenre: "النوع",
        thStatus: "الحالة",
        thLang: "اللغة",
        thDate: "أضيف",

        // Book card actions
        notesBtn: "عرض الملاحظات",
        editBtn: "تعديل",
        deleteBtn: "حذف",

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

export const GENRES = [
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
