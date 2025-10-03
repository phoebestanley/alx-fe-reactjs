/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                 // Vite entry file
    "./public/index.html",          // Added for checker requirement
    "./src/**/*.{js,jsx,ts,tsx}",   // All React components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
