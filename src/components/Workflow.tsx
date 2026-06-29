/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ChatCircle, Palette, Code, CheckSquare, Rocket } from "@phosphor-icons/react";
import SectionHeader from "./ui/SectionHeader";
import Card from "./ui/Card";

export default function Workflow() {
  const steps = [
    {
      step: "01",
      icon: <ChatCircle className="w-6 h-6 text-black" />,
      title: "Konsultasi & Rencana",
      desc: "Kami menganalisis jenis bisnis, kompetitor, target audiens, dan merancang rancangan sitemap serta modul fitur terbaik yang Anda butuhkan."
    },
    {
      step: "02",
      icon: <Palette className="w-6 h-6 text-black" />,
      title: "Desain Layout Visual",
      desc: "Tim desainer kami membuat preview visual rancangan antarmuka yang modern, eksklusif, dan sesuai dengan estetika identitas brand Anda."
    },
    {
      step: "03",
      icon: <Code className="w-6 h-6 text-black" />,
      title: "Koding & Integrasi",
      desc: "Kami memprogram visual desain terpilih menjadi baris kode yang bersih (clean code), super ringan, cepat dimuat, dan aman dari kerentanan."
    },
    {
      step: "04",
      icon: <CheckSquare className="w-6 h-6 text-black" />,
      title: "Uji Performa & SEO",
      desc: "Menjalankan serangkaian uji coba di perangkat mobile, kompresi gambar otomatis, pengujian loading kilat, dan setup struktur SEO dasar."
    },
    {
      step: "05",
      icon: <Rocket className="w-6 h-6 text-black" />,
      title: "Serah Terima & Panduan",
      desc: "Website resmi diluncurkan secara publik. Kami menyerahkan akses domain & hosting penuh beserta video manual pengelolaan mandiri."
    }
  ];

  return (
    <section id="alur-kerja" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Proses Kolaborasi"
          title="Alur Kerja Pembuatan Website Kami"
          description="Kami membagi proses pembuatan ke dalam 5 tahapan transparan agar Anda mengetahui perkembangan proyek secara terstruktur dari awal hingga selesai."
          className="mb-16"
        />

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch">
          {steps.map((item, idx) => (
            <Card
              key={idx}
              className="p-6 relative flex flex-col justify-between overflow-hidden border border-slate-200 bg-white"
              hover
            >
              {/* Step indicator absolute background */}
              <span className="absolute top-2 right-4 text-4xl font-black text-slate-100 font-mono tracking-tight select-none">
                {item.step}
              </span>

              <div className="space-y-4 relative z-10">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-md w-fit">
                  {item.icon}
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-bold text-base text-slate-900 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3.5 transform -translate-y-1/2 z-20 text-slate-350">
                  <span className="text-lg font-bold select-none">&rarr;</span>
                </div>
              )}
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
