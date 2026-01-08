# BookApp

A portable book registry application to manage your personal library.

**Author:** JMAHRI Bahae-Eddine  
**Year:** 2026  
**License:** Free Use  
**Technologies:** Tauri, SQLite

## Features

- Add, edit, and delete books
- Automatic language detection (Arabic vs Latin/French/English)
- Search by title or author
- Filter by genre and read status
- Sort alphabetically
- Statistics (total books, by genre, by language)
- Multilingual interface (French, English, Arabic with RTL support)
- Portable data - copy the folder to transfer your library

## Prerequisites

Before building, you need to install:

### 1. Rust

Download and install from: https://rustup.rs/

```bash
# On Windows, download rustup-init.exe from the website
# Or use winget:
winget install Rustlang.Rust.MSVC
```

After installation, restart your terminal.

### 2. Node.js

Download and install from: https://nodejs.org/ (LTS version recommended)

Or use winget:
```bash
winget install OpenJS.NodeJS.LTS
```

### 3. Visual Studio Build Tools (Windows only)

Download "Build Tools for Visual Studio" from: https://visualstudio.microsoft.com/visual-cpp-build-tools/

During installation, select:
- "Desktop development with C++"

### 4. WebView2 (usually pre-installed on Windows 10/11)

If not installed: https://developer.microsoft.com/en-us/microsoft-edge/webview2/

## Building

1. Open a terminal in the `book_app` folder

2. Install dependencies:
```bash
npm install
```

3. Build the application:
```bash
npm run build
```

4. The executable will be in:
```
src-tauri/target/release/BookApp.exe
```

## Development

To run in development mode with hot reload:
```bash
npm run dev
```

## Distribution

To distribute the app:

1. Copy `BookApp.exe` to the desired location
2. On first launch, the user chooses where to store data (default: `BookData` folder next to exe)
3. To transfer to another computer: copy both `BookApp.exe` and the `BookData` folder

## Project Structure

```
book_app/
├── package.json          # Node.js dependencies
├── src/                  # Frontend (HTML/CSS/JS)
│   ├── index.html
│   ├── styles/
│   │   └── main.css
│   └── js/
│       ├── app.js
│       └── translations.js
├── src-tauri/            # Rust backend
│   ├── Cargo.toml
│   ├── tauri.conf.json
│   ├── icons/            # App icons
│   └── src/
│       ├── main.rs
│       └── database.rs
└── README.md
```

## Adding Icons

To add a custom icon, place these files in `src-tauri/icons/`:
- `icon.ico` (Windows)
- `icon.icns` (macOS)
- `32x32.png`
- `128x128.png`
- `128x128@2x.png`

You can generate these from a single PNG using: https://tauri.app/v1/guides/features/icons/
