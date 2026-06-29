/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Info } from "@phosphor-icons/react";
import { FAQ_LIST } from "../data";
import SectionHeader from "./ui/SectionHeader";
import Accordion from "./ui/Accordion";

// ponytail: Redesigned FAQ section to light-mode monochrome, converting informational banners to clean greyscale.
export default function FAQ() {
  const [activeFAQ, setActiveFAQ] = useState<string | null>("faq1");

  const toggleFAQ = (id: string) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  return (
    <section id="faq-section" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Tanya Jawab Umum"
          title="Pertanyaan yang Sering Diajukan"
          description="Temukan jawaban langsung perihal proses kerja, administrasi kepemilikan domain, hosting, hingga tata cara pengajuan upgrade fitur tambahan."
          className="mb-16"
        />

        <Accordion items={FAQ_LIST} activeId={activeFAQ} onToggle={toggleFAQ} />

        {/* Small box helper - Clean monochrome greyscale box, no shadows */}
        <div className="mt-12 p-5 bg-zinc-50 border border-zinc-200 rounded-md flex items-start space-x-3.5">
          <Info className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h5 className="text-xs sm:text-sm font-bold text-black">Punya pertanyaan kustom yang tidak ada di atas?</h5>
            <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-medium">
              Silakan langsung hubungi admin kami melalui chat WhatsApp. Tim marketing support SitusPro aktif melayani pertanyaan Anda secara mendalam dan ramah 24 jam sehari.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
