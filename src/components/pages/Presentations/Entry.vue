<template>
  <div class="component">
    <div class="page-header page-header-wide">
      <h1>{{ entry.title }}</h1>
      <p>Uploaded on {{ entry.date }}</p>
    </div>

    <section class="section-default">
      <div class="section-container">
        <div class="section-content">
          <div class="youtube" :id="entry.id"></div>
          <presentation-footer :facebook-url="facebookUrl" :twitter-url="twitterUrl"></presentation-footer>
          <comments></comments>
        </div><!--section-content-->
      </div><!--section-container-->
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import $ from 'jquery'
export default {
  name: 'presentations-entry',
  components: {
    ArticleBackBtn: require('../../partials/ArticleBackBtn.vue'),
    PresentationFooter: require('../../partials/PresentationFooter.vue'),
    Comments: require('../../partials/Comments.vue')
  },
  computed: {
    entry () {
      let slug = this.$route.params.entry
      if (this.allPresentations) {
        return this.allPresentations.find(p => p.slug === slug)
      }
      return {}
    },
    facebookUrl () {
      let url = 'https://www.facebook.com/sharer/sharer.php?u='
      if (this.entry) url += `${this.entry.title} ${window.location.href}`
      else url += ` ${window.location.href}`
      return url
    },
    twitterUrl () {
      let url = 'https://twitter.com/home?status='
      if (this.entry) url += `${this.entry.title} ${window.location.href}`
      else url += ` ${window.location.href}`
      return url
    },
    ...mapGetters([
      'allPresentations'
    ])
  },
  mounted () {
    document.title = this.entry.title + ' - Presentations - Tendermint'

    let self = this

    $('.youtube').each(function () {
      // Set the BG image from the youtube ID
      $(this).css('background-image', 'url(//i.ytimg.com/vi/' + this.id + '/hqdefault.jpg)')

      // Click the video div
      $(document).delegate('#' + this.id, 'click', function () {
        // Build embed URL
        let iframeUrl = '//www.youtube.com/embed/' + this.id + '?autoplay=1&autohide=1'

        if (self.entry.start) {
          iframeUrl += '&start=' + self.entry.start
        }

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
}
</script>
