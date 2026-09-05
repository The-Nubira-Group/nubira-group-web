"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/Button";

interface BannerSlide {
  id: string;
  industry: string;
  tagline: string;
  image: string;
  accent: string;
  slug: string;
}

const SLIDES: BannerSlide[] = [
  {
    id: "b2b-commerce",
    industry: "B2B Wholesale Commerce",
    tagline: "Powering India's Wholesale Backbone",
    image: "/banners/banner_b2b_commerce.webp",
    accent: "#2563EB",
    slug: "anga9",
  },
  {
    id: "urban-mobility",
    industry: "Urban Mobility & Transit",
    tagline: "Connecting Millions of Daily Commutes",
    image: "/banners/banner_urban_mobility.webp",
    accent: "#3B3FE0",
    slug: "riksho",
  },
  {
    id: "manufacturing-tech",
    industry: "Manufacturing Technology",
    tagline: "Digitizing Industrial Shopfloors",
    image: "/banners/banner_smart_manufacturing.webp",
    accent: "#3E2C63",
    slug: "zigza",
  },
  {
    id: "heritage-craft",
    industry: "Artisanal Handloom & Luxury Craft",
    tagline: "Handcrafted Heritage, Worn Today",
    image: "/banners/banner_heritage_craft.webp",
    accent: "#7A1F1F",
    slug: "house-of-gargi",
  },
];

export default function HomeHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const activeSlide = SLIDES[activeIndex];

  return (
    <section
      className="relative min-h-[85vh] lg:min-h-screen flex items-center overflow-hidden bg-ink-navy text-paper-ivory"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* FULL-BLEED BACKGROUND IMAGES */}
      {SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === activeIndex ? "opacity-100 z-0 scale-100" : "opacity-0 -z-10 scale-105"
          } transition-transform duration-7000`}
        >
          <Image
            src={slide.image}
            alt={slide.tagline}
            fill
            priority={idx === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Scrim: Dark Ink Navy gradient on left for text legibility, subtle vignette all around */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink-navy/95 via-ink-navy/80 to-ink-navy/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-navy via-transparent to-black/40" />
        </div>
      ))}

      {/* FOREGROUND CONTENT DIRECTLY ON TOP OF FULL-BLEED BANNER */}
      <div className="max-w-container mx-auto px-5 md:px-12 lg:px-24 w-full relative z-10 pt-28 lg:pt-36 pb-24 flex flex-col justify-between min-h-[70vh]">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-antique-gold" />
            <p className="font-mono text-xs uppercase tracking-mono text-antique-gold font-medium">
              One group, five industries
            </p>
          </div>

          {/* Headline */}
          <h1 className="font-fraunces text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tightest leading-[1.06] mb-8 text-paper-ivory">
            FROM COMMERCE <br />
            <span className="text-antique-gold">TO CRAFT.</span>
          </h1>

          {/* Subhead */}
          <p className="font-inter text-base sm:text-lg lg:text-xl text-paper-ivory/90 max-w-[560px] leading-relaxed mb-10">
            Nubira Group builds and operates platforms across trade, mobility,
            manufacturing technology, and fashion — five businesses, one
            standard of execution.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
            <Button href="#our-businesses" variant="primary-gold" size="lg">
              Explore our businesses
            </Button>

            <Link
              href="/about"
              className="font-inter text-[15px] font-medium text-paper-ivory hover:text-antique-gold flex items-center justify-center sm:justify-start gap-2 py-3 transition-colors group"
            >
              <span>About the group</span>
              <ArrowRight
                className="w-4 h-4 text-antique-gold group-hover:translate-x-1 transition-transform"
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </div>

        {/* BOTTOM TICKER / MOVING BANNER INDICATOR */}
        <div className="mt-16 pt-6 border-t border-hairline/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Current Industry Badge & Tagline */}
          <div className="flex items-center gap-3">
            <span
              className="w-2.5 h-2.5 rounded-full animate-pulse shrink-0"
              style={{ backgroundColor: activeSlide.accent }}
            />
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-paper-ivory">
              <span className="uppercase tracking-mono text-antique-gold font-semibold">
                {activeSlide.industry}
              </span>
              <span className="text-paper-ivory/40">/</span>
              <span className="text-paper-ivory/80 font-inter italic font-normal">
                "{activeSlide.tagline}"
              </span>
            </div>
          </div>

          {/* Slide Navigation & Controls */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            {/* Slide Index Pills */}
            <div className="flex items-center gap-1.5">
              {SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? "w-8 bg-antique-gold"
                      : "w-2 bg-paper-ivory/30 hover:bg-paper-ivory/60"
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-1 ml-2">
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
                }
                aria-label="Previous slide"
                className="w-8 h-8 rounded-full border border-paper-ivory/20 hover:border-antique-gold text-paper-ivory hover:text-antique-gold flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((prev) => (prev + 1) % SLIDES.length)
                }
                aria-label="Next slide"
                className="w-8 h-8 rounded-full border border-paper-ivory/20 hover:border-antique-gold text-paper-ivory hover:text-antique-gold flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
