import React from 'react';
import { FileText, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate?.(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Brand & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <FileText className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg text-slate-900 dark:text-white">
                PDF<span className="text-blue-600 dark:text-blue-400">toWord</span>Free
                <span className="text-xs text-slate-400 font-normal ml-1">.org</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed mb-4">
              Free, secure, and client-side online converter. Transform PDF documents to editable Microsoft Word (DOCX) files in seconds with zero uploads.
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Zero Server Uploads • 100% In-Browser Privacy</span>
            </div>
          </div>

          {/* Col 2: Free Tools */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Free Conversion Tools
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleLink(e, '/')}
                  className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                >
                  PDF to Word Converter
                </a>
              </li>
              <li>
                <a
                  href="/pdf-to-docx"
                  onClick={(e) => handleLink(e, '/pdf-to-docx')}
                  className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                >
                  PDF to DOCX Converter
                </a>
              </li>
              <li>
                <a
                  href="/scanned-pdf-to-word"
                  onClick={(e) => handleLink(e, '/scanned-pdf-to-word')}
                  className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                >
                  Scanned PDF to Word (OCR)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Resources & Guide
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#how-it-works" className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
                  How to Convert
                </a>
              </li>
              <li>
                <a href="#features" className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
                  Features & Security
                </a>
              </li>
              <li>
                <a href="#guide" className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
                  Format Preservation Guide
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-700 dark:text-slate-200">pdftowordfree.org</strong> • Free Online Document Tools.
          </div>
          <div className="flex items-center gap-4">
            <span>No Cookies Tracked</span>
            <span>•</span>
            <span>No Data Retained</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
