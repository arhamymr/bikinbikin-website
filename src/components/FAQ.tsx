/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Plus, Minus, HelpCircle, BadgeInfo } from "lucide-react";
import { FAQ_LIST } from "../data";

export default function FAQ() {
  const [activeFAQ, setActiveFAQ] = useState<string | null>("faq1");

  const toggleFAQ = (id: string) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  return (
    <section id="faq-section" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/40 py-1 px-3 rounded-md">
            Tanya Jawab Umum
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium text-slate-900 dark:text-white leading-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Temukan jawaban langsung perihal proses kerja, administrasi kepemilikan domain, hosting, hingga tata cara pengajuan upgrade fitur tambahan.
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4">
          {FAQ_LIST.map((faq) => {
            const isOpen = activeFAQ === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-md transition-all overflow-hidden ${
                  isOpen
                    ? "bg-slate-50/50 dark:bg-gray-800/50 border-indigo-500  -sm"
                    : "bg-white dark:bg-gray-800 border-slate-200 dark:border-gray-700 hover:border-slate-350"
                }`}
              >
                {/* Accordion Trigger header */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus:ring-0 cursor-pointer select-none"
                >
                  <div className="flex items-center space-x-3.5 pr-4">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 ${isOpen ? "text-indigo-600" : "text-slate-400"}`} />
                    <span className="font-bold text-sm sm:text-base text-slate-950 dark:text-white">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-lg border ${isOpen ? "bg-indigo-750 border-indigo-750 text-white" : "bg-slate-50 dark:bg-gray-700 border-slate-200 dark:border-gray-600 text-slate-600 dark:text-slate-300"} transition-all flex-shrink-0`}>
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 stroke-[3px]" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 stroke-[3px]" />
                    )}
                  </div>
                </button>

                {/* Accordion Content Body */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] border-t border-slate-100 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="p-5 sm:p-6 bg-white dark:bg-gray-800 shrink-0">
                    <p className="text-xs sm:text-sm text-slate-650 dark:text-slate-300 leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Small sticky box helper */}
        <div className="mt-12 p-5 bg-amber-50 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-800 rounded-md flex items-start space-x-3.5  -sm">
          <BadgeInfo className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h5 className="text-xs sm:text-sm font-bold text-amber-950 dark:text-amber-200">Punya pertanyaan kustom yang tidak ada di atas?</h5>
            <p className="text-[11px] sm:text-xs text-amber-800 dark:text-amber-300 leading-relaxed font-medium">
              Silakan langsung hubungi admin kami melalui chat WhatsApp. Tim marketing support SitusPro aktif melayani pertanyaan Anda secara mendalam dan ramah 24 jam sehari.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
