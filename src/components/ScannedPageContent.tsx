import React from 'react';
import { ScanText, CheckCircle, ShieldCheck, Zap, Sparkles, FileText } from 'lucide-react';

export const ScannedPageContent: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-purple-200 dark:border-purple-800">
            <ScanText className="w-3.5 h-3.5" />
            <span>Scanned Documents & OCR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Convert Scanned PDF to Word Online (DOCX)
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            Easily transform scanned paper documents, contracts, books, receipts, and photo PDFs into fully editable Word documents.
          </p>
        </div>

        {/* Content Articles */}
        <div className="space-y-10">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
              How Does Scanned PDF to Word Conversion Work?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm sm:text-base">
              A scanned PDF is essentially a digital photograph wrapped in a PDF container — the computer only sees an image rather than selectable letters and words.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
              <strong>PDFtoWordFree.org</strong> extracts text layers and font coordinates embedded by scanner software, reconstructs paragraph baselines, and builds a native Microsoft Word (DOCX) document where every paragraph, line, and word can be selected, edited, copied, and searched.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Best For Paper Document Conversion
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500 shrink-0" />
                  <span>Contracts, agreements, and legal notices</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500 shrink-0" />
                  <span>Invoices, receipts, and financial statements</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500 shrink-0" />
                  <span>Academic papers, book chapters, and essays</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500 shrink-0" />
                  <span>Resumes, forms, and official certificates</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                100% Confidential & Secure
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                Scanned documents often contain highly sensitive personal information such as bank numbers, signatures, and IDs.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Because our converter operates <strong>strictly inside your browser</strong>, your confidential scans are never sent to or stored on any external server.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
