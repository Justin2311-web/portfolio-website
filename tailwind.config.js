/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#020617",
          900: "#0F172A",
          800: "#111827"
        },
        brand: {
          blue: "#3B82F6",
          green: "#10B981",
          cyan: "#22D3EE"
        }
      },
      boxShadow: {
        glow: "0 24px 80px rgba(59, 130, 246, 0.22)",
        card: "0 18px 60px rgba(2, 6, 23, 0.35)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};
