import $ from 'jquery'
import hljs from 'highlight.js'

export default function () {
  // syntax highlighting
  hljs.initHighlightingOnLoad()

  // better youtube embeds
  $('.youtube').each(function () {
    // Set the BG image from the youtube ID
    $(this).css('background-image', 'url(//i.ytimg.com/vi/' + this.id + '/hqdefault.jpg)')

    // Click the video div
    $(document).delegate('#' + this.id, 'click', function () {
      // Build embed URL
      let iframeUrl = '//www.youtube.com/embed/' + this.id + '?autoplay=1&autohide=1'

      // Grab extra parameters set on div
      if ($(this).data('params')) {
        iframeUrl += '&' + $(this).data('params')
      }

      // Build iframe tag
      let iframe = $('<iframe/>', { 'allowfullscreen': 'allowfullscreen', 'frameborder': '0', 'src': iframeUrl })

      // Replace the YouTube thumbnail with YouTube HTML5 Player
      $(this).append(iframe)
    })
  })
}
