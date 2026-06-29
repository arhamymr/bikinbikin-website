/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (id: string) => void;
  variant?: "default" | "pills";
  className?: string;
}

export default function Tabs({
  tabs,
  activeTab,
  onChange,
  variant = "default",
  className = "",
}: TabsProps) {
// ponytail: Redesigned tabs (light mode only, monochrome black/white, no shadows)
  if (variant === "pills") {
    return (
      <div className={`flex flex-wrap justify-center gap-2 ${className}`}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`py-2 px-5 rounded-md text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === tab.id
                ? "bg-black text-white"
                : "bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-950"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    );
  }

  // Default: segmented control style
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="inline-flex bg-white p-1 rounded-md border border-slate-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`py-2 px-6 rounded-md text-sm font-bold transition-all ${
              activeTab === tab.id
                ? "bg-black text-white"
                : "text-slate-605 hover:text-slate-950 hover:bg-slate-50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
