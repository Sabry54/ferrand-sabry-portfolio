/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D3748",
        secondary: "#4A5568",
        accent: "#667EEA",
      },
    },
  },
  plugins: [],
};
