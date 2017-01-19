<template>
  <div class="page-blog-entry">
    <div class="page-header page-header-wide">
      <h1>{{ entry.title }}</h1>
      <p>{{ entry.dateFriendly }} <template v-if="entry.author">by {{ entry.author }}</template></p>
    </div>

    <section class="section-default">
      <div class="section-container">
        <div class="section-content">
          <vue-article-body v-html="entry.body"></vue-article-body>
          <article-footer :facebook-url="facebookUrl" :twitter-url="twitterUrl"></article-footer>
          <section-comments></section-comments>
        </div><!--section-content-->
      </div><!--section-container-->
    </section>
  </div>
</template>

<script>
import VueArticleBody from '@nylira/vue-article-body'
import ArticleFooter from './ArticleFooter'
import SectionComments from './SectionComments'

import { mapGetters } from 'vuex'

export default {
  name: 'page-blog-entry',
  components: {
    VueArticleBody,
    ArticleFooter,
    SectionComments
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
