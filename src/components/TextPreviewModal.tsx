import React, { useState } from 'react';
import { X, Copy, Check, Download, FileText } from 'lucide-react';
import type { FileQueueItem } from '../types';

interface TextPreviewModalProps {
  item: FileQueueItem | null;
  onClose: () => void;
  onDownload: (item: FileQueueItem) => void;
}

export const TextPreviewModal: React.FC<TextPreviewModalProps> = ({
  item,
  onClose,
  onDownload,
}) => {
  const [copied, setCopied] = useState(false);

  if (!item) return null;

  const handleCopy = () => {
    if (item.extractedTextPreview) {
      navigator.clipboard.writeText(item.extractedTextPreview);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[85vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base truncate max-w-md">
                {item.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Extracted Document Content Preview
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={() => onDownload(item)}
              className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download DOCX</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Text Content */}
        <div className="p-6 overflow-y-auto flex-1 font-mono text-xs sm:text-sm bg-slate-50 dark:bg-slate-950/70 text-slate-800 dark:text-slate-200 whitespace-pre-wrap leading-relaxed select-text">
          {item.extractedTextPreview || 'No text extracted from document.'}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>Formatted Word (.docx) contains complete styling, headings, and layout.</span>
          <button
            onClick={onClose}
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
