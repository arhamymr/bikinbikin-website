/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { CheckCircle, Clock, ChatCircle, ArrowRight } from "@phosphor-icons/react";
import { PACKAGES_LIST } from "../data";
import SectionHeader from "./ui/SectionHeader";
import Card from "./ui/Card";

interface PackagesProps {
  onOpenConsultation: () => void;
  onNavigateToCalculator: () => void;
}

export default function Packages({ onOpenConsultation, onNavigateToCalculator }: PackagesProps) {
  const formatPrice = (value: number) => {
    if (value === 0) return "Kustom / Nego";
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <section id="paket-website" className="py-20 bg-slate-50 border-t border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Daftar Paket Harga"
          title="Pilihan Paket Pembuatan Website"
          description="Sederhanakan peluncuran situs Anda dengan opsi paket standar kami, atau gunakan konfigurator kalkulator custom untuk menyusun estimasi fitur yang paling pas bagi bisnis Anda."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PACKAGES_LIST.map((pkg) => {
            const isCustom = pkg.id === "custom";
            return (
              <Card
                key={pkg.id}
                className={`p-8 relative flex flex-col justify-between overflow-hidden group border ${
                  pkg.isPopular 
                    ? "border-black bg-white ring-1 ring-black" 
                    : "border-slate-200 bg-white"
                }`}
                hover
              >
                {pkg.isPopular && (
                  <span className="absolute top-0 right-0 bg-black text-white text-[9px] uppercase tracking-widest font-black py-1.5 px-4 rounded-bl-md">
                    Terpopuler
                  </span>
                )}

                <div className="space-y-6">
                  {/* Header info */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-black transition-colors">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-slate-550 min-h-[40px] leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Pricing Info */}
                  <div className="py-3 border-t border-b border-slate-100 flex items-baseline gap-1 select-none">
                    <span className="text-3xl font-black text-slate-950 font-mono">
                      {formatPrice(pkg.price)}
                    </span>
                    {pkg.price > 0 && (
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                        / Sekali Bayar
                      </span>
                    )}
                  </div>

                  {/* Duration Delivery */}
                  <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-150 py-1.5 px-3 rounded-md w-fit">
                    <Clock className="w-4 h-4 text-black" />
                    <span>Waktu Pengerjaan: {pkg.duration}</span>
                  </div>

                  {/* Feature Lists */}
                  <div className="space-y-3.5 pt-2">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Rincian Fitur Utama:
                    </p>
                    <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-black flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Actions */}
                <div className="pt-8">
                  {isCustom ? (
                    <button
                      onClick={onOpenConsultation}
                      className="w-full inline-flex items-center justify-center text-xs font-bold text-white bg-black hover:bg-zinc-900 py-3.5 px-4 rounded-md active-press cursor-pointer"
                    >
                      <ChatCircle className="w-4.5 h-4.5 mr-1.5" />
                      Konsultasi Kustom via WA
                    </button>
                  ) : (
                    <button
                      onClick={onNavigateToCalculator}
                      className={`w-full inline-flex items-center justify-center text-xs font-bold py-3.5 px-4 rounded-md active-press cursor-pointer transition-all border ${
                        pkg.isPopular
                          ? "bg-black border-black text-white hover:bg-zinc-900"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-black"
                      }`}
                    >
                      <span>Gunakan Kalkulator Estimasi</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </button>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
