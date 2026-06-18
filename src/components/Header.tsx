/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Globe, Menu, X, MessageSquare, PhoneCall } from "lucide-react";

interface HeaderProps {
  onOpenConsultation: () => void;
  onNavigateToCalculator: () => void;
}

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
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
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
            <div className="p-2.5 bg-indigo-700 rounded-xl text-white shadow-md shadow-indigo-200 transition-all group-hover:scale-105 duration-200">
              <Globe className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900">
                Situs<span className="text-indigo-700">Pro</span>
              </span>
              <span className="block text-[10px] font-medium tracking-widest uppercase text-slate-400">
                Studio Web
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("mengapa-website")}
              className="text-sm font-medium text-slate-600 hover:text-indigo-700 transition-colors"
            >
              Urgensi
            </button>
            <button
              onClick={() => scrollToSection("layanan-utama")}
              className="text-sm font-medium text-slate-600 hover:text-indigo-700 transition-colors"
            >
              Layanan
            </button>
            <button
              onClick={() => scrollToSection("kalkulator-custom")}
              className="text-sm font-medium text-slate-600 hover:text-indigo-700 transition-colors"
            >
              Kalkulator Harga
            </button>
            <button
              onClick={() => scrollToSection("paket-website")}
              className="text-sm font-medium text-slate-600 hover:text-indigo-700 transition-colors"
            >
              Paket
            </button>
            <button
              onClick={() => scrollToSection("alur-kerja")}
              className="text-sm font-medium text-slate-600 hover:text-indigo-700 transition-colors"
            >
              Alur Kerja
            </button>
            <button
              onClick={() => scrollToSection("portofolio-kami")}
              className="text-sm font-medium text-slate-600 hover:text-indigo-700 transition-colors"
            >
              Portofolio
            </button>
            <button
              onClick={() => scrollToSection("faq-section")}
              className="text-sm font-medium text-slate-600 hover:text-indigo-700 transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-200 py-2 px-4 rounded-xl hover:bg-slate-100 transition-colors"
            >
              <PhoneCall className="w-4 h-4 mr-1.5 text-indigo-700" />
              Konsultasi Gratis
            </button>
            <button
              onClick={onNavigateToCalculator}
              className="inline-flex items-center text-sm font-semibold text-white bg-indigo-700 py-2.5 px-5 rounded-full hover:bg-indigo-800 transition-all shadow-lg shadow-indigo-100 hover:shadow-indigo-200"
            >
              <MessageSquare className="w-4 h-4 mr-1.5" />
              Lihat Desain & Paket
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-indigo-700 hover:bg-slate-50 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div id="mobile-drawer" className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-100 py-5 transition-all duration-300">
          <div className="px-4 space-y-4 flex flex-col">
            <button
              onClick={() => scrollToSection("mengapa-website")}
              className="text-left font-medium text-slate-700 hover:text-indigo-700 py-2 border-b border-slate-50"
            >
              Urgensi Website
            </button>
            <button
              onClick={() => scrollToSection("layanan-utama")}
              className="text-left font-medium text-slate-700 hover:text-indigo-700 py-2 border-b border-slate-50"
            >
              Layanan & Fitur
            </button>
            <button
              onClick={() => scrollToSection("kalkulator-custom")}
              className="text-left font-medium text-slate-700 hover:text-indigo-700 py-2 border-b border-slate-50"
            >
              Kalkulator Harga & Desain Preview
            </button>
            <button
              onClick={() => scrollToSection("paket-website")}
              className="text-left font-medium text-slate-700 hover:text-indigo-700 py-2 border-b border-slate-50"
            >
              Daftar Paket Harga
            </button>
            <button
              onClick={() => scrollToSection("alur-kerja")}
              className="text-left font-medium text-slate-700 hover:text-indigo-700 py-2 border-b border-slate-50"
            >
              Alur Kerja Kami
            </button>
            <button
              onClick={() => scrollToSection("portofolio-kami")}
              className="text-left font-medium text-slate-700 hover:text-indigo-700 py-2 border-b border-slate-50"
            >
              Portofolio Kami
            </button>
            <button
              onClick={() => scrollToSection("faq-section")}
              className="text-left font-medium text-slate-700 hover:text-indigo-700 py-2 border-b border-slate-50"
            >
              F.A.Q
            </button>
            <div className="pt-2 space-y-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full inline-flex items-center justify-center text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-200 py-2.5 px-4 rounded-xl hover:bg-slate-100 transition-colors"
              >
                <PhoneCall className="w-4 h-4 mr-1.5 text-indigo-700" />
                Konsultasi Gratis
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToSection("kalkulator-custom");
                }}
                className="w-full inline-flex items-center justify-center text-sm font-semibold text-white bg-indigo-700 py-2.5 px-4 rounded-full hover:bg-indigo-800 transition-all shadow-md shadow-indigo-100"
              >
                <MessageSquare className="w-4 h-4 mr-1.5" />
                Desain & Estimasi Harga
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
