import React, { useState } from 'react';
import { FileText, Moon, Sun, ShieldCheck, ChevronDown, Menu, X, FileCode, ScanText, Sparkles } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  isDarkMode,
  toggleTheme,
  currentPath,
  onNavigate,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tools = [
    { name: 'PDF to Word', path: '/', icon: FileText, desc: 'Convert PDF to editable Word document' },
    { name: 'PDF to DOCX', path: '/pdf-to-docx', icon: FileCode, desc: 'Standard Office OpenXML (.docx) format' },
    { name: 'Scanned PDF (OCR)', path: '/scanned-pdf-to-word', icon: ScanText, desc: 'Extract text from scanned PDFs & images' },
  ];

  const handleToolClick = (path: string) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    if (currentPath !== '/') {
      onNavigate('/');
      setTimeout(() => {
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleToolClick('/');
          }}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-blue-500 flex items-center justify-center shadow-md shadow-blue-500/20 text-white group-hover:scale-105 transition-transform">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                PDF<span className="text-blue-600 dark:text-blue-400">toWord</span>Free
              </span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                .org
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
              100% Free Online PDF to Word Converter
            </p>
          </div>
        </a>

        {/* Navigation & Sub-tools */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-800/60 p-1 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 text-xs font-semibold">
          {tools.map((t) => {
            const isActive = currentPath === t.path;
            const Icon = t.icon;
            return (
              <button
                key={t.path}
                onClick={() => handleToolClick(t.path)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl transition-all ${
                  isActive
                    ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{t.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Informative Anchors */}
        <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a
            href="#how-it-works"
            onClick={(e) => handleAnchorClick(e, '#how-it-works')}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            How It Works
          </a>
          <a
            href="#features"
            onClick={(e) => handleAnchorClick(e, '#features')}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Features
          </a>
          <a
            href="#guide"
            onClick={(e) => handleAnchorClick(e, '#guide')}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Guide
          </a>
          <a
            href="#faq"
            onClick={(e) => handleAnchorClick(e, '#faq')}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            FAQ
          </a>
        </nav>

        {/* Privacy Pill, Theme Switcher & Mobile Toggle */}
        <div className="flex items-center gap-2.5">
          <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-300 text-xs font-medium">
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Open Menu"
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 md:hidden transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-4 space-y-3 animate-fadeIn">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2">Conversion Tools</div>
          <div className="space-y-1">
            {tools.map((t) => {
              const Icon = t.icon;
              const isActive = currentPath === t.path;
              return (
                <button
                  key={t.path}
                  onClick={() => handleToolClick(t.path)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <div>
                    <div>{t.name}</div>
                    <div className="text-xs font-normal text-slate-500 dark:text-slate-400">{t.desc}</div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-slate-600 dark:text-slate-400 px-2">
            <a href="#how-it-works" onClick={(e) => handleAnchorClick(e, '#how-it-works')}>How It Works</a>
            <a href="#features" onClick={(e) => handleAnchorClick(e, '#features')}>Features</a>
            <a href="#guide" onClick={(e) => handleAnchorClick(e, '#guide')}>Guide</a>
            <a href="#faq" onClick={(e) => handleAnchorClick(e, '#faq')}>FAQ</a>
          </div>
        </div>
      )}
    </header>
  );
};
