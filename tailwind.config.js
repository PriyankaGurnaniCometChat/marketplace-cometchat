module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      tiny: '0.7rem',
    },
    extend: {},
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [],
};
