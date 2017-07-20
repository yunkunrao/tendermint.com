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
  let gettingStarted = linkObject.gettingStarted
  let guides = linkObject.guides
  let specs = linkObject.specs


  if (base.length > 0) {
    let links = base

//    if (filename === './src/components/PageDocsMaster.vue') {
//     value += `  <router-link :to="'/docs'" exact>Documentation</router-link>\n`
//    }
    if (filename === './src/components/PageIntroMaster.vue') {
      value += '  <div class="title">Index</div>\n'
      value += `  <router-link :to="'/intro'" exact>Introduction</router-link>\n`
    }

    if (gettingStarted.length > 0) {
      let links = gettingStarted
      value += '  <div class="title">Getting Started</div>\n'
      // add download link manually
      value += `  <router-link to="/downloads">1. Download Tendermint</router-link>\n`
      for (var l = 0; l < links.length; l++) {
        value += `  <router-link :to="'${links[l].url}'">${links[l].title}</router-link>\n`
      }
    }

    for (var i = 0; i < links.length; i++) {
      if (links[i].title !== 'Index') {
        value +=
          `  <router-link :to="'${links[i].url}'">${links[i].title}</router-link>\n`
      }
    }
  }

  if (filename === './src/components/PageIntroMaster.vue') {
    value += `  <router-link :to="'/download'" exact>4. Getting Started</router-link>\n`
  }

  if (guides.length > 0) {
    let links = guides
    value += '  <div class="title">Guides</div>\n'
    for (var j = 0; j < links.length; j++) {
      value +=
        `  <router-link :to="'${links[j].url}'">${links[j].title}</router-link>\n`
    }
  }

 
  if (specs.length > 0) {
    let links = specs
    value += '  <div class="title">Specs</div>\n'
    for (var k = 0; k < links.length; k++) {
      if (links[k].title !== 'Tendermint Types') {
        value +=
          `  <router-link :to="'${links[k].url}'">${links[k].title}</router-link>\n`
      }
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
  object.specs = array.filter(f => f.section === 'Specs')
  object.gettingStarted = array.filter(f => f.section === 'Getting Started')
  return object
}

function buildAll (wildcard, filename) {
  let filenames
  glob(wildcard, function (err, files) {
    if (err) console.log(err)
    filenames = files
    let data = lib.filesToArray(filenames)
    data = arrayToObject(data)
    writeTemplate(data, filename)
  })
}

module.exports = function () {
  buildAll(docs, './src/components/PageDocsMaster.vue')
  buildAll(intro, './src/components/PageIntroMaster.vue')
}
