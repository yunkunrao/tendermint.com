(function() {
'use strict'

var $ = require('jquery')
var hljs = require('highlight.js')

// setup highlighting
hljs.initHighlightingOnLoad()

// home arrow
$("#home-arrow-down").click(function(event) {
  event.preventDefault()

  console.log('how-arrow clicked!')

  $('html, body').animate({
    scrollTop: $("#scroll-down-here").offset().top - 48
  }, 1000)
})

})()
