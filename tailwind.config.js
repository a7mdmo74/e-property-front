/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "2px 3px 20px 1px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
