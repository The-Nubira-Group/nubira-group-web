import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Nubira Group",
  description: "Terms and conditions of use for Nubira Group web properties.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-paper-ivory text-charcoal">
      <Navbar themeVariant="light" />
      <main className="flex-grow pt-24 lg:pt-32">
        <div className="max-w-container mx-auto px-5 md:px-12 lg:px-24 py-16 lg:py-24 max-w-4xl">
          <span className="font-mono text-xs uppercase tracking-mono text-antique-gold font-medium block mb-3">
            Legal &amp; Compliance
          </span>
          <span className="w-16 h-[1px] bg-antique-gold mb-4 block" />
          <h1 className="font-fraunces text-3xl sm:text-4xl font-medium text-ink-navy mb-8">
            Terms of Service
          </h1>
          <div className="space-y-6 font-inter text-slate text-sm sm:text-base leading-relaxed">
            <p>
              By accessing any website operated by Nubira Group, you agree to
              comply with these terms and conditions and applicable Indian and
              international laws.
            </p>
            <h3 className="font-fraunces text-xl text-ink-navy pt-4">
              Intellectual Property
            </h3>
            <p>
              All trademarks, brands, proprietary trade names (including Anga9,
              Riksho, Zigza, House of Gargi, and Nubira Creation), software
              interfaces, and design tokens are the exclusive property of Nubira
              Group or its respective subsidiaries.
            </p>
            <h3 className="font-fraunces text-xl text-ink-navy pt-4">
              Commercial Inquiries &amp; Quotations
            </h3>
            <p>
              Submissions sent through corporate inquiry forms do not constitute a
              binding agreement until formalized through signed corporate
              contracts.
            </p>
            <p className="font-mono text-xs text-slate pt-4">
              Last updated: September 2026 · Nubira Group Legal Department
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
