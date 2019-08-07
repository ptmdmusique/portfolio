module.exports = {
  theme: {
    extend: {
      textColor: {
        //Can't be text color (eg: white, black, etc)
        'primary': '#ffffff',
        'secondary': '#000000',
        'danger': '#e3342f',
      },
      fontFamily: {
        'serif': 'Arkhip'
      }
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
