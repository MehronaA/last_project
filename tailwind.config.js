/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {},
    screens: {
      'mob': {max: '375px'}
    }
  },
  plugins: [],
}

