import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1c1c22",
        accent: {
          DEFAULT: "#00ff99",
          hover: "#00e187",
        },
        white: "#ffffff",
        transparent: "transparent",
        current: "currentColor",
        black: "#000000",
      },
    },
    fontFamily: {
      primary: "var(--font-league-spartan)",
    },
  },
  plugins: [],
} satisfies Config;
