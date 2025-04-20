import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
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
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "pulse-slow": {
          "0%, 100%": { transform: "scale(1)", filter: "brightness(1)" },
          "50%": { transform: "scale(1.03)", filter: "brightness(1.1)" },
        },
        "glow-soft": {
          "0%, 100%": { filter: "brightness(1) drop-shadow(0 0 5px rgba(255, 255, 255, 0.1))" },
          "50%": { filter: "brightness(1.05) drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))" },
        },
        "spin-very-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "float-gentle": {
          "0%, 100%": {
            transform: "translateY(0)",
            filter: "drop-shadow(0 5px 15px rgba(236, 72, 153, 0.2))",
          },
          "50%": {
            transform: "translateY(-10px)",
            filter: "drop-shadow(0 15px 20px rgba(236, 72, 153, 0.3))",
          },
        },
        "expand-subtle": {
          "0%, 100%": {
            transform: "scale(1)",
            filter: "drop-shadow(0 0 10px rgba(251, 146, 60, 0.2))",
          },
          "50%": {
            transform: "scale(1.05)",
            filter: "drop-shadow(0 0 20px rgba(251, 146, 60, 0.4))",
          },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-red": {
          "0%, 100%": {
            transform: "scale(1)",
            filter: "drop-shadow(0 0 5px rgba(220, 38, 38, 0.3))",
          },
          "50%": {
            transform: "scale(1.03)",
            filter: "drop-shadow(0 0 15px rgba(220, 38, 38, 0.5))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-slow": "pulse-slow 4s infinite ease-in-out",
        "glow-soft": "glow-soft 6s infinite ease-in-out",
        "spin-very-slow": "spin-very-slow 60s linear infinite",
        "float-gentle": "float-gentle 8s infinite ease-in-out",
        "expand-subtle": "expand-subtle 10s infinite ease-in-out",
        "rotate-slow": "rotate-slow 120s linear infinite",
        "pulse-red": "pulse-red 5s infinite ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
