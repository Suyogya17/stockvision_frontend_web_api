/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}","./public/index.html"],
  theme: {
    extend: {
      spacing: {
        30: "7.5rem", // Add custom spacing for w-30, h-30, etc.
      },
    },
  },
  plugins: [],
}