/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-000": "#1A120B",
        "seocondary-000": "#000000",
        "primary-100": "#E5E5CB",
        "seocondary-100": "#D5CEA3",
      },
    },
  },
  plugins: [],
};
