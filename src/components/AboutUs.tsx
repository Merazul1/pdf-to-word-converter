import React from 'react';
import { ShieldCheck, Cpu, Users, Award, Heart, CheckCircle2, Lock, ArrowRight } from 'lucide-react';

interface AboutUsProps {
  onNavigate?: (path: string) => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-200 dark:border-blue-800">
          <Award className="w-3.5 h-3.5" />
          <span>Our Story &amp; Technology</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">PDFtoWordFree</span>
        </h1>
        <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Empowering individuals, students, and professionals worldwide with private, fast, and 100% free document conversion tools — without subscriptions, email walls, or remote server uploads.
        </p>
      </div>

      {/* Main Content Blocks */}
      <div className="space-y-12">
        {/* Our Mission */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/80 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Heart className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Our Mission</h2>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-4">
            Every day, millions of people need to convert PDF documents to editable Microsoft Word files for work, school, legal filings, or personal affairs. Unfortunately, the vast majority of online converters gatekeep basic document utilities behind paywalls, deceptive 7-day trials, required account registrations, or risky cloud uploads.
          </p>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            <strong>PDFtoWordFree.org</strong> was founded on a simple principle: converting everyday documents should be accessible, free, and completely respectful of user privacy. We believe you should never have to surrender personal data, credit card details, or sensitive document contents just to edit a resume or contract.
          </p>
        </div>

        {/* Why In-Browser WebAssembly Architecture Matters */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              The Technology: 100% Client-Side WebAssembly
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-4">
            Traditional online PDF converters operate by sending your file across the internet to their backend cloud servers. That architecture poses significant security, confidentiality, and GDPR compliance risks for businesses, legal practices, and medical facilities.
          </p>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-6">
            PDFtoWordFree utilizes modern <strong>WebAssembly (WASM) and browser-based JavaScript compilation</strong>. When you drop a PDF into our tool:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
              <div className="text-blue-600 dark:text-blue-400 font-bold text-sm mb-2">Step 1: Local Parsing</div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                The document is parsed directly in your browser's virtual memory using isolated JavaScript threads.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
              <div className="text-emerald-600 dark:text-emerald-400 font-bold text-sm mb-2">Step 2: Typography &amp; Layout</div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Text coordinates, font metrics, heading weights, and tables are mapped to the ISO/IEC 29500 Word XML schema.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
              <div className="text-purple-600 dark:text-purple-400 font-bold text-sm mb-2">Step 3: Instant DOCX Delivery</div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                The resulting editable .docx file is zipped in memory and saved to your device with zero cloud latency.
              </p>
            </div>
          </div>
        </div>

        {/* Our Core Commitments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Zero Server Retention</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              We never see, store, or sell your documents. Because our backend servers never receive your files, data breaches or unauthorized access are mathematically impossible on our infrastructure.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/80 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Universal Accessibility</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              We provide localized support, including our dedicated Spanish version, mobile responsiveness, and dark mode for comfortable reading and converting across all devices and screen sizes.
            </p>
          </div>
        </div>

        {/* Editorial & Publisher Standards */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/80 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Editorial &amp; Quality Standards</h2>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-4">
            At PDFtoWordFree.org, we continuously research document interchange standards, layout fidelity, and typography rendering. Our guides, tutorials, and FAQs are authored and reviewed by software engineers and document specialists to ensure accurate, up-to-date information for users navigating digital document workflows.
          </p>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Have suggestions or feedback on how we can improve our converter or educational guides? We encourage you to reach out through our <button onClick={() => onNavigate?.('/contact')} className="text-blue-600 dark:text-blue-400 font-semibold underline hover:text-blue-700">Contact Us page</button>.
          </p>
        </div>
      </div>
    </div>
  );
};
