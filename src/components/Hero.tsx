/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowRight, Sparkle, ShieldCheck, Lightning, DeviceMobile, CheckCircle } from "@phosphor-icons/react";

interface HeroProps {
  onOpenConsultation: () => void;
  onNavigateToCalculator: () => void;
}

// ponytail: Simplified Hero section to light-mode monochrome only, removed background gradient blobs, glows, animations, and all shadows.
export default function Hero({ onOpenConsultation, onNavigateToCalculator }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero-section" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-1.5 py-1 px-3 bg-zinc-100 border border-zinc-200 rounded-md text-zinc-800 text-xs font-semibold uppercase tracking-wider">
              <Sparkle className="w-3.5 h-3.5 text-zinc-900" />
              <span>Solusi Bisnis Digital Premium</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-slate-900 leading-tight tracking-tight">
              Website <span className="text-black relative inline-block font-bold">
                Profesional
                <span className="absolute left-0 bottom-1 w-full h-1 bg-black rounded" />
              </span> untuk Menumbuhkan Bisnis.
            </h1>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Membantu UMKM, Perusahaan, & Personal membangun kredibilitas online dengan desain modern, cepat, aman, dan 100% responsif sesuai dengan standar global.
            </p>

            {/* Quick trust checkmarks - No shadows */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-700 pt-1">
              <span className="flex items-center space-x-1 bg-zinc-50 px-3 py-1.5 rounded-md border border-zinc-200">
                <CheckCircle className="w-4 h-4 text-black" />
                <span>Desain Premium</span>
              </span>
              <span className="flex items-center space-x-1 bg-zinc-50 px-3 py-1.5 rounded-md border border-zinc-200">
                <Lightning weight="fill" className="w-4 h-4 text-black" />
                <span>Super Cepat & SEO</span>
              </span>
              <span className="flex items-center space-x-1 bg-zinc-50 px-3 py-1.5 rounded-md border border-zinc-200">
                <DeviceMobile className="w-4 h-4 text-black" />
                <span>100% Mobile Friendly</span>
              </span>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOpenConsultation}
                id="hero-free-consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center text-base font-bold text-white bg-black hover:bg-zinc-900 py-4 px-8 rounded-md transition-all duration-200 active-press cursor-pointer"
              >
                Konsultasi Gratis
              </button>
              <button
                onClick={() => scrollToSection("paket-website")}
                id="hero-view-packages"
                className="w-full sm:w-auto inline-flex items-center justify-center text-base font-bold text-slate-700 bg-white border border-zinc-200 hover:bg-slate-50 py-4 px-8 rounded-md transition-all duration-200 active-press cursor-pointer"
              >
                Lihat Paket Website
                <ArrowRight className="w-4 h-4 ml-2 text-slate-400" weight="bold" />
              </button>
            </div>

          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              
              {/* Glassmorphism Browser Window mockup - No shadows */}
              <div className="relative border border-zinc-300 bg-white rounded-md overflow-hidden">
                {/* Simulated Browser Bar */}
                <div className="bg-zinc-55 border-b border-zinc-200 px-4 py-3 flex items-center justify-between">
                  {/* Window dots */}
                  <div className="flex space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-md bg-zinc-300 block" />
                    <span className="w-2.5 h-2.5 rounded-md bg-zinc-300 block" />
                    <span className="w-2.5 h-2.5 rounded-md bg-zinc-300 block" />
                  </div>
                  {/* Fake url bar */}
                  <div className="bg-zinc-100 border border-zinc-200 rounded-md text-[10px] text-zinc-500 font-mono py-1 px-8 w-2/3 text-center truncate">
                    situspro.co.id/client-preview
                  </div>
                  <div className="w-6" /> {/* Placeholder spacing */}
                </div>

                {/* Live mockup graphic illustration */}
                <div className="p-5 space-y-4 bg-white">
                  <div className="flex items-center justify-between">
                    <div className="h-5 w-20 bg-zinc-200 rounded" />
                    <div className="flex space-x-2">
                      <div className="h-3 w-8 bg-zinc-100 rounded" />
                      <div className="h-3 w-8 bg-zinc-100 rounded" />
                      <div className="h-3 w-8 bg-zinc-100 rounded" />
                    </div>
                  </div>
                  
                  {/* Hero banner mock */}
                  <div className="h-32 bg-zinc-100 rounded-md flex flex-col justify-end p-4 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" 
                      alt="Website Preview" 
                      className="absolute inset-0 object-cover w-full h-full"
                      referrerPolicy="no-referrer"
                    />
                    <div className="relative z-20 text-white space-y-1">
                      <div className="h-3.5 w-24 bg-white/40 backdrop-blur rounded" />
                      <div className="h-2 w-16 bg-white/20 backdrop-blur rounded" />
                    </div>
                  </div>

                  {/* 3 Grid features mock */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white p-2.5 rounded-md border border-zinc-200 text-center space-y-1 hover:border-zinc-400 transition-all active-press-sm cursor-pointer">
                      <div className="flex justify-center">
                        <Lightning weight="fill" className="w-5 h-5 text-zinc-900" />
                      </div>
                      <p className="text-[10px] font-bold text-slate-800">Cepat</p>
                      <p className="text-[8px] text-slate-400">PageSpeed 99+</p>
                    </div>
                    <div className="bg-white p-2.5 rounded-md border border-zinc-200 text-center space-y-1 hover:border-zinc-400 transition-all active-press-sm cursor-pointer">
                      <div className="flex justify-center">
                        <ShieldCheck className="w-5 h-5 text-zinc-900" />
                      </div>
                      <p className="text-[10px] font-bold text-slate-800">SEO Oke</p>
                      <p className="text-[8px] text-slate-400">Rapi di Google</p>
                    </div>
                    <div className="bg-white p-2.5 rounded-md border border-zinc-200 text-center space-y-1 hover:border-zinc-400 transition-all active-press-sm cursor-pointer">
                      <div className="flex justify-center">
                        <DeviceMobile className="w-5 h-5 text-zinc-900" />
                      </div>
                      <p className="text-[10px] font-bold text-slate-800">Mobile</p>
                      <p className="text-[8px] text-slate-400">Sempurna HP</p>
                    </div>
                  </div>

                  {/* Live WhatsApp floating widget mockup */}
                  <div className="bg-zinc-50 border border-zinc-200 p-3 rounded-md flex items-center justify-between hover:border-zinc-405 transition-all active-press-lg cursor-pointer">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-md bg-black flex items-center justify-center text-white text-xs font-bold">
                        WA
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-950">Integrasi WhatsApp</p>
                        <p className="text-[8px] text-zinc-650">Klik langsung chat admin</p>
                      </div>
                    </div>
                    <div className="h-5 w-14 bg-black text-white text-[9px] font-bold flex items-center justify-center rounded-lg">
                      Aktif ✓
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Widget 1 - No shadows */}
              <div className="absolute -bottom-6 -left-6 bg-white p-3.5 rounded-md border border-zinc-200 flex items-center space-x-3 max-w-[200px] hover:border-zinc-400 transition-all active-press-lg cursor-pointer">
                <div className="p-2 bg-zinc-150 rounded-md text-black">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Garansi Support</p>
                  <p className="text-[9px] text-slate-500">Dukungan penuh pasca jadi</p>
                </div>
              </div>

              {/* Floating Widget 2 (Speed indicators) - No shadows */}
              <div className="absolute -top-6 -right-6 bg-white p-3.5 rounded-md border border-zinc-200 flex items-center space-x-3 max-w-[150px] hover:border-zinc-400 transition-all active-press-lg cursor-pointer">
                <div className="p-2 bg-zinc-150 rounded-md text-black">
                  <Lightning className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Kecepatan</p>
                  <p className="text-[10px] font-semibold text-black font-mono">Load &lt; 1s</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
