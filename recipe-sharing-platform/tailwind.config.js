/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",           // Vite serves from root index.html
    "./src/**/*.{js,jsx,ts,tsx}", // All React components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
