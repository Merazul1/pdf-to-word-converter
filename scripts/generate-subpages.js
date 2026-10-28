import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('dist/index.html not found! Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(templatePath, 'utf8');

const subpages = [
  {
    dir: 'pdf-to-docx',
    title: 'Convert PDF to DOCX Free (100% In-Browser &amp; Instant) - PDFtoWordFree.org',
    metaTitle: 'Convert PDF to DOCX Free (100% In-Browser &amp; Instant) - PDFtoWordFree.org',
    description: 'Convert PDF to DOCX free online at pdftowordfree.org. Fast, high accuracy layout preservation, 100% in-browser privacy with zero server uploads.',
    canonical: 'https://www.pdftowordfree.org/pdf-to-docx',
  },
  {
    dir: 'scanned-pdf-to-word',
    title: 'Convert Scanned PDF to Word (DOCX) Free Online - PDFtoWordFree.org',
    metaTitle: 'Convert Scanned PDF to Word (DOCX) Free Online - PDFtoWordFree.org',
    description: 'Convert scanned PDF to Word DOCX free online. Extract selectable and editable text, tables, and headings from scanned documents and images with zero uploads.',
    canonical: 'https://www.pdftowordfree.org/scanned-pdf-to-word',
  },
];

for (const page of subpages) {
  const targetDir = path.join(distDir, page.dir);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  let html = baseHtml;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${page.title}</title>`);
  html = html.replace(/<meta name="title" content=".*?" \/>/i, `<meta name="title" content="${page.metaTitle}" />`);
  html = html.replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${page.metaTitle}" />`);
  html = html.replace(/<meta property="twitter:title" content=".*?" \/>/i, `<meta property="twitter:title" content="${page.metaTitle}" />`);

  // Replace Description
  html = html.replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${page.description}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/i, `<meta property="og:description" content="${page.description}" />`);
  html = html.replace(/<meta property="twitter:description" content=".*?" \/>/i, `<meta property="twitter:description" content="${page.description}" />`);

  // Replace Canonical & URL
  html = html.replace(/<link rel="canonical" href=".*?" \/>/i, `<link rel="canonical" href="${page.canonical}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" \/>/i, `<meta property="og:url" content="${page.canonical}" />`);
  html = html.replace(/<meta property="twitter:url" content=".*?" \/>/i, `<meta property="twitter:url" content="${page.canonical}" />`);

  fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8');
  console.log(`Generated static SEO page: dist/${page.dir}/index.html`);
}

console.log('Successfully generated all subpage SEO entry points.');
