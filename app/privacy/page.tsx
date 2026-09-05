import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Nubira Group",
  description: "Privacy and data protection policies of Nubira Group.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-paper-ivory text-charcoal">
      <Navbar themeVariant="light" />
      <main className="flex-grow pt-24 lg:pt-32">
        <div className="max-w-container mx-auto px-5 md:px-12 lg:px-24 py-16 lg:py-24 max-w-4xl">
          <span className="font-mono text-xs uppercase tracking-mono text-antique-gold font-medium block mb-3">
            Legal &amp; Compliance
          </span>
          <span className="w-16 h-[1px] bg-antique-gold mb-4 block" />
          <h1 className="font-fraunces text-3xl sm:text-4xl font-medium text-ink-navy mb-8">
            Privacy Policy
          </h1>
          <div className="space-y-6 font-inter text-slate text-sm sm:text-base leading-relaxed">
            <p>
              Nubira Group and its operating subsidiaries respect your privacy and
              are committed to safeguarding your personal data. This policy
              outlines how we handle personal information gathered across our group
              domains.
            </p>
            <h3 className="font-fraunces text-xl text-ink-navy pt-4">
              Information We Collect
            </h3>
            <p>
              We collect information that you provide directly via contact forms,
              commercial correspondence, or service registrations. This includes
              contact details, company affiliation, and transaction
              specifications.
            </p>
            <h3 className="font-fraunces text-xl text-ink-navy pt-4">
              Data Governance &amp; Security
            </h3>
            <p>
              Nubira Group enforces strict data minimization principles. We do not
              sell or broker personal information to third-party ad networks. Data
              collected is solely used to deliver requested services, fulfill
              contracts, and maintain regulatory compliance.
            </p>
            <p className="font-mono text-xs text-slate pt-4">
              Last updated: September 2026 · Nubira Group Legal Department
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
