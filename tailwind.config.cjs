/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "#0C1013",
        red: "#BB0A01",
        darkGray: "#485864",
        lightGray: "#929FA6",
        light: "#E6E8E6",
      },
      fontFamily: {
        crimson: ["Crimson Pro", "serif", ...defaultTheme.fontFamily.serif],
        sans: ["Open Sans", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        landing: "url('/landing.jpg')",
        landingMobile: "url('/landing_mobile.jpg')",
      },
    },
  },
  plugins: [],
};
