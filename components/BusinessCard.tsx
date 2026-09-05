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
      {/* 4px Sub-brand Color Tab */}
      <div
        className="w-full h-1 shrink-0"
        style={{ backgroundColor: business.brandColor }}
      />

      <div
        className={`p-6 lg:p-8 flex flex-col h-full ${
          isWide ? "lg:flex-row lg:gap-8" : ""
        }`}
      >
        {/* Screenshot Image Container */}
        <div
          className={`relative bg-ink-navy/5 border border-hairline overflow-hidden rounded-sharp mb-6 shrink-0 transition-colors group-hover:border-antique-gold/40 ${
            isWide
              ? "w-full lg:w-1/2 h-52 lg:h-full lg:mb-0 min-h-[180px]"
              : "w-full h-48 sm:h-52"
          }`}
        >
          {business.screenshot && !imageError ? (
            <div className="relative w-full h-full">
              <Image
                src={business.screenshot}
                alt={business.screenshotCaption || business.name}
                fill
                className="object-cover grayscale contrast-125 brightness-95 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={() => setImageError(true)}
              />
              {/* Subtle Navy 4% overlay */}
              <div className="absolute inset-0 bg-ink-navy/4 pointer-events-none mix-blend-multiply group-hover:opacity-0 transition-opacity" />
            </div>
          ) : null}

          {/* Fallback Monogram when image is missing or loading */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center pointer-events-none">
            <span className="font-fraunces text-2xl text-slate/40 uppercase tracking-widest font-medium">
              {business.name}
            </span>
            <span className="font-mono text-[11px] text-slate/50 mt-1 uppercase tracking-wider">
              {business.categoryShort}
            </span>
          </div>
        </div>

        {/* Content Details */}
        <div className="flex flex-col flex-grow justify-between">
          <div>
            {/* Category Label (mono, uppercase, slate) */}
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="font-mono text-xs uppercase tracking-mono text-slate">
                {business.categoryShort}
              </span>
              <a
                href={business.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${business.name} external website (opens in new tab)`}
                className="text-slate/60 hover:text-antique-gold transition-colors inline-flex items-center text-xs"
                title={`Visit ${business.name} ↗`}
              >
                <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.5} />
              </a>
            </div>

            {/* Business Name (H4, Inter 600) */}
            <h4 className="font-inter text-lg font-semibold text-ink-navy mb-2.5 leading-snug group-hover:text-antique-gold transition-colors">
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
