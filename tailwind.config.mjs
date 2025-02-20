/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bgDark: "#13151a",
        bgLight: "#f5f5f5",
        primary: "#007bff",
        secondary: "#2C2C2C",
        accent: "#303236",
        text: "#13151a",
        textLight: "#333333",
      },
    },
  },
  plugins: [],
};
