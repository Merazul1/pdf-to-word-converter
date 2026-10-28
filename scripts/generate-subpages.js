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
    title: 'Convert PDF to DOCX Free (100% Private) - PDFtoWordFree',
    metaTitle: 'Convert PDF to DOCX Free (100% Private) - PDFtoWordFree',
    description: 'Convert PDF to DOCX free online at pdftowordfree.org. Fast, high accuracy layout preservation, 100% in-browser privacy with zero server uploads.',
    canonical: 'https://www.pdftowordfree.org/pdf-to-docx',
    h1: 'Convert <span style="color: #ef4444;">PDF</span> to <span style="color: #2563eb;">DOCX Online</span> Free',
    intro: 'Transform any PDF document into standard Microsoft Word Office OpenXML (.docx) format with high accuracy and 100% client-side privacy.',
    bodyText: 'The .docx format is the official international standard (ISO/IEC 29500) for word processing. Our in-browser converter automatically reconstructs paragraphs, headings, bullet points, font weights, and multi-column tables with zero server uploads.'
  },
  {
    dir: 'scanned-pdf-to-word',
    title: 'Convert Scanned PDF to Word (OCR Free) - PDFtoWordFree',
    metaTitle: 'Convert Scanned PDF to Word (OCR Free) - PDFtoWordFree',
    description: 'Convert scanned PDF to Word DOCX free online. Extract selectable and editable text, tables, and headings from scanned documents and images with zero uploads.',
    canonical: 'https://www.pdftowordfree.org/scanned-pdf-to-word',
    h1: 'Convert <span style="color: #9333ea;">Scanned PDF</span> to <span style="color: #2563eb;">Word (DOCX)</span> Free',
    intro: 'Extract selectable, editable text, headings, and tabular data from scanned paper documents, receipts, contracts, and image-based PDFs.',
    bodyText: 'Scanned PDFs often wrap document images in a container without selectable text. PDFtoWordFree extracts font coordinates and text baselines embedded by scanners, converting them into editable Word paragraphs with 100% confidentiality.'
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

  // Replace H1 and Pre-rendered intro for Search Spiders
  html = html.replace(/<h1 style="[^"]*">.*?<\/h1>/i, `<h1 style="font-size: 38px; font-weight: 900; color: #0f172a; margin-bottom: 16px; line-height: 1.2;">${page.h1}</h1>`);
  html = html.replace(/<p style="font-size: 18px; color: #475569; max-width: 680px; margin: 0 auto 32px; line-height: 1.6;">.*?<\/p>/i, `<p style="font-size: 18px; color: #475569; max-width: 680px; margin: 0 auto 32px; line-height: 1.6;">${page.intro}</p>`);

  fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8');
  console.log(`Generated static SEO page: dist/${page.dir}/index.html`);
}

console.log('Successfully generated all subpage SEO entry points.');
