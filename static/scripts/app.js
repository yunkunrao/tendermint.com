(function() {
'use strict'

var $ = require('jquery')
var FastClick = require('fastclick')
var hljs = require('highlight.js')

// setup fastclick
$(function() {
  FastClick.attach(document.body)
})

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
