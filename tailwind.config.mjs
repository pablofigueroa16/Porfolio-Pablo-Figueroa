/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#007bff",
        secondary: "#2C2C2C",
        accent: "#303236",
        text: "#13151a",
      },
    },
  },
  plugins: [],
};
