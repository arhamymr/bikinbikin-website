/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { 
  ChatCircle, 
  MapPin, 
  Envelope, 
  GridFour, 
  ShoppingCart, 
  TrendUp, 
  Lightning, 
  Calendar, 
  Sliders, 
  Globe, 
  Plus, 
  Minus, 
  Check, 
  Laptop
} from "@phosphor-icons/react";
import { FEATURES_LIST, SERVICES_LIST } from "../data";
import { Feature } from "../types";
import SectionHeader from "./ui/SectionHeader";

// ponytail: Entirely redesigned the interactive pricing calculator to be light-mode monochrome only.
// Removed all shadows (like -sm, -lg), all dark mode states, and all colorful blur gradients.
export default function PricingCalculator() {
  const [businessName, setBusinessName] = useState("Kopi Seduh Senja");
  const [category, setCategory] = useState("umkm");
  const [themeColor, setThemeColor] = useState("black");
  const [pageCount, setPageCount] = useState(3);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "whatsapp",
    "maps",
    "catalog"
  ]);

  // Handle color classes map for the live design previewer
  const colorMap: Record<string, { primary: string; bg: string; text: string; accent: string; border: string }> = {
    black: {
      primary: "bg-black text-white",
      bg: "bg-zinc-50",
      text: "text-black",
      accent: "text-zinc-950",
      border: "border-zinc-200"
    },
    emerald: {
      primary: "bg-emerald-600 text-white",
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      accent: "text-emerald-950",
      border: "border-emerald-100"
    },
    blue: {
      primary: "bg-blue-600 text-white",
      bg: "bg-blue-50",
      text: "text-blue-700",
      accent: "text-blue-950",
      border: "border-blue-100"
    },
    crimson: {
      primary: "bg-rose-600 text-white",
      bg: "bg-rose-50",
      text: "text-rose-700",
      accent: "text-rose-950",
      border: "border-rose-100"
    },
    amber: {
      primary: "bg-amber-500 text-white",
      bg: "bg-amber-50",
      text: "text-amber-800",
      accent: "text-amber-950",
      border: "border-amber-100"
    }
  };

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case "MessageCircle":
        return <ChatCircle className="w-5 h-5" />;
      case "MapPin":
        return <MapPin className="w-5 h-5" />;
      case "Mail":
        return <Envelope className="w-5 h-5" />;
      case "Grid":
        return <GridFour className="w-5 h-5" />;
      case "ShoppingCart":
        return <ShoppingCart className="w-5 h-5" />;
      case "TrendingUp":
        return <TrendUp className="w-5 h-5" />;
      case "Zap":
        return <Lightning className="w-5 h-5" />;
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
    let basePrice = 1200000;
    let categoryName = "Website UMKM";

    if (category === "company-profile") {
      basePrice = 1800000;
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

    const extraPages = Math.max(0, pageCount - 1);
    const pagesCost = extraPages * 150000;

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

    window.open(`https://api.whatsapp.com/send?phone=628978902194&text=${message}`, "_blank", "noopener,noreferrer");
  };

  const currentTheme = colorMap[themeColor] || colorMap.black;

  return (
    <section id="kalkulator-custom" className="py-20 bg-slate-50/20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Alat Kalkulator Pintar"
          title="Kalkulator & Live Preview Desain Custom"
          description="Pilihlah model spesifikasi, warna tema, jumlah halaman, dan modul fitur yang Anda butuhkan. Lihat perkiraan biaya transparan dan saksikan rancangan layout website dummy Anda terupdate secara live di panel sebelah kanan!"
          className="mb-16"
        />

        {/* Master Row Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Options Controller Column (Left) - No shadows */}
          <div className="lg:col-span-7 space-y-8 bg-white border border-slate-200 p-6 sm:p-8 rounded-md">
            
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
                className="w-full text-base border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all block text-slate-900 font-medium"
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
                    className={`py-3 px-3 rounded-md border text-xs sm:text-sm font-bold transition-all text-center block w-full whitespace-nowrap active-press cursor-pointer ${
                      category === item.id
                        ? "bg-black text-white border-black"
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
                3. Pilih Karakter Warna Tema Preview
              </label>
              <div className="flex flex-wrap gap-4 items-center">
                {[
                  { id: "black", label: "Sleek Black", hex: "bg-black" },
                  { id: "emerald", label: "Emerald Mint", hex: "bg-emerald-600" },
                  { id: "blue", label: "Sapphire Blue", hex: "bg-blue-600" },
                  { id: "crimson", label: "Crimson Slate", hex: "bg-rose-600" },
                  { id: "amber", label: "Amber Gold", hex: "bg-amber-500" }
                ].map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setThemeColor(color.id)}
                    className={`flex items-center space-x-2 py-1.5 px-3 rounded-md border text-xs font-bold transition-all active-press cursor-pointer ${
                      themeColor === color.id
                        ? "bg-slate-900 text-white border-slate-900"
                        : "bg-white border-slate-200 hover:bg-slate-50 text-slate-700"
                    }`}
                  >
                    <span className={`w-3.5 h-3.5 rounded-md ${color.hex}`} />
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
              <div className="flex items-center justify-between bg-slate-50 border border-slate-200 p-4 rounded-md">
                <div className="space-y-0.5">
                  <p className="text-sm font-bold text-slate-900">{pageCount} Halaman Total</p>
                  <p className="text-xs text-slate-550">Menyediakan Beranda, Layanan, Kontak, dan {pageCount - 1 > 0 ? `${pageCount - 1} detail halaman tambahan` : "halaman dasar"}</p>
                </div>
                <div className="flex items-center space-x-3 bg-white border border-slate-200 rounded-md p-1">
                  <button
                    onClick={() => setPageCount(Math.max(1, pageCount - 1))}
                    disabled={pageCount <= 1}
                    className="p-2 text-slate-650 hover:text-black disabled:opacity-40 transition-colors active-press-sm cursor-pointer"
                  >
                    <Minus className="w-4 h-4" weight="bold" />
                  </button>
                  <span className="font-medium text-base px-2 text-slate-900">{pageCount}</span>
                  <button
                    onClick={() => setPageCount(pageCount + 1)}
                    className="p-2 text-slate-650 hover:text-black disabled:opacity-40 transition-colors active-press-sm cursor-pointer"
                  >
                    <Plus className="w-4 h-4" weight="bold" />
                  </button>
                </div>
              </div>
            </div>

            {/* Features Multi-Select Grid */}
            <div className="space-y-3">
              <label className="block text-sm font-bold text-slate-800 tracking-wide uppercase">
                5. Pilih Modul & Fitur Tambahan Website
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FEATURES_LIST.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <div
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-4 rounded-md border flex items-start space-x-3 transition-all active-press-lg cursor-pointer select-none ${
                        isChecked
                          ? "bg-zinc-50 border-black"
                          : "bg-white border-slate-200 hover:border-slate-350"
                      }`}
                    >
                      <div className={`p-2 rounded-md mt-0.5 ${isChecked ? "bg-black text-white" : "bg-slate-100 text-slate-505"}`}>
                        {getFeatureIcon(feat.iconName)}
                      </div>
                      <div className="flex-1 space-y-0.5">
                        <div className="flex justify-between items-center">
                          <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">{feat.name}</p>
                          {isChecked && (
                            <span className="bg-zinc-200 text-black p-0.5 rounded-md">
                              <Check className="w-3.5 h-3.5 text-black" />
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] sm:text-xs text-slate-550 leading-relaxed">{feat.description}</p>
                        <p className="text-xs font-semibold text-black font-mono mt-1">
                          + {formatPrice(feat.price)}
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
            
            {/* Live Interactive Frame Preview - No shadow */}
            <div className="bg-white border border-slate-200 rounded-md p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700 flex items-center">
                  <span className="w-2.5 h-2.5 bg-black rounded-md inline-block mr-2" />
                  Live Preview Mockup
                </span>
                <span className="bg-zinc-100 text-black text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-md">
                  {pageCount} Halaman
                </span>
              </div>

              {/* Fake Mobile/Tablet Shell Emulator - No shadow */}
              <div className="border-4 border-slate-900 bg-slate-50 rounded-md overflow-hidden aspect-[9/13] relative flex flex-col">
                {/* Visual Header bar */}
                <div className="bg-slate-900 text-white/50 text-[9px] px-4 py-1.5 flex justify-between items-center z-10">
                  <span className="font-semibold text-white font-mono">09:41 AM</span>
                  <div className="w-16 h-3.5 bg-black rounded-lg flex items-center justify-center">
                    <span className="w-1 h-1 bg-white/20 rounded-md" />
                  </div>
                  <span className="font-mono">LTE ✓</span>
                </div>

                {/* Simulated Internal Content (React Controlled Canvas) */}
                <div className="flex-1 overflow-y-auto no-scrollbar bg-white flex flex-col relative text-gray-800 text-[11px]">
                  
                  {/* Browser Nav */}
                  <div className="sticky top-0 bg-white border-b border-gray-150 p-2.5 flex items-center justify-between z-20">
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
                    <h5 className="text-sm font-medium text-gray-950 leading-tight">
                      Solusi Terbaik Hubungi {businessName}
                    </h5>
                    <p className="text-[9px] text-gray-500 leading-relaxed px-2">
                      {category === "toko-online" 
                        ? "Dapatkan aneka produk unggulan berkualitas dengan proses checkout praktis & garansi."
                        : category === "landing-page"
                        ? "Daftarkan diri Anda sekarang sebelum slot kehabisan. Dapatkan diskon terbatas."
                        : "Kami berkomitmen melayani kebutuhan harian Anda dengan layanan ramah dan harga bersaing."}
                    </p>
                    <button className={`inline-block text-[8px] font-bold text-white py-1.5 px-4 rounded active-press ${currentTheme.primary}`}>
                      Hubungi Kami
                    </button>
                  </div>

                  {/* Feature Element Mock 1: Catalog */}
                  <div className={`transition-all duration-300 ease-out overflow-hidden ${
                    selectedFeatures.includes("catalog")
                      ? "max-h-[300px] opacity-100 border-b border-gray-100"
                      : "max-h-0 opacity-0 border-b-0 pointer-events-none"
                  }`}>
                    <div className="p-3.5 space-y-2.5 bg-white">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-gray-950 text-xs">Katalog Produk</span>
                        <span className={`text-[8px] font-bold ${currentTheme.text}`}>Lihat Semua &rarr;</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="border border-gray-100 p-1.5 rounded-lg space-y-1.5 bg-zinc-50 hover:border-zinc-300 transition-all cursor-pointer">
                          <div className="h-12 bg-gray-250 rounded-md overflow-hidden relative">
                            <span className="absolute top-1 left-1 bg-black text-white text-[7px] font-medium px-1 rounded">Diskon</span>
                          </div>
                          <div>
                            <p className="font-bold text-[9px] text-gray-900">Produk Best Seller 1</p>
                            <p className="text-[8px] text-black font-mono font-bold">Rp 120.000</p>
                          </div>
                        </div>
                        <div className="border border-gray-100 p-1.5 rounded-lg space-y-1.5 bg-zinc-50">
                          <div className="h-12 bg-gray-250 rounded-md overflow-hidden" />
                          <div>
                            <p className="font-bold text-[9px] text-gray-900">Produk Rekomendasi 2</p>
                            <p className="text-[8px] text-black font-mono font-bold">Rp 85.000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Feature Element Mock 2: Booking Scheduler System */}
                  <div className={`transition-all duration-300 ease-out overflow-hidden ${
                    selectedFeatures.includes("booking")
                      ? "max-h-[300px] opacity-100 border-b border-gray-100"
                      : "max-h-0 opacity-0 border-b-0 pointer-events-none"
                  }`}>
                    <div className="p-3.5 space-y-2 bg-zinc-50">
                      <span className="font-bold text-gray-950 text-xs block">Formulir Reservasi</span>
                      <p className="text-[8px] text-gray-400">Silakan tentukan slot janji temu Anda secara digital:</p>
                      <div className="space-y-1.5 pt-1.5">
                        <div className="h-6 bg-white border border-gray-200 rounded px-2 flex items-center justify-between text-[8px] text-gray-650 cursor-pointer">
                          <span>📅 Pilih Tanggal Booking</span>
                          <span>▼</span>
                        </div>
                        <div className="h-6 bg-white border border-gray-200 rounded px-2 flex items-center justify-between text-[8px] text-gray-655 cursor-pointer">
                          <span>⏰ Pilih Jam Aktif Dokter/Layanan</span>
                          <span>▼</span>
                        </div>
                        <button className={`w-full text-center py-1.5 text-[8px] text-white font-bold rounded active-press-sm ${currentTheme.primary}`}>
                          Konfirmasi Reservasi ✓
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Feature Element Mock 3: Shopping Cart Indicator */}
                  <div className={`transition-all duration-300 ease-out overflow-hidden ${
                    selectedFeatures.includes("cart-checkout")
                      ? "max-h-[300px] opacity-100 border-b border-gray-100"
                      : "max-h-0 opacity-0 border-b-0 pointer-events-none"
                  }`}>
                    <div className="p-3 bg-zinc-50 flex items-center justify-between text-[9px]">
                      <div className="flex items-center space-x-1.5 text-slate-900 font-bold">
                        <ShoppingCart className="w-3.5 h-3.5 text-black" />
                        <span>Keranjang Belanja Aktif (1)</span>
                      </div>
                      <span className="bg-black text-white font-bold px-2 py-0.5 rounded text-[8px] active-press-sm cursor-pointer">
                        Checkout Rp 120k
                      </span>
                    </div>
                  </div>

                  {/* Feature Element Mock 4: Google Maps integration container */}
                  <div className={`transition-all duration-300 ease-out overflow-hidden ${
                    selectedFeatures.includes("maps")
                      ? "max-h-[300px] opacity-100 border-b border-gray-100"
                      : "max-h-0 opacity-0 border-b-0 pointer-events-none"
                  }`}>
                    <div className="p-3.5 space-y-2 bg-white">
                      <span className="font-bold text-gray-950 text-xs block">Lokasi Google Maps</span>
                      <div className="h-16 bg-slate-50 border border-zinc-200 rounded-lg relative overflow-hidden flex items-center justify-center">
                        <div className="h-3 w-16 bg-white/90 border border-gray-200 text-[6px] font-bold flex items-center justify-center rounded z-10 space-x-1 cursor-pointer">
                          <MapPin className="w-1.5 h-1.5 text-black" />
                          <span>Pin Lokasi</span>
                        </div>
                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-250 transform -rotate-12" />
                        <div className="absolute top-0 bottom-0 left-1/3 w-0.5 bg-gray-250" />
                      </div>
                    </div>
                  </div>

                  {/* Feature Element Mock 5: Contact General Leads Form */}
                  <div className={`transition-all duration-300 ease-out overflow-hidden ${
                    selectedFeatures.includes("contact-form")
                      ? "max-h-[300px] opacity-100"
                      : "max-h-0 opacity-0 pointer-events-none"
                  }`}>
                    <div className="p-3.5 space-y-2 bg-zinc-50">
                      <span className="font-bold text-gray-950 text-xs block">Kirim Masukan</span>
                      <div className="space-y-1.5">
                        <div className="h-5 bg-white border border-gray-250 rounded px-2 flex items-center text-[8px] text-gray-400">
                          Nama Lengkap
                        </div>
                        <div className="h-10 bg-white border border-gray-250 rounded p-2 text-[8px] text-gray-400">
                          Tulis deskripsi request pesan...
                        </div>
                        <button className="w-full text-center py-1 text-[8px] font-bold text-gray-600 bg-gray-205 rounded active-press-sm">
                          Kirim Pesan
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Simple simulated footer */}
                  <div className="p-3 text-center text-[8px] text-gray-405 border-t border-gray-150 bg-white">
                    <p>© 2026 {businessName}. All rights reserved.</p>
                    {selectedFeatures.includes("multilang") && (
                      <p className="text-[7px] text-black font-bold mt-1">ID | EN (Multi-Bahasa Aktif)</p>
                    )}
                  </div>

                  {/* Floating WhatsApp Widget */}
                  {selectedFeatures.includes("whatsapp") && (
                    <div className="absolute bottom-3 right-3 bg-black text-white p-1.5 rounded-md flex items-center justify-center cursor-pointer z-35 active-press">
                      <ChatCircle className="w-4 h-4 text-white" weight="fill" />
                    </div>
                  )}

                </div>
              </div>
            </div>

            {/* Receipt Summary Calculation Breakdown - Solid black card, no shadows, no background glows */}
            <div className="bg-black border border-zinc-800 text-white rounded-md p-6 sm:p-8 space-y-5 relative overflow-hidden">
              
              <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-350 border-b border-zinc-800 pb-3">
                Ringkasan Estimasi Biaya
              </h4>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between items-center text-zinc-400">
                  <span>Model: {priceCalculation.categoryName}</span>
                  <span className="font-bold text-white">{formatPrice(priceCalculation.basePrice)}</span>
                </div>
                <div className="flex justify-between items-center text-zinc-400">
                  <span>Jumlah Halaman ({pageCount} halaman)</span>
                  <span className="font-bold text-white">{formatPrice(priceCalculation.pagesCost)}</span>
                </div>
                <div className="flex justify-between items-center text-zinc-400">
                  <span>Modul Fitur Pilih ({selectedFeatures.length} modul)</span>
                  <span className="font-bold text-white">{formatPrice(priceCalculation.featuresCost)}</span>
                </div>
                
                <div className="border-t border-zinc-800 pt-3 flex justify-between items-end">
                  <div>
                    <p className="text-[10px] text-zinc-450 uppercase font-bold tracking-wider">Estimasi Total Biaya</p>
                    <p className="text-sm text-zinc-550">Investasi Bersih Anda</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl sm:text-2xl font-black text-white font-mono">
                      {formatPrice(priceCalculation.subtotal)}
                    </p>
                    <p className="text-[9px] text-zinc-405 font-semibold italic">Sudah Termasuk SEO Basic + Free Setup</p>
                  </div>
                </div>
              </div>

              {/* Submit CTA - White solid button, no shadow */}
              <button
                onClick={sendToWhatsApp}
                className="w-full text-center bg-white hover:bg-zinc-200 text-black font-bold uppercase text-xs py-3.5 px-6 rounded-md transition-all flex items-center justify-center space-x-2 active-press cursor-pointer"
              >
                <ChatCircle className="w-5 h-5 text-black" />
                <span>Konsultasikan via WhatsApp Kami</span>
              </button>

              <p className="text-[10px] text-center text-zinc-500 select-none">
                Jaminan response kilat dalam &lt; 15 menit pada jam operasional kami.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
