module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#f0f0f0',
      black: '#202020',
      primaryRed: '#ed1d23',
      secondaryRed: '#f8d2d2',
    },
    fontFamily: {
      sans: ['Marvel'],
      serif: ['Marvel'],
      mono: ['Marvel'],
      display: ['Marvel'],
      body: ['Marvel']
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  prefix: 'tw-',
};
