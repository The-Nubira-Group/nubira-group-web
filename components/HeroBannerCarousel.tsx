"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { HERO_BANNERS } from "@/lib/businesses";

interface HeroBannerCarouselProps {
  className?: string;
}

export default function HeroBannerCarousel({ className = "" }: HeroBannerCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const banners = HERO_BANNERS;
  const activeBanner = banners[activeIndex];

  // Auto-advance every 6 seconds if not paused
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % banners.length);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, banners.length, activeIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % banners.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div
      className={`relative w-full rounded-sharp overflow-hidden border border-antique-gold/40 bg-ink-navy/90 shadow-2xl group ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 16:9 Aspect Ratio Frame */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
        {/* Background Images with Crossfade */}
        {banners.map((banner, idx) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === activeIndex ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"
            } transition-transform duration-1000`}
          >
            <Image
              src={banner.image}
              alt={banner.tagline}
              fill
              priority={idx === 0}
              className="object-cover object-center brightness-[0.88] contrast-[1.05]"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 650px"
            />
            {/* Scrim for maximum contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink-navy via-ink-navy/40 to-transparent opacity-95" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-navy/80 via-ink-navy/25 to-transparent" />
          </div>
        ))}

        {/* Content Overlay: Prominent Tagline & Industry Identity */}
        <div className="absolute inset-0 z-20 flex flex-col justify-between p-5 sm:p-7 lg:p-8 pointer-events-none">
          {/* Top Bar: Sector Tag & Indicator */}
          <div className="flex items-center justify-between pointer-events-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ink-navy/85 backdrop-blur-md border border-paper-ivory/20">
              <span
                className="w-2.5 h-2.5 rounded-full animate-pulse"
                style={{ backgroundColor: activeBanner.accentColor }}
              />
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-mono text-paper-ivory font-semibold">
                {activeBanner.sectorTag}
              </span>
            </div>

            {/* Slide Index Counter */}
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-ink-navy/75 backdrop-blur-md border border-hairline/20 font-mono text-[11px] text-paper-ivory/80">
              <span className="text-antique-gold font-bold">0{activeIndex + 1}</span>
              <span>/</span>
              <span>0{banners.length}</span>
            </div>
          </div>

          {/* Bottom Area: Prominent Tagline, Subhead & Action */}
          <div className="pointer-events-auto max-w-xl">
            {/* Prominent Tagline */}
            <h3 className="font-fraunces text-xl sm:text-2xl lg:text-3xl font-semibold text-paper-ivory leading-snug sm:leading-tight drop-shadow-md mb-2 sm:mb-2.5 transition-all">
              {activeBanner.tagline}
            </h3>

            {/* Subhead Context */}
            <p className="font-inter text-xs sm:text-sm text-paper-ivory/85 line-clamp-2 sm:line-clamp-3 leading-relaxed mb-4 max-w-lg drop-shadow">
              {activeBanner.subhead}
            </p>

            {/* Bottom Actions Row */}
            <div className="flex items-center gap-4">
              <Link
                href={`/businesses/${activeBanner.targetBusinessSlug}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-sharp bg-antique-gold hover:bg-antique-gold/90 text-ink-navy font-inter text-xs sm:text-sm font-semibold tracking-wide shadow-lg transition-all duration-200 group/btn"
              >
                <span>Explore Platform</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>

              <span className="font-mono text-[11px] text-paper-ivory/70 uppercase tracking-mono hidden md:inline-block">
                Target Industry Sector
              </span>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Arrows */}
        <div className="absolute right-4 bottom-4 sm:bottom-6 z-30 flex items-center gap-1.5 pointer-events-auto">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous industry showcase"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-ink-navy/80 hover:bg-ink-navy border border-paper-ivory/20 hover:border-antique-gold text-paper-ivory flex items-center justify-center backdrop-blur-md transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next industry showcase"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-ink-navy/80 hover:bg-ink-navy border border-paper-ivory/20 hover:border-antique-gold text-paper-ivory flex items-center justify-center backdrop-blur-md transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Interactive Tabs / Progress Strip */}
      <div className="bg-ink-navy border-t border-hairline/20 p-2 sm:p-2.5 grid grid-cols-4 gap-1.5 sm:gap-2">
        {banners.map((b, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={b.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`text-left px-2 sm:px-3 py-2 rounded-sharp transition-all ${
                isActive
                  ? "bg-paper-ivory/10 border-l-2 border-antique-gold"
                  : "hover:bg-paper-ivory/5 opacity-60 hover:opacity-100"
              }`}
            >
              <div className="flex items-center gap-1.5 mb-0.5">
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: b.accentColor }}
                />
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-mono text-paper-ivory/70 truncate">
                  0{idx + 1}
                </span>
              </div>
              <p
                className={`font-inter text-[11px] sm:text-xs truncate font-medium ${
                  isActive ? "text-paper-ivory" : "text-paper-ivory/70"
                }`}
              >
                {b.industry.split("&")[0].trim()}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
