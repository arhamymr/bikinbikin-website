/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Laptop, ClipboardText, Shield, MagnifyingGlass, Sparkle, Sliders, Handshake, Eye } from "@phosphor-icons/react";
import SectionHeader from "./ui/SectionHeader";
import Tabs from "./ui/Tabs";
import Card from "./ui/Card";

// ponytail: Simplified explanation section to light-mode monochrome only, uniform black icon accents, and no glows or shadows.
export default function KenapaWebsite() {
  const [activeTab, setActiveTab] = useState<"urgensi" | "keunggulan">("urgensi");

  const tabs = [
    { id: "urgensi", label: "Urgensi Website Bisnis" },
    { id: "keunggulan", label: "Keunggulan Layanan Kami" },
  ];

  const urgensiItems = [
    {
      icon: <Laptop className="w-6 h-6 text-black" />,
      title: "Kredibilitas Bisnis Instan",
      desc: "Menampilkan profil bisnis, visi misi, legalitas, dan testimoni agar bisnis Anda segera dipercaya oleh khalayak umum."
    },
    {
      icon: <ClipboardText className="w-6 h-6 text-black" />,
      title: "Satu Hub Informasi Rapi",
      desc: "Profil, katalog, daftar produk, lokasi Google Maps, jam operasional, hingga formulir pesanan tersaji lengkap di satu alamat premium."
    },
    {
      icon: <MagnifyingGlass className="w-6 h-6 text-black" />,
      title: "Mudah Ditemukan Konsumen",
      desc: "Sebelum membeli, calon pelanggan mencari di internet. Website memastikan brand Anda yang pertama muncul daripada kompetitor."
    },
    {
      icon: <Eye className="w-6 h-6 text-black" />,
      title: "Eksistensi Digital 24 Jam",
      desc: "Kantor & toko fisik memiliki jam operasional terbatas, namun website tetap aktif memajang katalog produk Anda non-stop sepanjang tahun."
    }
  ];

  const keunggulanItems = [
    {
      icon: <Sparkle className="w-6 h-6 text-black" />,
      title: "Desain Profesional & Eksklusif",
      desc: "Tampilan visual website modern, rapi, bersih, dan memadukan identitas orisinil dari brand Anda."
    },
    {
      icon: <Laptop className="w-6 h-6 text-black" />,
      title: "100% Mobile Friendly",
      desc: "Struktur layout ramah dinamis, sangat nyaman diakses dari layar handphone, tablet, maupun layar monitor laptop."
    },
    {
      icon: <MagnifyingGlass className="w-6 h-6 text-black" />,
      title: "Infrastruktur SEO Basic",
      desc: "Struktur heading ramah mesin pencari kustomisasi meta-title agar website Anda direkam Google dengan mulus."
    },
    {
      icon: <Sliders className="w-6 h-6 text-black" />,
      title: "Sistem Kelola Mandiri",
      desc: "Konten teks, foto produk, testimoni dapat diubah dengan mudah dan gampang menggunakan panel kendali ramah pemula."
    },
    {
      icon: <Handshake className="w-6 h-6 text-black" />,
      title: "Support Penuh Pasca Jadi",
      desc: "Kami tetap mendampingi setelah website selesai dideploy agar Anda tidak bingung saat pertama kali mengoperasikannya."
    },
    {
      icon: <Shield className="w-6 h-6 text-black" />,
      title: "Optimal, Cepat & Ringan",
      desc: "Kami mengutamakan performa loading web super optimal demi meminimalkan pelanggan keluar karena loading yang lemot."
    }
  ];

  return (
    <section id="mengapa-website" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Eksistensi Digital"
          title="Kenapa Bisnis Anda Butuh Website?"
          description="Di era digital, pelanggan sering mencari informasi melalui internet sebelum membeli produk atau menggunakan jasa. Website membantu bisnis Anda terlihat lebih kredibel dan mudah dijangkau kapan saja."
          className="mb-10"
        />

        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onChange={(id) => setActiveTab(id as "urgensi" | "keunggulan")}
          className="mt-10"
        />

        {/* Dynamic Items Grid */}
        <div className="mt-12">
          {activeTab === "urgensi" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {urgensiItems.map((item, idx) => (
                <Card
                  key={idx}
                  hover
                  className="p-6 flex items-start space-x-4 animate-fadeIn"
                >
                  <div className="p-3 bg-slate-50 rounded-md flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="space-y-1.5 bg-transparent">
                    <h3 className="font-bold text-lg text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {keunggulanItems.map((item, idx) => (
                <Card
                  key={idx}
                  hover
                  className="p-6 flex flex-col justify-between animate-fadeIn"
                >
                  <div className="space-y-4">
                    <div className="p-3 bg-slate-50 rounded-md inline-block">
                      {item.icon}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-base text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="pt-4 flex items-center text-xs font-bold text-black">
                    SitusPro Quality Guarantee ✓
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Custom Visual Callout - No absolute glow, pure monochrome styling */}
        <div className="mt-12 bg-black text-white rounded-md p-6 sm:p-10 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left max-w-xl">
              <h4 className="text-xl sm:text-2xl font-bold">Gabungkan Profil, Layanan, & Kontak Dalam Satu Tempat</h4>
              <p className="text-xs sm:text-sm text-zinc-350 leading-relaxed">
                Kami siap merancang website responsive yang terintegrasi penuh ke Google Maps dan WhatsApp bisnis Anda. Kredibilitas instan, peningkatan konversi, dan kepuasan pelanggan menanti Anda.
              </p>
            </div>
            <button
              onClick={() => {
                const cal = document.getElementById("kalkulator-custom");
                if (cal) cal.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white text-slate-900 hover:bg-zinc-100 py-3.5 px-6 rounded-md text-sm font-bold shrink-0 transition-colors active-press cursor-pointer"
            >
              Coba Kalkulator Desain Preview
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
