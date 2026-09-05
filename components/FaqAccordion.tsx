"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
}

export default function FaqAccordion({ items, className = "" }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <div className={`divide-y divide-hairline border-y border-hairline ${className}`}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="transition-colors">
            <button
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              className="w-full py-5 sm:py-6 flex items-start justify-between text-left gap-4 group cursor-pointer"
            >
              <h4 className="font-inter text-base sm:text-lg font-semibold text-ink-navy group-hover:text-antique-gold transition-colors flex items-start gap-3">
                <span className="text-antique-gold font-mono text-xs sm:text-sm mt-0.5 font-medium shrink-0">
                  0{idx + 1}.
                </span>
                <span>{item.q}</span>
              </h4>
              <div
                className={`w-7 h-7 rounded-full border border-hairline flex items-center justify-center text-slate group-hover:border-antique-gold group-hover:text-antique-gold shrink-0 transition-transform duration-300 mt-0.5 ${
                  isOpen ? "rotate-180 bg-antique-gold/10 border-antique-gold text-antique-gold" : "bg-white/50"
                }`}
              >
                <ChevronDown className="w-4 h-4" strokeWidth={1.5} />
              </div>
            </button>

            {isOpen && (
              <div className="pb-6 pl-7 sm:pl-8 pr-4">
                <p className="font-inter text-sm sm:text-base text-slate leading-relaxed border-l-2 border-antique-gold/40 pl-4 py-1">
                  {item.a}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
