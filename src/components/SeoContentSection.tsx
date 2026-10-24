import React from 'react';
import { BookOpen, CheckCircle, ShieldCheck, Zap, Laptop, FileSpreadsheet } from 'lucide-react';

export const SeoContentSection: React.FC = () => {
  return (
    <section id="guide" className="py-16 sm:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-200 dark:border-blue-800">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Complete Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How to Convert PDF to Word for Free (Without Losing Formatting)
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            Learn how PDFtoWordFree.org reconstructs complex layouts, font styles, and tables directly inside your browser.
          </p>
        </div>

        {/* Content Articles / Grid */}
        <div className="space-y-12">
          {/* Article Block 1 */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>Why Use PDFtoWordFree.org Instead of Traditional Converters?</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm sm:text-base">
              Most conventional online PDF converters require you to upload your sensitive personal or business documents to a remote cloud server. This exposes confidential contracts, tax returns, resumes, and medical records to security vulnerabilities and retention risks.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
              <strong>PDFtoWordFree.org</strong> operates on a revolutionary <strong>100% Client-Side Architecture</strong>. Leveraging modern JavaScript, WebAssembly, and Mozilla PDF.js, all parsing and Word (.docx) generation happens strictly inside your local device’s memory. Your data never touches any external web server, ensuring total privacy and GDPR compliance.
            </p>
          </div>

          {/* Article Block 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span>Preserving Tables & Layouts</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-4">
                PDFs store text as absolute coordinates rather than fluid words and paragraphs. Our layout engine analyzes horizontal baselines and column spacing to detect:
              </p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span><strong>Headings:</strong> Auto-mapped to H1, H2, and H3 styles.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span><strong>Tables:</strong> Aligned columns converted to resizable Word tables.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span><strong>Typography:</strong> Bold, italic, font sizing, and margins retained.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Laptop className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Universal Software Compatibility</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-4">
                The resulting file is formatted in the official Microsoft Office OpenXML (<code>.docx</code>) standard. It is fully compatible with:
              </p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>Microsoft Word (2007, 2010, 2013, 2016, 2019, 2021, Office 365)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>Google Docs (import directly without formatting distortion)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>Apple Pages, LibreOffice Writer, and WPS Office</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Article Block 3: Step-by-Step Instructions */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800/90 border border-blue-200/80 dark:border-slate-700 rounded-3xl p-6 sm:p-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Step-by-Step: Converting PDF to Word in 30 Seconds
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              <li>
                <strong>Select your PDF:</strong> Drag and drop your file into the converter box above or click "Select PDF Files".
              </li>
              <li>
                <strong>Choose your pages (Optional):</strong> If you only need specific pages (e.g., pages 1–3), click the "Pages" button on the file card to enter your desired range.
              </li>
              <li>
                <strong>Convert & Download:</strong> Click "Convert to Word". Within seconds, your editable <code>.docx</code> file is ready to download or preview.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
