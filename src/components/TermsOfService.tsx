import React from 'react';
import { FileCheck2, AlertCircle, Shield, CheckCircle } from 'lucide-react';

export const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-200 dark:border-blue-800">
          <FileCheck2 className="w-3.5 h-3.5" />
          <span>Terms & Conditions</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm sm:text-base text-slate-500 dark:text-slate-400">
          Last updated: November 6, 2026 &bull; pdftowordfree.org
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-12 shadow-sm space-y-8 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
            1. Agreement to Terms
          </h2>
          <p>
            By accessing or using <strong>PDFtoWordFree.org</strong> ("the Service"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you disagree with any part of these terms, you may not access or use the service.
          </p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
            2. Description of Service
          </h2>
          <p className="mb-3">
            PDFtoWordFree.org is a free, web-based utility that facilitates the extraction and conversion of Portable Document Format (PDF) files into Microsoft Word (.docx) documents.
          </p>
          <p>
            The software operates client-side within the user's web browser using JavaScript and WebAssembly. No files are transmitted to or stored on our servers.
          </p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
            3. Intellectual Property Rights &amp; Ownership
          </h2>
          <p className="mb-3">
            <strong>Your Documents:</strong> You retain full and exclusive ownership, copyright, and intellectual property rights to all files you convert using our service. Because files are processed strictly in your local memory, PDFtoWordFree.org acquires no rights, licenses, or claims to your content.
          </p>
          <p>
            <strong>Website Property:</strong> The design, structure, source code, logos, and written guides of PDFtoWordFree.org are protected by intellectual property laws.
          </p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
            4. Acceptable Use Policy
          </h2>
          <p className="mb-3">
            You agree to use PDFtoWordFree.org solely for lawful purposes. You agree not to:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-slate-600 dark:text-slate-400">
            <li>Attempt to reverse-engineer, disrupt, or impair the security of the website.</li>
            <li>Use automated bots, scrapers, or scripts that overload our hosting infrastructure.</li>
            <li>Process materials that infringe upon copyright, trademarks, or personal privacy rights of third parties.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
            5. Disclaimer of Warranties
          </h2>
          <p className="mb-3">
            PDFtoWordFree.org is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, whether express or implied.
          </p>
          <p>
            While our layout parser strives for maximum accuracy in reconstructing headings, tables, and typography, we do not warrant that output documents will be 100% identical in layout to corrupt, heavily damaged, or non-standard PDF files.
          </p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
            6. Limitation of Liability
          </h2>
          <p>
            In no event shall PDFtoWordFree.org, its developers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
          </p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
            7. Contact Information
          </h2>
          <p>
            If you have questions regarding these Terms of Service, please contact us at <a href="mailto:support@pdftowordfree.org" className="text-blue-600 dark:text-blue-400 font-semibold underline">support@pdftowordfree.org</a>.
          </p>
        </div>
      </div>
    </div>
  );
};
