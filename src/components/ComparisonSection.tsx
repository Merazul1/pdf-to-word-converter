import React from 'react';
import { FileText, FileCode2, Check, X } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const comparisonRows = [
    {
      feature: 'Text & Paragraph Editing',
      pdf: 'Hard / Requires expensive PDF editors',
      word: 'Seamless and fully editable in Word & Docs',
      pdfGood: false,
      wordGood: true,
    },
    {
      feature: 'Table Structure Modification',
      pdf: 'Locked cells / Flat shapes',
      word: 'Standard native Word tables & resizable columns',
      pdfGood: false,
      wordGood: true,
    },
    {
      feature: 'Collaboration & Track Changes',
      pdf: 'Limited annotations & sticky notes',
      word: 'Rich revision history, comments & tracked changes',
      pdfGood: false,
      wordGood: true,
    },
    {
      feature: 'Spellcheck & AI Grammar Assistants',
      pdf: 'Not supported on compiled text',
      word: 'Full native spellcheck & formatting tools',
      pdfGood: false,
      wordGood: true,
    },
    {
      feature: 'Document Reformatting & Styles',
      pdf: 'Fixed coordinate layout',
      word: 'Fluid styles, font re-theming & headings',
      pdfGood: false,
      wordGood: true,
    },
  ];

  return (
    <section className="py-16 sm:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-200 dark:border-blue-800">
            PDF vs Word
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Convert PDF to Word (.docx)?
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            PDFs are great for viewing and printing, but Word files are made for creating, editing, and collaborating.
          </p>
        </div>

        {/* Table comparison */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-lg shadow-slate-200/40 dark:shadow-none">
          <div className="grid grid-cols-12 bg-slate-50 dark:bg-slate-800/80 p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
            <div className="col-span-5 sm:col-span-4">Capability</div>
            <div className="col-span-3 sm:col-span-4 text-center sm:text-left flex items-center gap-1.5 text-red-600 dark:text-red-400">
              <FileText className="w-4 h-4 shrink-0 hidden sm:inline" />
              <span>Original PDF</span>
            </div>
            <div className="col-span-4 text-center sm:text-left flex items-center gap-1.5 text-blue-600 dark:text-blue-400">
              <FileCode2 className="w-4 h-4 shrink-0 hidden sm:inline" />
              <span>Converted Word (DOCX)</span>
            </div>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800/80">
            {comparisonRows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-12 p-4 sm:p-5 items-center text-xs sm:text-sm hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
              >
                <div className="col-span-5 sm:col-span-4 font-semibold text-slate-900 dark:text-white">
                  {row.feature}
                </div>
                <div className="col-span-3 sm:col-span-4 text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 hidden sm:inline" />
                  <span className="text-xs sm:text-sm">{row.pdf}</span>
                </div>
                <div className="col-span-4 text-slate-800 dark:text-slate-200 font-medium flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 hidden sm:inline" />
                  <span className="text-xs sm:text-sm text-blue-700 dark:text-blue-300 font-semibold">{row.word}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
