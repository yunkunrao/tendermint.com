var fs = require('fs')
var glob = require('glob')
var lib = require('./docs-helpers.js')

var docs = './content/docs/**/*.md'
var intro = './content/intro/**/*.md'

// templating
var htmlTemplate = fs.readFileSync('./build/templates/TableOfContents.html', 'utf8')
var template = require('es6-template-strings')

// functions
function writeLinks (linkObject, filename) {
  let value = '\n'
  let base = linkObject.base
  let guides = linkObject.guides
  let internals = linkObject.internals
  let gettingStarted = linkObject.gettingStarted

  if (base.length > 0) {
    let links = base
    value += '  <div class="title">Index</div>\n'

    if (filename === './src/components/PageDocsMaster.vue') {
      value += `  <router-link :to="'/docs'" exact>Documentation</router-link>\n`
    }
    if (filename === './src/components/PageIntroMaster.vue') {
      value += `  <router-link :to="'/intro'" exact>Introduction</router-link>\n`
    }

    for (var i = 0; i < links.length; i++) {
      if (links[i].title !== 'Index') {
        value +=
          `  <router-link :to="'${links[i].url}'">${links[i].title}</router-link>\n`
      }
    }
  }

  if (guides.length > 0) {
    let links = guides
    value += '  <div class="title">Guides</div>\n'
    for (var j = 0; j < links.length; j++) {
      value +=
        `  <router-link :to="'${links[j].url}'">${links[j].title}</router-link>\n`
    }
  }

  if (internals.length > 0) {
    let links = internals
    value += '  <div class="title">Internals</div>\n'
    for (var k = 0; k < links.length; k++) {
      if (links[k].title !== 'Tendermint Types') {
        value +=
          `  <router-link :to="'${links[k].url}'">${links[k].title}</router-link>\n`
      }
    }
  }

  if (gettingStarted.length > 0) {
    let links = gettingStarted
    value += '  <div class="title">Getting Started</div>\n'
    for (var l = 0; l < links.length; l++) {
      value += `  <router-link :to="'${links[l].url}'">${links[l].title}</router-link>\n`
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
    if (err) console.log(err)
    filenames = files
    let data = lib.filesToArray(filenames)
    data = arrayToObject(data)
    writeTemplate(data, filename)
  })
}

build(docs, './src/components/PageDocsMaster.vue')
build(intro, './src/components/PageIntroMaster.vue')
