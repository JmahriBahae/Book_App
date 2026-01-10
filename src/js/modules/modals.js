// Modal functionality (stats, settings, help)
import { translations } from './translations.js';
import { state, dom } from './state.js';
import * as api from './api.js';
import { applyLanguage } from './ui.js';
import { renderBooks, loadBooks } from './books.js';

// Stats Modal
export async function openStatsModal() {
    const t = translations[state.currentLanguage];
    
    try {
        const stats = await api.getStatistics();
        
        const genresList = stats.by_genre.map(g => {
            const genreLabel = g.genre === 'Non spécifié' ? t.notSpecified : (t.genres[g.genre] || g.genre);
            return `<li><span>${genreLabel}</span><span>${g.count}</span></li>`;
        }).join('');
        
        if (dom.statsContent) {
            dom.statsContent.innerHTML = `
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
        }
        
        if (dom.statsModal) dom.statsModal.classList.remove('hidden');
    } catch (error) {
        console.error('Load stats error:', error);
    }
}

export function closeStatsModal() {
    if (dom.statsModal) dom.statsModal.classList.add('hidden');
}

// Settings Modal
export function openSettingsModal() {
    if (dom.settingsLanguageSelect) dom.settingsLanguageSelect.value = state.currentLanguage;
    if (dom.settingsDataPath) dom.settingsDataPath.value = state.settings?.data_path || '';
    if (dom.settingsModal) dom.settingsModal.classList.remove('hidden');
}

export function closeSettingsModal() {
    if (dom.settingsModal) dom.settingsModal.classList.add('hidden');
}

export async function saveSettingsFromModal() {
    const newLanguage = dom.settingsLanguageSelect?.value || 'fr';
    const newPath = dom.settingsDataPath?.value || '';
    const oldPath = state.settings?.data_path || '';
    
    try {
        await api.saveSettings(newPath, newLanguage);
        
        state.currentLanguage = newLanguage;
        state.settings = { data_path: newPath, language: newLanguage };
        
        // If data path changed, reinitialize database and reload books
        if (newPath !== oldPath) {
            await api.initDatabase(newPath);
            await loadBooks();
        }
        
        applyLanguage();
        renderBooks();
        closeSettingsModal();
    } catch (error) {
        console.error('Save settings error:', error);
    }
}

// Help Modal
export function openHelpModal() {
    if (dom.helpModal) dom.helpModal.classList.remove('hidden');
}

export function closeHelpModal() {
    if (dom.helpModal) dom.helpModal.classList.add('hidden');
}

// Browse folder dialog
export async function browseFolder(inputElement) {
    try {
        const selected = await api.openFolderDialog();
        if (selected && inputElement) {
            inputElement.value = selected;
        }
    } catch (error) {
        console.error('Browse error:', error);
    }
}

// Close all modals
export function closeAllModals() {
    const modals = [dom.bookModal, dom.statsModal, dom.settingsModal, dom.helpModal, dom.deleteModal, dom.notesModal];
    modals.forEach(modal => {
        if (modal) modal.classList.add('hidden');
    });
}
