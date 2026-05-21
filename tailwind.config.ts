import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        "ink-soft": "var(--color-ink-soft)",
        bone: "var(--color-bone)",
        ivory: "var(--color-ivory)",
        paper: "var(--color-paper)",
        brass: "var(--color-brass)",
        "brass-light": "var(--color-brass-light)",
        "brass-deep": "var(--color-brass-deep)",
        fog: "var(--color-fog)",
        "fog-soft": "var(--color-fog-soft)",
        rust: "var(--color-rust)",
        moss: "var(--color-moss)",
        navy: "var(--color-ink)",
        gold: "var(--color-brass)",
        "warm-white": "var(--color-bone)",
        slate: "var(--color-fog)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Times New Roman", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono-stack)", "ui-monospace", "monospace"],
        sora: ["var(--font-fraunces)", "Times New Roman", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
