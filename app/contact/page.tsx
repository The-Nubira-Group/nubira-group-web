import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Mail, Phone, MapPin, Building, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Contact — Nubira Group",
  description:
    "Get in touch with Nubira Group leadership or direct inquiries to Anga9, Riksho, Zigza, House of Gargi, or Nubira Creation.",
};

export default function ContactPage() {
  const faqs = [
    {
      q: "How do I apply to list or sell on Anga9?",
      a: "Wholesalers and registered brands can submit catalog applications directly through Anga9.com or select 'Anga9' in the form above to connect with vendor onboarding.",
    },
    {
      q: "How do I schedule an on-site or virtual demo of Zigza MES?",
      a: "Garment factory owners and floor managers can request a live floor walkthrough by selecting 'Zigza' in the contact form or visiting zigza.in.",
    },
    {
      q: "How does Riksho’s subscription model operate for fleet partners?",
      a: "Drivers and commercial fleets pay a transparent flat periodic subscription rather than taking percentage commissions on rides. Select 'Riksho' above for fleet partnership details.",
    },
    {
      q: "Does House of Gargi ship luxury handloom collections internationally?",
      a: "Yes. House of Gargi services clients across North America, the UK, Europe, and the Middle East with insured international door-to-door freight.",
    },
    {
      q: "How do I request a bulk OEM garment manufacturing quote from Nubira Creation?",
      a: "Select 'Nubira Creation' in the form and provide your tech pack, target quantities, fabric specifications, and delivery window.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-paper-ivory text-charcoal">
      {/* Navbar with light variant for Ivory header */}
      <Navbar themeVariant="light" />

      <main className="flex-grow pt-24 lg:pt-32">
        {/* SECTION 1: HEADER */}
        <section className="max-w-container mx-auto px-5 md:px-12 lg:px-24 py-12 lg:py-16 border-b border-hairline">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-mono text-antique-gold font-medium block mb-3">
              Direct Channels
            </span>
            <span className="w-16 h-[1px] bg-antique-gold mb-4 block" />
            <h1 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-medium text-ink-navy mb-4 leading-tight">
              Get in touch
            </h1>
            <p className="font-inter text-base sm:text-lg text-slate leading-relaxed">
              We operate with high accountability and respond to all verified
              inquiries within 1–2 business days.
            </p>
          </div>
        </section>

        {/* SECTION 2: TWO-COLUMN LAYOUT (Form Left, Details Right) */}
        <section className="max-w-container mx-auto px-5 md:px-12 lg:px-24 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Form wrapped in Suspense */}
            <div className="lg:col-span-7">
              <span className="font-mono text-xs uppercase tracking-mono text-antique-gold font-medium mb-3 block">
                Message Transmission
              </span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-medium text-ink-navy mb-6">
                Send an inquiry
              </h2>
              <Suspense
                fallback={
                  <div className="p-12 text-center font-mono text-xs text-slate">
                    Loading contact terminal...
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>

            {/* Right Column: Details & Office Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-mono text-antique-gold font-medium mb-3 block">
                  Headquarters &amp; Registry
                </span>
                <h2 className="font-fraunces text-2xl sm:text-3xl font-medium text-ink-navy mb-6">
                  Office and Directory
                </h2>
              </div>

              {/* Office Address Card */}
              <div className="p-6 sm:p-7 bg-white border border-hairline rounded-sharp shadow-sm space-y-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-sharp bg-ink-navy/5 border border-hairline flex items-center justify-center text-antique-gold shrink-0 mt-0.5">
                    <Building className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-inter text-sm font-semibold text-ink-navy mb-1">
                      The Nubira Group Registered Office
                    </h4>
                    <p className="font-inter text-xs sm:text-sm text-slate leading-relaxed">
                      Kolkata, West Bengal
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="border-t border-hairline/60 pt-4 space-y-3.5">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-antique-gold shrink-0" strokeWidth={1.5} />
                    <div className="text-xs sm:text-sm font-inter">
                      <span className="text-slate font-mono text-xs block">General Inquiries:</span>
                      <a
                        href="mailto:contact@nubiragroup.com"
                        className="text-ink-navy hover:text-antique-gold font-medium transition-colors"
                      >
                        contact@nubiragroup.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-antique-gold shrink-0" strokeWidth={1.5} />
                    <div className="text-xs sm:text-sm font-inter">
                      <span className="text-slate font-mono text-xs block">Press &amp; Institutional:</span>
                      <a
                        href="mailto:press@nubiragroup.com"
                        className="text-ink-navy hover:text-antique-gold font-medium transition-colors"
                      >
                        press@nubiragroup.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-antique-gold shrink-0" strokeWidth={1.5} />
                    <div className="text-xs sm:text-sm font-inter">
                      <span className="text-slate font-mono text-xs block">Talent &amp; Operations:</span>
                      <a
                        href="mailto:careers@nubiragroup.com"
                        className="text-ink-navy hover:text-antique-gold font-medium transition-colors"
                      >
                        careers@nubiragroup.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Styled Regional Operational Hub Card */}
              <div className="border border-hairline rounded-sharp p-6 bg-white shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-hairline/60 pb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-antique-gold" strokeWidth={1.5} />
                    <span className="font-mono text-xs uppercase tracking-mono text-ink-navy font-semibold">
                      Eastern India Operations Hub
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-antique-gold font-medium">
                    22.5726° N, 88.3639° E
                  </span>
                </div>

                <div className="space-y-2.5 text-xs font-inter text-slate">
                  <p className="leading-relaxed text-charcoal/80">
                    <strong className="text-ink-navy font-medium">Centralized Logistics &amp; Manufacturing Administration:</strong> Managing regional freight corridors, vendor fulfillment centers, and factory operations across West Bengal, Bihar, and Eastern industrial clusters.
                  </p>
                  <div className="grid grid-cols-2 gap-2 pt-2 font-mono text-[11px] text-slate/90">
                    <div className="bg-paper-ivory/60 p-2.5 rounded-sharp border border-hairline/60">
                      <span className="block text-antique-gold font-bold">10,000+</span>
                      <span>Pin Codes Serviced</span>
                    </div>
                    <div className="bg-paper-ivory/60 p-2.5 rounded-sharp border border-hairline/60">
                      <span className="block text-antique-gold font-bold">24–48h</span>
                      <span>Dispatch Window</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: FAQ ACCORDION */}
        <section className="bg-white/40 border-t border-hairline py-16 lg:py-24">
          <div className="max-w-container mx-auto px-5 md:px-12 lg:px-24">
            <div className="max-w-3xl mb-12">
              <span className="font-mono text-xs uppercase tracking-mono text-antique-gold font-medium block mb-3">
                Knowledge Base
              </span>
              <span className="w-16 h-[1px] bg-antique-gold mb-4 block" />
              <h2 className="font-fraunces text-2xl sm:text-3xl lg:text-4xl font-medium text-ink-navy mb-4">
                Frequently asked questions
              </h2>
              <p className="font-inter text-slate text-base">
                Direct answers to common questions regarding group businesses and
                operating standards.
              </p>
            </div>

            <div className="max-w-3xl">
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
