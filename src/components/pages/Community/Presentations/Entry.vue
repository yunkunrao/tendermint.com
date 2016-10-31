<template>
  <article>
    <section id="section-top">
      <div class="section-container">
        <h1>{{ entry.title }} </h1>
        <p>Uploaded on {{ entry.date }}</p>
      </div>
    </section>

    <section class="section-default">
      <div class="section-container">
        <div class="section-content">
          <div class="youtube" :id="entry.id"></div>
          <article-footer :facebook-url="facebookUrl" :twitter-url="twitterUrl"></article-footer>
          <comments></comments>
        </div><!--section-content-->
      </div><!--section-container-->
    </section>

  </article>
</template>

<script>
import ArticleBackBtn from '../../../partials/ArticleBackBtn.vue'
import ArticleFooter from '../../../partials/ArticleFooter.vue'
import Comments from '../../../partials/Comments.vue'

import { mapGetters } from 'vuex'
import $ from 'jquery'

export default {
  name: 'entry',
  components: {
    ArticleBackBtn,
    ArticleFooter,
    Comments
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
