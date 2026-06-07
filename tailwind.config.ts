import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dbti: {
          bg: "#121214",
          aegis: "#c9a227",
          blink: "#7c3aed",
          radiant: "#3b82f6",
          dire: "#ef4444",
        },
      },
      fontFamily: {
        sans: [
          "Segoe UI",
          "PingFang SC",
          "Microsoft YaHei",
          "system-ui",
          "sans-serif",
        ],
        mono: ["Consolas", "ui-monospace", "monospace"],
      },
      boxShadow: {
        neon: "0 0 20px rgba(124, 58, 237, 0.35)",
        aegis: "0 0 24px rgba(201, 162, 39, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
