module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor'
      },
      height: {
        '520px': '520px',
        '360px': '360px'
      }
    },
    fontFamily: {
      noto: 'Noto Sans'
    }
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      margin: ['last']
    }
  },
  plugins: [
  ]
}
