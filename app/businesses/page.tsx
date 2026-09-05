import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { BUSINESSES } from "@/lib/businesses";

export const metadata: Metadata = {
  title: "Our Businesses — Nubira Group",
  description:
    "Explore the five operating companies of Nubira Group across trade, mobility, manufacturing technology, and luxury fashion.",
};

export default function BusinessesIndexPage() {
  const filterTags = [
    "All",
    "Commerce",
    "Mobility",
    "Manufacturing Tech",
    "Fashion & Craft",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-paper-ivory text-charcoal">
      {/* Navbar with light background on initial load */}
      <Navbar themeVariant="light" />

      <main className="flex-grow pt-24 lg:pt-32">
        {/* SECTION 1: COMPACT PAGE HEADER */}
        <section className="max-w-container mx-auto px-5 md:px-12 lg:px-24 py-12 lg:py-16 border-b border-hairline">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-mono text-antique-gold font-medium block mb-3">
              Portfolio Overview
            </span>
            <span className="w-16 h-[1px] bg-antique-gold mb-4 block" />
            <h1 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-medium text-ink-navy mb-4 leading-tight">
              Five industries. One operating standard.
            </h1>
            <p className="font-inter text-base sm:text-lg text-slate leading-relaxed mb-8">
              Each Nubira Group enterprise is built with deep vertical competence,
              direct operational ownership, and proprietary technology designed
              for resilience.
            </p>

            {/* Filter / Category Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {filterTags.map((tag, idx) => (
                <span
                  key={tag}
                  className={`font-mono text-xs uppercase tracking-wide px-3 py-1.5 rounded-sharp border transition-colors ${
                    idx === 0
                      ? "bg-ink-navy text-paper-ivory border-ink-navy"
                      : "bg-transparent text-slate border-hairline"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: ALTERNATING BUSINESS ROWS */}
        <div className="divide-y divide-hairline">
          {BUSINESSES.map((business, index) => {
            const isEven = index % 2 === 1; // Even index in 0-based is odd row (Row 1 is index 0: image left, Row 2 is index 1: image right)

            return (
              <section
                key={business.id}
                id={business.slug}
                className="py-14 md:py-20 lg:py-24"
              >
                <div className="max-w-container mx-auto px-5 md:px-12 lg:px-24">
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                      isEven ? "lg:grid-flow-dense" : ""
                    }`}
                  >
                    {/* Screenshot Column (Left for odd rows, Right for even rows) */}
                    <div
                      className={`lg:col-span-6 ${
                        isEven ? "lg:col-start-7" : "lg:col-start-1"
                      }`}
                    >
                      <div className="relative bg-ink-navy/5 border border-hairline rounded-sharp overflow-hidden shadow-none group">
                        {/* 4px Sub-brand Color Tab on Top of Image */}
                        <div
                          className="w-full h-1"
                          style={{ backgroundColor: business.brandColor }}
                        />

                        {/* Image Frame */}
                        <div className="relative aspect-[16/10] w-full bg-paper-ivory overflow-hidden">
                          {business.screenshot ? (
                            <div className="relative w-full h-full">
                              <Image
                                src={business.screenshot}
                                alt={
                                  business.screenshotCaption || business.name
                                }
                                fill
                                className="object-cover grayscale contrast-125 brightness-95 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-300"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                              />
                              <div className="absolute inset-0 bg-ink-navy/4 pointer-events-none mix-blend-multiply group-hover:opacity-0 transition-opacity" />
                            </div>
                          ) : null}

                          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none -z-10 p-6 text-center">
                            <span className="font-fraunces text-3xl text-slate/30 uppercase tracking-widest font-medium">
                              {business.name}
                            </span>
                            <span className="font-mono text-xs text-slate/40 mt-1 uppercase tracking-wider">
                              {business.categoryShort}
                            </span>
                          </div>
                        </div>

                        {/* Screenshot Caption below in mono */}
                        <div className="px-4 py-2.5 bg-paper-ivory border-t border-hairline flex items-center justify-between">
                          <span className="font-mono text-[11px] text-slate truncate">
                            {business.screenshotCaption}
                          </span>
                          <span className="font-mono text-[10px] text-antique-gold uppercase tracking-mono shrink-0 ml-2">
                            PROPRIETARY
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Column (Right for odd rows, Left for even rows) */}
                    <div
                      className={`lg:col-span-6 ${
                        isEven ? "lg:col-start-1" : "lg:col-start-7"
                      }`}
                    >
                      {/* Sub-brand Clarification (for Nubira Creation) */}
                      {business.subClarification && (
                        <p className="font-mono text-xs text-slate/80 italic mb-2">
                          {business.subClarification}
                        </p>
                      )}

                      {/* Category Label */}
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="w-2 h-2 rounded-none inline-block"
                          style={{ backgroundColor: business.brandColor }}
                        />
                        <span className="font-mono text-xs uppercase tracking-mono text-antique-gold font-medium">
                          {business.categoryShort}
                        </span>
                      </div>

                      {/* Business Name */}
                      <h2 className="font-fraunces text-2xl sm:text-3xl lg:text-4xl font-medium text-ink-navy mb-3">
                        {business.name}
                      </h2>

                      {/* One-line positioning statement */}
                      <p className="font-inter text-base sm:text-lg text-slate mb-4 font-normal leading-snug">
                        {business.tagline}
                      </p>

                      {/* Description (3-4 lines) */}
                      <p className="font-inter text-sm sm:text-base text-charcoal/85 leading-relaxed mb-6">
                        {business.fullDescription}
                      </p>

                      {/* 2-3 Feature Bullets with 4px Gold Square markers */}
                      <ul className="space-y-2.5 mb-8">
                        {business.features.slice(0, 3).map((feat, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 font-inter text-sm text-charcoal/90"
                          >
                            {/* 4px square gold bullet marker */}
                            <span className="w-1.5 h-1.5 bg-antique-gold rounded-none mt-2 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Action Buttons: [Visit site ↗] (primary) and [Read more →] (secondary) */}
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                        <Button
                          href={business.externalUrl}
                          variant="primary"
                          size="md"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="justify-center"
                        >
                          <span className="flex items-center gap-2">
                            <span>Visit {business.name.toLowerCase().replace(/\s+/g, "")}.com</span>
                            <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.5} />
                          </span>
                        </Button>

                        <Button
                          href={`/businesses/${business.slug}`}
                          variant="secondary"
                          size="md"
                          className="justify-center"
                        >
                          <span className="flex items-center gap-1.5">
                            <span>Read full profile</span>
                            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* SECTION 3: CLOSING CTA */}
        <section className="bg-paper-ivory border-t border-hairline py-20 lg:py-28 text-center">
          <div className="max-w-2xl mx-auto px-5 md:px-12">
            <span className="font-mono text-xs uppercase tracking-mono text-antique-gold font-medium mb-3 block">
              Inquiries &amp; Partnerships
            </span>
            <span className="w-16 h-[1px] bg-antique-gold mx-auto mb-4 block" />
            <h2 className="font-fraunces text-3xl sm:text-4xl font-medium text-ink-navy mb-6">
              Want to explore a specific business in depth?
            </h2>
            <p className="font-inter text-slate text-base sm:text-lg mb-10 leading-relaxed">
              Our operating leadership is available for commercial partnerships,
              enterprise integrations, and institutional inquiries.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
                Contact the group
              </Button>
              <Button href="/" variant="secondary" size="lg" className="w-full sm:w-auto">
                Return to home
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
