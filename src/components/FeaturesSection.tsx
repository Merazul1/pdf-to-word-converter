import React from 'react';
import { Shield, Zap, Sparkles, Layers, FileCheck, Lock, Smartphone, Check } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Shield,
      color: 'from-blue-500 to-indigo-600',
      title: '100% Private & In-Browser',
      description: 'Your sensitive PDF files never leave your device. All parsing and Word generation happens strictly in your browser.',
    },
    {
      icon: Layers,
      color: 'from-indigo-500 to-purple-600',
      title: 'Smart Layout Reconstruction',
      description: 'Intelligently detects headings, body paragraphs, font sizes, weights (bold/italic), and column tables into native Word styles.',
    },
    {
      icon: Zap,
      color: 'from-amber-500 to-orange-600',
      title: 'Instant Lightning Speed',
      description: 'Zero upload queues, no server processing delays, and zero download waits. Documents convert in seconds.',
    },
    {
      icon: Sparkles,
      color: 'from-emerald-500 to-teal-600',
      title: '100% Free Forever',
      description: 'No credit card, no sign-ups, no hidden limits, and no watermark stamps on your generated Word documents.',
    },
    {
      icon: FileCheck,
      color: 'from-blue-600 to-cyan-600',
      title: 'Universal DOCX Compatibility',
      description: 'Fully standard Office OpenXML (.docx) files ready for Microsoft Word, Google Docs, Apple Pages, and LibreOffice.',
    },
    {
      icon: Smartphone,
      color: 'from-rose-500 to-pink-600',
      title: 'Works on Any Device',
      description: 'Responsive, sleek web experience optimized for desktops, laptops, tablets, and modern mobile browsers.',
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-200 dark:border-blue-800">
            Engineered For Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Choose DocuShift For PDF to Word?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Traditional online converters upload your personal documents to unknown remote servers. DocuShift does the heavy lifting client-side with maximum security and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${feature.color} flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2.5">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
