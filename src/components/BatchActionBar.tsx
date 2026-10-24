import React from 'react';
import { Play, Download, Trash2, Archive, CheckCheck } from 'lucide-react';
import type { FileQueueItem } from '../types';

interface BatchActionBarProps {
  items: FileQueueItem[];
  onConvertAll: () => void;
  onDownloadAllZip: () => void;
  onClearAll: () => void;
  isConvertingAny: boolean;
}

export const BatchActionBar: React.FC<BatchActionBarProps> = ({
  items,
  onConvertAll,
  onDownloadAllZip,
  onClearAll,
  isConvertingAny,
}) => {
  const idleCount = items.filter((item) => item.status === 'idle').length;
  const completedCount = items.filter((item) => item.status === 'completed').length;
  const totalCount = items.length;

  return (
    <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Summary Badges */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
          Queue: {totalCount} file{totalCount > 1 ? 's' : ''}
        </span>
        {completedCount > 0 && (
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-medium flex items-center gap-1 border border-emerald-200 dark:border-emerald-800">
            <CheckCheck className="w-3.5 h-3.5" />
            {completedCount} ready
          </span>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto justify-end">
        {idleCount > 0 && (
          <button
            onClick={onConvertAll}
            disabled={isConvertingAny}
            className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 shadow-sm shadow-blue-500/20 transition-all disabled:opacity-50"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Convert All ({idleCount})</span>
          </button>
        )}

        {completedCount > 1 && (
          <button
            onClick={onDownloadAllZip}
            className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 shadow-md shadow-blue-700/20 transition-all"
          >
            <Archive className="w-4 h-4" />
            <span>Download All (.ZIP)</span>
          </button>
        )}

        <button
          onClick={onClearAll}
          disabled={isConvertingAny}
          className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-red-50 hover:border-red-200 dark:hover:bg-red-950/40 dark:hover:border-red-900/50 text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 text-xs sm:text-sm font-medium transition-colors disabled:opacity-40 flex items-center gap-1"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Clear All</span>
        </button>
      </div>
    </div>
  );
};
