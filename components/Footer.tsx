"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowUp } from "lucide-react";
import { BUSINESSES } from "@/lib/businesses";

export default function Footer() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    businesses: false,
    company: false,
    contact: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-ink-navy text-paper-ivory pt-16 lg:pt-24 pb-12 border-t border-hairline/20">
      <div className="max-w-container mx-auto px-5 md:px-12 lg:px-24">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 pb-16">
          {/* Column 1: Brand & Tagline (Always open) */}
          <div className="lg:col-span-4 pr-0 lg:pr-8">
            <Link
              href="/"
              className="font-fraunces text-xl font-medium tracking-widest uppercase text-paper-ivory block mb-4"
            >
              NUBIRA GROUP
            </Link>
            <p className="font-inter text-sm lg:text-base text-paper-ivory/80 max-w-sm leading-relaxed mb-6">
              Five businesses. One operating standard across trade, mobility,
              manufacturing technology, and fashion.
            </p>
            <p className="font-mono text-xs uppercase tracking-mono text-slate">
              Calm authority · Built in-house
            </p>
          </div>

          {/* Column 2: Businesses */}
          <div className="lg:col-span-3 border-t lg:border-t-0 border-hairline/15 pt-4 lg:pt-0">
            {/* Mobile Header (Button) */}
            <button
              type="button"
              onClick={() => toggleSection("businesses")}
              className="w-full flex items-center justify-between lg:hidden text-left py-2"
            >
              <span className="font-mono text-xs uppercase tracking-mono text-antique-gold font-medium">
                Businesses
              </span>
              <ChevronDown
                className={`w-4 h-4 text-paper-ivory/60 transition-transform duration-200 ${
                  openSections.businesses ? "rotate-180" : ""
                }`}
                strokeWidth={1.5}
              />
            </button>

            {/* Desktop Header */}
            <h5 className="hidden lg:block font-mono text-xs uppercase tracking-mono text-antique-gold font-medium mb-6">
              Businesses
            </h5>

            {/* Links */}
            <ul
              className={`space-y-3.5 mt-3 lg:mt-0 ${
                openSections.businesses ? "block" : "hidden lg:block"
              }`}
            >
              {BUSINESSES.map((b) => (
                <li key={b.id}>
                  <Link
                    href={`/businesses/${b.slug}`}
                    className="font-inter text-[15px] text-paper-ivory/80 hover:text-paper-ivory hover:underline underline-offset-4 decoration-antique-gold decoration-1 transition-all"
                  >
                    {b.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/businesses"
                  className="font-inter text-[13px] text-antique-gold hover:underline underline-offset-4 flex items-center gap-1 mt-2 font-medium"
                >
                  All Businesses Index →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2 border-t lg:border-t-0 border-hairline/15 pt-4 lg:pt-0">
            {/* Mobile Header */}
            <button
              type="button"
              onClick={() => toggleSection("company")}
              className="w-full flex items-center justify-between lg:hidden text-left py-2"
            >
              <span className="font-mono text-xs uppercase tracking-mono text-antique-gold font-medium">
                Company
              </span>
              <ChevronDown
                className={`w-4 h-4 text-paper-ivory/60 transition-transform duration-200 ${
                  openSections.company ? "rotate-180" : ""
                }`}
                strokeWidth={1.5}
              />
            </button>

            {/* Desktop Header */}
            <h5 className="hidden lg:block font-mono text-xs uppercase tracking-mono text-antique-gold font-medium mb-6">
              Company
            </h5>

            <ul
              className={`space-y-3.5 mt-3 lg:mt-0 ${
                openSections.company ? "block" : "hidden lg:block"
              }`}
            >
              <li>
                <Link
                  href="/about"
                  className="font-inter text-[15px] text-paper-ivory/80 hover:text-paper-ivory hover:underline underline-offset-4 decoration-antique-gold decoration-1 transition-all"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-inter text-[15px] text-paper-ivory/80 hover:text-paper-ivory hover:underline underline-offset-4 decoration-antique-gold decoration-1 transition-all"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/contact?dept=careers"
                  className="font-inter text-[15px] text-paper-ivory/80 hover:text-paper-ivory hover:underline underline-offset-4 decoration-antique-gold decoration-1 transition-all"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact?dept=press"
                  className="font-inter text-[15px] text-paper-ivory/80 hover:text-paper-ivory hover:underline underline-offset-4 decoration-antique-gold decoration-1 transition-all"
                >
                  Press & Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div className="lg:col-span-3 border-t lg:border-t-0 border-hairline/15 pt-4 lg:pt-0">
            {/* Mobile Header */}
            <button
              type="button"
              onClick={() => toggleSection("contact")}
              className="w-full flex items-center justify-between lg:hidden text-left py-2"
            >
              <span className="font-mono text-xs uppercase tracking-mono text-antique-gold font-medium">
                Get In Touch
              </span>
              <ChevronDown
                className={`w-4 h-4 text-paper-ivory/60 transition-transform duration-200 ${
                  openSections.contact ? "rotate-180" : ""
                }`}
                strokeWidth={1.5}
              />
            </button>

            {/* Desktop Header */}
            <h5 className="hidden lg:block font-mono text-xs uppercase tracking-mono text-antique-gold font-medium mb-6">
              Get In Touch
            </h5>

            <div
              className={`space-y-3 mt-3 lg:mt-0 text-paper-ivory/80 font-inter text-[14px] leading-relaxed ${
                openSections.contact ? "block" : "hidden lg:block"
              }`}
            >
              <div>
                <p className="font-medium text-antique-gold text-xs font-mono uppercase tracking-wide mb-1">
                  Corporate Office
                </p>
                <p>The Nubira Group</p>
                <p className="text-paper-ivory/70 text-xs">
                  Kolkata / West Bengal, India
                </p>
              </div>

              <div className="pt-2">
                <p className="font-medium text-antique-gold text-xs font-mono uppercase tracking-wide mb-1">
                  Direct Inquiries
                </p>
                <a
                  href="mailto:contact@nubiragroup.com"
                  className="hover:text-antique-gold transition-colors block text-xs text-paper-ivory/90"
                >
                  contact@nubiragroup.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar Divider */}
        <div className="border-t border-paper-ivory/15 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-paper-ivory/60 font-inter">
          <p>© 2026 Nubira Group. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-paper-ivory transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-paper-ivory transition-colors"
            >
              Terms
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="hover:text-antique-gold flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-paper-ivory/80 ml-2 transition-colors cursor-pointer"
            >
              <span>↑ Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
