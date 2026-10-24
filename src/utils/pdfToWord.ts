import * as pdfjsLib from 'pdfjs-dist';
import {
  Document,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  Table,
  TableRow,
  TableCell,
  WidthType,
  BorderStyle,
  Packer,
  PageBreak
} from 'docx';
import type { ConversionOptions } from '../types';

// Configure Mozilla PDF.js worker via public CDN matching installed version
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

export interface TextItemWithPos {
  text: string;
  x: number;
  y: number; // top-down
  width: number;
  height: number;
  fontName: string;
  fontSize: number;
  isBold: boolean;
  isItalic: boolean;
}

export interface LineGroup {
  y: number;
  height: number;
  items: TextItemWithPos[];
  text: string;
}

export interface ConversionProgressCallback {
  (percentage: number, statusMessage: string): void;
}

/**
 * Parses user page range input such as "1-3, 5, 8" into an array of 1-based page numbers.
 */
export function parsePageRange(rangeStr: string, totalPages: number): number[] {
  if (!rangeStr || rangeStr.trim().toLowerCase() === 'all') {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages = new Set<number>();
  const parts = rangeStr.split(',');

  for (const part of parts) {
    const trimmed = part.trim();
    if (!trimmed) continue;

    if (trimmed.includes('-')) {
      const [startStr, endStr] = trimmed.split('-');
      const start = parseInt(startStr, 10);
      const end = parseInt(endStr, 10);
      if (!isNaN(start) && !isNaN(end)) {
        const from = Math.max(1, Math.min(start, end));
        const to = Math.min(totalPages, Math.max(start, end));
        for (let p = from; p <= to; p++) {
          pages.add(p);
        }
      }
    } else {
      const single = parseInt(trimmed, 10);
      if (!isNaN(single) && single >= 1 && single <= totalPages) {
        pages.add(single);
      }
    }
  }

  const result = Array.from(pages).sort((a, b) => a - b);
  return result.length > 0 ? result : Array.from({ length: totalPages }, (_, i) => i + 1);
}

/**
 * Inspects a PDF file and returns its total page count.
 */
export async function getPdfPageCount(file: File): Promise<number> {
  const arrayBuffer = await file.arrayBuffer();
  const loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(arrayBuffer) });
  const pdfDoc = await loadingTask.promise;
  return pdfDoc.numPages;
}

/**
 * Main PDF to Word (DOCX) conversion function.
 */
export async function convertPdfToDocx(
  file: File,
  selectedPagesStr = 'all',
  options: ConversionOptions = {
    preserveLayout: true,
    extractImages: true,
    detectTables: true,
    detectHeadings: true,
  },
  onProgress?: ConversionProgressCallback
): Promise<{ docxBlob: Blob; textPreview: string }> {
  onProgress?.(5, 'Reading PDF document...');
  const arrayBuffer = await file.arrayBuffer();

  const loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(arrayBuffer) });
  const pdfDoc = await loadingTask.promise;
  const totalPages = pdfDoc.numPages;

  const targetPages = parsePageRange(selectedPagesStr, totalPages);
  const totalTargetPages = targetPages.length;

  onProgress?.(15, `Found ${totalPages} pages. Preparing to process ${totalTargetPages} pages...`);

  // Document sections to construct
  const docElements: (Paragraph | Table)[] = [];
  const fullTextLines: string[] = [];

  // Track font sizes to find median / regular body font size
  const collectedFontSizes: number[] = [];

  // Pass 1: Sample font sizes from the first few pages to detect headings accurately
  const sampleLimit = Math.min(3, totalTargetPages);
  for (let s = 0; s < sampleLimit; s++) {
    const pageNum = targetPages[s];
    const page = await pdfDoc.getPage(pageNum);
    const content = await page.getTextContent();
    for (const item of content.items) {
      if ('str' in item && item.str.trim()) {
        const height = Math.abs(item.transform[3] || item.height || 10);
        collectedFontSizes.push(height);
      }
    }
  }

  // Calculate median body font size
  collectedFontSizes.sort((a, b) => a - b);
  const medianFontSize = collectedFontSizes.length > 0
    ? collectedFontSizes[Math.floor(collectedFontSizes.length / 2)]
    : 11;

  // Pass 2: Process each target page
  for (let i = 0; i < totalTargetPages; i++) {
    const pageNum = targetPages[i];
    const baseProgress = 20 + Math.floor((i / totalTargetPages) * 65);
    onProgress?.(baseProgress, `Processing page ${pageNum} (${i + 1}/${totalTargetPages})...`);

    const page = await pdfDoc.getPage(pageNum);
    const viewport = page.getViewport({ scale: 1.0 });
    const content = await page.getTextContent();

    const items: TextItemWithPos[] = [];

    // Extract text items with top-down coordinates
    for (const rawItem of content.items) {
      if (!('str' in rawItem)) continue;
      const str = rawItem.str;
      if (!str) continue;

      const tx = rawItem.transform[4];
      const ty = rawItem.transform[5];
      const scaleY = Math.abs(rawItem.transform[3]) || rawItem.height || 11;
      const width = rawItem.width || 0;
      const top = viewport.height - ty; // convert to top-down coordinates

      const fontNameLower = (rawItem.fontName || '').toLowerCase();
      const isBold = fontNameLower.includes('bold') ||
                     fontNameLower.includes('black') ||
                     fontNameLower.includes('heavy') ||
                     fontNameLower.includes('bld');
      const isItalic = fontNameLower.includes('italic') ||
                       fontNameLower.includes('oblique');

      items.push({
        text: str,
        x: tx,
        y: top,
        width,
        height: scaleY,
        fontName: rawItem.fontName || 'Calibri',
        fontSize: scaleY,
        isBold,
        isItalic,
      });
    }

    // Group items into lines based on Y coordinate
    const lineGroups = groupItemsIntoLines(items);

    // Detect tables vs regular paragraphs
    let lineIdx = 0;
    while (lineIdx < lineGroups.length) {
      const line = lineGroups[lineIdx];

      // Check if current line could be the start of a table
      if (options.detectTables && isTableCandidate(line)) {
        // Collect consecutive table lines
        const tableLines: LineGroup[] = [line];
        let nextIdx = lineIdx + 1;
        while (nextIdx < lineGroups.length && isTableCandidate(lineGroups[nextIdx])) {
          tableLines.push(lineGroups[nextIdx]);
          nextIdx++;
        }

        // If at least 2 rows resemble a table, construct a Word Table
        if (tableLines.length >= 2) {
          const tableElement = buildWordTable(tableLines);
          if (tableElement) {
            docElements.push(tableElement);
            // Append line texts to preview
            for (const tl of tableLines) {
              fullTextLines.push(tl.text);
            }
            lineIdx = nextIdx;
            continue;
          }
        }
      }

      // Regular Paragraph or Heading
      const paragraph = buildWordParagraph(line, medianFontSize, options);
      docElements.push(paragraph);
      fullTextLines.push(line.text);
      lineIdx++;
    }

    // Add page break between pages (except after the last page)
    if (i < totalTargetPages - 1) {
      docElements.push(
        new Paragraph({
          children: [new PageBreak()],
        })
      );
    }
  }

  onProgress?.(88, 'Formatting Word (.docx) styles and document structure...');

  // Fallback: if document has no text elements, add placeholder
  if (docElements.length === 0) {
    docElements.push(
      new Paragraph({
        children: [
          new TextRun({
            text: 'Converted PDF Document (No extractable text found. Document may be scanned or empty).',
            italics: true,
          }),
        ],
      })
    );
  }

  // Create DOCX document with standard margins (1 inch / 1440 dxa)
  const doc = new Document({
    title: file.name.replace(/\.[^/.]+$/, ''),
    description: 'Converted from PDF by DocuShift',
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 1440,
              right: 1440,
              bottom: 1440,
              left: 1440,
            },
          },
        },
        children: docElements,
      },
    ],
  });

  onProgress?.(95, 'Packaging Word document...');
  const docxBlob = await Packer.toBlob(doc);

  onProgress?.(100, 'Conversion complete!');

  return {
    docxBlob,
    textPreview: fullTextLines.join('\n'),
  };
}

/**
 * Group individual text items into coherent horizontal lines.
 */
function groupItemsIntoLines(items: TextItemWithPos[]): LineGroup[] {
  if (items.length === 0) return [];

  // Sort primarily by Y ascending (top to bottom), then by X ascending (left to right)
  const sorted = [...items].sort((a, b) => {
    const dy = a.y - b.y;
    if (Math.abs(dy) > 3) {
      return dy;
    }
    return a.x - b.x;
  });

  const lines: LineGroup[] = [];
  let currentGroup: TextItemWithPos[] = [];
  let currentY = sorted[0].y;
  let currentHeight = sorted[0].height;

  for (const item of sorted) {
    // If the vertical difference is small (within 40% of font height or 4 points), consider on the same line
    const yTolerance = Math.max(3.5, currentHeight * 0.45);
    if (Math.abs(item.y - currentY) <= yTolerance) {
      currentGroup.push(item);
    } else {
      if (currentGroup.length > 0) {
        currentGroup.sort((a, b) => a.x - b.x);
        lines.push({
          y: currentY,
          height: currentHeight,
          items: currentGroup,
          text: assembleLineText(currentGroup),
        });
      }
      currentGroup = [item];
      currentY = item.y;
      currentHeight = item.height;
    }
  }

  if (currentGroup.length > 0) {
    currentGroup.sort((a, b) => a.x - b.x);
    lines.push({
      y: currentY,
      height: currentHeight,
      items: currentGroup,
      text: assembleLineText(currentGroup),
    });
  }

  return lines;
}

/**
 * Joins items on the same line with appropriate spacing between separated columns or words.
 */
function assembleLineText(items: TextItemWithPos[]): string {
  let result = '';
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (i > 0) {
      const prev = items[i - 1];
      const gap = item.x - (prev.x + prev.width);
      // If there is a noticeable gap between items, ensure a space or tab
      if (gap > 18) {
        result += '   ';
      } else if (gap > 2 && !result.endsWith(' ') && !item.text.startsWith(' ')) {
        result += ' ';
      }
    }
    result += item.text;
  }
  return result.trim();
}

/**
 * Detects if a line looks like it contains multiple tabular columns (e.g., numbers/columns separated by gaps).
 */
function isTableCandidate(line: LineGroup): boolean {
  if (line.items.length < 2) return false;
  let largeGaps = 0;
  for (let i = 1; i < line.items.length; i++) {
    const gap = line.items[i].x - (line.items[i - 1].x + line.items[i - 1].width);
    if (gap > 22) {
      largeGaps++;
    }
  }
  return largeGaps >= 1 && line.items.length >= 2;
}

/**
 * Creates a clean native Word Table from clustered multi-column lines.
 */
function buildWordTable(tableLines: LineGroup[]): Table | null {
  try {
    const rows = tableLines.map((line, rowIndex) => {
      // Split items by significant horizontal gaps
      const cellChunks: TextItemWithPos[][] = [];
      let currentChunk: TextItemWithPos[] = [];

      for (let i = 0; i < line.items.length; i++) {
        const item = line.items[i];
        if (i > 0) {
          const prev = line.items[i - 1];
          const gap = item.x - (prev.x + prev.width);
          if (gap > 20) {
            cellChunks.push(currentChunk);
            currentChunk = [];
          }
        }
        currentChunk.push(item);
      }
      if (currentChunk.length > 0) {
        cellChunks.push(currentChunk);
      }

      const isHeaderRow = rowIndex === 0;

      const cells = cellChunks.map((chunk) => {
        const textRuns = chunk.map(
          (c) =>
            new TextRun({
              text: c.text + ' ',
              bold: isHeaderRow || c.isBold,
              italics: c.isItalic,
              size: Math.round(c.fontSize * 2), // Half-points in docx (12pt = 24)
            })
        );

        return new TableCell({
          children: [
            new Paragraph({
              children: textRuns,
              spacing: { before: 80, after: 80 },
            }),
          ],
          borders: {
            top: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
            bottom: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
            left: { style: BorderStyle.NONE, size: 0, color: 'auto' },
            right: { style: BorderStyle.NONE, size: 0, color: 'auto' },
          },
        });
      });

      return new TableRow({
        children: cells,
        tableHeader: isHeaderRow,
      });
    });

    return new Table({
      rows,
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
    });
  } catch (err) {
    console.warn('Could not construct table:', err);
    return null;
  }
}

/**
 * Constructs a Word Paragraph with appropriate heading levels, text runs, and spacing.
 */
function buildWordParagraph(
  line: LineGroup,
  medianFontSize: number,
  options: ConversionOptions
): Paragraph {
  const avgFontSize = line.height;
  const isLineBold = line.items.some((i) => i.isBold);
  let headingLevel: (typeof HeadingLevel)[keyof typeof HeadingLevel] | undefined = undefined;

  if (options.detectHeadings) {
    if (avgFontSize >= medianFontSize * 1.55) {
      headingLevel = HeadingLevel.HEADING_1;
    } else if (avgFontSize >= medianFontSize * 1.3) {
      headingLevel = HeadingLevel.HEADING_2;
    } else if (avgFontSize >= medianFontSize * 1.15 && isLineBold) {
      headingLevel = HeadingLevel.HEADING_3;
    }
  }

  // Create text runs preserving bold/italic
  const textRuns: TextRun[] = [];

  for (let i = 0; i < line.items.length; i++) {
    const item = line.items[i];
    let prefix = '';
    if (i > 0) {
      const prev = line.items[i - 1];
      const gap = item.x - (prev.x + prev.width);
      if (gap > 4) {
        prefix = ' ';
      }
    }

    textRuns.push(
      new TextRun({
        text: prefix + item.text,
        bold: item.isBold,
        italics: item.isItalic,
        // DOCX uses half-points: e.g. 12pt is 24
        size: Math.max(16, Math.min(72, Math.round(item.fontSize * 2))),
        font: 'Segoe UI',
      })
    );
  }

  // Check if line is centered
  let alignment: (typeof AlignmentType)[keyof typeof AlignmentType] = AlignmentType.LEFT;
  // If line items are shifted significantly from the left edge and width is small
  if (line.items.length > 0 && line.items[0].x > 200 && line.text.length < 40) {
    alignment = AlignmentType.CENTER;
  }

  return new Paragraph({
    heading: headingLevel,
    alignment,
    spacing: {
      before: headingLevel ? 180 : 60,
      after: headingLevel ? 120 : 60,
      line: 276, // 1.15 line spacing
    },
    children: textRuns,
  });
}
