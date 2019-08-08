// next.config.js
const withPlugins = require('next-compose-plugins');
const path = require('path')

const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
const optimizedImages = require('next-optimized-images');

// module.exports = compose([
//   [withCSS, {}],
//   [withImages, {}],
//   [optimizedImages, {}],
//   {
//     webpack: (config) => {
//       config.resolve.alias['components'] = path.join(__dirname, 'components')
//       config.resolve.alias['assets'] = path.join(__dirname, 'assets')
//       config.resolve.alias['pages'] = path.join(__dirname, 'pages')
//       config.resolve.alias['~'] = __dirname
//       return config
//     }
//   } 
// ])
const nextConfig = {
  webpack: (config, options) => {
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['assets'] = path.join(__dirname, 'assets')
    config.resolve.alias['pages'] = path.join(__dirname, 'pages')
    config.resolve.alias['libs'] = path.join(__dirname, 'libs')
    config.resolve.alias['~'] = __dirname
    return config
  },
}

module.exports = withPlugins([
  [withCSS, {}],
  [withImages, {}],
  [optimizedImages, {}]
], nextConfig)
