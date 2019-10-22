// next.config.js
const withPlugins = require('next-compose-plugins');
const path = require('path')

const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
const withSass = require('@zeit/next-sass')
const optimizedImages = require('next-optimized-images');

const withAssetRelocator = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, { 
    webpack(config, options) {
      const { isServer } = options

      if (isServer) {
        config.node = Object.assign({}, config.node, {
          __dirname: false,
          __filename: false,
        })

        config.module.rules.unshift({
          test: /\.(m?js|node)$/,
          parser: { amd: false },
          use: {
            loader: '@zeit/webpack-asset-relocator-loader',
            options: {
              outputAssetBase: 'assets',
              existingAssetNames: [],
              wrapperCompatibility: true,
              escapeNonAnalyzableRequires: true,
            },
          },
        })
      }

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }
      return config
    },
  })
}

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
  withCSS,
  withImages,
  withSass,
  withAssetRelocator,
], nextConfig)
