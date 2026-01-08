// Main application entry point
import { state, dom, initDOMElements } from './modules/state.js';
import * as api from './modules/api.js';
import { showScreen, applyLanguage, populateGenreSelects } from './modules/ui.js';
import { loadBooks, renderBooks } from './modules/books.js';
import { setupEventListeners } from './modules/events.js';

// Initialize application
async function init() {
    // Initialize DOM elements
    initDOMElements();
    
    // Initialize Tauri APIs
    api.initTauriAPIs();
    
    // Setup event listeners
    setupEventListeners(confirmSetup);
    
    // Populate initial UI
    populateGenreSelects();
    applyLanguage();
    
    try {
        state.settings = await api.getSettings();
        
        if (state.settings) {
            state.currentLanguage = state.settings.language || 'fr';
            const dataExists = await api.checkDataFolderExists(state.settings.data_path);
            
            if (dataExists) {
                await api.initDatabase(state.settings.data_path);
                await loadBooks();
                showScreen('main');
            } else {
                const errorPath = document.getElementById('error-path');
                if (errorPath) errorPath.textContent = state.settings.data_path;
                showScreen('error');
            }
        } else {
            // First launch - set default path
            const defaultPath = await getDefaultDataPath();
            if (dom.dataPathInput) dom.dataPathInput.value = defaultPath;
            showScreen('setup');
        }
        
        // Re-apply language in case it changed from settings
        applyLanguage();
        renderBooks();
    } catch (error) {
        console.error('Init error:', error);
        showScreen('setup');
    }
}

// Get default data path
async function getDefaultDataPath() {
    try {
        const exePath = await api.getAppDir();
        return await api.joinPath(exePath, 'BookData');
    } catch {
        return 'BookData';
    }
}

// Confirm setup and start app
async function confirmSetup() {
    const dataPath = dom.dataPathInput?.value || '';
    const language = dom.setupLanguageSelect?.value || 'fr';
    
    if (!dataPath) return;
    
    try {
        await api.saveSettings(dataPath, language);
        await api.initDatabase(dataPath);
        
        state.settings = { data_path: dataPath, language };
        state.currentLanguage = language;
        
        applyLanguage();
        await loadBooks();
        showScreen('main');
    } catch (error) {
        console.error('Setup error:', error);
    }
}

// Start app when DOM is ready
document.addEventListener('DOMContentLoaded', init);
