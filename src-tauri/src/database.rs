use rusqlite::{Connection, Result as SqliteResult};
use serde::{Deserialize, Serialize};
use std::fs;
use std::path::PathBuf;

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Book {
    pub id: i64,
    pub title: String,
    pub author: Option<String>,
    pub genre: Option<String>,
    pub notes: Option<String>,
    pub is_read: bool,
    pub language: String, // "arabic" or "latin"
    pub date_added: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct NewBook {
    pub title: String,
    pub author: Option<String>,
    pub genre: Option<String>,
    pub notes: Option<String>,
    pub is_read: bool,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Settings {
    pub data_path: String,
    pub language: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Statistics {
    pub total_books: i64,
    pub books_read: i64,
    pub books_unread: i64,
    pub by_genre: Vec<GenreCount>,
    pub by_language: LanguageCount,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct GenreCount {
    pub genre: String,
    pub count: i64,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct LanguageCount {
    pub arabic: i64,
    pub latin: i64,
}

pub struct Database {
    conn: Connection,
}

impl Database {
    fn get_settings_path() -> PathBuf {
        let mut path = std::env::current_exe().unwrap_or_default();
        path.pop();
        path.push("bookapp_settings.json");
        path
    }

    pub fn get_settings() -> SqliteResult<Option<Settings>> {
        let path = Self::get_settings_path();
        if path.exists() {
            let content = fs::read_to_string(&path).map_err(|e| {
                rusqlite::Error::InvalidParameterName(e.to_string())
            })?;
            let settings: Settings = serde_json::from_str(&content).map_err(|e| {
                rusqlite::Error::InvalidParameterName(e.to_string())
            })?;
            Ok(Some(settings))
        } else {
            Ok(None)
        }
    }

    pub fn save_settings(data_path: &str, language: &str) -> SqliteResult<()> {
        let settings = Settings {
            data_path: data_path.to_string(),
            language: language.to_string(),
        };
        let content = serde_json::to_string_pretty(&settings).map_err(|e| {
            rusqlite::Error::InvalidParameterName(e.to_string())
        })?;
        let path = Self::get_settings_path();
        fs::write(&path, content).map_err(|e| {
            rusqlite::Error::InvalidParameterName(e.to_string())
        })?;
        Ok(())
    }

    pub fn new(data_path: &str) -> SqliteResult<Self> {
        // Create data directory if it doesn't exist
        fs::create_dir_all(data_path).map_err(|e| {
            rusqlite::Error::InvalidParameterName(e.to_string())
        })?;

        let db_path = PathBuf::from(data_path).join("books.db");
        let conn = Connection::open(&db_path)?;

        conn.execute(
            "CREATE TABLE IF NOT EXISTS books (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                author TEXT,
                genre TEXT,
                notes TEXT,
                is_read INTEGER NOT NULL DEFAULT 0,
                language TEXT NOT NULL DEFAULT 'latin',
                date_added TEXT NOT NULL
            )",
            [],
        )?;

        Ok(Self { conn })
    }

    fn detect_language(text: &str) -> String {
        // Check if any character is Arabic
        for c in text.chars() {
            if ('\u{0600}'..='\u{06FF}').contains(&c) || // Arabic
               ('\u{0750}'..='\u{077F}').contains(&c) || // Arabic Supplement
               ('\u{08A0}'..='\u{08FF}').contains(&c) || // Arabic Extended-A
               ('\u{FB50}'..='\u{FDFF}').contains(&c) || // Arabic Presentation Forms-A
               ('\u{FE70}'..='\u{FEFF}').contains(&c)    // Arabic Presentation Forms-B
            {
                return "arabic".to_string();
            }
        }
        "latin".to_string()
    }

    pub fn add_book(&self, book: NewBook) -> SqliteResult<Book> {
        let language = Self::detect_language(&book.title);
        let date_added = chrono::Local::now().format("%Y-%m-%d %H:%M:%S").to_string();

        self.conn.execute(
            "INSERT INTO books (title, author, genre, notes, is_read, language, date_added)
             VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)",
            (
                &book.title,
                &book.author,
                &book.genre,
                &book.notes,
                book.is_read as i32,
                &language,
                &date_added,
            ),
        )?;

        let id = self.conn.last_insert_rowid();

        Ok(Book {
            id,
            title: book.title,
            author: book.author,
            genre: book.genre,
            notes: book.notes,
            is_read: book.is_read,
            language,
            date_added,
        })
    }

    pub fn update_book(&self, book: &Book) -> SqliteResult<()> {
        let language = Self::detect_language(&book.title);
        
        self.conn.execute(
            "UPDATE books SET title = ?1, author = ?2, genre = ?3, notes = ?4, is_read = ?5, language = ?6
             WHERE id = ?7",
            (
                &book.title,
                &book.author,
                &book.genre,
                &book.notes,
                book.is_read as i32,
                &language,
                book.id,
            ),
        )?;
        Ok(())
    }

    pub fn delete_book(&self, id: i64) -> SqliteResult<()> {
        self.conn.execute("DELETE FROM books WHERE id = ?1", [id])?;
        Ok(())
    }

    pub fn get_all_books(&self) -> SqliteResult<Vec<Book>> {
        let mut stmt = self.conn.prepare(
            "SELECT id, title, author, genre, notes, is_read, language, date_added FROM books ORDER BY date_added DESC"
        )?;

        let books = stmt.query_map([], |row| {
            Ok(Book {
                id: row.get(0)?,
                title: row.get(1)?,
                author: row.get(2)?,
                genre: row.get(3)?,
                notes: row.get(4)?,
                is_read: row.get::<_, i32>(5)? != 0,
                language: row.get(6)?,
                date_added: row.get(7)?,
            })
        })?;

        books.collect()
    }

    pub fn check_duplicate(&self, title: &str, author: &str, exclude_id: Option<i64>) -> SqliteResult<bool> {
        let count: i64 = match exclude_id {
            Some(id) => {
                self.conn.query_row(
                    "SELECT COUNT(*) FROM books WHERE LOWER(title) = LOWER(?1) AND LOWER(COALESCE(author, '')) = LOWER(?2) AND id != ?3",
                    [title, author, &id.to_string()],
                    |row| row.get(0),
                )?
            }
            None => {
                self.conn.query_row(
                    "SELECT COUNT(*) FROM books WHERE LOWER(title) = LOWER(?1) AND LOWER(COALESCE(author, '')) = LOWER(?2)",
                    [title, author],
                    |row| row.get(0),
                )?
            }
        };
        Ok(count > 0)
    }

    pub fn get_statistics(&self) -> SqliteResult<Statistics> {
        let total_books: i64 = self.conn.query_row(
            "SELECT COUNT(*) FROM books",
            [],
            |row| row.get(0),
        )?;

        let books_read: i64 = self.conn.query_row(
            "SELECT COUNT(*) FROM books WHERE is_read = 1",
            [],
            |row| row.get(0),
        )?;

        let books_unread = total_books - books_read;

        let arabic_count: i64 = self.conn.query_row(
            "SELECT COUNT(*) FROM books WHERE language = 'arabic'",
            [],
            |row| row.get(0),
        )?;

        let latin_count: i64 = self.conn.query_row(
            "SELECT COUNT(*) FROM books WHERE language = 'latin'",
            [],
            |row| row.get(0),
        )?;

        let mut stmt = self.conn.prepare(
            "SELECT COALESCE(genre, 'Non spécifié') as g, COUNT(*) as c FROM books GROUP BY g ORDER BY c DESC"
        )?;

        let by_genre: Vec<GenreCount> = stmt
            .query_map([], |row| {
                Ok(GenreCount {
                    genre: row.get(0)?,
                    count: row.get(1)?,
                })
            })?
            .filter_map(|r| r.ok())
            .collect();

        Ok(Statistics {
            total_books,
            books_read,
            books_unread,
            by_genre,
            by_language: LanguageCount {
                arabic: arabic_count,
                latin: latin_count,
            },
        })
    }
}
