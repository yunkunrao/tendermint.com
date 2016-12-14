// libs
var path = require('path')
var fs = require('fs')
var glob = require('glob')
var cheerio = require('cheerio')
var minify = require('html-minifier').minify
var md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
})

var docs = './content/docs/**/*.md'
var intro = './content/intro/**/*.md'

// functions
function vuename(file) {
  var markdownFile = path.parse(file)
  var directory = markdownFile.dir.substring(2) // remove './' from directory
  var vueFile = `./src/${directory}/${markdownFile.name}.vue`
  return vueFile
}

function vueify (file) {
  var mdData = fs.readFileSync(file, 'utf8')
  var htmlData = md.render(mdData)

  var $ = cheerio.load(htmlData)

  var internalLinks = $('a[href^=\'/\']')

  $(internalLinks).each(function () {
    var href = $(this).attr('href')
    var innerHtml = $(this).html()
    $(this).replaceWith(`<router-link to="${href}">${innerHtml}</router-link>`)
  })

  var cleaned = $.html()

  var minified = minify(cleaned, {
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

  var final = `<template><div>${minified}</div></template>`
  return final
}

function build (file) {
  let filename = vuename(file)
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
