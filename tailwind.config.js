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
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2k': '2160px',

      }
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
