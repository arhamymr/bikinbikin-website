/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Star, Quotes, CheckCircle } from "@phosphor-icons/react";
import { TESTIMONIALS_LIST } from "../data";
import SectionHeader from "./ui/SectionHeader";
import Card from "./ui/Card";

// ponytail: Simplified testimonials section to light-mode monochrome only, removed all shadows and glows.
export default function Testimonials() {
  return (
    <section id="testimoni-pelanggan" className="py-20 bg-slate-50/50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Testimoni & Pengalaman"
          title="Apa Kata Mitra Bisnis Kami?"
          description="Dengarkan tanggapan jujur dari para pemilik toko, UMKM, dan direksi perusahaan yang telah bermitra bersama tim SitusPro Studio."
          className="mb-16"
        />

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_LIST.map((t) => (
            <Card
              key={t.id}
              className="p-8 relative flex flex-col justify-between"
              hover
            >
              {/* Top Quote Icon */}
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400" weight="fill" />
                    ))}
                  </div>
                  <Quotes className="w-8 h-8 text-zinc-200 rotate-180" />
                </div>
                
                <p className="text-slate-650 text-sm sm:text-base leading-relaxed italic">
                  “{t.content}”
                </p>
              </div>

              {/* Bottom Client Bio */}
              <div className="flex items-center space-x-4 pt-6 border-t border-slate-100 mt-6 md:mt-8">
                <div className="w-12 h-12 rounded-md overflow-hidden border-2 border-black flex-shrink-0">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="object-cover w-full h-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center space-x-1">
                    <p className="font-bold text-sm text-slate-950">{t.name}</p>
                    <CheckCircle className="w-3.5 h-3.5 text-black" weight="fill" />
                  </div>
                  <p className="text-[11px] text-slate-500">
                    {t.role}, <span className="font-bold text-black">{t.company}</span>
                  </p>
                </div>
              </div>

            </Card>
          ))}
        </div>

        {/* Summary metric banner - No shadows */}
        <div className="mt-14 bg-white border border-slate-200 p-6 rounded-md flex flex-col sm:flex-row justify-around items-center text-center gap-6 sm:gap-4">
          <div>
            <p className="text-3xl font-black text-black font-mono">99.2%</p>
            <p className="text-xs text-slate-550 font-semibold uppercase tracking-wider">Tingkat Kepuasan Client</p>
          </div>
          <div className="h-px sm:h-12 w-12 sm:w-px bg-slate-150" />
          <div>
            <p className="text-3xl font-black text-black font-mono">140+</p>
            <p className="text-xs text-slate-550 font-semibold uppercase tracking-wider">Website Ter-launching</p>
          </div>
          <div className="h-px sm:h-12 w-12 sm:w-px bg-slate-150" />
          <div>
            <p className="text-3xl font-black text-black font-mono">&lt; 14 Hari</p>
            <p className="text-xs text-slate-550 font-semibold uppercase tracking-wider">Rata-rata Waktu Launching</p>
          </div>
        </div>

      </div>
    </section>
  );
}
