import React, { useState } from 'react';
import {
  FileText,
  ShieldCheck,
  Zap,
  CheckCircle,
  X,
  UploadCloud,
  Cpu,
  Download,
  ChevronDown,
  Layers,
  Sparkles,
  Lock,
  Globe
} from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

export const SpanishPageContent: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const steps = [
    {
      num: '01',
      icon: UploadCloud,
      title: 'Sube o Arrastra tu PDF',
      desc: 'Selecciona uno o varios archivos PDF desde tu ordenador o móvil. No necesitas registrarte ni introducir tu correo.',
    },
    {
      num: '02',
      icon: Cpu,
      title: 'Conversión Inteligente',
      desc: 'El motor reconstruye encabezados, párrafos, tablas y tipografías directamente en la memoria de tu navegador.',
    },
    {
      num: '03',
      icon: Download,
      title: 'Descarga tu Word (.docx)',
      desc: 'Guarda al instante tu archivo Microsoft Word totalmente editable, o descarga un archivo ZIP con todos tus documentos.',
    },
  ];

  const faqs: FaqItem[] = [
    {
      q: '¿Es realmente gratis este conversor de PDF a Word?',
      a: 'Sí, es 100% gratis para siempre. No hay periodos de prueba, no pedimos tarjeta de crédito, no hay límite diario de páginas y nunca añadimos marcas de agua a tus documentos descargados.',
    },
    {
      q: '¿Tengo que registrarme o dar mi correo electrónico?',
      a: 'No. En PDFtoWordFree no necesitas crear ninguna cuenta ni dejar tu email. Puedes convertir y descargar tus documentos de inmediato sin recibir publicidad ni spam.',
    },
    {
      q: '¿Están seguros mis documentos confidenciales?',
      a: 'Absolutamente. Nuestro conversor funciona al 100% en el lado del cliente (en tu propio navegador) mediante WebAssembly y JavaScript. A diferencia de otros sitios web, tus archivos nunca se suben ni se almacenan en servidores externos.',
    },
    {
      q: '¿Se mantiene el formato original, las tablas y las fuentes?',
      a: 'Sí. Nuestro analizador detecta títulos (H1, H2, H3), estilos de fuente (negrita, cursiva), espaciados y alinea tablas de varias columnas en tablas nativas editables de Word (.docx).',
    },
    {
      q: '¿Puedo editar el archivo resultante en Google Docs y Microsoft Word?',
      a: 'Sí. El documento se genera en el estándar internacional Office OpenXML (.docx), compatible con Microsoft Office 365, Google Docs, Apple Pages, LibreOffice y WPS Office.',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 border-t border-slate-200/80 dark:border-slate-800/80 pt-16">
      {/* 3 Steps Guide */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-200 dark:border-blue-800">
            <Globe className="w-3.5 h-3.5" />
            <span>Guía en 3 Pasos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Cómo Convertir PDF a Word Gratis Online
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            Convierte tus archivos PDF en documentos de Word editables en menos de 30 segundos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm flex flex-col justify-between"
              >
                <div>
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
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us & Privacy Benefit */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800/90 border border-blue-200/80 dark:border-slate-700 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-semibold mb-4 border border-emerald-200 dark:border-emerald-800">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Privacidad Garantizada al 100%</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
              ¿Por qué PDFtoWordFree es más seguro que otros conversores online?
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
              La mayoría de conversores en línea te obligan a subir tus archivos a un servidor remoto desconocido. Esto pone en riesgo contratos legales, nóminas, facturas y datos confidenciales.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              En <strong>PDFtoWordFree.org</strong>, todo el procesamiento se ejecuta <strong>en tu propio navegador</strong> gracias a tecnologías modernas de WebAssembly. Tus documentos jamás salen de tu dispositivo, garantizando máxima velocidad y cumplimiento estricto de privacidad.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Ventajas de PDFtoWordFree frente a otros servicios
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-xs font-bold uppercase text-slate-500 dark:text-slate-400">
                  <th className="py-3 px-4">Característica</th>
                  <th className="py-3 px-4 text-blue-600 dark:text-blue-400 font-extrabold">PDFtoWordFree.org</th>
                  <th className="py-3 px-4 text-slate-500">Otros Conversores</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-800 dark:text-slate-200">¿Requiere Registro o Cuenta?</td>
                  <td className="py-3 px-4 text-emerald-600 font-bold flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4" /> NO (Sin cuenta)
                  </td>
                  <td className="py-3 px-4 text-red-500 flex items-center gap-1.5">
                    <X className="w-4 h-4" /> Piden email obligatorio
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-800 dark:text-slate-200">Subida a Servidores Externos</td>
                  <td className="py-3 px-4 text-emerald-600 font-bold flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4" /> CERO (Procesado en tu equipo)
                  </td>
                  <td className="py-3 px-4 text-amber-600 flex items-center gap-1.5">
                    <Lock className="w-4 h-4" /> Subido a la nube
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-800 dark:text-slate-200">Marcas de Agua</td>
                  <td className="py-3 px-4 text-emerald-600 font-bold flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4" /> NINGUNA (Limpio)
                  </td>
                  <td className="py-3 px-4 text-red-500 flex items-center gap-1.5">
                    <X className="w-4 h-4" /> Añaden marcas de agua
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-800 dark:text-slate-200">Límite Diario de Conversión</td>
                  <td className="py-3 px-4 text-emerald-600 font-bold flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4" /> ILIMITADO
                  </td>
                  <td className="py-3 px-4 text-amber-600 flex items-center gap-1.5">
                    <X className="w-4 h-4" /> 1 o 2 archivos por día
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Spanish FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-200 dark:border-blue-800">
            Preguntas Frecuentes
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Todo lo que necesitas saber
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
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
      </section>
    </div>
  );
};
