// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod database;

use database::{Book, Database, NewBook, Settings};
use std::sync::Mutex;
use tauri::State;

struct AppState {
    db: Mutex<Option<Database>>,
}

#[tauri::command]
fn get_settings() -> Result<Option<Settings>, String> {
    Database::get_settings().map_err(|e| e.to_string())
}

#[tauri::command]
fn save_settings(data_path: String, language: String) -> Result<(), String> {
    Database::save_settings(&data_path, &language).map_err(|e| e.to_string())
}

#[tauri::command]
fn init_database(state: State<AppState>, data_path: String) -> Result<(), String> {
    let db = Database::new(&data_path).map_err(|e| e.to_string())?;
    let mut db_lock = state.db.lock().map_err(|e| e.to_string())?;
    *db_lock = Some(db);
    Ok(())
}

#[tauri::command]
fn check_data_folder_exists(path: String) -> bool {
    std::path::Path::new(&path).exists()
}

#[tauri::command]
fn add_book(state: State<AppState>, book: NewBook) -> Result<Book, String> {
    let db_lock = state.db.lock().map_err(|e| e.to_string())?;
    let db = db_lock.as_ref().ok_or("Database not initialized")?;
    db.add_book(book).map_err(|e| e.to_string())
}

#[tauri::command]
fn update_book(state: State<AppState>, book: Book) -> Result<(), String> {
    let db_lock = state.db.lock().map_err(|e| e.to_string())?;
    let db = db_lock.as_ref().ok_or("Database not initialized")?;
    db.update_book(&book).map_err(|e| e.to_string())
}

#[tauri::command]
fn delete_book(state: State<AppState>, id: i64) -> Result<(), String> {
    let db_lock = state.db.lock().map_err(|e| e.to_string())?;
    let db = db_lock.as_ref().ok_or("Database not initialized")?;
    db.delete_book(id).map_err(|e| e.to_string())
}

#[tauri::command]
fn get_all_books(state: State<AppState>) -> Result<Vec<Book>, String> {
    let db_lock = state.db.lock().map_err(|e| e.to_string())?;
    let db = db_lock.as_ref().ok_or("Database not initialized")?;
    db.get_all_books().map_err(|e| e.to_string())
}

#[tauri::command]
fn check_duplicate(state: State<AppState>, title: String, author: String, exclude_id: Option<i64>) -> Result<bool, String> {
    let db_lock = state.db.lock().map_err(|e| e.to_string())?;
    let db = db_lock.as_ref().ok_or("Database not initialized")?;
    db.check_duplicate(&title, &author, exclude_id).map_err(|e| e.to_string())
}

#[tauri::command]
fn get_statistics(state: State<AppState>) -> Result<database::Statistics, String> {
    let db_lock = state.db.lock().map_err(|e| e.to_string())?;
    let db = db_lock.as_ref().ok_or("Database not initialized")?;
    db.get_statistics().map_err(|e| e.to_string())
}

fn main() {
    tauri::Builder::default()
        .manage(AppState {
            db: Mutex::new(None),
        })
        .invoke_handler(tauri::generate_handler![
            get_settings,
            save_settings,
            init_database,
            check_data_folder_exists,
            add_book,
            update_book,
            delete_book,
            get_all_books,
            check_duplicate,
            get_statistics
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
