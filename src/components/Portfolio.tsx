/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Eye, ArrowUpRight } from "@phosphor-icons/react";
import { PORTFOLIO_MOCKS } from "../data";
import SectionHeader from "./ui/SectionHeader";
import Tabs from "./ui/Tabs";
import Card from "./ui/Card";

// ponytail: Simplified portfolio page to light-mode monochrome, removed all hover shadows and colorful gradients.
export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("Semua");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const categories = ["Semua", "Company Profile", "UMKM", "Landing Page", "Toko Online", "Custom System"];

  const categoryTabs = categories.map((cat) => ({ id: cat, label: cat }));

  const filteredProjects = PORTFOLIO_MOCKS.filter((p) => {
    if (activeFilter === "Semua") return true;
    if (activeFilter === "Custom System" && p.category === "Custom System") return true;
    return p.category === activeFilter;
  });

  return (
    <section id="portofolio-kami" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Karya Terbaik Kami"
          title="Portofolio & Template Unggulan"
          description="Kami telah sukses membantu ratusan pengusaha digital, instansi sekolah, klinik kecantikan, hingga cafe lokal memiliki eksistensi digital yang modern dan berorientasi konversi."
          className="mb-12"
        />

        <Tabs
          tabs={categoryTabs}
          activeTab={activeFilter}
          onChange={setActiveFilter}
          variant="pills"
          className="mb-10 overflow-x-auto pb-2 no-scrollbar"
        />

        {/* Portfolio Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden group flex flex-col justify-between"
              hover
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
                  {/* Subtle hover cover with action details - No shadows */}
                  <div className={`absolute inset-0 bg-black/45 backdrop-blur-[1px] flex items-center justify-center transition-opacity duration-300 ${
                    hoveredProject === project.id ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}>
                    <span className="bg-white text-slate-950 font-bold text-xs py-2 px-4 rounded-md flex items-center space-x-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-4 h-4 text-black" />
                      <span>Inspirasi Desain</span>
                    </span>
                  </div>
                  {/* Tag Category overlay top-left */}
                  <span className="absolute top-4 left-4 bg-white/95 text-slate-900 border border-slate-200 text-[10px] font-medium uppercase px-3 py-1 rounded-md">
                    {project.category}
                  </span>
                </div>

                {/* Info Text panel */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-black transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-650 leading-relaxed min-h-[60px]">
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
                  className="w-full inline-flex items-center justify-center text-xs font-bold text-black bg-zinc-100 border border-zinc-200 py-2.5 px-4 rounded-md hover:bg-zinc-200 transition-all cursor-pointer"
                >
                  <span>Gunakan Pola Layanan Ini</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>

            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
