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
        primary: {
          DEFAULT: "#0066CC",
          50: "#E6F0FA",
          100: "#CCE0F5",
          200: "#99C2EB",
          300: "#66A3E0",
          400: "#3385D6",
          500: "#0066CC",
          600: "#0052A3",
          700: "#003D7A",
          800: "#002952",
          900: "#001429",
        },
        "background-light": "#FBFBFB",
        "background-dark": "#0a0a0a",
        charcoal: "#1D1D1F",
        "secondary-text": "#6E6E73",
        "structural-border": "#E5E7EB",
        surface: "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-crimson)", "Crimson Pro", "ui-serif", "Georgia", "serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: {
        DEFAULT: "8px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px -12px rgba(0,0,0,0.08)",
        card: "0 1px 0 rgba(0,0,0,0.03), 0 1px 3px rgba(0,0,0,0.05)",
      },
      animation: {
        "carousel-scroll": "scroll 40s linear infinite",
        "gradient-flow-1": "gradientFlow1 20s ease-in-out infinite",
        "gradient-flow-2": "gradientFlow2 25s ease-in-out infinite",
        "gradient-flow-3": "gradientFlow3 30s ease-in-out infinite",
        "gradient-flow-4": "gradientFlow4 22s ease-in-out infinite",
        "gradient": "gradient 3s linear infinite",
        "marquee": "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        "pan-left": "panLeft 15s ease-in-out infinite alternate",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        gradientFlow1: {
          "0%, 100%": {
            transform: "translateX(0) translateY(0) scale(1)",
            opacity: "0.4"
          },
          "50%": {
            transform: "translateX(50px) translateY(-30px) scale(1.1)",
            opacity: "0.6"
          },
        },
        gradientFlow2: {
          "0%, 100%": {
            transform: "translateX(0) translateY(0) scale(1)",
            opacity: "0.3"
          },
          "50%": {
            transform: "translateX(-40px) translateY(40px) scale(1.05)",
            opacity: "0.5"
          },
        },
        gradientFlow3: {
          "0%, 100%": {
            transform: "translateX(0) translateY(0) scale(1)",
            opacity: "0.35"
          },
          "50%": {
            transform: "translateX(30px) translateY(-20px) scale(1.08)",
            opacity: "0.55"
          },
        },
        panLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        gradientFlow4: {
          "0%, 100%": {
            transform: "translateX(0) translateY(0) rotate(0deg)",
            opacity: "0.25"
          },
          "50%": {
            transform: "translateX(-20px) translateY(30px) rotate(2deg)",
            opacity: "0.4"
          },
        },
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
