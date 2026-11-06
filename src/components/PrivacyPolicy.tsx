import React from 'react';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-200 dark:border-blue-800">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Legal & Transparency</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm sm:text-base text-slate-500 dark:text-slate-400">
          Last updated: November 6, 2026 &bull; Effective immediately for pdftowordfree.org
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-12 shadow-sm space-y-8 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
        {/* Section 1 */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <Lock className="w-5 h-5 text-emerald-600" />
            <span>1. Our Zero-Server Document Privacy Guarantee</span>
          </h2>
          <p className="mb-3">
            At <strong>PDFtoWordFree.org</strong> ("we", "our", or "us"), we prioritize user privacy above all else. Unlike standard online conversion services, our entire conversion pipeline is built on <strong>client-side WebAssembly and JavaScript</strong>.
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-slate-600 dark:text-slate-400">
            <li><strong>Your files are never uploaded to any remote server.</strong></li>
            <li>All document text parsing, font baseline extraction, and Word (.docx) generation occur entirely in your local computer or phone's browser memory.</li>
            <li>We do not store, view, copy, sell, or retain any portion of your PDF documents or generated Word files.</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
            2. Information We Collect
          </h2>
          <p className="mb-3">
            Because our service operates client-side with no user accounts, we do not collect personal identification information such as your name, postal address, phone number, or password.
          </p>
          <p>
            When you visit our website, basic non-personally identifiable technical data may be automatically logged by our hosting infrastructure (Vercel CDN) and analytics partners for performance and security purposes, such as browser type, operating system, referring URL, and date/time stamps.
          </p>
        </div>

        {/* Section 3 - Google AdSense & Cookies (MANDATORY FOR ADSENSE APPROVAL) */}
        <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <Eye className="w-5 h-5 text-blue-600" />
            <span>3. Google AdSense &amp; Third-Party Advertising</span>
          </h2>
          <p className="mb-3">
            We use third-party advertising companies, including <strong>Google AdSense</strong>, to serve advertisements when you visit our website. Google and other advertising partners may use cookies to serve personalized ads based on your prior visits to this website or other websites on the internet.
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
            <li>
              <strong>Google's use of advertising cookies:</strong> Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.
            </li>
            <li>
              <strong>Opting out of personalized advertising:</strong> Users may opt out of personalized advertising by visiting <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline font-medium">Google Ads Settings</a>.
            </li>
            <li>
              Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline font-medium">aboutads.info</a>.
            </li>
          </ul>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
            4. Cookies and Web Beacons
          </h2>
          <p className="mb-3">
            Cookies are small text files placed on your device by websites that you visit. PDFtoWordFree.org only utilizes local storage to remember your preferred visual theme (Light or Dark mode). Third-party vendors, including Google, use cookies to serve ads based on prior visits.
          </p>
          <p>
            You can choose to disable or selectively turn off our cookies or third-party cookies in your browser settings, or by managing preferences in security programs.
          </p>
        </div>

        {/* Section 5 */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
            5. GDPR and CCPA Compliance
          </h2>
          <p className="mb-3">
            We adhere to the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA). Under these regulations, users retain the right to:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-slate-600 dark:text-slate-400">
            <li>Know what data is collected and processed.</li>
            <li>Request deletion of personal data.</li>
            <li>Opt out of the sale or sharing of personal data (we never sell user data).</li>
          </ul>
        </div>

        {/* Section 6 */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
            6. Children's Information
          </h2>
          <p>
            Another part of our priority is adding protection for children while using the internet. PDFtoWordFree.org does not knowingly collect any Personal Identifiable Information from children under the age of 13.
          </p>
        </div>

        {/* Section 7 */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
            7. Contact Us
          </h2>
          <p>
            If you have any questions or require more information about our Privacy Policy, do not hesitate to contact us at <a href="mailto:support@pdftowordfree.org" className="text-blue-600 dark:text-blue-400 font-semibold underline">support@pdftowordfree.org</a>.
          </p>
        </div>
      </div>
    </div>
  );
};
