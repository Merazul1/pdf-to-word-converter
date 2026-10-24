import React, { useRef, useState } from 'react';
import { UploadCloud, FileType, CheckCircle2, Shield, Zap, Sparkles, Plus } from 'lucide-react';

interface DropZoneProps {
  onFilesSelected: (files: File[]) => void;
  onLoadSample: () => void;
  isProcessing?: boolean;
}

export const DropZone: React.FC<DropZoneProps> = ({
  onFilesSelected,
  onLoadSample,
  isProcessing = false,
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const validPdfs: File[] = [];
      for (let i = 0; i < e.dataTransfer.files.length; i++) {
        const file = e.dataTransfer.files[i];
        if (file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')) {
          validPdfs.push(file);
        }
      }
      if (validPdfs.length > 0) {
        onFilesSelected(validPdfs);
      }
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files);
      onFilesSelected(filesArray);
      e.target.value = ''; // Reset for re-selection
    }
  };

  return (
    <div className="w-full">
      <div
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`relative group cursor-pointer rounded-3xl border-2 border-dashed transition-all duration-300 p-8 sm:p-12 text-center flex flex-col items-center justify-center overflow-hidden ${
          isDragOver
            ? 'border-blue-500 bg-blue-50/70 dark:bg-blue-950/40 scale-[1.01] shadow-2xl shadow-blue-500/10'
            : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/60 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-slate-50/60 dark:hover:bg-slate-900 shadow-xl shadow-slate-200/50 dark:shadow-none'
        }`}
      >
        {/* Subtle decorative background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />

        {/* Hidden native input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="application/pdf,.pdf"
          multiple
          className="hidden"
          onChange={handleFileInputChange}
          disabled={isProcessing}
        />

        {/* Central Icon */}
        <div className="relative mb-5">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
            <UploadCloud className="w-10 h-10 animate-bounce duration-1000" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-lg bg-red-500 text-white flex items-center justify-center text-[10px] font-bold shadow-md">
            PDF
          </div>
        </div>

        {/* Main CTA Text */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-2">
          Drop your PDF files here, or{' '}
          <span className="text-blue-600 dark:text-blue-400 underline decoration-2 underline-offset-4">
            browse computer
          </span>
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mb-6">
          Convert one or multiple PDF documents into editable Word (.docx) files instantly. 100% free and client-side private.
        </p>

        {/* Upload Action Button */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md shadow-blue-600/30 transition-all flex items-center gap-2 group-hover:shadow-lg"
          >
            <Plus className="w-4 h-4" />
            <span>Select PDF Files</span>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onLoadSample();
            }}
            className="px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-medium transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Try Sample PDF</span>
          </button>
        </div>

        {/* Trust & Spec Chips */}
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            No registration required
          </span>
          <span className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-blue-500" />
            Zero server uploads
          </span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-500" />
            Preserves formatting & tables
          </span>
          <span className="flex items-center gap-1.5">
            <FileType className="w-4 h-4 text-purple-500" />
            Multi-file batch conversion
          </span>
        </div>
      </div>
    </div>
  );
};
