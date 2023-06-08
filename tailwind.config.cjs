const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      "emoji-yellow": "rgb(var(--emoji-yellow) / <alpha-value>)",
    },
    extend: {
      fontFamily: {
        sans: ["Epilogue", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
