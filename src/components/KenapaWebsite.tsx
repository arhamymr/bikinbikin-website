/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Laptop, ClipboardList, Shield, Search, Sparkles, Sliders, HeartHandshake, Eye } from "lucide-react";

export default function KenapaWebsite() {
  const [activeTab, setActiveTab] = useState<"urgensi" | "keunggulan">("urgensi");

  const urgensiItems = [
    {
      icon: <Laptop className="w-6 h-6 text-indigo-700" />,
      title: "Kredibilitas Bisnis Instan",
      desc: "Menampilkan profil bisnis, visi misi, legalitas, dan testimoni agar bisnis Anda segera dipercaya oleh khalayak umum."
    },
    {
      icon: <ClipboardList className="w-6 h-6 text-blue-600" />,
      title: "Satu Hub Informasi Rapi",
      desc: "Profil, katalog, daftar produk, lokasi Google Maps, jam operasional, hingga formulir pesanan tersaji lengkap di satu alamat premium."
    },
    {
      icon: <Search className="w-6 h-6 text-amber-600" />,
      title: "Mudah Ditemukan Konsumen",
      desc: "Sebelum membeli, calon pelanggan mencari di internet. Website memastikan brand Anda yang pertama muncul daripada kompetitor."
    },
    {
      icon: <Eye className="w-6 h-6 text-purple-600" />,
      title: "Eksistensi Digital 24 Jam",
      desc: "Kantor & toko fisik memiliki jam operasional terbatas, namun website tetap aktif memajang katalog produk Anda non-stop sepanjang tahun."
    }
  ];

  const keunggulanItems = [
    {
      icon: <Sparkles className="w-6 h-6 text-rose-600" />,
      title: "Desain Profesional & Eksklusif",
      desc: "Tampilan visual website modern, rapi, bersih, dan memadukan identitas orisinil dari brand Anda."
    },
    {
      icon: <Laptop className="w-6 h-6 text-indigo-700" />,
      title: "100% Mobile Friendly",
      desc: "Struktur layout ramah dinamis, sangat nyaman diakses dari layar handphone, tablet, maupun layar monitor laptop."
    },
    {
      icon: <Search className="w-6 h-6 text-blue-600" />,
      title: "Infrastruktur SEO Basic",
      desc: "Struktur heading ramah mesin pencari kustomisasi meta-title agar website Anda direkam Google dengan mulus."
    },
    {
      icon: <Sliders className="w-6 h-6 text-indigo-600" />,
      title: "Sistem Kelola Mandiri",
      desc: "Konten teks, foto produk, testimoni dapat diubah dengan mudah dan gampang menggunakan panel kendali ramah pemula."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-amber-600" />,
      title: "Support Penuh Pasca Jadi",
      desc: "Kami tetap mendampingi setelah website selesai dideploy agar Anda tidak bingung saat pertama kali mengoperasikannya."
    },
    {
      icon: <Shield className="w-6 h-6 text-indigo-700" />,
      title: "Optimal, Cepat & Ringan",
      desc: "Kami mengutamakan performa loading web super optimal demi meminimalkan pelanggan keluar karena loading yang lemot."
    }
  ];

  return (
    <section id="mengapa-website" className="py-20 bg-slate-50 dark:bg-gray-900 border-y border-slate-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1 rounded-md">
            Eksistensi Digital
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium text-slate-900 dark:text-white leading-tight">
            Kenapa Bisnis Anda Butuh Website?
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Di era digital, pelanggan sering mencari informasi melalui internet sebelum membeli produk atau menggunakan jasa. Website membantu bisnis Anda terlihat lebih kredibel dan mudah dijangkau kapan saja.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mt-10">
          <div className="inline-flex bg-white dark:bg-gray-800 p-1 rounded-md border border-slate-200 dark:border-gray-700  -sm">
            <button
              onClick={() => setActiveTab("urgensi")}
              className={`py-2 px-6 rounded-md text-sm font-bold transition-all ${
                activeTab === "urgensi"
                  ? "bg-indigo-700 text-white    -indigo-100"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-gray-700"
              }`}
            >
              Urgensi Website Bisnis
            </button>
            <button
              onClick={() => setActiveTab("keunggulan")}
              className={`py-2 px-6 rounded-md text-sm font-bold transition-all ${
                activeTab === "keunggulan"
                  ? "bg-indigo-700 text-white    -indigo-100"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-gray-700"
              }`}
            >
              Keunggulan Layanan Kami
            </button>
          </div>
        </div>

        {/* Dynamic Items Grid */}
        <div className="mt-12">
          {activeTab === "urgensi" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {urgensiItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 p-6 rounded-md border border-slate-200 dark:border-gray-700  -sm flex items-start space-x-4 hover:border-indigo-300 hover:  transition-all duration-300 animate-fadeIn"
                >
                  <div className="p-3 bg-slate-50 dark:bg-gray-700 rounded-md flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="space-y-1.5 bg-transparent">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {keunggulanItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 p-6 rounded-md border border-slate-200 dark:border-gray-700  -sm flex flex-col justify-between hover:border-indigo-300 hover:  transition-all duration-300 animate-fadeIn"
                >
                  <div className="space-y-4">
                    <div className="p-3 bg-slate-50 dark:bg-gray-700 rounded-md inline-block">
                      {item.icon}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-base text-slate-900 dark:text-white">{item.title}</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="pt-4 flex items-center text-xs font-bold text-indigo-700">
                    SitusPro Quality Guarantee ✓
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Custom Visual Callout */}
        <div className="mt-12 bg-slate-900 dark:bg-gray-800 text-white rounded-md p-6 sm:p-10 relative overflow-hidden  ">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-900 rounded-md mix-blend-multiply opacity-20 filter blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left max-w-xl">
              <h4 className="text-xl sm:text-2xl font-bold">Gabungkan Profil, Layanan, & Kontak Dalam Satu Tempat</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Kami siap merancang website responsive yang terintegrasi penuh ke Google Maps dan WhatsApp bisnis Anda. Kredibilitas instan, peningkatan konversi, dan kepuasan pelanggan menanti Anda.
              </p>
            </div>
            <button
              onClick={() => {
                const cal = document.getElementById("kalkulator-custom");
                if (cal) cal.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white text-slate-900 hover:bg-indigo-50 py-3.5 px-6 rounded-md text-sm font-bold   shrink-0 transition-colors"
            >
              Coba Kalkulator Desain Preview
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
