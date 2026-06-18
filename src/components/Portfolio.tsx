/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ExternalLink, CheckCircle, Eye, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_MOCKS } from "../data";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("Semua");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const categories = ["Semua", "Company Profile", "UMKM", "Landing Page", "Toko Online", "Custom System"];

  const filteredProjects = PORTFOLIO_MOCKS.filter((p) => {
    if (activeFilter === "Semua") return true;
    if (activeFilter === "Custom System" && p.category === "Custom System") return true;
    return p.category === activeFilter;
  });

  return (
    <section id="portofolio-kami" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-700 bg-indigo-50 py-1 px-3 rounded-full">
            Karya Terbaik Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight border-b-0">
            Portofolio & Template Unggulan
          </h2>
          <p className="text-base text-slate-600 leading-relaxed text-center">
            Kami telah sukses membantu ratusan pengusaha digital, instansi sekolah, klinik kecantikan, hingga cafe lokal memiliki eksistensi digital yang modern dan berorientasi konversi.
          </p>
        </div>

        {/* Categories Tab selector bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`py-2 px-5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === cat
                  ? "bg-indigo-750 text-white shadow-md shadow-indigo-100"
                  : "bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-950"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="space-y-4">
                {/* Visual Thumbnail */}
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle hover cover with action details */}
                  <div className={`absolute inset-0 bg-slate-950/40 backdrop-blur-[1px] flex items-center justify-center transition-opacity duration-300 ${
                    hoveredProject === project.id ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}>
                    <span className="bg-white text-slate-950 font-bold text-xs py-2 px-4 rounded-full shadow-lg flex items-center space-x-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-4 h-4 text-indigo-600" />
                      <span>Inspirasi Desain</span>
                    </span>
                  </div>
                  {/* Tag Category overlay top-left */}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-900 border border-slate-150 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-sm">
                    {project.category}
                  </span>
                </div>

                {/* Info Text panel */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[60px]">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tags / Features sub-container */}
              <div className="p-6 pt-0 space-y-4">
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  {project.features.map((feat, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-50 border border-slate-200 text-slate-600 text-[10px] font-mono px-2 py-0.5 rounded-md"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    const cal = document.getElementById("kalkulator-custom");
                    if (cal) {
                      cal.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="w-full inline-flex items-center justify-center text-xs font-bold text-indigo-700 bg-indigo-50/50 border border-indigo-100/70 py-2.5 px-4 rounded-full hover:bg-indigo-100/90 transition-all cursor-pointer"
                >
                  <span>Gunakan Pola Layanan Ini</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
