/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Plus, Minus, Question } from "@phosphor-icons/react";
import type { FAQItem } from "../../types";

interface AccordionProps {
  items: FAQItem[];
  activeId: string | null;
  onToggle: (id: string) => void;
  className?: string;
}

export default function Accordion({ items, activeId, onToggle, className = "" }: AccordionProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item) => {
        const isOpen = activeId === item.id;
        return (
          <div
            key={item.id}
// ponytail: Redesigned active accordion to monochrome black/white with no shadows (light mode only)
            className={`border rounded-md transition-all overflow-hidden ${
              isOpen
                ? "bg-slate-50/50 border-black"
                : "bg-white border-slate-200 hover:border-slate-350"
            }`}
          >
            {/* Accordion Trigger header */}
            <button
              onClick={() => onToggle(item.id)}
              className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus:ring-0 cursor-pointer select-none"
            >
              <div className="flex items-center space-x-3.5 pr-4">
                <Question
                  className={`w-5 h-5 flex-shrink-0 ${
                    isOpen ? "text-black" : "text-slate-400"
                  }`}
                />
                <span className="font-bold text-sm sm:text-base text-slate-950">
                  {item.question}
                </span>
              </div>
              <div
                className={`p-1.5 rounded-lg border ${
                  isOpen
                    ? "bg-black border-black text-white"
                    : "bg-slate-50 border-slate-200 text-slate-600"
                } transition-all flex-shrink-0`}
              >
                {isOpen ? (
                  <Minus size={14} weight="bold" />
                ) : (
                  <Plus size={14} weight="bold" />
                )}
              </div>
            </button>

            {/* Accordion Content Body */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                isOpen
                  ? "max-h-[500px] border-t border-slate-100 opacity-100"
                  : "max-h-0 opacity-0 pointer-events-none"
              }`}
            >
              <div className="p-5 sm:p-6 bg-white shrink-0">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
