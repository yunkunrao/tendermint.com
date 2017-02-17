// libs
var path = require('path')
var fs = require('fs')
var glob = require('glob')
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
var htmlTemplate = fs.readFileSync('./build/templates/TableOfContents.html', 'utf8')
var template = require('es6-template-strings')

// functions
function urlify(file) {
  var markdownFile = path.parse(file)
  var directory = markdownFile.dir.substring(9) // remove './' from directory
  return `${directory}/${markdownFile.name}`
}

function getParentDir (filename) {
  let value = path.dirname(filename)
  value = value.split('/')
  return value[value.length - 1]
}

function writeLinks (linkObject, filename) {
  let value = '\n'
  let base = linkObject.base
  let guides = linkObject.guides
  let internals = linkObject.internals
  let gettingStarted = linkObject.gettingStarted

  if (base.length > 0) {
    let links = base
    value += '  <div class="title">Index</div>\n'

    if (filename === './src/components/PageDocsMaster.vue')
      value += `  <router-link :to="'/docs'" exact>Index</router-link>\n`
    if (filename === './src/components/PageIntroMaster.vue')
      value += `  <router-link :to="'/intro'" exact>Index</router-link>\n`

    for (var i = 0; i < links.length; i++) {
      if (links[i].title != 'Index')
        value += `  <router-link :to="'${links[i].url}'">${links[i].title}</router-link>\n`
    }
  }
  if (guides.length > 0) {
    let links = guides
    value += '  <div class="title">Guides</div>\n'
    for (var i = 0; i < links.length; i++) {
      value += `  <router-link :to="'${links[i].url}'">${links[i].title}</router-link>\n`
    }
  }
  if (internals.length > 0) {
    let links = internals
    value += '  <div class="title">Internals</div>\n'
    for (var i = 0; i < links.length; i++) {
      value += `  <router-link :to="'${links[i].url}'">${links[i].title}</router-link>\n`
    }
  }
  if (gettingStarted.length > 0) {
    let links = gettingStarted
    value += '  <div class="title">Getting Started</div>\n'
    for (var i = 0; i < links.length; i++) {
      value += `  <router-link :to="'${links[i].url}'">${links[i].title}</router-link>\n`
    }
  }
  return value
}

function writeTemplate (data, filename) {
  let links = writeLinks(data, filename)
  let filedata = template(htmlTemplate, { data: links })
  fs.writeFileSync(filename, filedata, 'utf8')
  console.log(`  ✓ ${filename}`)
}

function titlize (basename) {
  let value = toTitle(basename)
  value = value.replace('Abci', 'ABCI')
  value = value.replace('Rpc', 'RPC')
  value = value.replace('P2p', 'P2P')
  value = value.replace('vs', 'Versus X')
  return value
}

function filesToArray (files) {
  let data = []
  for (var i = 0; i < files.length; i++) {
    let file = files[i]
    let basename = path.basename(file, '.md')
    data.push({
      basename: basename,
      title: titlize(basename),
      section: toTitle(getParentDir(file)),
      url: urlify(file)
    })
  }
  // console.log(data)
  return data
}

function arrayToObject (array) {
  let object = {}
  object.base = array.filter(f => f.section === 'Docs' || f.section === 'Intro')
  object.guides = array.filter(f => f.section === 'Guides')
  object.internals = array.filter(f => f.section === 'Internals')
  object.gettingStarted = array.filter(f => f.section === 'Getting Started')
  return object
}

function build (wildcard, filename) {
  let filenames
  glob(wildcard, function (err, files) {
    filenames = files
    let data = filesToArray(filenames)
    data = arrayToObject(data)
    writeTemplate(data, filename)
  })
}

build(docs, './src/components/PageDocsMaster.vue')
build(intro, './src/components/PageIntroMaster.vue')
