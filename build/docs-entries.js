let cheerio = require('cheerio')
let fs = require('fs')
let glob = require('glob')
let hljs = require('highlight.js')
let lib = require('./docs-helpers.js')
let minify = require('html-minifier').minify
let mkdirp = require('mkdirp')
let path = require('path')
let template = require('es6-template-strings')

let md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true,
  highlight (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try { return hljs.highlight(lang, str).value }
      catch (__) {}
    }
    return ''
  }
}).use(require('markdown-it-anchor'))

const docs = './content/docs/**/*.md'
const intro = './content/intro/**/*.md'
const docsTemplate = fs.readFileSync('./build/templates/DocsEntry.html', 'utf8')
const introTemplate = fs.readFileSync('./build/templates/IntroEntry.html', 'utf8')

function vueify (file, tmpl) {
  let mdData = fs.readFileSync(file, 'utf8')
  let htmlData = md.render(mdData)

  let $ = cheerio.load(htmlData)

  let internalLinks = $('a[href^=\'/\']')

  $(internalLinks).each(function () {
    let route = JSON.parse(JSON.stringify($(this).attr('href')))
    route = route.replace('.md', '') // remove .md extension
    let innerHtml = $(this).html()
    $(this).replaceWith(`<router-link to="${route}">${innerHtml}</router-link>`)
  })

  let cleaned = $.html()

  let pageData = minify(cleaned, {
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

  let pageTitle = lib.titlify(path.basename(file, '.md'))

  return template(tmpl, { data: pageData, title: pageTitle })
}

function build (file, tmpl) {
  let filename = './src/' + lib.vueFilename(file)
  fs.writeFileSync(filename, vueify(file, tmpl), 'utf8')
  console.log(`  ✓ ${filename}`)
}

function buildAll (wildcard, tmpl) {
  glob(wildcard, function (er, files) {
    for (let i = 0; i < files.length; i++) {
      build(files[i], tmpl)
    }
  })
}

module.exports = function () {
  mkdirp.sync('./src/content')
  buildAll(docs, docsTemplate)
  buildAll(intro, introTemplate)
}
