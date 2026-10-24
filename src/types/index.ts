export type ConversionStatus = 'idle' | 'reading' | 'parsing' | 'formatting' | 'generating' | 'completed' | 'error';

export interface FileQueueItem {
  id: string;
  file: File;
  name: string;
  size: number;
  totalPages?: number;
  selectedPages?: string; // e.g. "all" or "1-3, 5"
  status: ConversionStatus;
  progress: number; // 0 - 100
  statusMessage: string;
  docxBlob?: Blob;
  docxUrl?: string;
  extractedTextPreview?: string;
  error?: string;
  durationMs?: number;
}

export interface ConversionOptions {
  preserveLayout: boolean;
  extractImages: boolean;
  detectTables: boolean;
  detectHeadings: boolean;
}
