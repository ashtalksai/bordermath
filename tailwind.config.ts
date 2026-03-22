import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f1629",
        surface: "#1a2540",
        "surface-2": "#243060",
        "surface-hover": "#213057",
        border: "#2a3a5c",
        "border-subtle": "#1e2d4a",
        "text-primary": "#f8fafc",
        "text-secondary": "#94a3b8",
        "text-muted": "#64748b",
        accent: "#f59e0b",
        "accent-hover": "#fbbf24",
        "accent-foreground": "#0f1629",
        teal: "#0d9488",
        coral: "#f97316",
        success: "#10b981",
        warning: "#f59e0b",
        destructive: "#ef4444",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "DM Sans", "sans-serif"],
        body: ["var(--font-plus-jakarta)", "Plus Jakarta Sans", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "10px",
        lg: "16px",
        full: "9999px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.4), 0 0 0 1px rgba(42,58,92,0.5)",
        dropdown: "0 8px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(42,58,92,0.8)",
        modal: "0 24px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(42,58,92,0.5)",
        "glow-amber": "0 0 20px rgba(245,158,11,0.15), 0 0 40px rgba(245,158,11,0.08)",
        "glow-teal": "0 0 20px rgba(13,148,136,0.15)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
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
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
