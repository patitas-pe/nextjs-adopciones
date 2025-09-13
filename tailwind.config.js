/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#93c5fd", // azul claro
          DEFAULT: "#3b82f6", // azul principal
          dark: "#1e3a8a", // azul oscuro
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}