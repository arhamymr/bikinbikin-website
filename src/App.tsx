/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { X, ChatCircle, Phone, PaperPlaneRight } from "@phosphor-icons/react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import KenapaWebsite from "./components/KenapaWebsite";
import Layanan from "./components/Layanan";
import PricingCalculator from "./components/PricingCalculator";
import Packages from "./components/Packages";
import Workflow from "./components/Workflow";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

// ponytail: Simplified core App layout. Light-mode monochrome only, removed ThemeProvider wrapper and all shadows.
export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationForm, setConsultationForm] = useState({
    name: "",
    category: "UMKM / Toko Kelontong",
    budget: "Rp 1.500.000 - Rp 3.500.000",
    description: ""
  });

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setConsultationForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNavigateToCalculator = () => {
    const calculator = document.getElementById("kalkulator-custom");
    if (calculator) {
      calculator.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, category, budget, description } = consultationForm;

    const newline = "%0A";
    const message = `Halo%20SitusPro%20Studio!%20Saya%2520tertarik%2520dengan%2520layanan%2520Konsultasi%2520Gratis%2520pembuatan%2520website%2520dengan%2520detail%2520berikut:${newline}${newline}` +
      `*Nama%20Bisnis/Merek:*%2520${encodeURIComponent(name || "Bisnis Saya")}${newline}` +
      `*Kategori%20Bisnis:*%2520${encodeURIComponent(category)}${newline}` +
      `*Perkiraan%20Range%20Budget:*%2520${encodeURIComponent(budget)}${newline}` +
      `*Kebutuhan/Fitur%20Khusus:*%2520${encodeURIComponent(description || "Konsultasi umum mengenai layout dan alur produk")}${newline}${newline}` +
      `Mohon%20info%20jadwal%20dan%20tata%20cara%20proses%20pembuatannya.%20Terima%20kasih!`;

    window.open(`https://api.whatsapp.com/send?phone=628978902194&text=${message}`, "_blank", "noopener,noreferrer");
    setIsConsultationOpen(false);
  };

  return (
    <div id="website-agency-app" className="min-h-screen bg-white text-gray-800 antialiased selection:bg-black selection:text-white">
      {/* Premium Header navigation */}
      <Header 
        onOpenConsultation={handleOpenConsultation}
        onNavigateToCalculator={handleNavigateToCalculator}
      />

      {/* Main Container Layout Sections */}
      <main className="relative">
        
        {/* Hero Banner Showcase */}
        <Hero 
          onOpenConsultation={handleOpenConsultation}
          onNavigateToCalculator={handleNavigateToCalculator}
        />

        {/* Credibility and Urgency info grid */}
        <KenapaWebsite />

        {/* Main Service Presentation tabs */}
        <Layanan onNavigateToCalculator={handleNavigateToCalculator} />

        {/* Dynamic Custom Configurator Pricing System */}
        <PricingCalculator />

        {/* Pilihan Paket Pembuatan Website */}
        <Packages 
          onOpenConsultation={handleOpenConsultation}
          onNavigateToCalculator={handleNavigateToCalculator}
        />

        {/* Alur Kerja Pembuatan Website Kami */}
        <Workflow />

        {/* Complete Grid portfolio section */}
        <Portfolio />

        {/* Verified User Testimonials list */}
        <Testimonials />

        {/* Frequently Asked Questions accordions */}
        <FAQ />

        {/* Bottom CTA Banner */}
        {/* ponytail: Solid black minimal CTA layout with no background glows, gradients, or shadows */}
        <section id="bottom-cta-banner" className="py-20 bg-black font-sans text-white text-center relative overflow-hidden border-t border-zinc-800">
          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-350 bg-white/10 py-1.5 px-4 rounded-md">
              Mulai Langkah Anda
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">
              Siap Membuat Website Bisnis Anda Sekarang?
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Bangun kehadiran online yang profesional dan mudah dipercaya oleh ribuan calon pelanggan potensial Anda secara nasional. Konsultasikan kebutuhan Anda gratis tanpa dipungut biaya apapun!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <button
                onClick={handleOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center text-sm font-bold text-black bg-white hover:bg-zinc-200 py-3.5 px-8 rounded-md transition-all active-press cursor-pointer"
              >
                <Phone className="w-4 h-4 mr-1.5" />
                Hubungi Kami via WhatsApp
              </button>
              <button
                onClick={handleNavigateToCalculator}
                className="w-full sm:w-auto inline-flex items-center justify-center text-sm font-bold text-white border border-zinc-800 hover:border-white hover:bg-white/10 py-3.5 px-8 rounded-md transition-all active-press cursor-pointer"
              >
                Pakai Kalkulator Preview
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Comprehensive site footer containing company data and links */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* Consultation Slide-Over drawer Drawer/Modal overlay */}
      <div 
        id="consultation-modal-container" 
        className={`fixed inset-0 z-50 overflow-hidden transition-all duration-300 ${
          isConsultationOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`} 
        role="dialog" 
        aria-modal="true"
      >
        <div 
          className={`absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 ${
            isConsultationOpen ? "opacity-100" : "opacity-0"
          }`} 
          onClick={handleCloseConsultation} 
        />
        
        <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
          {/* ponytail: Removed box-shadows on modal container, using solid border layout */}
          <div 
            style={{ transitionTimingFunction: "var(--ease-drawer)" }}
            className={`w-screen max-w-md bg-white flex flex-col justify-between border-l border-slate-200 transition-transform duration-300 ${
              isConsultationOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            
            {/* Header section of consultation overlay */}
            <div className="p-6 border-b border-slate-150 flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 bg-zinc-100 rounded-md text-black">
                  <ChatCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-base">Konsultasi Desain Gratis</h4>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">SitusPro Studio</p>
                </div>
              </div>
              <button
                onClick={handleCloseConsultation}
                className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-50 focus:outline-none active-press cursor-pointer"
              >
                <X className="w-5 h-5" weight="bold" />
              </button>
            </div>

            {/* Form Content body of consultation overlay */}
            <form onSubmit={handleConsultationSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
              
              {/* Visual Intro box */}
              <div className="bg-zinc-50 border border-zinc-150 p-4 rounded-md space-y-1.5 select-none">
                <p className="text-xs font-bold text-black">Diskusikan Ide Hebat Anda Bersama Kami</p>
                <p className="text-[11px] text-zinc-650 leading-relaxed font-medium">
                  Sebutkan jenis bisnis Anda serta range budget perkiraan. Tim profesional kami akan membantu menyusun rincian struktur halaman sitemap secara kustom & optimal.
                </p>
              </div>

              {/* Input 1 name */}
              <div className="space-y-2">
                <label htmlFor="modal-name-input" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Nama Bisnis / Merek Anda
                </label>
                <input
                  id="modal-name-input"
                  type="text"
                  name="name"
                  value={consultationForm.name}
                  onChange={handleInputChange}
                  placeholder="Contoh: Kopi Seduh Senja"
                  required
                  className="w-full border border-slate-200 rounded-md py-2.5 px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-medium"
                />
              </div>

              {/* Input 2 category */}
              <div className="space-y-2">
                <label htmlFor="modal-category-select" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Kategori Bisnis / Profil Jasa
                </label>
                <select
                  id="modal-category-select"
                  name="category"
                  value={consultationForm.category}
                  onChange={handleInputChange}
                  className="w-full border border-slate-200 rounded-md py-2.5 px-4 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-medium bg-white"
                >
                  <option value="UMKM / Toko Kelontong">UMKM / Toko Kelontong</option>
                  <option value="Restoran / Cafe">Restoran / Cafe / FnB</option>
                  <option value="Company Profile Corporate">Company Profile / Korporasi</option>
                  <option value="Landing Page Promosi">Landing Page Produk / Event</option>
                  <option value="Toko Online E-Commerce">Toko Online E-Commerce</option>
                  <option value="Jasa Profesional (Klinik/Sekolah)">Jasa Profesional (Klinik/Sekolah/Instansi)</option>
                  <option value="Aplikasi Custom / Sistem Portal">Aplikasi Custom / Sistem Portal</option>
                </select>
              </div>

              {/* Input 3 Budget range slider / select */}
              <div className="space-y-2">
                <label htmlFor="modal-budget-select" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Perkiraan Range Budget Pembuatan
                </label>
                <select
                  id="modal-budget-select"
                  name="budget"
                  value={consultationForm.budget}
                  onChange={handleInputChange}
                  className="w-full border border-slate-200 rounded-md py-2.5 px-4 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-medium bg-white"
                >
                  <option value="Di bawah Rp 1.500.000">Di bawah Rp 1.500.000 (Sederhana)</option>
                  <option value="Rp 1.500.000 - Rp 3.500.000">Rp 1.500.000 - Rp 3.500.000 (Starter/Business)</option>
                  <option value="Rp 3.500.000 - Rp 7.500.000">Rp 3.500.000 - Rp 7.500.000 (Toko Online/Detail)</option>
                  <option value="Di atas Rp 7.500.000">Di atas Rp 7.500.000 (Sistem Custom)</option>
                </select>
              </div>

              {/* Input 4 Description target */}
              <div className="space-y-2">
                <label htmlFor="modal-desc-textarea" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Keinginan Spesial / Deskripsi Tambahan
                </label>
                <textarea
                  id="modal-desc-textarea"
                  name="description"
                  rows={4}
                  value={consultationForm.description}
                  onChange={handleInputChange}
                  placeholder="Contoh: Ingin ada peta interaktif rute klinik kami, tombol link admin, plus slide foto menu makanan..."
                  className="w-full border border-slate-200 rounded-md py-2.5 px-4 text-sm text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-medium resize-none"
                />
              </div>

              {/* Action button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center text-sm font-bold text-white bg-black hover:bg-zinc-900 py-3.5 px-4 rounded-md active-press cursor-pointer"
                >
                  <PaperPlaneRight className="w-4 h-4 mr-1.5" />
                  Kirim Form via WhatsApp
                </button>
              </div>

            </form>

            {/* Bottom footer note of consultation overlay */}
            <div className="p-6 bg-slate-50 border-t border-slate-150 text-center select-none">
              <p className="text-[11px] text-slate-500">
                Data Anda tersimpan aman. Dengan mengirimkan form ini, Anda akan diarahkan langsung menuju layanan CS Whatsapp kami secara instan & responsif.
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
