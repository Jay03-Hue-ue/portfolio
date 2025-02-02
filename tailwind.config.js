  /** @type {import('tailwindcss').Config} */
  module.exports = {

    content: ["*"],
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          swiss: ['f1', 'sans-serif'], // 'f1' defined in @font-face, 'sans-serif' is a fallback
          swiss1: ['f2', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }

