/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'Share Tech Mono'", "monospace"],
        sans: ["'Syne'", "sans-serif"],
      },
      colors: {
        neon: {
          green: "#00ff88",
          green2: "#00cc6a",
          dim: "#8899aa",
        },
        dark: {
          900: "#0a0c0f",
          800: "#0f1217",
          700: "#111520",
          600: "#141820",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        blink: "blink 1s step-end infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        pulseGlow: {
          "0%,100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};