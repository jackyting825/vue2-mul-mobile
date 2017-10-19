var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  postcss: [
    require('autoprefixer')({
        //这里增加postcss,但是作为初始配置,可能会导致dev的时候变慢
        browsers: ['Android > 4.1', 'ios > 7.1', 'last 2 versions']
    })
  ]
}
