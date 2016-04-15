(function() {
'use strict'

var hljs = require('highlight.js')

var $ = require('jquery')

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
