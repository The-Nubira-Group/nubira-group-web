import React from "react";
import Link from "next/link";
import { ArrowRight, Layers, Cpu, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Button from "@/components/Button";
import StatBlock from "@/components/StatBlock";
import BusinessCard from "@/components/BusinessCard";
import { BUSINESSES } from "@/lib/businesses";

export default function HomePage() {
  const topThree = BUSINESSES.slice(0, 3); // Anga9, Riksho, Zigza
  const bottomTwo = BUSINESSES.slice(3, 5); // House of Gargi, Nubira Creation

  const groupStats = [
    { numeral: "05", label: "Businesses", sublabel: "Active Entities" },
    { numeral: "50,000+", label: "Users / Clients", sublabel: "Served Across Platforms" },
    { numeral: "04", label: "Sectors", sublabel: "Integrated Operations" },
    { numeral: "2019", label: "Founded", sublabel: "Continuous Growth" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-paper-ivory text-charcoal selection:bg-ink-navy selection:text-paper-ivory">
      {/* Global Navbar (transparent-dark for Navy hero) */}
      <Navbar themeVariant="transparent-dark" />

      {/* SECTION 1: HERO (Option (b) — Plain Navy with thin gold geometric line motif per docs/02-HOME.md) */}
      <section className="relative bg-ink-navy text-paper-ivory min-h-[720px] lg:min-h-[800px] flex items-center pt-28 lg:pt-36 pb-24 overflow-hidden border-b border-hairline/20">
        {/* Subtle Architectural Gold Line Motif (Structural blueprint/geometric hairlines, 25% opacity) */}
        <div className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-100 900L500 0M300 900L900 0M700 900L1300 0M1100 900L1700 0"
              stroke="#B9873E"
              strokeWidth="0.75"
              strokeDasharray="4 8"
            />
            <circle
              cx="720"
              cy="450"
              r="360"
              stroke="#B9873E"
              strokeWidth="0.5"
              strokeOpacity="0.4"
            />
            <circle
              cx="720"
              cy="450"
              r="180"
              stroke="#B9873E"
              strokeWidth="0.5"
              strokeOpacity="0.25"
            />
          </svg>
        </div>

        <div className="max-w-container mx-auto px-5 md:px-12 lg:px-24 w-full relative z-10">
          <div className="max-w-3xl">
            {/* Tagline / Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-antique-gold" />
              <p className="font-mono text-xs uppercase tracking-mono text-antique-gold font-medium">
                One group, five industries
              </p>
            </div>

            {/* Display XL Headline: 2 lines (Line 1 Ivory, Line 2 Gold) */}
            <h1 className="font-fraunces text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tightest leading-[1.08] mb-8 text-paper-ivory">
              FROM COMMERCE <br />
              <span className="text-antique-gold">TO CRAFT.</span>
            </h1>

            {/* Subhead: Body Large (Ivory 85%, max 560px) */}
            <p className="font-inter text-base sm:text-lg lg:text-xl text-paper-ivory/85 max-w-[560px] leading-relaxed mb-10">
              Nubira Group builds and operates platforms across trade, mobility,
              manufacturing technology, and fashion — five businesses, one
              standard of execution.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <Button href="#our-businesses" variant="secondary-dark" size="lg">
                Explore our businesses
              </Button>

              <Link
                href="/about"
                className="font-inter text-[15px] font-medium text-paper-ivory/90 hover:text-antique-gold flex items-center justify-center sm:justify-start gap-2 py-3 transition-colors group"
              >
                <span>About the group</span>
                <ArrowRight
                  className="w-4 h-4 text-antique-gold group-hover:translate-x-1 transition-transform"
                  strokeWidth={1.5}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: GROUP STAT STRIP (Transition between Navy & Ivory) */}
      <section className="relative bg-paper-ivory -mt-8 lg:-mt-12 z-20">
        <div className="max-w-container mx-auto px-5 md:px-12 lg:px-24">
          <StatBlock stats={groupStats} theme="light" className="shadow-sm" />
        </div>
      </section>

      {/* SECTION 3: OUR BUSINESSES (Asymmetric 3 + 2 Grid) */}
      <Section
        id="our-businesses"
        eyebrow="OUR BUSINESSES"
        title="Five businesses. One standard."
        description="Every Nubira platform operates autonomously in its market while adhering to our shared discipline of direct value, operational depth, and proprietary infrastructure."
        padding="normal"
      >
        {/* Asymmetric 3+2 Grid */}
        <div className="space-y-8">
          {/* Top Row: 3 Tall Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {topThree.map((business) => (
              <BusinessCard
                key={business.id}
                business={business}
                variant="tall"
              />
            ))}
          </div>

          {/* Bottom Row: 2 Wide Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {bottomTwo.map((business) => (
              <BusinessCard
                key={business.id}
                business={business}
                variant="wide"
              />
            ))}
          </div>
        </div>

        {/* Index Quick Link */}
        <div className="mt-12 text-center">
          <Button href="/businesses" variant="secondary" size="md">
            View full portfolio index →
          </Button>
        </div>
      </Section>

      {/* SECTION 4: WHY ONE GROUP (Credibility Block - 3 Columns) */}
      <section className="bg-paper-ivory border-t border-hairline py-20 lg:py-28">
        <div className="max-w-container mx-auto px-5 md:px-12 lg:px-24">
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-xs uppercase tracking-mono text-antique-gold font-medium block mb-3">
              Operating Principles
            </span>
            <span className="w-16 h-[1px] bg-antique-gold mb-4 block" />
            <h2 className="font-fraunces text-3xl lg:text-4xl font-medium text-ink-navy mb-4">
              Why one group
            </h2>
            <p className="font-inter text-slate text-base leading-relaxed">
              We operate across diverse sectors with a unified philosophy: remove
              unnecessary intermediaries, own critical infrastructure, and build
              for lasting operational resilience.
            </p>
          </div>

          {/* Exactly 3 Credibility Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Column 1 */}
            <div className="p-6 bg-white/60 border border-hairline rounded-sharp">
              <div className="w-10 h-10 rounded-sharp bg-ink-navy/5 flex items-center justify-center text-ink-navy mb-5 border border-hairline">
                <Layers className="w-5 h-5 text-antique-gold" strokeWidth={1.5} />
              </div>
              <h4 className="font-inter text-lg font-semibold text-ink-navy mb-3">
                Operational depth
              </h4>
              <p className="font-inter text-sm text-slate leading-relaxed">
                We don’t license software or broker relationships from a distance.
                We run the businesses ourselves on the ground.
              </p>
            </div>

            {/* Column 2 */}
            <div className="p-6 bg-white/60 border border-hairline rounded-sharp">
              <div className="w-10 h-10 rounded-sharp bg-ink-navy/5 flex items-center justify-center text-ink-navy mb-5 border border-hairline">
                <Cpu className="w-5 h-5 text-antique-gold" strokeWidth={1.5} />
              </div>
              <h4 className="font-inter text-lg font-semibold text-ink-navy mb-3">
                Cross-sector execution
              </h4>
              <p className="font-inter text-sm text-slate leading-relaxed">
                Commerce, mobility, manufacturing tech, and craft — governed under
                one disciplined operating and governance standard.
              </p>
            </div>

            {/* Column 3 */}
            <div className="p-6 bg-white/60 border border-hairline rounded-sharp">
              <div className="w-10 h-10 rounded-sharp bg-ink-navy/5 flex items-center justify-center text-ink-navy mb-5 border border-hairline">
                <ShieldCheck className="w-5 h-5 text-antique-gold" strokeWidth={1.5} />
              </div>
              <h4 className="font-inter text-lg font-semibold text-ink-navy mb-3">
                Built in-house
              </h4>
              <p className="font-inter text-sm text-slate leading-relaxed">
                Every platform, mobile app, and factory system is designed,
                engineered, and supported by Nubira core teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: LEADERSHIP / VISION QUOTE */}
      <section className="bg-ink-navy text-paper-ivory py-20 lg:py-28 border-y border-hairline/20">
        <div className="max-w-container mx-auto px-5 md:px-12 lg:px-24">
          <div className="max-w-3xl mx-auto text-center">
            <span className="w-12 h-[1px] bg-antique-gold mx-auto mb-8 block" />
            <blockquote className="font-fraunces text-2xl sm:text-3xl lg:text-[28px] italic font-normal leading-relaxed text-paper-ivory mb-8">
              “True holding value is created not by passive capital, but by
              solving friction at the ground level — whether on the factory floor,
              behind the steering wheel, or at the artisan’s loom.”
            </blockquote>
            <div className="flex flex-col items-center gap-1">
              <p className="font-mono text-xs uppercase tracking-mono text-antique-gold font-medium">
                Nubira Group
              </p>
              <p className="font-mono text-[11px] uppercase tracking-mono text-paper-ivory/70">
                Executive Leadership
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CLOSING CTA STRIP */}
      <section className="bg-paper-ivory py-20 lg:py-32">
        <div className="max-w-container mx-auto px-5 md:px-12 lg:px-24 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-mono text-antique-gold font-medium mb-3 block">
              Direct Engagement
            </span>
            <span className="w-16 h-[1px] bg-antique-gold mx-auto mb-4 block" />
            <h2 className="font-fraunces text-3xl sm:text-4xl font-medium text-ink-navy mb-6">
              Looking to partner, invest, or work with us?
            </h2>
            <p className="font-inter text-slate text-base sm:text-lg mb-10 leading-relaxed">
              Connect directly with group leadership or route your inquiry to a
              specific business division.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
                Contact the group
              </Button>
              <Button href="/businesses" variant="secondary" size="lg" className="w-full sm:w-auto">
                View all businesses
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
