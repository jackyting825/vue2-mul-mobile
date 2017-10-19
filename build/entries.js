var fs = require('fs')
var path = require('path')
var entryPath = path.resolve(__dirname, '../src/modules')

var ignore = [
  '.svn'
]

function isLegalName(dirname) {
  return ignore.indexOf(dirname) < 0
}

var entries = fs.readdirSync(entryPath).reduce(function (o, dirname) {
  if (isLegalName(dirname)) {
    o[dirname] = path.join(entryPath, dirname)
  }
  return o
}, {})

module.exports = entries
