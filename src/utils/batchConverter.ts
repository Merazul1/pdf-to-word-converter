import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { convertPdfToDocx } from './pdfToWord';
import type { FileQueueItem, ConversionOptions } from '../types';

/**
 * Downloads a single converted Word document.
 */
export function downloadDocx(item: FileQueueItem): void {
  if (!item.docxBlob) return;
  const fileName = item.name.replace(/\.[^/.]+$/, '') + '.docx';
  saveAs(item.docxBlob, fileName);
}

/**
 * Packages all completed DOCX files into a ZIP archive and triggers browser download.
 */
export async function downloadAllAsZip(items: FileQueueItem[]): Promise<void> {
  const completedItems = items.filter((item) => item.status === 'completed' && item.docxBlob);
  if (completedItems.length === 0) return;

  const zip = new JSZip();

  completedItems.forEach((item, index) => {
    const rawBaseName = item.name.replace(/\.[^/.]+$/, '');
    const fileName = `${rawBaseName}_${index + 1}.docx`;
    if (item.docxBlob) {
      zip.file(fileName, item.docxBlob);
    }
  });

  const content = await zip.generateAsync({ type: 'blob' });
  saveAs(content, 'PDFtoWordFree_Converted_Documents.zip');
}

/**
 * Generates a sample minimal PDF as a test file if the user wants to test right away without an upload.
 */
export async function createSamplePdfFile(): Promise<File> {
  // A minimal valid single-page PDF containing sample text, headings, and numbers
  const samplePdfContent = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>
endobj
4 0 obj
<< /Length 420 >>
stream
BT
/F1 22 Tf
54 720 Td
(PDFtoWordFree.org Sample Document) Tj
/F2 14 Tf
0 -36 Td
(Instant PDF to Word Conversion Test) Tj
/F2 11 Tf
0 -30 Td
(This sample document demonstrates the high-accuracy conversion of PDF text, headings,) Tj
0 -18 Td
(and formatting directly into Microsoft Word DOCX format.) Tj
0 -36 Td
(Key Features Tested:) Tj
0 -20 Td
(- Preserving paragraph flow and line spacing) Tj
0 -18 Td
(- Detecting document titles and headings) Tj
0 -18 Td
(- 100% private in-browser conversion) Tj
0 -36 Td
(Item Description                       Qty     Rate     Total) Tj
0 -18 Td
(Web Application License                 1      $0.00    $0.00) Tj
0 -18 Td
(Free Online PDF Conversion              1      $0.00    $0.00) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>
endobj
6 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 7
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000244 00000 n 
0000000716 00000 n 
0000000788 00000 n 
trailer
<< /Size 7 /Root 1 0 R >>
startxref
855
%%EOF`;

  const blob = new Blob([samplePdfContent], { type: 'application/pdf' });
  return new File([blob], 'Sample_PDFtoWordFree_Document.pdf', { type: 'application/pdf' });
}
