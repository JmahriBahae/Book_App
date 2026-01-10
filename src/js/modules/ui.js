// UI utility functions
import { translations, GENRES } from './translations.js';
import { state, dom } from './state.js';

// Helper to safely set text content
export function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

export function setHtml(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
}

// Screen management
export function showScreen(screen) {
    dom.setupScreen.classList.add('hidden');
    dom.errorScreen.classList.add('hidden');
    dom.mainScreen.classList.add('hidden');
    
    if (screen === 'setup') {
        dom.setupScreen.classList.remove('hidden');
    } else if (screen === 'error') {
        dom.errorScreen.classList.remove('hidden');
    } else if (screen === 'main') {
        dom.mainScreen.classList.remove('hidden');
    }
}

// Apply language to UI
export function applyLanguage() {
    const t = translations[state.currentLanguage];
    const html = document.documentElement;
    
    // Set direction
    if (state.currentLanguage === 'ar') {
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', 'ar');
    } else {
        html.setAttribute('dir', 'ltr');
        html.setAttribute('lang', state.currentLanguage);
    }
    
    // Setup screen
    setText('setup-title', t.setupTitle);
    setText('setup-desc', t.setupDesc);
    setText('setup-path-label', t.setupPathLabel);
    setText('setup-lang-label', t.setupLangLabel);
    if (dom.browseBtn) dom.browseBtn.textContent = t.browse;
    if (dom.setupConfirmBtn) dom.setupConfirmBtn.textContent = t.confirm;
    
    // Error screen
    setText('error-title', t.errorTitle);
    setText('error-desc', t.errorDesc);
    setHtml('error-path-label', t.errorPathLabel + ' <span id="error-path">' + (state.settings?.data_path || '') + '</span>');
    if (dom.reconfigureBtn) dom.reconfigureBtn.textContent = t.reconfigure;
    
    // Main screen
    if (dom.searchInput) dom.searchInput.placeholder = t.search;
    setText('filter-all', t.allGenres);
    setText('filter-all-status', t.all);
    setText('filter-read', t.read);
    setText('filter-unread', t.unread);
    if (dom.sortLabel) dom.sortLabel.textContent = state.sortAscending ? t.sortAZ : t.sortZA;
    if (dom.addBookBtn) dom.addBookBtn.textContent = t.addBook;
    setText('filter-latin-label', t.filterLatin);
    setText('filter-arabic-label', t.filterArabic);
    
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
    
    // Notes modal
    setText('notes-title', t.notesTitle);
    
    // Stats modal
    setText('stats-title', t.statsTitle);
    
    // Settings modal
    setText('settings-title', t.settingsTitle);
    setText('settings-lang-label', t.settingsLangLabel);
    setText('settings-path-label', t.settingsPathLabel);
    if (dom.settingsBrowseBtn) dom.settingsBrowseBtn.textContent = t.browse;
    if (dom.settingsSaveBtn) dom.settingsSaveBtn.textContent = t.save;
    
    // Help modal
    setText('help-title', t.helpTitle);
    
    // Header button labels
    setText('stats-btn-label', t.statsBtn);
    setText('settings-btn-label', t.settingsBtn);
    setText('help-btn-label', t.helpBtn);
    
    // Table headers
    setText('th-title', t.thTitle);
    setText('th-author', t.thAuthor);
    setText('th-genre', t.thGenre);
    setText('th-status', t.thStatus);
    setText('th-lang', t.thLang);
    setText('th-date', t.thDate);

    // Empty state
    setText('empty-message', t.emptyMessage);
    setText('empty-hint', t.emptyHint);
    
    // Update genre selects
    populateGenreSelects();
    
    // Update help content
    updateHelpContent();
}

// Populate genre dropdowns
export function populateGenreSelects() {
    const t = translations[state.currentLanguage];
    
    // Book form genre select
    if (dom.bookGenreSelect) {
        dom.bookGenreSelect.innerHTML = `<option value="">${t.selectGenre}</option>`;
        GENRES.forEach(genre => {
            const option = document.createElement('option');
            option.value = genre;
            option.textContent = t.genres[genre];
            dom.bookGenreSelect.appendChild(option);
        });
    }
    
    // Filter genre select
    if (dom.genreFilter) {
        const currentFilter = dom.genreFilter.value;
        dom.genreFilter.innerHTML = `<option value="">${t.allGenres}</option>`;
        GENRES.forEach(genre => {
            const option = document.createElement('option');
            option.value = genre;
            option.textContent = t.genres[genre];
            dom.genreFilter.appendChild(option);
        });
        dom.genreFilter.value = currentFilter;
    }
}

// Update help modal content
export function updateHelpContent() {
    const t = translations[state.currentLanguage];
    
    if (dom.helpContent) {
        dom.helpContent.innerHTML = `
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
}

// Format date based on language
export function formatDate(dateStr) {
    try {
        const date = new Date(dateStr);
        const locale = state.currentLanguage === 'ar' ? 'ar-MA' : 
                       state.currentLanguage === 'en' ? 'en-US' : 'fr-FR';
        return date.toLocaleDateString(locale);
    } catch {
        return dateStr;
    }
}

// Escape HTML for safe rendering
export function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
