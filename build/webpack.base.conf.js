var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      assets: resolve('src/assets'),
      images: resolve('src/assets/images'),
      content: resolve('content'),
      scripts: resolve('src/scripts'),
      variables: resolve('src/styles/variables.styl'),
      buttons: resolve('src/components/buttons'),
      cards: resolve('src/components/cards'),
      common: resolve('src/components/common'),
      forms: resolve('src/components/forms'),
      modals: resolve('src/components/modals'),
      navigation: resolve('src/components/navigation'),
      pages: resolve('src/components/pages'),
      sections: resolve('src/components/sections')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.json/,
        loader: 'json-loader'
      },
      {
        test: /\.md$/,
        loader: 'vue-markdown-loader'
      },
      {
        test: /\.pdf/,
        loader: 'file-loader',
        query: {
          name: utils.assetsPath('[name].[ext]')
        }
      },
      {
        test: /\.xml/,
        loader: 'file-loader',
        query: {
          name: utils.assetsPath('[name].[ext]')
        }
      }
    ]
  }
}
