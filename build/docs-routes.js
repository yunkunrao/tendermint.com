// libs
var path = require('path')
var fs = require('fs')
var glob = require('glob')
var toCamel = require('to-camel-case')
var toPascal = require('to-pascal-case')
var toTitle = require('to-title-case')
var { map } = require('lodash')

var md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
})

var docs = './content/docs/**/*.md'
var intro = './content/intro/**/*.md'

// templating
var htmlTemplate = fs.readFileSync('./build/templates/Entries.html', 'utf8')
var template = require('es6-template-strings')

// functions
function vuename(file) {
  var markdownFile = path.parse(file)
  var directory = markdownFile.dir.substring(2) // remove './' from directory
  var vueFile = `../${directory}/${markdownFile.name}.vue`
  return vueFile
}

function getParentDir (filename) {
  let value = path.dirname(filename)
  value = value.split('/')
  return value[value.length - 1]
}

function writePages (data) {
  let string = '\n'
  for (var i = 0; i < data.length; i++) {
    let d = data[i]
    if (d.basename === 'index')
      string += `  <${d.basename} v-if="r()"></${d.basename}>\n`
    else
      string += `  <${d.basename} v-if="r('${d.basename}')"></${d.basename}>\n`
  }
  // console.log(string)
  return string
}

function writeComponents (data) {
  let string = '\n'
  for (var i = 0; i < data.length; i++) {
    let d = data[i]
    string += `    ${d.pascalName}: require('${d.vueFilename}')`
    if (i != data.length - 1) string += ',\n'
    else string += '\n  '
  }
  // console.log(string)
  return string
}

function writeTemplate (data, filename) {
  let pages = writePages(data)
  let components = writeComponents(data)

  let filedata = template(htmlTemplate, { pages: pages, components: components })

  fs.writeFileSync(filename, filedata, 'utf8')
  console.log(`  ✓ ${filename}`)
}

function filesToArray (files) {
  let data = []
  for (var i = 0; i < files.length; i++) {
    let file = files[i]
    let basename = path.basename(file, '.md')
    let pascalName = toPascal(basename)
    data.push({
      mdFilename: file,
      vueFilename: vuename(file),
      basename: basename,
      pascalName: pascalName,
      title: toTitle(basename),
      section: toTitle(getParentDir(file))
    })
  }
  return data
}

function build (wildcard, filename) {
  let filenames
  glob(wildcard, function (err, files) {
    filenames = files
    let data = filesToArray(filenames)
    writeTemplate(data, filename)
  })
}

build(docs, './src/components/PageDocsEntryBody.vue')
build(intro, './src/components/PageIntroEntryBody.vue')
