/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { 
  MessageCircle, 
  MapPin, 
  Mail, 
  Grid, 
  ShoppingCart, 
  TrendingUp, 
  Zap, 
  Calendar, 
  Sliders, 
  Globe, 
  Plus, 
  Minus, 
  Check, 
  Laptop, 
  ExternalLink,
  ChevronRight,
  Info
} from "lucide-react";
import { FEATURES_LIST, SERVICES_LIST } from "../data";
import { Feature } from "../types";

export default function PricingCalculator() {
  const [businessName, setBusinessName] = useState("Kopi Seduh Senja");
  const [category, setCategory] = useState("umkm");
  const [themeColor, setThemeColor] = useState("indigo");
  const [pageCount, setPageCount] = useState(3);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "whatsapp",
    "maps",
    "catalog"
  ]);

  // Handle color classes map for the live design previewer
  const colorMap: Record<string, { primary: string; bg: string; text: string; accent: string; border: string }> = {
    emerald: {
      primary: "bg-emerald-600",
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      accent: "text-emerald-950",
      border: "border-emerald-100"
    },
    blue: {
      primary: "bg-blue-600",
      bg: "bg-blue-50",
      text: "text-blue-700",
      accent: "text-blue-950",
      border: "border-blue-105"
    },
    crimson: {
      primary: "bg-rose-600",
      bg: "bg-rose-50",
      text: "text-rose-700",
      accent: "text-rose-955",
      border: "border-rose-100"
    },
    amber: {
      primary: "bg-amber-500",
      bg: "bg-amber-50",
      text: "text-amber-800",
      accent: "text-amber-950",
      border: "border-amber-100"
    },
    indigo: {
      primary: "bg-indigo-700",
      bg: "bg-indigo-50",
      text: "text-indigo-800",
      accent: "text-indigo-950",
      border: "border-indigo-150"
    }
  };

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case "MessageCircle":
        return <MessageCircle className="w-5 h-5" />;
      case "MapPin":
        return <MapPin className="w-5 h-5" />;
      case "Mail":
        return <Mail className="w-5 h-5" />;
      case "Grid":
        return <Grid className="w-5 h-5" />;
      case "ShoppingCart":
        return <ShoppingCart className="w-5 h-5" />;
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5" />;
      case "Zap":
        return <Zap className="w-5 h-5" />;
      case "Calendar":
        return <Calendar className="w-5 h-5" />;
      case "Sliders":
        return <Sliders className="w-5 h-5" />;
      case "Globe":
        return <Globe className="w-5 h-5" />;
      default:
        return <Plus className="w-5 h-5" />;
    }
  };

  // Pricing Logic
  const priceCalculation = useMemo(() => {
    let basePrice = 1200000; // custom base price
    let categoryName = "Website UMKM";

    if (category === "company-profile") {
      basePrice = 1800005;
      categoryName = "Website Company Profile";
    } else if (category === "landing-page") {
      basePrice = 1000000;
      categoryName = "Website Landing Page";
    } else if (category === "toko-online") {
      basePrice = 2200000;
      categoryName = "Website Toko Online";
    } else if (category === "custom") {
      basePrice = 3000000;
      categoryName = "Website Custom System";
    }

    // Additional page cost (Rp 150.000 per additional page over 1 page)
    const extraPages = Math.max(0, pageCount - 1);
    const pagesCost = extraPages * 150000;

    // Features cost
    const featuresCost = selectedFeatures.reduce((total, fId) => {
      const feat = FEATURES_LIST.find((item) => item.id === fId);
      return total + (feat ? feat.price : 0);
    }, 0);

    const subtotal = basePrice + pagesCost + featuresCost;
    return {
      subtotal,
      basePrice,
      pagesCost,
      featuresCost,
      categoryName
    };
  }, [category, pageCount, selectedFeatures]);

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }).format(value);
  };

  // Build WhatsApp pre-filled connection link
  const sendToWhatsApp = () => {
    const space = "%20";
    const newline = "%0A";
    
    const activeFeatsString = selectedFeatures
      .map((fId) => {
        const f = FEATURES_LIST.find((curr) => curr.id === fId);
        return f ? `-%2520${f.name}` : "";
      })
      .filter(Boolean)
      .join(newline);

    const message = `Halo%20SitusPro%20Studio!%20Saya%20tertarik%20untuk%20memesan%20jasa%20pembuatan%20website%20dengan%20keperluan%20berikut:${newline}${newline}` +
      `*Nama%20Brand/Bisnis:*%2520${encodeURIComponent(businessName)}${newline}` +
      `*Pilihan%20Model:*%2520${encodeURIComponent(priceCalculation.categoryName)}${newline}` +
      `*Tema%20Warna:*%2520${themeColor.toUpperCase()}${newline}` +
      `*Jumlah%20Halaman:*%2520${pageCount}%20halaman${newline}${newline}` +
      `*Fitur%20Tambahan%20Dipilih:*${newline}${activeFeatsString}${newline}${newline}` +
      `*Estimasi%20Total%20Biaya:*%2520*${encodeURIComponent(formatPrice(priceCalculation.subtotal))}*${newline}${newline}` +
      `Mohon%20jadwalkan%20sesi%20konsultasi%20gratis%20untuk%20mendiskusikan%20lebih%20lanjut.%20Terima%20kasih!`;

    // Opens WhatsApp Web or Universal app on client
    window.open(`https://api.whatsapp.com/send?phone=628123456789&text=${message}`, "_blank", "noopener,noreferrer");
  };

  const currentTheme = colorMap[themeColor] || colorMap.emerald;

  return (
    <section id="kalkulator-custom" className="py-20 bg-slate-50/20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-700 bg-indigo-50 py-1 px-3 rounded-full">
            Alat Kalkulator Pintar
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Kalkulator & Live Preview Desain Custom
          </h2>
          <p className="text-base text-slate-600 leading-relaxed text-center">
            Pilihlah model spesifikasi, warna tema, jumlah halaman, dan modul fitur yang Anda butuhkan. Lihat perkiraan biaya transparan dan saksikan rancangan layout website dummy Anda terupdate secara live di panel sebelah kanan!
          </p>
        </div>

        {/* Master Row Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Options Controller Column (Left) */}
          <div className="lg:col-span-7 space-y-8 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm">
            
            {/* Input Brand Name */}
            <div className="space-y-3">
              <label htmlFor="business-name-input" className="block text-sm font-bold text-slate-800 tracking-wide uppercase">
                1. Nama Brand / Bisnis Anda
              </label>
              <input
                id="business-name-input"
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value || "Bisnis Saya")}
                placeholder="Contoh: Kopi Seduh Senja, Sinar Logistik, Toko Zahra..."
                maxLength={40}
                className="w-full text-base border border-slate-205 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all block text-slate-900 font-medium"
              />
            </div>

            {/* Select Web Model Preset */}
            <div className="space-y-3">
              <label htmlFor="category-select" className="block text-sm font-bold text-slate-800 tracking-wide uppercase">
                2. Pilih Kategori / Model Website
              </label>
              <div id="category-select" className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { id: "landing-page", label: "Landing Page" },
                  { id: "umkm", label: "UMKM Catalog" },
                  { id: "company-profile", label: "Company Profile" },
                  { id: "toko-online", label: "Toko Online" },
                  { id: "custom", label: "Web Custom" }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCategory(item.id)}
                    className={`py-3 px-3 rounded-full border text-xs sm:text-sm font-bold transition-all text-center block w-full whitespace-nowrap cursor-pointer ${
                      category === item.id
                        ? "bg-indigo-700 hover:bg-indigo-800 text-white border-indigo-700 shadow-md shadow-indigo-100"
                        : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Select Colors Theme */}
            <div className="space-y-3">
              <label className="block text-sm font-bold text-slate-800 tracking-wide uppercase">
                3. Pilih Karakter Warna Tema Anda
              </label>
              <div className="flex flex-wrap gap-4 items-center">
                {[
                  { id: "emerald", label: "Emerald Mint", hex: "bg-emerald-600" },
                  { id: "blue", label: "Sapphire Blue", hex: "bg-blue-600" },
                  { id: "crimson", label: "Crimson Slate", hex: "bg-rose-600" },
                  { id: "amber", label: "Amber Gold", hex: "bg-amber-500" },
                  { id: "indigo", label: "Midnight Indigo", hex: "bg-indigo-600" }
                ].map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setThemeColor(color.id)}
                    className={`flex items-center space-x-2 py-1.5 px-3 rounded-full border text-xs font-bold transition-all ${
                      themeColor === color.id
                        ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                        : "bg-white border-slate-200 hover:bg-slate-50 text-slate-700"
                    }`}
                  >
                    <span className={`w-3.5 h-3.5 rounded-full ${color.hex}`} />
                    <span>{color.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Page Count Counter Widget */}
            <div className="space-y-3 select-none">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-bold text-slate-800 tracking-wide uppercase">
                  4. Estimasi Jumlah Halaman
                </label>
                <span className="text-xs font-bold text-slate-500">
                  Bonus: 1 Halaman Beranda sudah ter-include
                </span>
              </div>
              <div className="flex items-center justify-between bg-slate-50 border border-slate-200 p-4 rounded-2xl">
                <div className="space-y-0.5">
                  <p className="text-sm font-bold text-slate-900">{pageCount} Halaman Total</p>
                  <p className="text-xs text-slate-500">Menyediakan Beranda, Layanan, Kontak, dan {pageCount - 1 > 0 ? `${pageCount - 1} detail halaman tambahan` : "halaman dasar"}</p>
                </div>
                <div className="flex items-center space-x-3 bg-white border border-slate-200 rounded-full p-1 shadow-inner">
                  <button
                    onClick={() => setPageCount(Math.max(1, pageCount - 1))}
                    disabled={pageCount <= 1}
                    className="p-2 text-slate-600 hover:text-indigo-700 disabled:opacity-40 transition-colors cursor-pointer"
                  >
                    <Minus className="w-4 h-4 stroke-[3px]" />
                  </button>
                  <span className="font-extrabold text-base px-2 text-slate-900">{pageCount}</span>
                  <button
                    onClick={() => setPageCount(Math.min(25, pageCount + 1))}
                    disabled={pageCount >= 25}
                    className="p-2 text-slate-600 hover:text-indigo-700 disabled:opacity-40 transition-colors cursor-pointer"
                  >
                    <Plus className="w-4 h-4 stroke-[3px]" />
                  </button>
                </div>
              </div>
            </div>

            {/* Select Interlocking Features */}
            <div className="space-y-4">
              <label className="block text-sm font-bold text-slate-800 tracking-wide uppercase">
                5. Pilih Fitur Modular Tambahan (Klik untuk Aktifkan)
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {FEATURES_LIST.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <div
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start space-x-3 select-none ${
                        isChecked
                          ? "bg-indigo-50/50 border-indigo-500 shadow-sm"
                          : "bg-white border-slate-200 hover:border-slate-350"
                      }`}
                    >
                      <div className={`p-2 rounded-xl mt-0.5 ${isChecked ? "bg-indigo-700 text-white" : "bg-slate-100 text-slate-500"}`}>
                        {getFeatureIcon(feat.iconName)}
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                            {feat.name}
                          </p>
                          {isChecked && (
                            <span className="bg-indigo-100 text-indigo-700 p-0.5 rounded-full">
                              <Check className="w-3.5 h-3.5 text-indigo-750" />
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] text-slate-500 leading-relaxed">
                          {feat.description}
                        </p>
                        <p className="text-xs font-semibold text-indigo-700 font-mono mt-1">
                          +{formatPrice(feat.price)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Interactive Simulated Preview & Subtotal Frame Column (Right) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* Live Interactive Frame Preview */}
            <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700 flex items-center">
                  <span className="w-2.5 h-2.5 bg-indigo-600 rounded-full inline-block mr-2 animate-ping" />
                  Live Preview Mockup
                </span>
                <span className="bg-indigo-50 text-indigo-700 text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-full">
                  {pageCount} Halaman
                </span>
              </div>

              {/* Fake Mobile/Tablet Shell Emulator */}
              <div className="border-4 border-slate-900 bg-slate-50 rounded-2xl overflow-hidden aspect-[9/13] shadow-inner relative flex flex-col">
                {/* Visual Header bar */}
                <div className="bg-slate-900 text-white/50 text-[9px] px-4 py-1.5 flex justify-between items-center z-10">
                  <span className="font-semibold text-white font-mono">09:41 AM</span>
                  <div className="w-16 h-3.5 bg-black rounded-lg flex items-center justify-center">
                    <span className="w-1 h-1 bg-white/20 rounded-full" />
                  </div>
                  <span className="font-mono">LTE ✓</span>
                </div>

                {/* Simulated Internal Content (React Controlled Canvas) */}
                <div className="flex-1 overflow-y-auto no-scrollbar bg-white flex flex-col relative text-gray-800 text-[11px]">
                  
                  {/* Browser Nav */}
                  <div className="sticky top-0 bg-white border-b border-gray-100 p-2.5 flex items-center justify-between z-20">
                    <span className="font-bold tracking-tight text-gray-900 text-xs">
                      {businessName.slice(0, 15)}{businessName.length > 15 ? "..." : ""}
                    </span>
                    <div className="flex space-x-1.5 items-center">
                      <span className="h-1 w-4 bg-gray-300 rounded block" />
                      <span className="h-1 w-4 bg-gray-300 rounded block" />
                      <span className={`h-4 px-2 text-[8px] font-bold text-white rounded flex items-center ${currentTheme.primary}`}>
                        Menu
                      </span>
                    </div>
                  </div>

                  {/* Dynamic simulated Hero Body based on configuration Category */}
                  <div className={`p-4 text-center space-y-2.5 ${currentTheme.bg} border-b ${currentTheme.border} relative overflow-hidden`}>
                    <p className={`text-[9px] uppercase font-bold tracking-wider ${currentTheme.text}`}>
                      Selamat Datang Pro
                    </p>
                    <h5 className="text-sm font-extrabold text-gray-950 leading-tight">
                      Solusi Terbaik Hubungi {businessName}
                    </h5>
                    <p className="text-[9px] text-gray-500 leading-relaxed px-2">
                      {category === "toko-online" 
                        ? "Dapatkan aneka produk unggulan berkualitas dengan proses checkout praktis & garansi."
                        : category === "landing-page"
                        ? "Daftarkan diri Anda sekarang sebelum slot kehabisan. Dapatkan diskon terbatas."
                        : "Kami berkomitmen melayani kebutuhan harian Anda dengan layanan ramah dan harga bersaing."}
                    </p>
                    <button className={`inline-block text-[8px] font-bold text-white py-1.5 px-4 rounded ${currentTheme.primary} shadow-sm`}>
                      Hubungi Kami
                    </button>
                  </div>

                  {/* Feature Element Mock 1: Catalog */}
                  {selectedFeatures.includes("catalog") && (
                    <div className="p-3.5 space-y-2.5 bg-white border-b border-gray-100">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-gray-950 text-xs">Katalog Produk</span>
                        <span className={`text-[8px] font-bold ${currentTheme.text}`}>Lihat Semua &rarr;</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="border border-gray-100 p-1.5 rounded-lg space-y-1.5 bg-slate-25 hover:border-indigo-250 transition-all">
                          <div className="h-12 bg-gray-100 rounded-md overflow-hidden relative">
                            <span className="absolute top-1 left-1 bg-indigo-600 text-white text-[7px] font-extrabold px-1 rounded">Diskon</span>
                          </div>
                          <div>
                            <p className="font-bold text-[9px] text-gray-900">Produk Best Seller 1</p>
                            <p className="text-[8px] text-indigo-600 font-mono font-bold">Rp 120.000</p>
                          </div>
                        </div>
                        <div className="border border-gray-100 p-1.5 rounded-lg space-y-1.5 bg-slate-25">
                          <div className="h-12 bg-gray-100 rounded-md overflow-hidden" />
                          <div>
                            <p className="font-bold text-[9px] text-gray-900">Produk Rekomendasi 2</p>
                            <p className="text-[8px] text-indigo-600 font-mono font-bold">Rp 85.000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Feature Element Mock 2: Booking Scheduler System */}
                  {selectedFeatures.includes("booking") && (
                    <div className="p-3.5 space-y-2 bg-slate-25 border-b border-gray-100">
                      <span className="font-bold text-gray-950 text-xs block">Formulir Reservasi</span>
                      <p className="text-[8px] text-gray-400">Silakan tentukan slot janji temu Anda secara digital:</p>
                      <div className="space-y-1.5 pt-1.5">
                        <div className="h-6 bg-white border border-gray-200 rounded px-2 flex items-center justify-between text-[8px] text-gray-600">
                          <span>📅 Pilih Tanggal Booking</span>
                          <span>▼</span>
                        </div>
                        <div className="h-6 bg-white border border-gray-200 rounded px-2 flex items-center justify-between text-[8px] text-gray-600">
                          <span>⏰ Pilih Jam Aktif Dokter/Layanan</span>
                          <span>▼</span>
                        </div>
                        <button className={`w-full text-center py-1.5 text-[8px] text-white font-bold rounded ${currentTheme.primary}`}>
                          Konfirmasi Reservasi ✓
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Feature Element Mock 3: Shopping Cart Indicator */}
                  {selectedFeatures.includes("cart-checkout") && (
                    <div className="p-3 bg-indigo-50/50 border-b border-gray-100 flex items-center justify-between text-[9px]">
                      <div className="flex items-center space-x-1.5 text-indigo-950 font-bold">
                        <ShoppingCart className="w-3.5 h-3.5 text-indigo-600" />
                        <span>Keranjang Belanja Aktif (1)</span>
                      </div>
                      <span className="bg-indigo-600 text-white font-bold px-2 py-0.5 rounded text-[8px]">
                        Checkout Rp 120k
                      </span>
                    </div>
                  )}

                  {/* Feature Element Mock 4: Google Maps integration container */}
                  {selectedFeatures.includes("maps") && (
                    <div className="p-3.5 space-y-2 bg-white border-b border-gray-100">
                      <span className="font-bold text-gray-950 text-xs block">Lokasi Google Maps</span>
                      {/* Fake map drawing */}
                      <div className="h-16 bg-blue-50 border border-blue-100 rounded-lg relative overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-dotted-pattern opacity-30" />
                        <div className="h-3 w-16 bg-white/70 border border-gray-200 text-[6px] font-bold flex items-center justify-center rounded shadow-sm z-10 space-x-1">
                          <MapPin className="w-1.5 h-1.5 text-rose-500 fill-rose-500" />
                          <span>Pin Lokasi</span>
                        </div>
                        {/* Fake map lines */}
                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 transform -rotate-12" />
                        <div className="absolute top-0 bottom-0 left-1/3 w-0.5 bg-gray-300" />
                      </div>
                    </div>
                  )}

                  {/* Feature Element Mock 5: Contact General Leads Form */}
                  {selectedFeatures.includes("contact-form") && (
                    <div className="p-3.5 space-y-2 bg-slate-25">
                      <span className="font-bold text-gray-950 text-xs block">Kirim Masukan</span>
                      <div className="space-y-1.5">
                        <div className="h-5 bg-white border border-gray-200 rounded px-2 flex items-center text-[8px] text-gray-400">
                          Nama Lengkap
                        </div>
                        <div className="h-10 bg-white border border-gray-200 rounded p-2 text-[8px] text-gray-400">
                          Tulis deskripsi request pesan...
                        </div>
                        <button className="w-full text-center py-1 text-[8px] font-bold text-gray-600 bg-gray-200 rounded">
                          Kirim Pesan
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Simple simulated footer */}
                  <div className="p-3 text-center text-[8px] text-gray-400 border-t border-gray-150 bg-white">
                    <p>© 2026 {businessName}. All rights reserved.</p>
                    {selectedFeatures.includes("multilang") && (
                      <p className="text-[7px] text-indigo-600 font-bold mt-1">ID | EN (Multi-Bahasa Aktif)</p>
                    )}
                  </div>

                  {/* Floating WhatsApp Widget */}
                  {selectedFeatures.includes("whatsapp") && (
                    <div className="absolute bottom-3 right-3 bg-indigo-650 text-white p-1.5 rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform cursor-pointer z-35 animate-bounce-slow">
                      <MessageCircle className="w-4 h-4 fill-indigo-650 text-white" />
                    </div>
                  )}

                </div>
              </div>
            </div>

            {/* Receipt Summary Calculation Breakdown */}
            <div className="bg-slate-900 border border-slate-800 text-white rounded-3xl p-6 sm:p-8 space-y-5 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-950 rounded-full mix-blend-multiply opacity-30 filter blur-xl pointer-events-none" />
              
              <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-300 border-b border-slate-800 pb-3">
                Ringkasan Estimasi Biaya
              </h4>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between items-center text-slate-300">
                  <span>Model: {priceCalculation.categoryName}</span>
                  <span className="font-bold text-slate-100">{formatPrice(priceCalculation.basePrice)}</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span>Jumlah Halaman ({pageCount} halaman)</span>
                  <span className="font-bold text-slate-100">{formatPrice(priceCalculation.pagesCost)}</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span>Modul Fitur Pilih ({selectedFeatures.length} modul)</span>
                  <span className="font-bold text-slate-100">{formatPrice(priceCalculation.featuresCost)}</span>
                </div>
                
                <div className="border-t border-slate-800 pt-3 flex justify-between items-end">
                  <div>
                    <p className="text-[10px] text-indigo-300 uppercase font-bold tracking-wider">Estimasi Total Biaya</p>
                    <p className="text-sm text-slate-400">Investasi Bersih Anda</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl sm:text-2xl font-black text-indigo-400 font-mono">
                      {formatPrice(priceCalculation.subtotal)}
                    </p>
                    <p className="text-[9px] text-indigo-300 font-semibold italic">Sudah Termasuk SEO Basic + Free Setup</p>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                onClick={sendToWhatsApp}
                className="w-full text-center bg-indigo-700 hover:bg-indigo-650 text-white font-extrabold uppercase text-xs py-3.5 px-6 rounded-full shadow-lg shadow-indigo-950/25 transition-all flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5 fill-white text-indigo-700 stroke-[2.5px]" />
                <span>Konsultasikan via WhatsApp Kami</span>
              </button>

              <p className="text-[10px] text-center text-slate-400 select-none">
                Jaminan response kilat dalam &lt; 15 menit pada jam operasional kami.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
