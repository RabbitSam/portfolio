/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          "red": "#FF3B3B",
          "pink": "#FF87F3"
        }
      },

      boxShadow: {
        button: '3px 3px 0px theme("colors.primary.pink"), 6px 6px 0px theme("colors.primary.red")',
        image: '6px 6px 0px theme("colors.primary.pink"), 12px 12px 0px theme("colors.primary.red")'
      }
    },
  },
  plugins: [],
}

