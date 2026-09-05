import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 3 Master Brand Colors (docs/00-DESIGN-SYSTEM.md)
        "ink-navy": "#0E1B32",
        "paper-ivory": "#F7F4ED",
        "antique-gold": "#B9873E",

        // Supporting Neutrals
        charcoal: "#1D1D1B",
        slate: "#5B6270",
        hairline: "#E4DFD2",
        "success-green": "#2F5D45",

        // Sub-brand Identity Chip Colors (Only for 4px card tabs & badges)
        "sub-anga9": "#2563EB",
        "sub-riksho": "#3B3FE0",
        "sub-zigza": "#3E2C63",
        "sub-gargi": "#7A1F1F",
        "sub-creation": "#18181B",
      },
      fontFamily: {
        fraunces: ["var(--font-fraunces)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        container: "1440px",
      },
      letterSpacing: {
        tightest: "-0.5px",
        tighter: "-0.3px",
        wide: "0.01em",
        wider: "0.02em",
        widest: "0.04em",
        mono: "0.06em",
      },
      boxShadow: {
        none: "none",
      },
      borderRadius: {
        DEFAULT: "4px",
        sharp: "4px",
      },
    },
  },
  plugins: [],
};

export default config;
