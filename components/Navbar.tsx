"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { BUSINESSES } from "@/lib/businesses";
import Button from "./Button";

interface NavbarProps {
  themeVariant?: "transparent-dark" | "light";
}

export default function Navbar({ themeVariant = "transparent-dark" }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAccordionOpen, setIsMobileAccordionOpen] = useState(false);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close menus on route change
  useEffect(() => {
    setIsMegaOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileAccordionOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
    setIsMegaOpen(true);
  };

  const handleMouseLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setIsMegaOpen(false);
    }, 200);
  };

  const isDarkHero = themeVariant === "transparent-dark" && !isScrolled;
  const navBgClass = isScrolled
    ? "bg-ink-navy/95 backdrop-blur-sm border-b border-hairline/20 shadow-sm"
    : themeVariant === "light"
    ? "bg-paper-ivory border-b border-hairline"
    : "bg-transparent";

  const textColorClass = isScrolled || themeVariant === "transparent-dark"
    ? "text-paper-ivory"
    : "text-ink-navy";

  const isBusinessesActive = pathname.startsWith("/businesses");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${navBgClass} ${
        isScrolled ? "h-16" : "h-16 lg:h-[88px]"
      }`}
    >
      <div className="max-w-container mx-auto h-full px-5 md:px-12 lg:px-24 flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link
          href="/"
          className={`font-fraunces text-xl font-medium tracking-widest uppercase transition-colors duration-200 ${textColorClass}`}
        >
          NUBIRA GROUP
        </Link>

        {/* Desktop Navigation (≥1024px) */}
        <nav className="hidden lg:flex items-center gap-10">
          {/* Home Link */}
          <Link
            href="/"
            className={`font-inter text-[15px] font-medium tracking-wide relative transition-colors duration-200 hover:text-antique-gold ${
              pathname === "/"
                ? "text-antique-gold after:absolute after:left-0 after:bottom-[-8px] after:w-full after:h-[2px] after:bg-antique-gold"
                : textColorClass
            }`}
          >
            Home
          </Link>

          {/* Our Businesses Link with Mega-Menu Trigger */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => setIsMegaOpen(!isMegaOpen)}
              className={`font-inter text-[15px] font-medium tracking-wide flex items-center gap-1.5 relative transition-colors duration-200 hover:text-antique-gold ${
                isBusinessesActive
                  ? "text-antique-gold after:absolute after:left-0 after:bottom-[-8px] after:w-full after:h-[2px] after:bg-antique-gold"
                  : textColorClass
              }`}
            >
              <span>Our Businesses</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isMegaOpen ? "rotate-180 text-antique-gold" : ""
                }`}
                strokeWidth={1.5}
              />
            </button>
          </div>

          {/* About Link */}
          <Link
            href="/about"
            className={`font-inter text-[15px] font-medium tracking-wide relative transition-colors duration-200 hover:text-antique-gold ${
              pathname === "/about"
                ? "text-antique-gold after:absolute after:left-0 after:bottom-[-8px] after:w-full after:h-[2px] after:bg-antique-gold"
                : textColorClass
            }`}
          >
            About
          </Link>

          {/* Contact Link */}
          <Link
            href="/contact"
            className={`font-inter text-[15px] font-medium tracking-wide relative transition-colors duration-200 hover:text-antique-gold ${
              pathname === "/contact"
                ? "text-antique-gold after:absolute after:left-0 after:bottom-[-8px] after:w-full after:h-[2px] after:bg-antique-gold"
                : textColorClass
            }`}
          >
            Contact
          </Link>

          {/* CTA: Get in Touch */}
          <Button
            href="/contact"
            variant={isDarkHero || isScrolled ? "secondary-dark" : "secondary"}
            size="sm"
            className="ml-2"
          >
            Get in touch
          </Button>
        </nav>

        {/* Mobile Hamburger Toggle (<1024px) */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Navigation Menu"
            className={`p-2 transition-colors duration-200 ${
              isScrolled || themeVariant === "transparent-dark"
                ? "text-paper-ivory hover:text-antique-gold"
                : "text-ink-navy hover:text-antique-gold"
            }`}
          >
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Desktop Mega-Menu Panel */}
      {isMegaOpen && (
        <div
          className="hidden lg:block absolute top-full left-0 right-0 bg-paper-ivory border-b border-hairline shadow-lg transition-all duration-200"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-container mx-auto px-12 py-10">
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-hairline">
              <span className="font-mono text-xs uppercase tracking-mono text-antique-gold font-medium">
                Portfolio Entities & Operating Units
              </span>
              <Link
                href="/businesses"
                onClick={() => setIsMegaOpen(false)}
                className="font-inter text-xs text-slate hover:text-ink-navy flex items-center gap-1 transition-colors"
              >
                <span>View index</span>
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </Link>
            </div>

            <div className="grid grid-cols-5 gap-6">
              {BUSINESSES.map((business) => (
                <Link
                  key={business.id}
                  href={`/businesses/${business.slug}`}
                  onClick={() => setIsMegaOpen(false)}
                  className="group flex flex-col p-4 rounded-sharp border border-transparent hover:border-hairline hover:bg-paper-ivory/50 transition-all duration-200"
                >
                  {/* 4px Sub-brand Color Tab */}
                  <div
                    className="w-full h-1 mb-4 rounded-none"
                    style={{ backgroundColor: business.brandColor }}
                  />

                  {/* Business Name */}
                  <h4 className="font-inter text-base font-semibold text-ink-navy mb-1 group-hover:text-antique-gold transition-colors">
                    {business.name}
                  </h4>

                  {/* Category Label */}
                  <p className="font-mono text-[11px] uppercase tracking-wide text-slate mb-2">
                    {business.categoryShort}
                  </p>

                  {/* 1-line description */}
                  <p className="font-inter text-[13px] text-slate line-clamp-2 leading-snug mb-4 flex-grow">
                    {business.shortDescription}
                  </p>

                  {/* Duotone Thumbnail container (120x80) */}
                  <div className="w-full h-20 relative bg-ink-navy/5 border border-hairline overflow-hidden rounded-sharp mb-3 group-hover:border-antique-gold transition-colors">
                    {business.screenshot ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={business.screenshot}
                          alt={business.name}
                          fill
                          className="object-cover grayscale contrast-125 brightness-95 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-300"
                          sizes="180px"
                          onError={(e) => {
                            // Fallback hiding on missing image
                            (e.target as HTMLElement).style.display = "none";
                          }}
                        />
                        <div className="absolute inset-0 bg-ink-navy/10 pointer-events-none mix-blend-multiply group-hover:opacity-0 transition-opacity" />
                      </div>
                    ) : null}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                      <span className="font-mono text-[10px] text-slate/50">
                        {business.name}
                      </span>
                    </div>
                  </div>

                  {/* View Business link */}
                  <span className="font-inter text-[13px] font-medium text-antique-gold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>View business</span>
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Full-Screen Overlay (<1024px) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-ink-navy text-paper-ivory flex flex-col overflow-y-auto">
          {/* Mobile Overlay Header */}
          <div className="h-16 px-5 flex items-center justify-between border-b border-hairline/20">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-fraunces text-xl font-medium tracking-widest uppercase text-paper-ivory"
            >
              NUBIRA GROUP
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close Navigation Menu"
              className="p-2 text-paper-ivory hover:text-antique-gold transition-colors"
            >
              <X className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>

          {/* Mobile Navigation Content */}
          <div className="flex-1 px-6 py-8 flex flex-col justify-between">
            <nav className="flex flex-col space-y-6">
              {/* Home */}
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-fraunces text-2xl font-medium transition-colors ${
                  pathname === "/" ? "text-antique-gold" : "text-paper-ivory"
                }`}
              >
                Home
              </Link>

              {/* Our Businesses Accordion */}
              <div className="flex flex-col">
                <button
                  type="button"
                  onClick={() =>
                    setIsMobileAccordionOpen(!isMobileAccordionOpen)
                  }
                  className={`font-fraunces text-2xl font-medium flex items-center justify-between transition-colors ${
                    isBusinessesActive ? "text-antique-gold" : "text-paper-ivory"
                  }`}
                >
                  <span>Our Businesses</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isMobileAccordionOpen ? "rotate-180 text-antique-gold" : ""
                    }`}
                    strokeWidth={1.5}
                  />
                </button>

                {isMobileAccordionOpen && (
                  <div className="mt-4 pl-4 flex flex-col space-y-3.5 border-l border-hairline/20">
                    <Link
                      href="/businesses"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-inter text-sm text-antique-gold font-medium py-1"
                    >
                      Overview Index →
                    </Link>
                    {BUSINESSES.map((b) => (
                      <Link
                        key={b.id}
                        href={`/businesses/${b.slug}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`font-inter text-base transition-colors flex items-center gap-2 py-1 ${
                          pathname === `/businesses/${b.slug}`
                            ? "text-antique-gold"
                            : "text-slate hover:text-paper-ivory"
                        }`}
                      >
                        <span
                          className="w-2 h-2 rounded-full inline-block"
                          style={{ backgroundColor: b.brandColor }}
                        />
                        <span>{b.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* About */}
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-fraunces text-2xl font-medium transition-colors ${
                  pathname === "/about" ? "text-antique-gold" : "text-paper-ivory"
                }`}
              >
                About
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-fraunces text-2xl font-medium transition-colors ${
                  pathname === "/contact"
                    ? "text-antique-gold"
                    : "text-paper-ivory"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Footer CTA */}
            <div className="pt-8 mt-8 border-t border-hairline/20">
              <Button
                href="/contact"
                variant="secondary-dark"
                size="lg"
                className="w-full justify-center"
              >
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
