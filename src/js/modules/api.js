// Tauri API wrapper
let invoke, open, join;

export function initTauriAPIs() {
    invoke = window.__TAURI__.tauri.invoke;
    open = window.__TAURI__.dialog.open;
    join = window.__TAURI__.path.join;
}

// Settings
export async function getSettings() {
    return await invoke('get_settings');
}

export async function saveSettings(dataPath, language) {
    return await invoke('save_settings', { dataPath, language });
}

export async function checkDataFolderExists(path) {
    return await invoke('check_data_folder_exists', { path });
}

// Database
export async function initDatabase(dataPath) {
    return await invoke('init_database', { dataPath });
}

// Books
export async function getAllBooks() {
    return await invoke('get_all_books');
}

export async function addBook(book) {
    return await invoke('add_book', { book });
}

export async function updateBook(book) {
    return await invoke('update_book', { book });
}

export async function deleteBook(id) {
    return await invoke('delete_book', { id });
}

export async function checkDuplicate(title, author, excludeId) {
    return await invoke('check_duplicate', { title, author, excludeId });
}

// Statistics
export async function getStatistics() {
    return await invoke('get_statistics');
}

// Dialog
export async function openFolderDialog() {
    return await open({
        directory: true,
        multiple: false,
        title: 'Select Data Folder'
    });
}

// Path
export async function getAppDir() {
    return await window.__TAURI__.path.appDir();
}

export async function joinPath(...parts) {
    return await join(...parts);
}
