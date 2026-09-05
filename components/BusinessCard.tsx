"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Business } from "@/lib/businesses";

interface BusinessCardProps {
  business: Business;
  variant?: "tall" | "wide" | "standard";
  className?: string;
}

export default function BusinessCard({
  business,
  variant = "standard",
  className = "",
}: BusinessCardProps) {
  const isWide = variant === "wide";
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={`group relative bg-paper-ivory border border-hairline transition-all duration-300 hover:border-antique-gold hover:-translate-y-0.5 flex flex-col justify-between overflow-hidden rounded-sharp ${className}`}
      style={{
        boxShadow: "none",
      }}
    >
      {/* 4px Sub-brand Color Tab: Understated thin accent tab (not full-width banner) */}
      <div
        className="w-16 h-1 shrink-0"
        style={{ backgroundColor: business.brandColor }}
      />

      <div
        className={`p-6 lg:p-8 flex flex-col h-full ${
          isWide ? "lg:flex-row lg:gap-8" : ""
        }`}
      >
        {/* Duotone Image Container */}
        <div
          className={`relative bg-ink-navy/5 border border-hairline overflow-hidden rounded-sharp mb-6 shrink-0 transition-colors group-hover:border-antique-gold/40 ${
            isWide
              ? "w-full lg:w-1/2 h-52 lg:h-full lg:mb-0 min-h-[190px]"
              : "w-full h-48 sm:h-52"
          }`}
        >
          {business.banner && !imageError ? (
            <div className="relative w-full h-full bg-ink-navy">
              <Image
                src={business.banner}
                alt={business.name}
                fill
                className="object-cover filter grayscale contrast-125 brightness-90 transition-all duration-300 group-hover:filter-none group-hover:contrast-100 group-hover:brightness-100"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={() => setImageError(true)}
              />
              {/* Navy Duotone Overlay at rest: fades out on hover over 300ms */}
              <div className="absolute inset-0 bg-ink-navy/60 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0 pointer-events-none" />
              {/* Subtle unifying tint */}
              <div className="absolute inset-0 bg-ink-navy/5 pointer-events-none mix-blend-multiply" />
            </div>
          ) : (
            /* Fallback when image is missing or loading */
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-ink-navy/5">
              <span className="font-fraunces text-2xl text-ink-navy/70 uppercase tracking-widest font-medium">
                {business.name}
              </span>
              <span className="font-mono text-[11px] text-antique-gold mt-1 uppercase tracking-wider">
                {business.categoryShort}
              </span>
            </div>
          )}
        </div>

        {/* Content Details */}
        <div className="flex flex-col flex-grow justify-between">
          <div>
            {/* Category Label (mono, uppercase, slate) */}
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="font-mono text-xs uppercase tracking-mono text-antique-gold font-medium">
                {business.categoryShort}
              </span>
              <a
                href={business.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${business.name} external website (opens in new tab)`}
                className="text-slate/70 hover:text-antique-gold transition-colors inline-flex items-center text-xs"
                title={`Visit ${business.name} ↗`}
              >
                <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.5} />
              </a>
            </div>

            {/* Business Name (H4, Inter 600) */}
            <h4 className="font-inter text-lg font-semibold text-ink-navy mb-2.5 leading-snug group-hover:text-antique-gold transition-colors flex items-center gap-2">
              <Link href={`/businesses/${business.slug}`}>
                {business.name}
              </Link>
            </h4>

            {/* 2-line Description (Body, Charcoal/Slate) */}
            <p className="font-inter text-sm text-slate leading-relaxed mb-6">
              {business.shortDescription}
            </p>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-hairline/60 flex items-center justify-between">
            <Link
              href={`/businesses/${business.slug}`}
              className="font-inter text-[13px] font-medium text-antique-gold flex items-center gap-1.5 hover:underline underline-offset-4 group-hover:translate-x-0.5 transition-transform"
            >
              <span>Explore profile</span>
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </Link>

            <a
              href={business.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-[12px] text-slate hover:text-ink-navy flex items-center gap-1 transition-colors"
            >
              <span>{business.name.toLowerCase().replace(/\s+/g, "")}.com ↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
