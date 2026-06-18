/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Star, Quote, ShieldAlert, CheckCircle } from "lucide-react";
import { TESTIMONIALS_LIST } from "../data";

export default function Testimonials() {
  return (
    <section id="testimoni-pelanggan" className="py-20 bg-slate-50/50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-700 bg-indigo-50 py-1 px-3 rounded-full">
            Testimoni & Pengalaman
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Apa Kata Mitra Bisnis Kami?
          </h2>
          <p className="text-base text-slate-600">
            Dengarkan tanggapan jujur dari para pemilik toko, UMKM, dan direksi perusahaan yang telah bermitra bersama tim SitusPro Studio.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_LIST.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm relative flex flex-col justify-between hover:shadow transition-all"
            >
              {/* Top Quote Icon */}
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-indigo-100/70 rotate-180" />
                </div>
                
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic">
                  “{t.content}”
                </p>
              </div>

              {/* Bottom Client Bio */}
              <div className="flex items-center space-x-4 pt-6 border-t border-slate-100 mt-6 md:mt-8">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-500 flex-shrink-0">
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
                    <CheckCircle className="w-3.5 h-3.5 text-blue-500 fill-blue-5" />
                  </div>
                  <p className="text-[11px] text-slate-500">
                    {t.role}, <span className="font-semibold text-indigo-700">{t.company}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Summary metric banner */}
        <div className="mt-14 bg-white border border-slate-200 p-6 rounded-3xl flex flex-col sm:flex-row justify-around items-center text-center gap-6 sm:gap-4 shadow-sm">
          <div>
            <p className="text-3xl font-black text-indigo-750 font-mono">99.2%</p>
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Tingkat Kepuasan Client</p>
          </div>
          <div className="h-px sm:h-12 w-12 sm:w-px bg-slate-150" />
          <div>
            <p className="text-3xl font-black text-indigo-750 font-mono">140+</p>
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Website Ter-launching</p>
          </div>
          <div className="h-px sm:h-12 w-12 sm:w-px bg-slate-150" />
          <div>
            <p className="text-3xl font-black text-indigo-750 font-mono">&lt; 14 Hari</p>
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Rata-rata Waktu Launching</p>
          </div>
        </div>

      </div>
    </section>
  );
}
