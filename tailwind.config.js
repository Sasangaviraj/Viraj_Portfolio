/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
         "black":" #0a0a0a",
         "light":"#717182",
      },
      fontFamily: { "Montserrat": ["sans-serif"]},
      fontSize: {
        "link": " 0.875rem",
        "h1": " 3.281rem",
        "h2": " 2.218rem",
        "h2-sm": " 1.875rem",
        "subtopic": " 1.31rem",
        "hero-p": " 0.981rem",
        "button-p": " 0.75rem",
        "button-main": " 1.06rem",
        "project-tech": " 0.56rem",
      },
      fontWeight: {},
    },
  },
  plugins: [],
};
