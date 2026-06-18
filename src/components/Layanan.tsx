/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Briefcase, Store, Target, ShoppingBag, Terminal, CheckCircle2, ArrowRight } from "lucide-react";
import { SERVICES_LIST } from "../data";

interface LayananProps {
  onNavigateToCalculator: () => void;
}

export default function Layanan({ onNavigateToCalculator }: LayananProps) {
  const [selectedService, setSelectedService] = useState<string>("company-profile");

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Briefcase":
        return <Briefcase className="w-6 h-6" />;
      case "Store":
        return <Store className="w-6 h-6" />;
      case "Target":
        return <Target className="w-6 h-6" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-6 h-6" />;
      case "Terminal":
        return <Terminal className="w-6 h-6" />;
      default:
        return <Briefcase className="w-6 h-6" />;
    }
  };

  const currentlySelected = SERVICES_LIST.find((s) => s.id === selectedService) || SERVICES_LIST[0];

  return (
    <section id="layanan-utama" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/40 py-1 px-3 rounded-md">
            Solusi Web Terbaik
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium text-slate-900 dark:text-white leading-tight">
            Layanan Pembuatan Website Kami
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed text-center">
            Kami menghadirkan berbagai jenis model website yang disesuaikan secara presisi dengan model bisnis Anda. Pilih model di bawah ini untuk melihat fitur utamanya.
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {SERVICES_LIST.map((service) => {
            const isActive = service.id === selectedService;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`p-4 rounded-md border text-center flex flex-col items-center justify-center space-y-3 transition-all cursor-pointer ${
                  isActive
                    ? "bg-indigo-400 border-indigo-500 text-white  -lg  -indigo-100"
                    : "bg-slate-50 dark:bg-gray-800 hover:bg-slate-100 dark:hover:bg-gray-700 border-slate-200 dark:border-gray-700 text-slate-700 dark:text-slate-300"
                }`}
              >
                <div className={`p-2.5 rounded-md ${isActive ? "bg-white/25 text-white" : "bg-white dark:bg-gray-700 text-indigo-700 dark:text-indigo-300  -sm border border-slate-150 dark:border-gray-600"}`}>
                  {getIcon(service.iconName)}
                </div>
                <span className="font-bold text-xs sm:text-sm tracking-tight leading-snug dark:text-slate-200">
                  {service.title.replace("Website ", "")}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Spec Showcase Frame */}
        <div className="mt-8 bg-slate-50/50 dark:bg-gray-900 rounded-md border border-slate-200 dark:border-gray-800 overflow-hidden  -sm grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Detailed features text */}
          <div className="p-8 sm:p-12 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2">
                <div className={`p-2 rounded-md text-xs font-bold ${currentlySelected.accent}`}>
                  Pilihan Produk
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium text-slate-950 dark:text-white">
                {currentlySelected.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {currentlySelected.description}
              </p>
            </div>

            {/* List of default specs included */}
            <div className="space-y-3 pt-6 border-t border-slate-200 dark:border-gray-700">
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                Fitur Standard yang Didapat:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentlySelected.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA action */}
            <div className="pt-8">
              <button
                onClick={onNavigateToCalculator}
                className="inline-flex items-center text-sm font-bold text-white bg-indigo-700 hover:bg-indigo-800 py-3.5 px-6 rounded-md  -lg  -indigo-150 transition-all"
              >
                Gunakan Kalkulator Custom
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>

          {/* Graphical/Creative Showcase */}
          <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 p-8 sm:p-12 relative flex flex-col justify-center text-white overflow-hidden min-h-[300px]">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-800/20 via-transparent to-transparent" />
            
            <div className="relative z-10 space-y-6 max-w-sm">
              <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-300 bg-white/10 py-1 px-2.5 rounded-md">
                SitusPro Engineering
              </span>
              <p className="text-xl sm:text-2xl font-bold leading-snug">
                "Kami merancang website profesional yang tidak hanya cantik secara visual, namun juga fokus mendatangkan peningkatan penjualan."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-md bg-slate-200 overflow-hidden border border-indigo-500">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" alt="Lead Designer" className="object-cover w-full h-full" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Yanti Rosyana</p>
                  <p className="text-[10px] text-indigo-300">Head of UX Architecture</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
