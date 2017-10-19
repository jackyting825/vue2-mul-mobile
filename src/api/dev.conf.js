var merge = require('webpack-merge')
var prodEnv = require('./prod.conf')

module.exports = merge(prodEnv, {
  baseURL: ''
})
