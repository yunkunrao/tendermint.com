var numeral = require('numeral')
var path = require('path')
var toPascal = require('to-pascal-case')
var toTitle = require('to-title-case')

function filesToArray (files) {
  let data = []
  for (var i = 0; i < files.length; i++) {
    let file = files[i]
    let baseName = path.basename(file, '.md')
    let elementName = baseName.replace(/^(#)/, 'num-')
    let pascalName = toPascal(elementName)

    let routeName = baseName
    if (routeName.substring(0, 1) === '#') {
      routeName = routeName.substring(4)
    }

    let routePath
    if (parentDir(file) === 'intro' || parentDir(file) === 'docs') {
      routePath = routeName
    } else {
      routePath = parentDir(file) + '/' + routeName
    }

    let vuePath
    if (parentDir(file) === 'intro' || parentDir(file) === 'docs') {
      vuePath = baseName
    } else {
      vuePath = parentDir(file) + '-' + baseName
    }

    data.push({
      mdFilename: file,
      vueFilename: vueFilename(file),
      elementName: elementName,
      routeName: routeName,
      pascalName: pascalName,
      routePath: routePath,
      vuePath: vuePath,
      title: titlify(baseName),
      section: titlify(parentDir(file)),
      url: urlify(file)
    })
  }
  return data
}

function parentDir (filename) {
  let value = path.dirname(filename)
  value = value.split('/')
  return value[value.length - 1]
}

function titlify (basename) {
  // remove 'step' from beginning
  let value = basename.replace(/^(#)/, '')

  // titlize
  value = toTitle(value)

  // turn numbers into friendly '1.' format
  let num = value.substring(0, 3)
  if (!isNaN(value.substring(0, 3))) {
    num = Number(num)
    num = numeral(num).format('0')
    let remainder = value.substring(3)
    value = num + '. ' + remainder
  }

  // fix some abbreviations
  value = value.replace('Abci Cli', 'ABCI CLI')
  value = value.replace('Abci', 'ABCI')
  value = value.replace('Rpc', 'RPC')
  value = value.replace('P2p', 'P2P')

  return value
}

function urlify (file) {
  var markdownFile = path.parse(file)
  var directory = markdownFile.dir.substring(9) // remove './' from directory

  // filter out '^#' from filename
  let filename = markdownFile.name
  if (filename.substring(0, 1) === '#') {
    filename = filename.substring(4)
  }

  return `${directory}/${filename}`
}

function vueFilename (file) {
  var markdownFile = path.parse(file)
  var directory = markdownFile.dir.substring(10) // remove './' from directory
  directory = directory.split('/').join('-')
  var filename = `content/${directory}-${markdownFile.name}.vue`
  // console.log('vueFile', vueFile)
  return filename
}

module.exports = {
  filesToArray: filesToArray,
  titlify: titlify,
  parentDir: parentDir,
  urlify: urlify,
  vueFilename: vueFilename
}
