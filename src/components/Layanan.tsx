/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Briefcase, Storefront, Target, ShoppingBag, Terminal, CheckCircle, ArrowRight } from "@phosphor-icons/react";
import { SERVICES_LIST } from "../data";
import SectionHeader from "./ui/SectionHeader";

interface LayananProps {
  onNavigateToCalculator: () => void;
}

// ponytail: Redesigned service category showcase. Light-mode monochrome, uniform black details, no shadows, no glows.
export default function Layanan({ onNavigateToCalculator }: LayananProps) {
  const [selectedService, setSelectedService] = useState<string>("company-profile");

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Briefcase":
        return <Briefcase className="w-6 h-6" />;
      case "Store":
        return <Storefront className="w-6 h-6" />;
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
    <section id="layanan-utama" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Solusi Web Terbaik"
          title="Layanan Pembuatan Website Kami"
          description="Kami menghadirkan berbagai jenis model website yang disesuaikan secara presisi dengan model bisnis Anda. Pilih model di bawah ini untuk melihat fitur utamanya."
          className="mb-12"
        />

        {/* Tab Selection Row */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {SERVICES_LIST.map((service) => {
            const isActive = service.id === selectedService;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`p-4 rounded-md border text-center flex flex-col items-center justify-center space-y-3 transition-all active-press cursor-pointer ${
                  isActive
                    ? "bg-black border-black text-white"
                    : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700"
                }`}
              >
                <div className={`p-2.5 rounded-md ${isActive ? "bg-white/25 text-white" : "bg-white text-black border border-slate-200"}`}>
                  {getIcon(service.iconName)}
                </div>
                <span className="font-bold text-xs sm:text-sm tracking-tight leading-snug">
                  {service.title.replace("Website ", "")}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Spec Showcase Frame - No shadows */}
        <div className="mt-8 bg-slate-50/50 rounded-md border border-slate-200 overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Detailed features text */}
          <div className="p-8 sm:p-12 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2">
                <div className="p-2 rounded-md text-xs font-bold text-black bg-zinc-150 border border-zinc-200">
                  Pilihan Produk
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium text-slate-950">
                {currentlySelected.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {currentlySelected.description}
              </p>
            </div>

            {/* List of default specs included */}
            <div className="space-y-3 pt-6 border-t border-slate-200">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Fitur Standard yang Didapat:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentlySelected.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700 font-medium">
                    <CheckCircle className="w-4 h-4 text-black flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA action */}
            <div className="pt-8">
              <button
                onClick={onNavigateToCalculator}
                className="inline-flex items-center text-sm font-bold text-white bg-black hover:bg-zinc-900 py-3.5 px-6 rounded-md transition-all active-press cursor-pointer"
              >
                Gunakan Kalkulator Custom
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>

          {/* Graphical/Creative Showcase - No gradients or glows, minimal dark monochrome style */}
          <div className="bg-black p-8 sm:p-12 relative flex flex-col justify-center text-white overflow-hidden min-h-[300px]">
            <div className="relative z-10 space-y-6 max-w-sm">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-350 bg-white/10 py-1 px-2.5 rounded-md">
                SitusPro Engineering
              </span>
              <p className="text-xl sm:text-2xl font-bold leading-snug">
                "Kami merancang website profesional yang tidak hanya cantik secara visual, namun juga fokus mendatangkan peningkatan penjualan."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-md bg-slate-200 overflow-hidden border border-white">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" alt="Lead Designer" className="object-cover w-full h-full" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Yanti Rosyana</p>
                  <p className="text-[10px] text-zinc-400">Head of UX Architecture</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
