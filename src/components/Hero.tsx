/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Smartphone, CheckCircle } from "lucide-react";

interface HeroProps {
  onOpenConsultation: () => void;
  onNavigateToCalculator: () => void;
}

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
    <section id="hero-section" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial from-indigo-50/50 dark:from-gray-900/50 via-white dark:via-gray-950 to-white dark:to-gray-950">
      {/* Absolute Decorative Circles */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/30 rounded-md mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-1/3 -right-64 w-96 h-96 bg-blue-100 dark:bg-blue-900/30 rounded-md mix-blend-multiply filter blur-3xl opacity-40 animate-blob" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-1.5 py-1 px-3 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-800 rounded-md text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-spin-slow" />
              <span>Solusi Bisnis Digital Premium</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-slate-900 dark:text-white leading-tight tracking-tight">
              Website <span className="text-indigo-700 relative inline-block">
                Profesional
                <span className="absolute left-0 bottom-1 w-full h-2 bg-indigo-200/50 -z-10 rounded" />
              </span> untuk Menumbuhkan Bisnis.
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Membantu UMKM, Perusahaan, & Personal membangun kredibilitas online dengan desain modern, cepat, aman, dan 100% responsif sesuai dengan standar global.
            </p>

            {/* Quick trust checkmarks */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-700 dark:text-slate-300 pt-1">
              <span className="flex items-center space-x-1 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-md  -sm border border-slate-200 dark:border-gray-700">
                <CheckCircle className="w-4 h-4 text-indigo-600" />
                <span>Desain Premium</span>
              </span>
              <span className="flex items-center space-x-1 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-md  -sm border border-slate-200 dark:border-gray-700">
                <Zap className="w-4 h-4 text-amber-500 fill-amber-100" />
                <span>Super Cepat & SEO</span>
              </span>
              <span className="flex items-center space-x-1 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-md  -sm border border-slate-200 dark:border-gray-700">
                <Smartphone className="w-4 h-4 text-blue-500" />
                <span>100% Mobile Friendly</span>
              </span>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOpenConsultation}
                id="hero-free-consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center text-base font-bold text-white bg-indigo-700 hover:bg-indigo-800 py-4 px-8 rounded-md  -lg  -indigo-200 hover: -indigo-300 transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Konsultasi Gratis
              </button>
              <button
                onClick={() => scrollToSection("paket-website")}
                id="hero-view-packages"
                className="w-full sm:w-auto inline-flex items-center justify-center text-base font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-700 py-4 px-8 rounded-md hover:border-slate-300 dark:hover:border-gray-600 transition-all duration-200"
              >
                Lihat Paket Website
                <ArrowRight className="w-4 h-4 ml-2 text-slate-400 stroke-[3px]" />
              </button>
            </div>


          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              {/* Background gradient   */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-700 to-indigo-400 rounded-md opacity-10 blur-xl" />

              {/* Glassmorphism Browser Window mockup */}
              <div className="relative border border-slate-200/80 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md  -2xl overflow-hidden">
                {/* Simulated Browser Bar */}
                <div className="bg-slate-50 dark:bg-gray-800 border-b border-slate-150 dark:border-gray-700 px-4 py-3 flex items-center justify-between">
                  {/* Window dots */}
                  <div className="flex space-x-1.5">
                    <span className="w-3 h-3 rounded-md bg-rose-450 block" />
                    <span className="w-3 h-3 rounded-md bg-amber-450 block" />
                    <span className="w-3 h-3 rounded-md bg-indigo-500 block" />
                  </div>
                  {/* Fake url bar */}
                  <div className="bg-slate-25/50 dark:bg-gray-700 border border-slate-200/75 dark:border-gray-600 rounded-lg text-[10px] text-slate-400 dark:text-slate-300 font-mono py-1 px-8 w-2/3 text-center truncate">
                    situspro.co.id/client-preview
                  </div>
                  <div className="w-6" /> {/* Placeholder spacing */}
                </div>

                {/* Live mockup graphic illustration */}
                <div className="p-5 space-y-4 bg-slate-25 dark:bg-gray-900">
                  <div className="flex items-center justify-between">
                    <div className="h-5 w-20 bg-slate-200 dark:bg-gray-700 rounded animate-pulse" />
                    <div className="flex space-x-2">
                      <div className="h-3 w-8 bg-slate-100 dark:bg-gray-700 rounded" />
                      <div className="h-3 w-8 bg-slate-100 dark:bg-gray-700 rounded" />
                      <div className="h-3 w-8 bg-slate-100 dark:bg-gray-700 rounded" />
                    </div>
                  </div>
                  
                  {/* Hero banner mock */}
                  <div className="h-32 bg-slate-100 dark:bg-gray-800 rounded-md flex flex-col justify-end p-4 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10" />
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" 
                      alt="Website Preview" 
                      className="absolute inset-0 object-cover w-full h-full group-hover:scale-105 transition-all duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="relative z-20 text-white space-y-1">
                      <div className="h-3.5 w-24 bg-white/40 backdrop-blur rounded" />
                      <div className="h-2 w-16 bg-white/20 backdrop-blur rounded" />
                    </div>
                  </div>

                  {/* 3 Grid features mock */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white dark:bg-gray-800 p-2.5 rounded-md border border-slate-200 dark:border-gray-700 text-center space-y-1 hover:border-indigo-100 transition-all">
                      <div className="flex justify-center">
                        <Zap className="w-5 h-5 text-amber-500 fill-amber-50" />
                      </div>
                      <p className="text-[10px] font-bold text-slate-800 dark:text-slate-200">Cepat</p>
                      <p className="text-[8px] text-slate-400 dark:text-slate-500">PageSpeed 99+</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-2.5 rounded-md border border-slate-200 dark:border-gray-700 text-center space-y-1 hover:border-indigo-100 transition-all">
                      <div className="flex justify-center">
                        <ShieldCheck className="w-5 h-5 text-indigo-700" />
                      </div>
                      <p className="text-[10px] font-bold text-slate-800 dark:text-slate-200">SEO Oke</p>
                      <p className="text-[8px] text-slate-400 dark:text-slate-500">Rapi di Google</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-2.5 rounded-md border border-slate-200 dark:border-gray-700 text-center space-y-1 hover:border-indigo-100 transition-all">
                      <div className="flex justify-center">
                        <Smartphone className="w-5 h-5 text-blue-500" />
                      </div>
                      <p className="text-[10px] font-bold text-slate-800 dark:text-slate-200">Mobile</p>
                      <p className="text-[8px] text-slate-400 dark:text-slate-500">Sempurna HP</p>
                    </div>
                  </div>

                  {/* Live WhatsApp floating widget mockup */}
                  <div className="bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-800 p-3 rounded-md flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-md bg-indigo-700 flex items-center justify-center text-white text-xs font-bold    -indigo-200">
                        WA
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-950 dark:text-slate-100">Integrasi WhatsApp</p>
                        <p className="text-[8px] text-indigo-700">Klik langsung chat admin</p>
                      </div>
                    </div>
                    <div className="h-5 w-14 bg-indigo-700 text-white text-[9px] font-bold flex items-center justify-center rounded-lg  -sm">
                      Aktif ✓
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Widget 1 */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-3.5 rounded-md   border border-slate-150 dark:border-gray-700 flex items-center space-x-3 max-w-[200px] animate-bounce-slow">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-md text-indigo-700 dark:text-indigo-300">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-slate-100">Garansi Support</p>
                  <p className="text-[9px] text-slate-500">Dukungan penuh pasca jadi</p>
                </div>
              </div>

              {/* Floating Widget 2 (Speed indicators) */}
              <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-3.5 rounded-md   border border-slate-155 dark:border-gray-700 flex items-center space-x-3 max-w-[150px]">
                <div className="p-2 bg-amber-50 dark:bg-amber-900/30 rounded-md text-amber-600">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-slate-100">Kecepatan</p>
                  <p className="text-[10px] font-semibold text-indigo-700 font-mono">Load &lt; 1s</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
