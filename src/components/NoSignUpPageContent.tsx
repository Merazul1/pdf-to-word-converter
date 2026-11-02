import React from 'react';
import { UserX, CheckCircle, ShieldCheck, Zap, X, Clock, Lock, Sparkles } from 'lucide-react';

export const NoSignUpPageContent: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-200 dark:border-emerald-800">
            <UserX className="w-3.5 h-3.5" />
            <span>Zero Account Required</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Free PDF to Word Converter — No Sign Up, No Email, No Trial
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            Convert any PDF document to an editable Microsoft Word (DOCX) file without creating an account, giving up your email address, or paying for a subscription trial.
          </p>
        </div>

        {/* Feature Comparison Box */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            PDFtoWordFree vs Other Online Converters
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-xs font-bold uppercase text-slate-500 dark:text-slate-400">
                  <th className="py-3 px-4">Feature</th>
                  <th className="py-3 px-4 text-blue-600 dark:text-blue-400 font-extrabold">PDFtoWordFree.org</th>
                  <th className="py-3 px-4 text-slate-500">Other Free Converters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-800 dark:text-slate-200">Account / Sign-Up Required</td>
                  <td className="py-3 px-4 text-emerald-600 font-bold flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4" /> NO (100% Sign-up Free)
                  </td>
                  <td className="py-3 px-4 text-red-500 flex items-center gap-1.5">
                    <X className="w-4 h-4" /> Often forces email registration
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-800 dark:text-slate-200">Credit Card / Free Trial</td>
                  <td className="py-3 px-4 text-emerald-600 font-bold flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4" /> Never Needed
                  </td>
                  <td className="py-3 px-4 text-red-500 flex items-center gap-1.5">
                    <X className="w-4 h-4" /> 7-day trials with auto-charge
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-800 dark:text-slate-200">Where Conversion Happens</td>
                  <td className="py-3 px-4 text-emerald-600 font-bold flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4" /> Local Device Browser (100% Private)
                  </td>
                  <td className="py-3 px-4 text-amber-600 flex items-center gap-1.5">
                    <Clock className="w-4 h-4" /> Uploaded to remote cloud server
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-800 dark:text-slate-200">Watermarks Added</td>
                  <td className="py-3 px-4 text-emerald-600 font-bold flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4" /> Clean (Zero Watermarks)
                  </td>
                  <td className="py-3 px-4 text-red-500 flex items-center gap-1.5">
                    <X className="w-4 h-4" /> Watermarks on unpaid tier
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-800 dark:text-slate-200">Daily File Limit</td>
                  <td className="py-3 px-4 text-emerald-600 font-bold flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4" /> Unlimited
                  </td>
                  <td className="py-3 px-4 text-amber-600 flex items-center gap-1.5">
                    <Clock className="w-4 h-4" /> Typically capped at 1–2 files/day
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Content Articles */}
        <div className="space-y-10">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Why Do Most PDF Converters Force You to Sign Up?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm sm:text-base">
              If you’ve searched for a free PDF to Word tool recently, you’ve likely experienced the frustration: you upload a file, wait for it to process, only to be hit with a popup demanding your name, email address, or credit card details to "unlock" the download.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base mb-4">
              Legacy online converters do this because running cloud server clusters is expensive, so they use forced sign-ups to build marketing lists and sell recurring monthly subscriptions.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
              <strong>PDFtoWordFree.org</strong> was engineered specifically to solve this. Because our conversion engine runs <strong>directly inside your web browser</strong> using client-side WebAssembly, there are zero expensive cloud compute costs. That means you get <strong>instant, unrestricted, sign-up-free conversions forever</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                <UserX className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">No Account Needed</h4>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                No username, no password, and no verification email. Simply open the page and convert right away.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">Zero Spam Emails</h4>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Because we never ask for your email address, your inbox stays completely safe from spam and newsletter marketing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">Instant Download</h4>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                No countdown timers, no artificial wait queues, and no paywalls. Your converted Word (.docx) file is ready in seconds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
