# DocuShift - Free Online PDF to Word Converter

DocuShift is a modern, fast, and completely free online PDF to Word (DOCX) conversion web application built with React, TypeScript, Tailwind CSS, Mozilla PDF.js, and the docx engine.

## 🚀 Key Features

- **100% Free & Unlimited**: No subscriptions, no hidden limits, no registration, and no watermarks.
- **Client-Side Privacy Guarantee**: All file reading, text extraction, layout parsing, and Word generation happens strictly in your browser. Sensitive documents never leave your computer.
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
Run the following command in the project directory:
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port Vite provides) to start using the converter.

### 3. Build for Production
```bash
npm run build
```
The output will be created in the `dist` folder, ready for deployment to any static hosting service (Vercel, Netlify, Cloudflare Pages, GitHub Pages, or an Nginx/Apache server).

---

## 🔒 Security & Privacy

Traditional converters send your files across the internet to third-party cloud servers. DocuShift's in-browser conversion engine ensures that:
1. Files are loaded directly into browser memory.
2. Layout and text items are analyzed via PDF.js worker.
3. The Word (.docx) file is packed locally and saved using client-side Blob APIs.
4. No network requests contain your document data.
