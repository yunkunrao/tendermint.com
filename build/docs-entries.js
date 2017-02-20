// libs
var path = require('path')
var fs = require('fs')
var glob = require('glob')
var cheerio = require('cheerio')
var minify = require('html-minifier').minify
var lib = require('./docs-helpers.js')

// markdown-it settings
let md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
}).use(require('markdown-it-anchor'))

var docs = './content/docs/**/*.md'
var intro = './content/intro/**/*.md'

// templating
var entryTemplate = fs.readFileSync('./build/templates/Entry.html', 'utf8')
var template = require('es6-template-strings')

// functions
function vueify (file) {
  var mdData = fs.readFileSync(file, 'utf8')
  var htmlData = md.render(mdData)

  var $ = cheerio.load(htmlData)

  var internalLinks = $('a[href^=\'/\']')

  $(internalLinks).each(function () {
    var route = JSON.parse(JSON.stringify($(this).attr('href')))
    route = route.replace('.md', '') // remove .md extension
    var innerHtml = $(this).html()
    $(this).replaceWith(`<router-link to="${route}">${innerHtml}</router-link>`)
  })

  var cleaned = $.html()

  var pageData = minify(cleaned, {
    removeComments: true,
    removeCommentsFromCDATA: true,
    removeAttributeQuotes: true,
    // collapseWhitespace: true,
    // conservateCollapse: true,
    collapseBooleanAttributes: true,
    removeRedundantAttributes: true,
    removeEmptyAttributes: true,
    removeOptionalTags: true,
    removeEmptyElements: true
  })

  var pageTitle = lib.titlify(path.basename(file, '.md'))

  return template(entryTemplate, { data: pageData, title: pageTitle })
}

function build (file) {
  let filename = './src/' + lib.vueName(file)
  fs.writeFileSync(filename, vueify(file), 'utf8')
  console.log(`  ✓ ${filename}`)
}

function buildAll (wildcard) {
  glob(wildcard, function (er, files) {
    for (var i = 0; i < files.length; i++) {
      build(files[i])
    }
  })
}

buildAll(docs)
buildAll(intro)
