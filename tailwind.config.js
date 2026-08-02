/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(0 0% 100%)",
        foreground: "hsl(240 10% 3.9%)",
        muted: "hsl(240 4.8% 95.9%)",
        "muted-foreground": "hsl(240 3.8% 46.1%)",
        border: "hsl(240 5.9% 90%)",
        primary: "hsl(240 5.9% 10%)",
        badge: "#DCFCE7",
        "badge-text": "#166534",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        khmer: ["Noto Sans Khmer", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
