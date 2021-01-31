module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'color-one': 'var(--color-one)',
      'color-two': 'var(--color-two)',
      'color-three': 'var(--color-three)',
      'primary': 'var(--primary)',
      'secondary': 'var(--secondary)',
      'white': 'var(--white)',
      'democrat': 'var(--democrat)',
      'republican': 'var(--republican)'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
