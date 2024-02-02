/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "480px", //min-width 480px
      sm: "640px",
      mobile: { min: "200px", max: "767px" },
      tab: { min: "768px", max: "1023px" },
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px"
    },
  },
  plugins: [],
};
