# PDFtoWordFree.org - Free Online PDF to Word Converter

**PDFtoWordFree.org** is a fast, accurate, and 100% free online PDF to Word (DOCX) conversion website built with React, TypeScript, Tailwind CSS, Mozilla PDF.js, and the docx engine.

Domain: **[https://pdftowordfree.org](https://pdftowordfree.org)**

---

## 🚀 Key Features

- **100% Free & Unlimited**: No subscriptions, no hidden limits, no registration, and no watermarks.
- **Client-Side Privacy Guarantee**: All file reading, text extraction, layout parsing, and Word generation happens strictly in the user's browser. Sensitive documents never leave the computer.
- **High-Fidelity DOCX Output**: Generates native Microsoft Word (`.docx`) files with preserved headings (H1, H2, H3), paragraphs, line spacing, bold/italic font styling, and multi-column tables.
- **Batch PDF Conversion**: Convert multiple PDF documents simultaneously and download all results individually or together in a single ZIP archive.
- **Page Range Selector**: Choose to convert all pages or target specific page ranges (e.g. `1-3, 5`).
- **Interactive Extracted Text Preview**: Quick preview of extracted text directly in the browser with 1-click clipboard copy.
- **Dark & Light Mode**: Seamless theme switching with persistent settings.
- **Sample PDF Generator**: Test conversions immediately with the built-in sample document button.

---

## 🛠️ Tech Stack

- **Frontend**: [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **PDF Parser**: [Mozilla PDF.js (`pdfjs-dist`)](https://mozilla.github.io/pdf.js/)
- **Word Document Generator**: [`docx`](https://docx.js.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Archiving & Saving**: [JSZip](https://stuk.github.io/jszip/) & [FileSaver.js](https://github.com/eligrey/FileSaver.js/)

---

## 💻 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to test the converter.

### 3. Build for Production
```bash
npm run build
```
The optimized production build will be saved in the `dist` folder.

---

## 🌐 Deploying to `pdftowordfree.org`

Since PDFtoWordFree is a client-side high-performance static web application, it can be deployed for **free** on:
- **Cloudflare Pages** (Connect repository or upload `dist/`, link custom domain `pdftowordfree.org`)
- **Vercel** (`vercel --prod` or link GitHub repo)
- **Netlify** (Drag and drop `dist/` folder or link GitHub repo)
- **Any VPS / cPanel / Apache / Nginx** web hosting
