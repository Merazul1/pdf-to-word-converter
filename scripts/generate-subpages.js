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
    dir: 'pdf-to-word-no-sign-up',
    title: 'PDF to Word Converter No Sign Up (100% Free) - PDFtoWordFree',
    metaTitle: 'PDF to Word Converter No Sign Up (100% Free) - PDFtoWordFree',
    description: 'Convert PDF to Word online with no sign up, no email, and no credit card required. Free instant in-browser DOCX conversion with 100% privacy.',
    canonical: 'https://www.pdftowordfree.org/pdf-to-word-no-sign-up',
    h1: 'PDF to Word Converter <span style="color: #059669;">No Sign Up</span> (100% Free)',
    intro: 'Convert any PDF into editable Microsoft Word (DOCX) format with zero registration, no email address, and no subscription trials.',
    bodyText: 'Most PDF converters force you into email registration or 7-day trials to sell subscriptions. PDFtoWordFree converts your documents locally in your browser memory — 100% private, sign-up free, and free forever.'
  },
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
  {
    dir: 'es/convertir-pdf-a-word',
    lang: 'es',
    title: 'Convertir PDF a Word Gratis (Sin Registro) - PDFtoWordFree',
    metaTitle: 'Convertir PDF a Word Gratis (Sin Registro) - PDFtoWordFree',
    description: 'Convierte PDF a Word (DOCX) gratis online en pdftowordfree.org. Sin registro, sin email y 100% privado en tu navegador con descarga inmediata.',
    canonical: 'https://www.pdftowordfree.org/es/convertir-pdf-a-word',
    h1: 'Convertir <span style="color: #ef4444;">PDF</span> a <span style="color: #2563eb;">Word Online Gratis</span>',
    intro: 'Convierte tus documentos PDF a archivos Word editables (DOCX) en segundos con total privacidad en el navegador. Sin registro ni límites.',
    bodyText: 'Conversor de PDF a Word gratis, rápido y 100% seguro. Convierte documentos PDF a formato Microsoft Word (.docx) editable directamente desde tu navegador sin instalar programas y sin subir archivos a servidores externos.'
  },
  {
    dir: 'privacy-policy',
    title: 'Privacy Policy - PDFtoWordFree.org',
    metaTitle: 'Privacy Policy - PDFtoWordFree.org',
    description: 'Read the PDFtoWordFree privacy policy. Learn about our zero-server client-side conversion architecture, cookie usage, Google AdSense disclosures, and GDPR/CCPA compliance.',
    canonical: 'https://www.pdftowordfree.org/privacy-policy',
    h1: 'Privacy Policy &bull; <span style="color: #2563eb;">PDFtoWordFree</span>',
    intro: 'Our zero-server document privacy guarantee. Learn how client-side WebAssembly conversion protects your confidential data, alongside our Google AdSense and cookie disclosures.',
    bodyText: 'At PDFtoWordFree.org, your files are never uploaded to any remote server. All document text parsing, font baseline extraction, and Word (.docx) generation occur entirely in your local browser memory. We adhere strictly to GDPR, CCPA, and Google AdSense publisher transparency policies.'
  },
  {
    dir: 'terms-of-service',
    title: 'Terms of Service - PDFtoWordFree.org',
    metaTitle: 'Terms of Service - PDFtoWordFree.org',
    description: 'Review the PDFtoWordFree terms of service. Understand user agreements, document ownership, acceptable usage, and liability disclaimers for our free online tools.',
    canonical: 'https://www.pdftowordfree.org/terms-of-service',
    h1: 'Terms of Service &bull; <span style="color: #2563eb;">PDFtoWordFree</span>',
    intro: 'User agreement, document copyright ownership, acceptable usage, and disclaimers for pdftowordfree.org free online document tools.',
    bodyText: 'By using PDFtoWordFree.org, you retain full and exclusive ownership of all uploaded and converted files. Review our service scope, acceptable usage policy, and liability limitations.'
  },
  {
    dir: 'about-us',
    title: 'About Us - PDFtoWordFree.org',
    metaTitle: 'About Us - PDFtoWordFree.org',
    description: 'Learn about PDFtoWordFree, our mission to democratize free document conversion, our 100% client-side WebAssembly technology, and our team commitments.',
    canonical: 'https://www.pdftowordfree.org/about-us',
    h1: 'About <span style="color: #2563eb;">PDFtoWordFree</span>',
    intro: 'Empowering individuals, students, and businesses worldwide with private, fast, and 100% free document conversion tools without subscriptions or server uploads.',
    bodyText: 'PDFtoWordFree was built to solve the frustration of paywalls and invasive cloud uploads in document processing. Powered by client-side WebAssembly, our tool processes documents entirely within your device memory with zero latency and 100% confidentiality.'
  },
  {
    dir: 'contact',
    title: 'Contact Us - PDFtoWordFree.org',
    metaTitle: 'Contact Us - PDFtoWordFree.org',
    description: 'Get in touch with the PDFtoWordFree team. Reach out for technical support, bug reports, feature requests, or partnership inquiries.',
    canonical: 'https://www.pdftowordfree.org/contact',
    h1: 'Contact <span style="color: #2563eb;">PDFtoWordFree Team</span>',
    intro: 'Have questions, formatting feedback, or need help with a complex document? Reach out to our engineering and support desk directly.',
    bodyText: 'Email support@pdftowordfree.org. We respond to all technical inquiries, bug reports, and general feedback within 24 to 48 business hours.'
  }
];

for (const page of subpages) {
  const targetDir = path.join(distDir, page.dir);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  let html = baseHtml;

  // Replace lang if specified
  if (page.lang) {
    html = html.replace(/<html lang="en">/i, `<html lang="${page.lang}">`);
  }

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
