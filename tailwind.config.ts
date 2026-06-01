import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cream:     "var(--color-cream)",
        parchment: "var(--color-parchment)",
        ivory:     "var(--color-ivory)",
        rosso:     "var(--color-rosso)",
        oro:       "var(--color-oro)",
        verde:     "var(--color-verde)",
        ink:       "var(--color-ink)",
        muted:     "var(--color-muted)",
        border:    "var(--color-border)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "Georgia", "serif"],
        body:    ["var(--font-body)", "Libre Baskerville", "Times New Roman", "serif"],
        mono:    ["var(--font-mono)", "DM Mono", "monospace"],
      },
      animation: {
        marquee:     "marquee 30s linear infinite",
        "fade-up":   "fadeUp 0.6s ease forwards",
        shimmer:     "shimmer 2s linear infinite",
        "spin-slow": "spin 25s linear infinite",
        "stamp-pop": "stampPop 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
      },
      keyframes: {
        marquee:  { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        fadeUp:   { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        shimmer:  { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        stampPop: { "0%": { opacity: "0", transform: "scale(2.5) rotate(-35deg)" }, "100%": { opacity: "1", transform: "scale(1) rotate(-8deg)" } },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

