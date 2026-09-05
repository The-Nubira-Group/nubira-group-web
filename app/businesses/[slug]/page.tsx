import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  Users,
  Briefcase,
  Store,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import {
  BUSINESSES,
  getBusinessBySlug,
  getSiblingBusinesses,
} from "@/lib/businesses";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BUSINESSES.map((b) => ({
    slug: b.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const business = getBusinessBySlug(slug);

  if (!business) {
    return {
      title: "Business Not Found — Nubira Group",
    };
  }

  return {
    title: `${business.name} — Nubira Group`,
    description: business.fullDescription,
  };
}

export default async function BusinessDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const business = getBusinessBySlug(slug);

  if (!business) {
    notFound();
  }

  const siblings = getSiblingBusinesses(slug);
  const isGargi = business.slug === "house-of-gargi";

  const secondaryCtaLabel =
    business.customSecondaryCta?.label ||
    `Get in touch about ${business.name}`;
  const secondaryCtaHref =
    business.customSecondaryCta?.href ||
    `/contact?business=${business.slug}`;

  // Helper audience icons
  const audienceIcons = [Users, Store, Briefcase];

  return (
    <div className="flex flex-col min-h-screen bg-paper-ivory text-charcoal">
      {/* 4px Sub-brand Color Tab across the top of the entire page */}
      <div
        className="fixed top-0 left-0 right-0 h-1 z-[60]"
        style={{ backgroundColor: business.brandColor }}
      />

      {/* Global Navbar (light variant for Ivory page header) */}
      <Navbar themeVariant="light" />

      <main className="flex-grow pt-24 lg:pt-32">
        {/* SECTION 1: BUSINESS HERO */}
        <section className="max-w-container mx-auto px-5 md:px-12 lg:px-24 py-12 lg:py-16">
          <div className="max-w-3xl">
            {/* Breadcrumb: mono, slate */}
            <nav className="font-mono text-xs text-slate mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-ink-navy transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link
                href="/businesses"
                className="hover:text-ink-navy transition-colors"
              >
                Our Businesses
              </Link>
              <span>/</span>
              <span className="text-antique-gold">{business.name}</span>
            </nav>

            {/* Optional Sub-brand Clarification (e.g. Nubira Creation) */}
            {business.subClarification && (
              <p className="font-mono text-xs text-slate/80 italic mb-2">
                {business.subClarification}
              </p>
            )}

            {/* Eyebrow: mono, gold, uppercase */}
            <div className="flex items-center gap-2.5 mb-4">
              <span
                className="w-2.5 h-2.5 rounded-none inline-block"
                style={{ backgroundColor: business.brandColor }}
              />
              <span className="font-mono text-xs uppercase tracking-mono text-antique-gold font-medium">
                {business.categoryShort}
              </span>
            </div>

            {/* Business H1: Official App Logo + Fraunces serif */}
            <div className="flex items-center gap-4 sm:gap-6 mb-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-sharp overflow-hidden border border-hairline shadow-md bg-white shrink-0">
                <Image
                  src={business.logo}
                  alt={`${business.name} logo`}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <h1 className="font-fraunces text-4xl sm:text-5xl lg:text-6xl font-medium text-ink-navy leading-tight">
                {business.name}
              </h1>
            </div>

            {/* Subhead: Body Large, one sentence positioning */}
            <p className="font-inter text-lg sm:text-xl text-slate mb-8 leading-relaxed font-normal">
              {business.tagline}
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                href={business.externalUrl}
                variant="primary"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                className="justify-center"
              >
                <span className="flex items-center gap-2">
                  <span>Visit {business.name.toLowerCase().replace(/\s+/g, "")}.com</span>
                  <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
                </span>
              </Button>

              <Button
                href={secondaryCtaHref}
                variant="secondary"
                size="lg"
                className="justify-center"
              >
                {secondaryCtaLabel}
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 2: FULL-BLEED FRAMED SCREENSHOT */}
        <section className="max-w-container mx-auto px-5 md:px-12 lg:px-24 mb-16 lg:mb-24">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-paper-ivory border border-hairline rounded-sharp overflow-hidden shadow-none">
              {/* Image Frame with Overlay (2% for Gargi, 4% standard) */}
              <div className="relative aspect-[16/10] w-full bg-paper-ivory overflow-hidden">
                {business.screenshot ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={business.screenshot}
                      alt={business.screenshotCaption || business.name}
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                    <div
                      className={`absolute inset-0 bg-ink-navy pointer-events-none mix-blend-multiply ${
                        isGargi ? "opacity-[0.02]" : "opacity-[0.04]"
                      }`}
                    />
                  </div>
                ) : null}
              </div>

              {/* Caption in mono/slate */}
              <div className="px-5 py-3 bg-paper-ivory border-t border-hairline flex items-center justify-between">
                <span className="font-mono text-xs text-slate">
                  {business.screenshotCaption}
                </span>
                <span className="font-mono text-[11px] text-antique-gold uppercase tracking-mono">
                  Official Record
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHAT IT DOES (2-Column) */}
        <section className="border-t border-hairline py-16 lg:py-24 bg-white/40">
          <div className="max-w-container mx-auto px-5 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Left Column: Narrative */}
              <div className="lg:col-span-6">
                <span className="font-mono text-xs uppercase tracking-mono text-antique-gold font-medium mb-3 block">
                  Core Mandate
                </span>
                <span className="w-16 h-[1px] bg-antique-gold mb-4 block" />
                <h2 className="font-fraunces text-2xl sm:text-3xl lg:text-4xl font-medium text-ink-navy mb-6">
                  What it does
                </h2>
                <p className="font-inter text-base sm:text-lg text-charcoal/90 leading-relaxed mb-6">
                  {business.fullDescription}
                </p>
                <p className="font-inter text-sm sm:text-base text-slate leading-relaxed">
                  As part of Nubira Group, {business.name} leverages group-wide
                  technical architecture, shared supply chain relationships, and
                  capital efficiency to execute with independence and rigor.
                </p>
              </div>

              {/* Right Column: Feature Mini-blocks */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <div className="bg-paper-ivory border border-hairline p-6 lg:p-8 rounded-sharp">
                  <h3 className="font-mono text-xs uppercase tracking-mono text-antique-gold font-medium mb-6">
                    Operational Highlights
                  </h3>
                  <ul className="space-y-4">
                    {business.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3.5">
                        <CheckCircle2
                          className="w-4 h-4 text-antique-gold shrink-0 mt-1"
                          strokeWidth={1.5}
                        />
                        <span className="font-inter text-sm sm:text-base text-charcoal/90 leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: WHO IT'S FOR (3-Column Cards) */}
        <section className="border-t border-hairline py-16 lg:py-24">
          <div className="max-w-container mx-auto px-5 md:px-12 lg:px-24">
            <div className="max-w-2xl mb-12">
              <span className="font-mono text-xs uppercase tracking-mono text-antique-gold font-medium mb-3 block">
                Stakeholders &amp; Clients
              </span>
              <span className="w-16 h-[1px] bg-antique-gold mb-4 block" />
              <h2 className="font-fraunces text-2xl sm:text-3xl lg:text-4xl font-medium text-ink-navy mb-3">
                Who it’s for
              </h2>
              <p className="font-inter text-slate text-base">
                Tailored execution models configured specifically for each segment
                of the market.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {business.targetAudience.map((audience, idx) => {
                const IconComponent = audienceIcons[idx % audienceIcons.length];

                return (
                  <div
                    key={idx}
                    className="p-6 lg:p-8 bg-white/60 border border-hairline rounded-sharp flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-sharp bg-ink-navy/5 border border-hairline flex items-center justify-center mb-5 text-antique-gold">
                        <IconComponent className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <h4 className="font-inter text-lg font-semibold text-ink-navy mb-2.5">
                        {audience.title}
                      </h4>
                      <p className="font-inter text-sm text-slate leading-relaxed">
                        {audience.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-hairline/60">
                      <span className="font-mono text-[11px] uppercase tracking-mono text-antique-gold font-medium">
                        Target Segment Profile
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 5: RELATED BUSINESSES (Cross-navigation strip) */}
        <section className="border-t border-hairline py-12 lg:py-16 bg-paper-ivory/80">
          <div className="max-w-container mx-auto px-5 md:px-12 lg:px-24">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-hairline">
              <div>
                <span className="font-mono text-xs uppercase tracking-mono text-antique-gold font-medium block mb-1">
                  Cross-Group Navigation
                </span>
                <h3 className="font-fraunces text-xl font-medium text-ink-navy">
                  Other Nubira Group businesses
                </h3>
              </div>

              <Link
                href="/businesses"
                className="font-inter text-xs text-slate hover:text-ink-navy flex items-center gap-1 transition-colors"
              >
                <span>All businesses</span>
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </Link>
            </div>

            {/* Horizontally scrollable chip row on mobile, 4-grid on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto pb-2">
              {siblings.map((sibling) => (
                <Link
                  key={sibling.id}
                  href={`/businesses/${sibling.slug}`}
                  className="p-4 bg-white/80 border border-hairline hover:border-antique-gold rounded-sharp transition-all group shrink-0"
                >
                  <div
                    className="w-full h-1 mb-3"
                    style={{ backgroundColor: sibling.brandColor }}
                  />
                  <div className="flex items-center justify-between mb-1">
                    <h5 className="font-inter text-sm font-semibold text-ink-navy group-hover:text-antique-gold transition-colors">
                      {sibling.name}
                    </h5>
                    <ArrowRight
                      className="w-3.5 h-3.5 text-slate group-hover:translate-x-0.5 group-hover:text-antique-gold transition-all"
                      strokeWidth={1.5}
                    />
                  </div>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-slate truncate">
                    {sibling.categoryShort}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
