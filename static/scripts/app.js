(function() {
'use strict'

var $ = require('jquery')

$("#home-arrow-down").click(function(event) {
  event.preventDefault()

  console.log('how-arrow clicked!')

  $('html, body').animate({
    scrollTop: $("#scroll-down-here").offset().top - 50
  }, 1000)
})

})()
