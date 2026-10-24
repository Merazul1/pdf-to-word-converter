import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      q: 'Is this PDF to Word converter really 100% free?',
      a: 'Yes, completely free! There are no hidden fees, subscriptions, credits, daily limits, or watermarks added to your documents. You can convert as many PDFs as you need.',
    },
    {
      q: 'Are my confidential documents safe and private?',
      a: 'DocuShift operates with a zero-server privacy architecture. Your PDF files are read and converted directly within your browser’s local memory using client-side WebAssembly and JavaScript. No document data is ever uploaded to or stored on any external server.',
    },
    {
      q: 'What format does it produce and can I edit it?',
      a: 'The output is a native Microsoft Word (.docx) file (Office OpenXML standard). You can immediately open and edit it using Microsoft Word (desktop or online), Google Docs, LibreOffice Writer, Apple Pages, and WPS Office.',
    },
    {
      q: 'How does it preserve formatting, headings, and tables?',
      a: 'Our smart layout parser analyzes font sizing, text baselines, and horizontal column alignments to identify document headers, bold/italic text styling, line spacing, and tabular content, converting them into true Word styles rather than uneditable image blocks.',
    },
    {
      q: 'Can I convert multiple PDF files at once (batch conversion)?',
      a: 'Yes! You can select or drop multiple PDF files into the converter at the same time. You can convert all of them with one click and download each file individually or packaged together in a single ZIP file.',
    },
    {
      q: 'Can I convert only specific pages instead of the whole PDF?',
      a: 'Yes. Each file item includes a page selector where you can specify individual pages or ranges (for example: "1-5", "2, 4, 7-9", or "all").',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-100/60 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-200 dark:border-blue-800">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Have Questions? We Have Answers
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            Everything you need to know about converting PDF to Word online for free.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-blue-600 dark:text-blue-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
