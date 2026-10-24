import React from 'react';
import { UploadCloud, Cpu, Download, ArrowRight } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: UploadCloud,
      title: 'Select or Drop PDF',
      description: 'Choose one or multiple PDF documents from your computer, or simply drag and drop them into the conversion zone.',
    },
    {
      num: '02',
      icon: Cpu,
      title: 'Smart Layout Processing',
      description: 'Our engine extracts text coordinates, fonts, paragraphs, and tables, reconstructing them into native Word document structures.',
    },
    {
      num: '03',
      icon: Download,
      title: 'Download Editable Word',
      description: 'Click download to instantly save your Microsoft Word (.docx) file or download batch conversions as a single ZIP.',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-slate-100/60 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-indigo-200 dark:border-indigo-800">
            Simple 3-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How to Convert PDF to Word Online
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            Converting your documents is effortless, fast, and completely free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm flex flex-col items-start"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between w-full mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-slate-200 dark:text-slate-800 tracking-wider">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
