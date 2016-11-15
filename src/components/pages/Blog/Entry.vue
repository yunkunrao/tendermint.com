<template>
  <article>
    <section id="section-top">
      <div class="section-container">
        <h1>{{ entry.title }} </h1>
        <p>{{ entry.dateFriendly }} <template v-if="entry.author">by {{ entry.author }}</template></p>
      </div>
    </section>

    <section class="section-default">
      <div class="section-container">
        <div class="section-content">
          <div class="article-body" v-html="entry.body"></div>
          <article-footer :facebook-url="facebookUrl" :twitter-url="twitterUrl"></article-footer>
          <comments></comments>
        </div><!--section-content-->
      </div><!--section-container-->
    </section>

  </article>
</template>

<script>
import ArticleBackBtn from '../../partials/ArticleBackBtn.vue'
import ArticleFooter from '../../partials/ArticleFooter.vue'
import Comments from '../../partials/Comments.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'blog-entry',
  components: {
    ArticleBackBtn,
    ArticleFooter,
    Comments
  },
  computed: {
    entry () {
      let slug = this.$route.params.entry
      if (this.allPosts) {
        return this.allPosts.find(p => p.slug === slug)
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
      'allPosts'
    ])
  },
  mounted () {
    document.title = this.entry.title + ' - Tendermint'
    console.log('entry', this.entry)
  }
}
</script>
