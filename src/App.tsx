import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { DropZone } from './components/DropZone';
import { FileItemCard } from './components/FileItemCard';
import { BatchActionBar } from './components/BatchActionBar';
import { TextPreviewModal } from './components/TextPreviewModal';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ComparisonSection } from './components/ComparisonSection';
import { SeoContentSection } from './components/SeoContentSection';
import { DocxPageContent } from './components/DocxPageContent';
import { ScannedPageContent } from './components/ScannedPageContent';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import {
  convertPdfToDocx,
  getPdfPageCount,
} from './utils/pdfToWord';
import {
  downloadDocx,
  downloadAllAsZip,
  createSamplePdfFile,
} from './utils/batchConverter';
import type { FileQueueItem } from './types';
import {
  FileText,
  Shield,
  Zap,
  CheckCircle2,
  FileCheck2,
  SlidersHorizontal,
  Sparkles,
} from 'lucide-react';

export const App: React.FC = () => {
  // Path & Routing state
  const [currentPath, setCurrentPath] = useState<string>(() => {
    const p = window.location.pathname.replace(/\/$/, '') || '/';
    return p === '/pdf-to-docx' || p === '/scanned-pdf-to-word' ? p : '/';
  });

  // Theme state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Conversion queue
  const [queue, setQueue] = useState<FileQueueItem[]>([]);
  const [previewItem, setPreviewItem] = useState<FileQueueItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync dark class to <html>
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Handle client-side navigation and update SEO meta tags dynamically
  const handleNavigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = () => {
      const p = window.location.pathname.replace(/\/$/, '') || '/';
      setCurrentPath(p === '/pdf-to-docx' || p === '/scanned-pdf-to-word' ? p : '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync dynamic Title, Meta Description, and Canonical URL
  useEffect(() => {
    let title = 'Convert PDF to Word Free (100% In-Browser & Private) - PDFtoWordFree.org';
    let description = 'Convert PDF to Word free online at pdftowordfree.org. No email, no registration, 100% private in-browser conversion with instant editable Word (DOCX) download.';
    let canonical = 'https://www.pdftowordfree.org/';

    if (currentPath === '/pdf-to-docx') {
      title = 'Convert PDF to DOCX Free (100% In-Browser & Instant) - PDFtoWordFree.org';
      description = 'Convert PDF to DOCX free online at pdftowordfree.org. Fast, high accuracy layout preservation, 100% in-browser privacy with zero server uploads.';
      canonical = 'https://www.pdftowordfree.org/pdf-to-docx';
    } else if (currentPath === '/scanned-pdf-to-word') {
      title = 'Convert Scanned PDF to Word (DOCX) Free Online - PDFtoWordFree.org';
      description = 'Convert scanned PDF to Word DOCX free online. Extract selectable and editable text, tables, and headings from scanned documents and images with zero uploads.';
      canonical = 'https://www.pdftowordfree.org/scanned-pdf-to-word';
    }

    document.title = title;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Update canonical link
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonical);
    }
  }, [currentPath]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3500);
  };

  // Add files to queue
  const handleFilesSelected = useCallback(async (files: File[]) => {
    const newItems: FileQueueItem[] = [];

    for (const file of files) {
      const id = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const item: FileQueueItem = {
        id,
        file,
        name: file.name,
        size: file.size,
        status: 'idle',
        progress: 0,
        statusMessage: 'Ready to convert',
        selectedPages: 'all',
      };
      newItems.push(item);
    }

    setQueue((prev) => [...prev, ...newItems]);
    showToast(`Added ${newItems.length} PDF file${newItems.length > 1 ? 's' : ''} to queue.`);

    for (const item of newItems) {
      try {
        const pages = await getPdfPageCount(item.file);
        setQueue((prev) =>
          prev.map((q) => (q.id === item.id ? { ...q, totalPages: pages } : q))
        );
      } catch (e) {
        console.warn('Could not determine page count for', item.name, e);
      }
    }
  }, []);

  const handleUpdatePages = (id: string, range: string) => {
    setQueue((prev) =>
      prev.map((item) => (item.id === id ? { ...item, selectedPages: range } : item))
    );
  };

  const handleConvertSingle = async (id: string) => {
    const target = queue.find((item) => item.id === id);
    if (!target || target.status === 'completed') return;

    const startTime = performance.now();

    setQueue((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: 'reading',
              progress: 5,
              statusMessage: 'Reading PDF document...',
            }
          : item
      )
    );

    try {
      const result = await convertPdfToDocx(
        target.file,
        target.selectedPages || 'all',
        {
          preserveLayout: true,
          extractImages: true,
          detectTables: true,
          detectHeadings: true,
        },
        (progress, statusMessage) => {
          setQueue((prev) =>
            prev.map((item) =>
              item.id === id
                ? {
                    ...item,
                    progress,
                    statusMessage,
                    status: progress === 100 ? 'completed' : 'parsing',
                  }
                : item
            )
          );
        }
      );

      const endTime = performance.now();
      const durationMs = Math.round(endTime - startTime);

      setQueue((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                status: 'completed',
                progress: 100,
                statusMessage: 'Word (.docx) ready!',
                docxBlob: result.docxBlob,
                extractedTextPreview: result.textPreview,
                durationMs,
              }
            : item
        )
      );

      showToast(`Successfully converted "${target.name}" in ${(durationMs / 1000).toFixed(1)}s!`);
    } catch (err: any) {
      console.error('Conversion failed:', err);
      setQueue((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                status: 'error',
                progress: 100,
                statusMessage: 'Conversion failed: ' + (err.message || 'Unknown error'),
                error: err.message,
              }
            : item
        )
      );
      showToast(`Error converting "${target.name}".`);
    }
  };

  const handleConvertAll = async () => {
    const idleItems = queue.filter((item) => item.status === 'idle');
    for (const item of idleItems) {
      await handleConvertSingle(item.id);
    }
  };

  const handleRemoveFile = (id: string) => {
    setQueue((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearAll = () => {
    setQueue([]);
  };

  const handleLoadSample = async () => {
    const sampleFile = await createSamplePdfFile();
    handleFilesSelected([sampleFile]);
  };

  const handleDownloadAllZip = () => {
    downloadAllAsZip(queue);
    showToast('Downloaded converted files ZIP archive.');
  };

  const isConvertingAny = queue.some(
    (item) => item.status !== 'idle' && item.status !== 'completed' && item.status !== 'error'
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors">
      <Header
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        currentPath={currentPath}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero & Converter Container */}
        <section id="converter" className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 overflow-hidden">
          {/* Subtle Ambient Backdrops */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-400/10 via-indigo-400/5 to-transparent blur-3xl pointer-events-none -z-10" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Dynamic Title & Badge per Sub-tool */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>100% Free • Unlimited • No Registration</span>
              </div>

              {currentPath === '/pdf-to-docx' ? (
                <>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                    Convert <span className="text-red-500">PDF</span> to{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">
                      DOCX Online
                    </span>
                  </h1>
                  <p className="mt-5 text-base sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    Convert any PDF into Microsoft Word Office OpenXML (.docx) format with high accuracy. 100% client-side privacy.
                  </p>
                </>
              ) : currentPath === '/scanned-pdf-to-word' ? (
                <>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                    Convert <span className="text-purple-600 dark:text-purple-400">Scanned PDF</span> to{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">
                      Word (DOCX)
                    </span>
                  </h1>
                  <p className="mt-5 text-base sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    Extract selectable text, headings, and tables from scanned documents and images into editable Word files.
                  </p>
                </>
              ) : (
                <>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                    Convert <span className="text-red-500">PDF</span> to{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">
                      Word Online
                    </span>
                  </h1>
                  <p className="mt-5 text-base sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    Transform any PDF document into an editable Microsoft Word (DOCX) file with high accuracy. Protected by 100% client-side privacy.
                  </p>
                </>
              )}
            </div>

            {/* DropZone Section */}
            <div className="mb-8">
              <DropZone
                onFilesSelected={handleFilesSelected}
                onLoadSample={handleLoadSample}
                isProcessing={isConvertingAny}
              />
            </div>

            {/* Queue & Conversion Action Area */}
            {queue.length > 0 && (
              <div className="space-y-4 animate-fadeIn">
                <BatchActionBar
                  items={queue}
                  onConvertAll={handleConvertAll}
                  onDownloadAllZip={handleDownloadAllZip}
                  onClearAll={handleClearAll}
                  isConvertingAny={isConvertingAny}
                />

                <div className="space-y-3">
                  {queue.map((item) => (
                    <FileItemCard
                      key={item.id}
                      item={item}
                      onConvert={handleConvertSingle}
                      onRemove={handleRemoveFile}
                      onDownload={downloadDocx}
                      onPreviewText={(target) => setPreviewItem(target)}
                      onUpdatePages={handleUpdatePages}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Informative Sub-tool Content Sections */}
        {currentPath === '/pdf-to-docx' ? (
          <>
            <DocxPageContent />
            <HowItWorksSection />
            <ComparisonSection />
            <FaqSection />
          </>
        ) : currentPath === '/scanned-pdf-to-word' ? (
          <>
            <ScannedPageContent />
            <HowItWorksSection />
            <FeaturesSection />
            <FaqSection />
          </>
        ) : (
          <>
            <HowItWorksSection />
            <FeaturesSection />
            <ComparisonSection />
            <SeoContentSection />
            <FaqSection />
          </>
        )}
      </main>

      <Footer onNavigate={handleNavigate} />

      {/* Extracted Text Preview Modal */}
      <TextPreviewModal
        item={previewItem}
        onClose={() => setPreviewItem(null)}
        onDownload={downloadDocx}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-2xl text-xs sm:text-sm font-medium flex items-center gap-2.5 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};
