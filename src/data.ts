/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Feature, WebsitePackage, PortfolioItem, TestimonialItem, FAQItem } from "./types";

export const SERVICES_LIST = [
  {
    id: "company-profile",
    title: "Website Company Profile",
    description: "Cocok untuk bisnis, perusahaan, yayasan, sekolah, komunitas, atau organisasi yang ingin menampilkan profil secara profesional.",
    features: [
      "Halaman beranda menarik",
      "Tentang kami / Visi Misi",
      "Daftar Layanan atau Jasa",
      "Galeri Portofolio / Proyek",
      "Seksi Testimoni Pelanggan",
      "Halaman Kontak lengkap",
      "Integrasi Tombol WhatsApp"
    ],
    accent: "text-emerald-600 bg-emerald-50 border-emerald-100",
    iconName: "Briefcase"
  },
  {
    id: "umkm",
    title: "Website UMKM",
    description: "Website sederhana namun profesional untuk membantu UMKM memperkenalkan produk dan layanan secara online.",
    features: [
      "Katalog produk / Menu list",
      "Informasi bisnis & jam buka",
      "Galeri foto produk asli",
      "Satu klik tombol WhatsApp",
      "Peta Lokasi Google Maps",
      "Formulir kontak simpel"
    ],
    accent: "text-blue-600 bg-blue-50 border-blue-100",
    iconName: "Store"
  },
  {
    id: "landing-page",
    title: "Landing Page",
    description: "Cocok untuk promosi produk spesifik, jasa, event, campaign, atau penawaran digital ads.",
    features: [
      "Desain fokus konversi tinggi",
      "Copywriting penawaran memikat",
      "Call-to-Action (CTA) yang jelas",
      "Formulir pencatatan leads",
      "Tombol WhatsApp melayang",
      "Optimasi tampilan mobile kilat"
    ],
    accent: "text-amber-600 bg-amber-50 border-amber-100",
    iconName: "Target"
  },
  {
    id: "toko-online",
    title: "Website Toko Online",
    description: "Website modern untuk menampilkan, memasarkan, dan menjual seluruh produk Anda secara mandiri.",
    features: [
      "Katalog produk ber-kategori",
      "Detail deskripsi & foto produk",
      "Sistem Keranjang belanja",
      "Formulir Checkout otomatis",
      "Manajemen pesanan & stok",
      "Integrasi WhatsApp / payment gateway"
    ],
    accent: "text-purple-600 bg-purple-50 border-purple-100",
    iconName: "ShoppingBag"
  },
  {
    id: "custom",
    title: "Website Custom",
    description: "Untuk kebutuhan khusus seperti dashboard internal, sistem booking, portal member, atau aplikasi berbasis web lainnya.",
    features: [
      "Fitur disesuaikan bisnis Anda",
      "Desain adaptif sesuai flow kerja",
      "Sistem Autentikasi / Admin Panel",
      "Penyimpanan database relasional",
      "Integrasi API pihak ketiga",
      "Dokumentasi & training penggunaan"
    ],
    accent: "text-rose-600 bg-rose-50 border-rose-100",
    iconName: "Terminal"
  }
];

export const FEATURES_LIST: Feature[] = [
  {
    id: "whatsapp",
    name: "Integrasi Chat WhatsApp",
    description: "Tombol melayang modern atau tombol kustom yang langsung terhubung ke admin WhatsApp Anda.",
    price: 150000,
    category: "essential",
    iconName: "MessageCircle"
  },
  {
    id: "maps",
    name: "Lokasi Google Maps",
    description: "Peta interaktif di website yang memudahkan konsumen menemukan rute fisik toko Anda.",
    price: 100000,
    category: "essential",
    iconName: "MapPin"
  },
  {
    id: "contact-form",
    name: "Formulir Kontak & Lead",
    description: "Pengunjung dapat mengirim pesan langsung yang otomatis terkirim ke email atau admin panel.",
    price: 150000,
    category: "essential",
    iconName: "Mail"
  },
  {
    id: "catalog",
    name: "Katalog Produk Dinamis",
    description: "Manajemen katalog produk yang rapi dengan info harga, deskripsi, dan tab kategori.",
    price: 450000,
    category: "marketing",
    iconName: "Grid"
  },
  {
    id: "cart-checkout",
    name: "Keranjang Belanja & Checkout",
    description: "Sistem e-commerce lengkap dengan keranjang, opsi ekspedisi, dan ringkasan pesanan.",
    price: 950000,
    category: "advanced",
    iconName: "ShoppingCart"
  },
  {
    id: "seo-pro",
    name: "Optimasi SEO Pro",
    description: "Konfigurasi kata kunci, sitemap, meta tag, dan optimasi gambar agar lebih cepat bersaing di halaman Google.",
    price: 400000,
    category: "marketing",
    iconName: "TrendingUp"
  },
  {
    id: "speed-opt",
    name: "Optimasi Kecepatan Turbospeed",
    description: "Pengecilan skrip (minification), caching modern, dan optimasi kompresi agar loading < 1.5 detik.",
    price: 350000,
    category: "marketing",
    iconName: "Zap"
  },
  {
    id: "booking",
    name: "Sistem Booking / Reservasi",
    description: "Kalender reservasi otomatis untuk jasa klinik, sewa ruang, janji temu dokter, atau booking meja restoran.",
    price: 800000,
    category: "advanced",
    iconName: "Calendar"
  },
  {
    id: "admin-cms",
    name: "Panel Admin / CMS Mudah",
    description: "Dashboard ramah pemula berbasis web untuk mengubah teks, foto, produk, tanpa paham koding.",
    price: 750000,
    category: "advanced",
    iconName: "Sliders"
  },
  {
    id: "multilang",
    name: "Multi-Bahasa (Indonesia & Inggris)",
    description: "Tombol ganti bahasa instant untuk audiens lokal dan internasional secara lancar.",
    price: 500000,
    category: "marketing",
    iconName: "Globe"
  }
];

export const PACKAGES_LIST: WebsitePackage[] = [
  {
    id: "starter",
    name: "Paket Starter",
    price: 1500000,
    description: "Cocok untuk personal, UMKM kecil atau bisnis yang baru memulai online.",
    features: [
      "1 Halaman Utama (Landing Page)",
      "Desain Responsif (HP / Desktop)",
      "Tombol Integrasi WhatsApp",
      "Formulir Kontak Sederhana",
      "Setup SEO Basic",
      "Revisi Ringan 2x"
    ],
    duration: "3 - 5 Hari Kerja"
  },
  {
    id: "business",
    name: "Paket Business",
    price: 3500000,
    description: "Cocok untuk company profile, jasa profesional, sekolah, klinik, atau bisnis dengan beberapa menu.",
    features: [
      "Hingga 5 Halaman Utama",
      "Desain Eksklusif & Profesional",
      "Integrasi WhatsApp & Sosial Media",
      "Integrasi Peta Google Maps",
      "Formulir Kontak / Leads Kustom",
      "Setup SEO Basic",
      "Optimasi Kecepatan Mobile Friendly",
      "Revisi Desain 3x"
    ],
    duration: "7 - 14 Hari Kerja",
    isPopular: true
  },
  {
    id: "custom",
    name: "Paket Custom",
    price: 0, // Di-hitung dinamis berdasarkan fitur atau Hubungi Kami
    description: "Cocok untuk kebutuhan khusus seperti toko online, sistem booking, dashboard, atau aplikasi web.",
    features: [
      "Fitur Custom Sesuai Request",
      "Desain Eksklusif Sesuai Brand",
      "Sistem Admin Panel / CMS Mandiri",
      "Penyimpanan Database Aman",
      "Integrasi API pihak ketiga",
      "Support Teknis & Backup",
      "Dokumentasi & Video Panduan"
    ],
    duration: "14 - 30 Hari Kerja"
  }
];

export const PORTFOLIO_MOCKS: PortfolioItem[] = [
  {
    id: "p1",
    title: "Sinar Nusantara Logistik",
    category: "Company Profile",
    description: "Website profil perusahaan ekspedisi nasional dengan fitur pelacakan armada ekspres, area portofolio rute, dan form penawaran biaya logistik cepat.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    features: ["Company Profile", "Tabel Rute", "Form Inquiry", "WhatsApp Chat"]
  },
  {
    id: "p2",
    title: "Kopi Seduh Senja",
    category: "UMKM",
    description: "Katalog menu online interaktif untuk cafe estetik dengan galeri foto suasana, lokasi peta tersemat, dan direct click order ke nomor kasir via WhatsApp.",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    features: ["Katalog Menu", "Google Maps", "Galeri Estetik", "Order WhatsApp"]
  },
  {
    id: "p3",
    title: "FitLife Training Gym",
    category: "Landing Page",
    description: "Landing page penjualan membership gym dengan hitung mundur promo, penawaran paket personal trainer, form leads instan, dan testimoni member.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    features: ["Konversi Tinggi", "Form Registrasi", "Testimoni Slider", "Mobile-first Speed"]
  },
  {
    id: "p4",
    title: "Zahra Hijab Collection",
    category: "Toko Online",
    description: "Toko retail fashion busana muslimah lengkap dengan keranjang belanja otomatis, saringan ukuran/warna produk, checkout otomatis terkirim langsung ke admin WA.",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
    features: ["Kategori Produk", "Sistem Keranjang", "Multi-Varian", "Checkout WhatsApp"]
  },
  {
    id: "p5",
    title: "Medika Utama Clinic",
    category: "Custom System",
    description: "Portal janji temu pasien dan rekam jadwal dokter hewan. Menampilkan jadwal aktif dokter secara mingguan lengkap dengan formulir booking digital terintegrasi database internal.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    features: ["Kalender Booking", "Jadwal Dokter", "Admin Dashboard", "Notifikasi WA"]
  }
];

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: "t1",
    name: "Budi Santoso",
    role: "Pemilik",
    company: "UMKM Nusantara Furniture",
    content: "Website bisnis kami terlihat jauh lebih profesional dan mudah diakses pelanggan. Setelah dipasang peta dan katalog, pesanan dari luar kota meningkat drastis!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    id: "t2",
    name: "Ratna Sari",
    role: "Direktur Operasional",
    company: "Sinar Abadi Logistik",
    content: "Proses pengerjaan jelas, sangat komunikatif, dan hasilnya sesuai ekspektasi. Kami diberi video panduan admin super detail sehingga mengedit konten sendiri sangat mudah.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    id: "t3",
    name: "dr. Adrian Pratama",
    role: "Pendiri",
    company: "Klinik Pratama Sehat",
    content: "Sekarang calon pasien lebih mudah melihat jadwal dokter kami dan langsung mendaftar via sistem booking di website. Sangat menghemat waktu tim admin resepsionis kami.",
    avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=150&q=80",
    rating: 5
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: "faq1",
    question: "Berapa lama proses pembuatan website?",
    answer: "Rata-rata berkisar antara 7 hingga 21 hari kerja. Lama waktu ini sangat tergantung pada jumlah halaman, kelengkapan copywriting/materi dari Anda, serta kompleksitas fitur khusus yang Anda request."
  },
  {
    id: "faq2",
    question: "Apakah website bisa dibuka dengan nyaman di HP?",
    answer: "Ya, 100% mutlak. Kami menganut prinsip responsive design mobile-first. Website yang kami buat otomatis menyesuaikan diri secara lincah dan presisi saat diakses melalui smartphone, tablet, laptop, maupun smart TV."
  },
  {
    id: "faq3",
    question: "Apakah harga pembuatan sudah termasuk domain (.com) dan hosting?",
    answer: "Tentu saja bisa disesuaikan! Paket Starter dan Business kami memiliki opsi yang sudah include domain premium (.com atau .co.id) serta Cloud hosting berkecepatan tinggi pada tahun pertama, sehingga Anda tinggal terima beres saja."
  },
  {
    id: "faq4",
    question: "Apakah saya bisa melakukan revisi jika ada desain yang kurang cocok?",
    answer: "Ya. Kami menyediakan jaminan revisi (sesuai slot kuota komitmen di setiap paket) pada tahap desain layout sebelum proses coding final, memastikan hasil akhirnya benar-benar sejalan dengan selera brand Anda."
  },
  {
    id: "faq5",
    question: "Apakah bisa request fitur khusus di luar paket yang tertulis?",
    answer: "Sangat bisa! Anda bisa memakai fitur Kalkulator Custom kami di web ini untuk memilah fitur apa saja yang diinginkan. Setelah itu, kami akan menganalisis alur logic-nya dan memberikan estimasi pengerjaan yang adil."
  },
  {
    id: "faq6",
    question: "Apakah website saya nanti bisa secara mudah dicari di Google?",
    answer: "Betul. Semua struktur website kami kembangkan dengan prinsip SEO Basic (SEO-friendly HTML5, clean tag sitemap, metadata, dan kecepatan kilat). Untuk memanjat di keyword ketat, Anda bisa berkonsultasi menambahkan kampanye SEO Advanced pasca launching."
  }
];
