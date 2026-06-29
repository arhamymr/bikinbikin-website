/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { List, X, Chat, PhoneCall } from "@phosphor-icons/react";

interface HeaderProps {
  onOpenConsultation: () => void;
  onNavigateToCalculator: () => void;
}

// ponytail: Simplified navigation header to light-mode only, black details, no shadows
export default function Header({ onOpenConsultation, onNavigateToCalculator }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // offset for sticky header
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
    <header
      id="main-nav-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-zinc-200 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div>
              <span className="font-semibold text-md tracking-tight text-slate-900 border-2 p-2 border-zinc-900">
                BikinBikin Web
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("mengapa-website")}
              className="text-sm font-medium text-slate-600 hover:text-black transition-colors active-press-sm cursor-pointer"
            >
              Urgensi
            </button>
            <button
              onClick={() => scrollToSection("layanan-utama")}
              className="text-sm font-medium text-slate-600 hover:text-black transition-colors active-press-sm cursor-pointer"
            >
              Layanan
            </button>
            <button
              onClick={() => scrollToSection("kalkulator-custom")}
              className="text-sm font-medium text-slate-600 hover:text-black transition-colors active-press-sm cursor-pointer"
            >
              Kalkulator Harga
            </button>
            <button
              onClick={() => scrollToSection("paket-website")}
              className="text-sm font-medium text-slate-600 hover:text-black transition-colors active-press-sm cursor-pointer"
            >
              Paket
            </button>
            <button
              onClick={() => scrollToSection("alur-kerja")}
              className="text-sm font-medium text-slate-600 hover:text-black transition-colors active-press-sm cursor-pointer"
            >
              Alur Kerja
            </button>
            <button
              onClick={() => scrollToSection("portofolio-kami")}
              className="text-sm font-medium text-slate-600 hover:text-black transition-colors active-press-sm cursor-pointer"
            >
              Portofolio
            </button>
            <button
              onClick={() => scrollToSection("faq-section")}
              className="text-sm font-medium text-slate-600 hover:text-black transition-colors active-press-sm cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-200 py-2 px-4 rounded-md hover:bg-slate-100 hover:text-black transition-colors active-press cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 mr-1.5 text-black" />
              Konsultasi Gratis
            </button>
            <button
              onClick={onNavigateToCalculator}
              className="inline-flex items-center text-sm font-semibold text-white bg-black py-2.5 px-5 rounded-md hover:bg-zinc-900 transition-all active-press cursor-pointer"
            >
              <Chat className="w-4 h-4 mr-1.5" />
              Lihat Desain & Paket
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              id="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-black hover:bg-slate-50 focus:outline-none active-press cursor-pointer"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <List className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div id="mobile-drawer" className="md:hidden bg-white border-b border-zinc-200 py-5 transition-all duration-300">
          <div className="px-4 space-y-4 flex flex-col">
            <button
              onClick={() => scrollToSection("mengapa-website")}
              className="text-left font-medium text-slate-700 hover:text-black py-2 border-b border-slate-50 text-sm cursor-pointer"
            >
              Urgensi Website
            </button>
            <button
              onClick={() => scrollToSection("layanan-utama")}
              className="text-left font-medium text-slate-700 hover:text-black py-2 border-b border-slate-50 text-sm cursor-pointer"
            >
              Layanan & Fitur
            </button>
            <button
              onClick={() => scrollToSection("kalkulator-custom")}
              className="text-left font-medium text-slate-700 hover:text-black py-2 border-b border-slate-50 text-sm cursor-pointer"
            >
              Kalkulator Harga & Desain Preview
            </button>
            <button
              onClick={() => scrollToSection("paket-website")}
              className="text-left font-medium text-slate-700 hover:text-black py-2 border-b border-slate-50 text-sm cursor-pointer"
            >
              Daftar Paket Harga
            </button>
            <button
              onClick={() => scrollToSection("alur-kerja")}
              className="text-left font-medium text-slate-700 hover:text-black py-2 border-b border-slate-50 text-sm cursor-pointer"
            >
              Alur Kerja Kami
            </button>
            <button
              onClick={() => scrollToSection("portofolio-kami")}
              className="text-left font-medium text-slate-700 hover:text-black py-2 border-b border-slate-50 text-sm cursor-pointer"
            >
              Portofolio Kami
            </button>
            <button
              onClick={() => scrollToSection("faq-section")}
              className="text-left font-medium text-slate-700 hover:text-black py-2 border-b border-slate-50 text-sm cursor-pointer"
            >
              F.A.Q
            </button>
            <div className="pt-2 space-y-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full inline-flex items-center justify-center text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-200 py-2.5 px-4 rounded-md hover:bg-slate-100 hover:text-black transition-colors cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 mr-1.5 text-black" />
                Konsultasi Gratis
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToSection("kalkulator-custom");
                }}
                className="w-full inline-flex items-center justify-center text-sm font-semibold text-white bg-black py-2.5 px-4 rounded-md hover:bg-zinc-900 transition-all cursor-pointer"
              >
                <Chat className="w-4 h-4 mr-1.5" />
                Desain & Estimasi Harga
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
