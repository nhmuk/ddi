module.exports = {
  content: ['./src/**/*.njk'],
  theme: {
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        display: ['Poppins', 'Source Sans Pro', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
