/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Globe, Menu, X, MessageSquare, PhoneCall, Sun, Moon } from "lucide-react";
import { useTheme } from "../ThemeContext";

interface HeaderProps {
  onOpenConsultation: () => void;
  onNavigateToCalculator: () => void;
}

export default function Header({ onOpenConsultation, onNavigateToCalculator }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md  -sm border-b border-gray-100 dark:border-gray-800 py-3"
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
              <span className="font-semibold text-md tracking-tight text-slate-900 dark:text-white border p-2 border-2 dark:border-gray-600">
                BikinBikin Web
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("mengapa-website")}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-700 dark:hover:text-indigo-400 transition-colors"
            >
              Urgensi
            </button>
            <button
              onClick={() => scrollToSection("layanan-utama")}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-700 dark:hover:text-indigo-400 transition-colors"
            >
              Layanan
            </button>
            <button
              onClick={() => scrollToSection("kalkulator-custom")}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-700 dark:hover:text-indigo-400 transition-colors"
            >
              Kalkulator Harga
            </button>
            <button
              onClick={() => scrollToSection("paket-website")}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-700 dark:hover:text-indigo-400 transition-colors"
            >
              Paket
            </button>
            <button
              onClick={() => scrollToSection("alur-kerja")}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-700 dark:hover:text-indigo-400 transition-colors"
            >
              Alur Kerja
            </button>
            <button
              onClick={() => scrollToSection("portofolio-kami")}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-700 dark:hover:text-indigo-400 transition-colors"
            >
              Portofolio
            </button>
            <button
              onClick={() => scrollToSection("faq-section")}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-700 dark:hover:text-indigo-400 transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 hover:bg-slate-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 py-2 px-4 rounded-md hover:bg-slate-100 dark:hover:bg-gray-700 transition-colors"
            >
              <PhoneCall className="w-4 h-4 mr-1.5 text-indigo-700" />
              Konsultasi Gratis
            </button>
            <button
              onClick={onNavigateToCalculator}
              className="inline-flex items-center text-sm font-semibold text-white bg-indigo-700 py-2.5 px-5 rounded-md hover:bg-indigo-800 transition-all  -lg  -indigo-100 hover: -indigo-200"
            >
              <MessageSquare className="w-4 h-4 mr-1.5" />
              Lihat Desain & Paket
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:text-indigo-700 hover:bg-slate-50 dark:hover:bg-gray-800 focus:outline-none"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              id="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-indigo-700 hover:bg-slate-50 dark:hover:bg-gray-800 focus:outline-none"
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
        <div id="mobile-drawer" className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 py-5 transition-all duration-300">
          <div className="px-4 space-y-4 flex flex-col">
            <button
              onClick={() => scrollToSection("mengapa-website")}
              className="text-left font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-700 dark:hover:text-indigo-400 py-2 border-b border-slate-50 dark:border-gray-800"
            >
              Urgensi Website
            </button>
            <button
              onClick={() => scrollToSection("layanan-utama")}
              className="text-left font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-700 dark:hover:text-indigo-400 py-2 border-b border-slate-50 dark:border-gray-800"
            >
              Layanan & Fitur
            </button>
            <button
              onClick={() => scrollToSection("kalkulator-custom")}
              className="text-left font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-700 dark:hover:text-indigo-400 py-2 border-b border-slate-50 dark:border-gray-800"
            >
              Kalkulator Harga & Desain Preview
            </button>
            <button
              onClick={() => scrollToSection("paket-website")}
              className="text-left font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-700 dark:hover:text-indigo-400 py-2 border-b border-slate-50 dark:border-gray-800"
            >
              Daftar Paket Harga
            </button>
            <button
              onClick={() => scrollToSection("alur-kerja")}
              className="text-left font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-700 dark:hover:text-indigo-400 py-2 border-b border-slate-50 dark:border-gray-800"
            >
              Alur Kerja Kami
            </button>
            <button
              onClick={() => scrollToSection("portofolio-kami")}
              className="text-left font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-700 dark:hover:text-indigo-400 py-2 border-b border-slate-50 dark:border-gray-800"
            >
              Portofolio Kami
            </button>
            <button
              onClick={() => scrollToSection("faq-section")}
              className="text-left font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-700 dark:hover:text-indigo-400 py-2 border-b border-slate-50 dark:border-gray-800"
            >
              F.A.Q
            </button>
            <div className="pt-2 space-y-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full inline-flex items-center justify-center text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 py-2.5 px-4 rounded-md hover:bg-slate-100 dark:hover:bg-gray-700 transition-colors"
              >
                <PhoneCall className="w-4 h-4 mr-1.5 text-indigo-700" />
                Konsultasi Gratis
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToSection("kalkulator-custom");
                }}
                className="w-full inline-flex items-center justify-center text-sm font-semibold text-white bg-indigo-700 py-2.5 px-4 rounded-md hover:bg-indigo-800 transition-all    -indigo-100"
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
