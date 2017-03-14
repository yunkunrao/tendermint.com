var fs = require('fs')
var glob = require('glob')
var lib = require('./docs-helpers.js')

var docs = './content/docs/**/*.md'
var intro = './content/intro/**/*.md'

// functions
function writeRoutes (prefix, data) {
  let string =
    `function r (page) { return require('../content/${prefix}-' + page + '.vue') }\nexport default [\n`
  for (var i = 0; i < data.length; i++) {
    let d = data[i]
    if (d.elementName === 'index') {
      string +=`  { path: '/${prefix}', component: r('index') },\n`
    } else if (i === data.length - 1) {
      string +=`  { path: '/${prefix}/${d.routePath}', component: r('${d.vuePath}') }\n`
    } else {
      string +=`  { path: '/${prefix}/${d.routePath}', component: r('${d.vuePath}') },\n`
    }
  }
  string += ']\n'
  return string
}

function writeTemplate (data, prefix, filename) {
  let filedata = writeRoutes(prefix, data)
  fs.writeFileSync(filename, filedata, 'utf8')
  console.log(`  ✓ ${filename}`)
}

function buildAll (wildcard, prefix, filename) {
  let filenames
  glob(wildcard, function (err, files) {
    if (err) console.log(err)
    filenames = files
    let data = lib.filesToArray(filenames)
    writeTemplate(data, prefix, filename)
  })
}

module.exports = function () {
  buildAll(intro, 'intro', './src/router/routesIntro.js')
  buildAll(docs, 'docs', './src/router/routesDocs.js')
}
