import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "secondary-dark" | "gold";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  target,
  rel,
  type = "button",
}: ButtonProps) {
  const sizeStyles = {
    sm: "px-4 py-2 text-[13px] tracking-wide",
    md: "px-6 py-3 text-[15px] tracking-wide",
    lg: "px-8 py-4 text-[16px] tracking-wide",
  };

  const variantStyles = {
    // Primary: Ink Navy fill, Ivory text, 2px Gold underline reveal on hover
    primary:
      "bg-ink-navy text-paper-ivory border border-ink-navy btn-primary-slide hover:text-paper-ivory shadow-none",
    // Secondary on Light background: transparent, 1px Navy border, Navy text; hover fills Navy 8%
    secondary:
      "bg-transparent text-ink-navy border border-ink-navy hover:bg-ink-navy/8 transition-colors duration-200",
    // Secondary on Dark background: transparent, 1px Gold border, Ivory text; hover fills antique-gold 10%
    "secondary-dark":
      "bg-transparent text-paper-ivory border border-antique-gold hover:bg-antique-gold/10 transition-colors duration-200",
    // Gold Fill: Antique Gold fill, Ink Navy text, luxury aesthetic like Screenshot 2
    gold:
      "bg-antique-gold text-ink-navy font-semibold hover:bg-antique-gold/90 shadow-lg border border-antique-gold transition-all duration-200",
  };

  const baseStyles =
    "inline-flex items-center justify-center font-inter font-medium rounded-sharp transition-all duration-200 select-none text-center cursor-pointer";

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        className={combinedClass}
        target={target || (isExternal ? "_blank" : undefined)}
        rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClass}>
      {children}
    </button>
  );
}
