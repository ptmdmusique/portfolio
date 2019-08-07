// next.config.js
const compose = require('next-compose')

const withCSS = require('@zeit/next-css')
const withImages = require('next-images')

const withCSSConfig = {}
const withImagesConfig = {}

module.exports = compose([
  [withCSS, withCSSConfig],
  [withImages, withImagesConfig],
  {
    webpack: (config) => {
      return config
    }
  }
])