import React from "react";

interface StatItem {
  numeral: string;
  label: string;
  sublabel?: string;
}

interface StatBlockProps {
  stats: StatItem[];
  theme?: "light" | "dark";
  className?: string;
}

export default function StatBlock({
  stats,
  theme = "light",
  className = "",
}: StatBlockProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`grid grid-cols-2 lg:grid-cols-4 border border-hairline rounded-sharp divide-y lg:divide-y-0 lg:divide-x divide-hairline ${
        isDark ? "bg-ink-navy text-paper-ivory border-hairline/20 divide-hairline/20" : "bg-paper-ivory"
      } ${className}`}
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className="p-6 md:p-8 flex flex-col items-start justify-center"
        >
          <span
            className={`font-mono text-3xl md:text-4xl font-medium tracking-tight mb-2 leading-none ${
              isDark ? "text-antique-gold" : "text-ink-navy"
            }`}
          >
            {stat.numeral}
          </span>
          <span
            className={`font-mono text-xs uppercase tracking-mono leading-tight ${
              isDark ? "text-paper-ivory/70" : "text-slate"
            }`}
          >
            {stat.label}
          </span>
          {stat.sublabel ? (
            <span
              className={`font-mono text-[11px] uppercase tracking-mono mt-0.5 ${
                isDark ? "text-paper-ivory/50" : "text-slate/70"
              }`}
            >
              {stat.sublabel}
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
