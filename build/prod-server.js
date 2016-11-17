var path = require('path')
var express = require('express')
var gzipStatic = require('connect-gzip-static')
var config = require('../config')

// default port where prod server listens for incoming traffic
var port = process.env.PORT || config.prod.port
var app = express()

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve pure static assets
var staticPath = path.posix.join(config.prod.assetsPublicPath, config.prod.assetsSubDirectory)
app.use(staticPath, gzipStatic('./static'))
app.use(gzipStatic('dist'))

module.exports = app.listen(port, 'localhost', function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
