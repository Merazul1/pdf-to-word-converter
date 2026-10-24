import React from 'react';
import { FileText, Heart, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-lg text-slate-900 dark:text-white">
                Docu<span className="text-blue-600 dark:text-blue-400">Shift</span>
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                100% Free & Private Online PDF to Word Converter
              </p>
            </div>
          </div>

          {/* Privacy badge */}
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-4 py-2 rounded-xl">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Zero Server Processing • 100% Client-Side Privacy Guarantee</span>
          </div>

          {/* Copyright */}
          <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
            <span>Built with precision for fast document editing.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
