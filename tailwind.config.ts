import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#8B5CF6",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#D946EF",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "#F97316",
          foreground: "hsl(var(--accent-foreground))",
        },
        neon: {
          purple: "#8B5CF6",
          pink: "#D946EF",
          orange: "#F97316",
          blue: "#0EA5E9",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-light": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "neon-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 5px #8B5CF6, 0 0 10px #8B5CF6, 0 0 15px #8B5CF6",
          },
          "50%": {
            boxShadow: "0 0 10px #D946EF, 0 0 20px #D946EF, 0 0 30px #D946EF",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-light": "pulse-light 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "neon-pulse": "neon-pulse 2s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;