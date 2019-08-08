// next.config.js
const compose = require('next-compose')

const path = require('path')

const withCSS = require('@zeit/next-css')
const withImages = require('next-images')

const withCSSConfig = {}
const withImagesConfig = {}

module.exports = compose([
  [withCSS, withCSSConfig],
  [withImages, withImagesConfig],
  {
    webpack: (config) => {
      config.resolve.alias['components'] = path.join(__dirname, 'components')
      config.resolve.alias['assets'] = path.join(__dirname, 'assets')
      config.resolve.alias['pages'] = path.join(__dirname, 'pages')
      config.resolve.alias['~'] = __dirname
      return config
    }
  } 
])