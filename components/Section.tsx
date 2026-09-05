import React from "react";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  bg?: "ivory" | "navy" | "transparent";
  padding?: "normal" | "compact" | "none";
  eyebrow?: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
}

export default function Section({
  children,
  id,
  className = "",
  containerClassName = "",
  bg = "ivory",
  padding = "normal",
  eyebrow,
  title,
  description,
  align = "left",
}: SectionProps) {
  const bgStyles = {
    ivory: "bg-paper-ivory text-charcoal",
    navy: "bg-ink-navy text-paper-ivory",
    transparent: "bg-transparent",
  };

  const paddingStyles = {
    normal: "py-16 md:py-24 lg:py-32",
    compact: "py-12 md:py-16 lg:py-20",
    none: "py-0",
  };

  const isNavy = bg === "navy";
  const isCentered = align === "center";

  return (
    <section
      id={id}
      className={`relative w-full ${bgStyles[bg]} ${paddingStyles[padding]} ${className}`}
    >
      <div
        className={`max-w-container mx-auto px-5 md:px-12 lg:px-24 ${containerClassName}`}
      >
        {(eyebrow || title || description) && (
          <div
            className={`mb-12 lg:mb-16 ${
              isCentered ? "text-center max-w-2xl mx-auto" : "max-w-3xl"
            }`}
          >
            {eyebrow && (
              <div
                className={`flex flex-col ${
                  isCentered ? "items-center" : "items-start"
                } mb-4`}
              >
                <span className="font-mono text-xs uppercase tracking-mono text-antique-gold font-medium">
                  {eyebrow}
                </span>
                {/* 64px thin 1px Gold rule under section eyebrow */}
                <span className="w-16 h-[1px] bg-antique-gold mt-3 block" />
              </div>
            )}

            {title && (
              <h2
                className={`font-fraunces text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-4 ${
                  isNavy ? "text-paper-ivory" : "text-ink-navy"
                }`}
              >
                {title}
              </h2>
            )}

            {description && (
              <p
                className={`font-inter text-base lg:text-lg leading-relaxed ${
                  isNavy ? "text-paper-ivory/80" : "text-slate"
                }`}
              >
                {description}
              </p>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
