import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  Target,
  Scale,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { BUSINESSES } from "@/lib/businesses";

export const metadata: Metadata = {
  title: "About Us — Nubira Group",
  description:
    "Learn about Nubira Group's origin, timeline, operating principles, and long-term vision across trade, mobility, manufacturing, and craft.",
};

export default function AboutPage() {
  const milestones = [
    {
      year: "2019",
      title: "Group Founded",
      description: "Established with a mandate to develop proprietary operating companies.",
    },
    {
      year: "2021",
      title: "Anga9 Launched",
      description: "Direct B2B wholesale commerce marketplace deployed to remove middleman markup.",
    },
    {
      year: "2023",
      title: "Riksho & Gargi",
      description: "Expansion into commission-free mobility (Riksho) and luxury handloom craft (House of Gargi).",
    },
    {
      year: "2025",
      title: "Zigza & Nubira Creation",
      description: "Industrial scaling through garment factory MES software (Zigza) and bulk OEM production (Nubira Creation).",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-paper-ivory text-charcoal">
      {/* Global Navbar (light variant for Ivory page header) */}
      <Navbar themeVariant="light" />

      <main className="flex-grow pt-24 lg:pt-32">
        {/* SECTION 1: HEADER */}
        <section className="max-w-container mx-auto px-5 md:px-12 lg:px-24 py-12 lg:py-16 border-b border-hairline">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-mono text-antique-gold font-medium block mb-3">
              Corporate Governance &amp; Origin
            </span>
            <span className="w-16 h-[1px] bg-antique-gold mb-4 block" />
            <h1 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-medium text-ink-navy mb-4 leading-tight">
              Built across industries, run by one team.
            </h1>
            <p className="font-inter text-base sm:text-lg text-slate leading-relaxed">
              Nubira Group is an Indian multi-sector holding entity founded on
              direct operational ownership. We do not aggregate passive
              investments; we build, engineer, and operate foundational businesses
              that eliminate economic friction.
            </p>
          </div>
        </section>

        {/* SECTION 2: STORY / TIMELINE */}
        <section className="max-w-container mx-auto px-5 md:px-12 lg:px-24 py-16 lg:py-24">
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-xs uppercase tracking-mono text-antique-gold font-medium block mb-3">
              Trajectory
            </span>
            <span className="w-16 h-[1px] bg-antique-gold mb-4 block" />
            <h2 className="font-fraunces text-3xl sm:text-4xl font-medium text-ink-navy mb-4">
              Our story
            </h2>
            <p className="font-inter text-slate text-base leading-relaxed">
              From our origins in trade distribution to real-time manufacturing
              software, our growth has been disciplined, asset-backed, and
              operationally tested.
            </p>
          </div>

          {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
          <div className="hidden lg:grid grid-cols-4 gap-8 relative before:absolute before:top-6 before:left-4 before:right-4 before:h-[1px] before:bg-hairline before:z-0">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-start">
                <div className="flex items-center gap-3 mb-6 bg-paper-ivory pr-4">
                  <span className="w-3 h-3 rounded-none bg-antique-gold border-2 border-paper-ivory" />
                  <span className="font-mono text-xl font-medium text-antique-gold">
                    {m.year}
                  </span>
                </div>
                <h4 className="font-fraunces text-xl font-medium text-ink-navy mb-2">
                  {m.title}
                </h4>
                <p className="font-inter text-sm text-slate leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile Vertical Timeline */}
          <div className="lg:hidden relative pl-6 border-l border-antique-gold space-y-10">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative">
                <span className="absolute -left-[31px] top-1 w-3 h-3 bg-antique-gold" />
                <span className="font-mono text-sm font-medium text-antique-gold block mb-1">
                  {m.year}
                </span>
                <h4 className="font-fraunces text-lg font-medium text-ink-navy mb-1.5">
                  {m.title}
                </h4>
                <p className="font-inter text-sm text-slate leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: MISSION / VISION / VALUES (Exactly 3 Columns) */}
        <section className="bg-white/50 border-t border-hairline py-16 lg:py-24">
          <div className="max-w-container mx-auto px-5 md:px-12 lg:px-24">
            <div className="max-w-2xl mb-14">
              <span className="font-mono text-xs uppercase tracking-mono text-antique-gold font-medium block mb-3">
                Foundational Charter
              </span>
              <span className="w-16 h-[1px] bg-antique-gold mb-4 block" />
              <h2 className="font-fraunces text-3xl sm:text-4xl font-medium text-ink-navy mb-4">
                Mission, vision, and principles
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Mission */}
              <div className="p-8 bg-paper-ivory border border-hairline rounded-sharp">
                <div className="w-10 h-10 rounded-sharp bg-ink-navy/5 border border-hairline flex items-center justify-center mb-6 text-antique-gold">
                  <Target className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h4 className="font-fraunces text-xl font-medium text-ink-navy mb-3">
                  Mission
                </h4>
                <p className="font-inter text-sm text-slate leading-relaxed">
                  Build and operate scalable platforms that solve core structural
                  inefficiencies across Indian commerce, transportation, and
                  production.
                </p>
              </div>

              {/* Vision */}
              <div className="p-8 bg-paper-ivory border border-hairline rounded-sharp">
                <div className="w-10 h-10 rounded-sharp bg-ink-navy/5 border border-hairline flex items-center justify-center mb-6 text-antique-gold">
                  <Compass className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h4 className="font-fraunces text-xl font-medium text-ink-navy mb-3">
                  Vision
                </h4>
                <p className="font-inter text-sm text-slate leading-relaxed">
                  Establish a durable Indian holding group recognized for calm
                  authority, industrial capability, proprietary engineering, and
                  ethical execution.
                </p>
              </div>

              {/* Values */}
              <div className="p-8 bg-paper-ivory border border-hairline rounded-sharp">
                <div className="w-10 h-10 rounded-sharp bg-ink-navy/5 border border-hairline flex items-center justify-center mb-6 text-antique-gold">
                  <Scale className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h4 className="font-fraunces text-xl font-medium text-ink-navy mb-3">
                  Values
                </h4>
                <p className="font-inter text-sm text-slate leading-relaxed">
                  Direct execution over intermediaries, transparent unit
                  economics, precision craftsmanship, and respectful long-term
                  stewardship.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: OUR BUSINESSES (Mini Recap Strip) */}
        <section className="border-t border-hairline py-12 lg:py-16">
          <div className="max-w-container mx-auto px-5 md:px-12 lg:px-24">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-hairline">
              <div>
                <span className="font-mono text-xs uppercase tracking-mono text-antique-gold font-medium block mb-1">
                  Active Holdings
                </span>
                <h3 className="font-fraunces text-xl font-medium text-ink-navy">
                  The Nubira portfolio
                </h3>
              </div>

              <Link
                href="/businesses"
                className="font-inter text-xs text-slate hover:text-ink-navy flex items-center gap-1 transition-colors"
              >
                <span>View index</span>
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {BUSINESSES.map((b) => (
                <Link
                  key={b.id}
                  href={`/businesses/${b.slug}`}
                  className="p-4 bg-white/80 border border-hairline hover:border-antique-gold rounded-sharp transition-all group"
                >
                  <div
                    className="w-full h-1 mb-3"
                    style={{ backgroundColor: b.brandColor }}
                  />
                  <h5 className="font-inter text-sm font-semibold text-ink-navy group-hover:text-antique-gold transition-colors mb-1">
                    {b.name}
                  </h5>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-slate truncate">
                    {b.categoryShort}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: CLOSING CTA */}
        <section className="bg-paper-ivory border-t border-hairline py-20 lg:py-28 text-center">
          <div className="max-w-2xl mx-auto px-5 md:px-12">
            <span className="font-mono text-xs uppercase tracking-mono text-antique-gold font-medium mb-3 block">
              Engagement
            </span>
            <span className="w-16 h-[1px] bg-antique-gold mx-auto mb-4 block" />
            <h2 className="font-fraunces text-3xl sm:text-4xl font-medium text-ink-navy mb-6">
              Connect with Nubira Group leadership
            </h2>
            <p className="font-inter text-slate text-base sm:text-lg mb-10 leading-relaxed">
              We welcome dialogue with institutional partners, enterprise
              clients, and industry collaborators.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
                Contact the group
              </Button>
              <Button href="/businesses" variant="secondary" size="lg" className="w-full sm:w-auto">
                Explore our businesses
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
