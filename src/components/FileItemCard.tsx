import React, { useState } from 'react';
import {
  FileText,
  Download,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Eye,
  FileSpreadsheet,
  Settings2,
  Play
} from 'lucide-react';
import type { FileQueueItem } from '../types';

interface FileItemCardProps {
  item: FileQueueItem;
  onConvert: (id: string) => void;
  onRemove: (id: string) => void;
  onDownload: (item: FileQueueItem) => void;
  onPreviewText: (item: FileQueueItem) => void;
  onUpdatePages: (id: string, range: string) => void;
}

export const FileItemCard: React.FC<FileItemCardProps> = ({
  item,
  onConvert,
  onRemove,
  onDownload,
  onPreviewText,
  onUpdatePages,
}) => {
  const [showSettings, setShowSettings] = useState(false);
  const [pageInput, setPageInput] = useState(item.selectedPages || 'all');

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  };

  const isConverting = item.status !== 'idle' && item.status !== 'completed' && item.status !== 'error';

  const handlePageBlur = () => {
    onUpdatePages(item.id, pageInput);
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Left: Icon & File Meta */}
        <div className="flex items-center gap-3.5 min-w-0 flex-1">
          <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0 border border-red-200 dark:border-red-900/50">
            <FileText className="w-6 h-6" />
          </div>

          <div className="min-w-0 flex-1">
            <h4 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 truncate" title={item.name}>
              {item.name}
            </h4>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              <span>{formatFileSize(item.size)}</span>
              {item.totalPages && (
                <>
                  <span>•</span>
                  <span>{item.totalPages} page{item.totalPages > 1 ? 's' : ''}</span>
                </>
              )}
              {item.durationMs && item.status === 'completed' && (
                <>
                  <span>•</span>
                  <span className="text-emerald-600 dark:text-emerald-400">
                    Converted in {(item.durationMs / 1000).toFixed(1)}s
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
          {/* Page Range Toggle */}
          {item.status === 'idle' && (
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs flex items-center gap-1.5 transition-colors"
              title="Select pages to convert"
            >
              <Settings2 className="w-4 h-4" />
              <span className="hidden sm:inline">Pages</span>
            </button>
          )}

          {/* Idle: Start Convert Button */}
          {item.status === 'idle' && (
            <button
              onClick={() => onConvert(item.id)}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm flex items-center gap-1.5 shadow-sm shadow-blue-500/20 transition-all"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Convert to Word</span>
            </button>
          )}

          {/* Completed: Download DOCX */}
          {item.status === 'completed' && (
            <>
              <button
                onClick={() => onPreviewText(item)}
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs flex items-center gap-1.5 transition-colors"
                title="Preview extracted text"
              >
                <Eye className="w-4 h-4 text-blue-500" />
                <span className="hidden sm:inline">Preview</span>
              </button>

              <button
                onClick={() => onDownload(item)}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5 shadow-md shadow-blue-700/25 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download DOCX</span>
              </button>
            </>
          )}

          {/* Remove / Cancel Button */}
          <button
            onClick={() => onRemove(item.id)}
            disabled={isConverting}
            className="p-2 rounded-xl text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors disabled:opacity-40"
            title="Remove from queue"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Page Selection Bar (if toggled) */}
      {showSettings && item.status === 'idle' && (
        <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-3 text-xs">
          <label className="text-slate-600 dark:text-slate-400 font-medium">Page Range:</label>
          <input
            type="text"
            value={pageInput}
            onChange={(e) => setPageInput(e.target.value)}
            onBlur={handlePageBlur}
            placeholder="all, or 1-3, 5"
            className="px-2.5 py-1 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 w-36"
          />
          <span className="text-slate-400 text-[11px]">(e.g. 'all', or '1-2, 4')</span>
        </div>
      )}

      {/* Progress Bar & Status Line */}
      {(isConverting || item.status === 'completed' || item.status === 'error') && (
        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <div className="flex items-center gap-1.5">
              {isConverting && <Loader2 className="w-3.5 h-3.5 text-blue-600 animate-spin" />}
              {item.status === 'completed' && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />}
              {item.status === 'error' && <AlertCircle className="w-3.5 h-3.5 text-red-500" />}
              <span className={`font-medium ${
                item.status === 'completed'
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : item.status === 'error'
                  ? 'text-red-600 dark:text-red-400'
                  : 'text-slate-600 dark:text-slate-300'
              }`}>
                {item.statusMessage || (item.status === 'completed' ? 'Word document ready!' : '')}
              </span>
            </div>
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              {item.progress}%
            </span>
          </div>

          <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <div
              className={`h-full transition-all duration-300 rounded-full ${
                item.status === 'completed'
                  ? 'bg-emerald-500'
                  : item.status === 'error'
                  ? 'bg-red-500'
                  : 'bg-gradient-to-r from-blue-500 to-indigo-600'
              }`}
              style={{ width: `${item.progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
