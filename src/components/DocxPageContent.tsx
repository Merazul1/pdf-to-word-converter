import React from 'react';
import { FileCode, CheckCircle, ShieldCheck, Zap, Laptop, ArrowRight } from 'lucide-react';

export const DocxPageContent: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-200 dark:border-blue-800">
            <FileCode className="w-3.5 h-3.5" />
            <span>Modern DOCX Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Free Online PDF to DOCX Converter
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            Convert any PDF into Microsoft Word Office OpenXML (.docx) format with 100% in-browser privacy and perfect layout preservation.
          </p>
        </div>

        {/* Content Articles */}
        <div className="space-y-10">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
              What Makes DOCX Superior to Legacy DOC?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm sm:text-base">
              The <strong>.docx</strong> file format is the official international standard (ISO/IEC 29500) for word processing documents. Unlike outdated binary <code>.doc</code> files, DOCX uses an open XML-based architecture compressed as a ZIP container. This ensures:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Smaller File Sizes</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Up to 75% smaller than legacy DOC files due to native zip compression.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Corruption Resilience</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Modular XML compartments prevent whole-file damage if one section is corrupted.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Universal Cloud Support</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Native compatibility with Google Docs, Office 365, Apple Pages, and LibreOffice.</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Why Convert PDF to DOCX on PDFtoWordFree.org?
            </h3>
            <ul className="space-y-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Zero Cloud Uploads:</strong> Conversions happen locally inside your browser memory using WebAssembly. No third party ever sees your file.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Native Word Typography:</strong> Headings, line spacing, margins, bold/italic font styling, and bullet points are preserved.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Smart Table Detection:</strong> Multi-column financial tables, statements, and schedules are transformed into real, editable Word tables.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>No Daily Caps or Watermarks:</strong> Convert as many documents as you need without signup, watermarks, or fees.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
