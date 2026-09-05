"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Send } from "lucide-react";
import Button from "@/components/Button";
import { BUSINESSES } from "@/lib/businesses";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const businessParam = searchParams.get("business") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "general",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (businessParam) {
      const match = BUSINESSES.find(
        (b) => b.slug.toLowerCase() === businessParam.toLowerCase()
      );
      if (match) {
        setFormData((prev) => ({
          ...prev,
          business: match.slug,
        }));
      }
    }
  }, [businessParam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="p-8 lg:p-12 bg-white/80 border border-antique-gold/40 rounded-sharp text-center">
        <div className="w-12 h-12 bg-antique-gold/10 text-antique-gold rounded-sharp mx-auto flex items-center justify-center mb-5">
          <CheckCircle2 className="w-6 h-6" strokeWidth={1.5} />
        </div>
        <h3 className="font-fraunces text-2xl text-ink-navy mb-2 font-medium">
          Inquiry Received
        </h3>
        <p className="font-inter text-slate text-sm max-w-md mx-auto mb-8 leading-relaxed">
          Thank you for reaching out to Nubira Group. Our executive desk or the
          designated division leadership will respond within 1–2 business days.
        </p>
        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: "",
              email: "",
              business: "general",
              message: "",
            });
          }}
          className="font-mono text-xs uppercase tracking-mono text-antique-gold hover:underline"
        >
          Submit another inquiry →
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 lg:p-10 bg-white/70 border border-hairline rounded-sharp space-y-6"
    >
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block font-mono text-xs uppercase tracking-mono text-slate mb-2 font-medium"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          placeholder="e.g. Anand Mahindra"
          className="w-full px-4 py-3 bg-paper-ivory border border-hairline rounded-sharp text-ink-navy text-sm font-inter focus:outline-none focus:border-antique-gold focus:ring-0 transition-colors"
        />
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block font-mono text-xs uppercase tracking-mono text-slate mb-2 font-medium"
        >
          Business Email Address
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          placeholder="name@company.com"
          className="w-full px-4 py-3 bg-paper-ivory border border-hairline rounded-sharp text-ink-navy text-sm font-inter focus:outline-none focus:border-antique-gold focus:ring-0 transition-colors"
        />
      </div>

      {/* Business Dropdown */}
      <div>
        <label
          htmlFor="business"
          className="block font-mono text-xs uppercase tracking-mono text-slate mb-2 font-medium"
        >
          Which business is this about?
        </label>
        <div className="relative">
          <select
            id="business"
            value={formData.business}
            onChange={(e) =>
              setFormData({ ...formData, business: e.target.value })
            }
            className="w-full px-4 py-3 bg-paper-ivory border border-hairline rounded-sharp text-ink-navy text-sm font-inter focus:outline-none focus:border-antique-gold focus:ring-0 transition-colors appearance-none cursor-pointer"
          >
            <option value="general">
              General Group Inquiries / Leadership Desk
            </option>
            {BUSINESSES.map((b) => (
              <option key={b.id} value={b.slug}>
                {b.name} — ({b.categoryShort})
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate">
            <span className="text-xs">▼</span>
          </div>
        </div>
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block font-mono text-xs uppercase tracking-mono text-slate mb-2 font-medium"
        >
          Message / Requirement Details
        </label>
        <textarea
          id="message"
          rows={5}
          required
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          placeholder="Please outline the nature of your inquiry, commercial proposal, or partnership intent..."
          className="w-full px-4 py-3 bg-paper-ivory border border-hairline rounded-sharp text-ink-navy text-sm font-inter focus:outline-none focus:border-antique-gold focus:ring-0 transition-colors resize-y"
        />
      </div>

      {/* Submit Button */}
      <Button type="submit" variant="primary" size="lg" className="w-full">
        <span className="flex items-center gap-2">
          <span>Send message</span>
          <Send className="w-4 h-4" strokeWidth={1.5} />
        </span>
      </Button>
    </form>
  );
}
