import React from 'react';
import { FileText, Moon, Sun, ShieldCheck, Sparkles } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-blue-500 flex items-center justify-center shadow-md shadow-blue-500/20 text-white">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                Docu<span className="text-blue-600 dark:text-blue-400">Shift</span>
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                DOCX 2.0
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
              Free Online PDF to Word Converter
            </p>
          </div>
        </div>

        {/* Navigation & Trust Indicator */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a href="#converter" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Converter
          </a>
          <a href="#how-it-works" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            How It Works
          </a>
          <a href="#features" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Features
          </a>
          <a href="#faq" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            FAQ
          </a>
        </nav>

        {/* Privacy Pill & Theme Switcher */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-300 text-xs font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Files Never Leave Browser</span>
          </div>

          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>
        </div>
      </div>
    </header>
  );
};
