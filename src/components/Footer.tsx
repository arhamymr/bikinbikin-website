/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Globe, MapPin, Phone, InstagramLogo, FacebookLogo, LinkedinLogo, ArrowUp } from "@phosphor-icons/react";

interface FooterProps {
  onOpenConsultation: () => void;
}

// ponytail: Simplified footer to dark monochrome style. Removed all indigo accents and glows.
export default function Footer({ onOpenConsultation }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400 pt-16 pb-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer grids */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-zinc-900 pb-12 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-zinc-800 rounded-md text-white border border-zinc-700">
                <Globe className="w-5 h-5" />
              </div>
              <span className="font-semibold text-xl tracking-tight text-white">
                SitusPro
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              Kami berkomitmen menghadirkan solusi teknologi website modern kelas dunia untuk mendongkrak omzet pelaku UMKM dan mengokohkan prestise instansi bisnis Anda di Indonesia.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-md bg-zinc-900 border border-zinc-800 text-gray-400 hover:text-white hover:border-zinc-750 transition-colors" aria-label="Instagram">
                <InstagramLogo className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-md bg-zinc-900 border border-zinc-800 text-gray-400 hover:text-white hover:border-zinc-750 transition-colors" aria-label="Facebook">
                <FacebookLogo className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-md bg-zinc-900 border border-zinc-800 text-gray-400 hover:text-white hover:border-zinc-750 transition-colors" aria-label="LinkedIn">
                <LinkedinLogo className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Quick Col */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs uppercase font-bold tracking-widest text-white">Model Website</h5>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li>
                <button 
                  onClick={() => {
                    const el = document.getElementById("layanan-utama");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Website Company Profile
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const el = document.getElementById("layanan-utama");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Website Katalog UMKM
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const el = document.getElementById("layanan-utama");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Landing Page Fokus Konversi
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const el = document.getElementById("layanan-utama");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Toko Online Checkout WA
                </button>
              </li>
            </ul>
          </div>

          {/* Contacts Col */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="text-xs uppercase font-bold tracking-widest text-white">Kontak Resmi</h5>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li className="flex items-start space-x-3 text-gray-400 hover:text-white transition-colors">
                <MapPin className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <span>Sulawesi Barat, Polewali Mandar</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-white flex-shrink-0" />
                <a href="tel:+628978902194" className="hover:text-white">+62 897-8902-194</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower footer copyright line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-xs text-gray-500 font-mono">
            © {currentYear} SitusPro Studio. All rights reserved.
          </p>
          
          <button
            onClick={handleScrollToTop}
            className="p-3 bg-zinc-900 border border-zinc-800 text-gray-400 hover:text-white rounded-md hover:bg-zinc-800 transition-colors cursor-pointer flex items-center space-x-1"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest pl-1">Ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5 text-white" weight="bold" />
          </button>
        </div>

      </div>
    </footer>
  );
}
