<template>
  <div class="page-blog-entry">
    <page-header
      :title="entry.title"
      :subtitle="entrySubtitle"
      theme="tendermint">
    </page-header>
    <div class="page-blog-content">
      <article-body v-html="entry.body"></article-body>
      <article-footer :facebook-url="facebookUrl" :twitter-url="twitterUrl">
      </article-footer>
      <section-comments></section-comments>
    </div>
  </div>
</template>

<script>
import PageHeader from '@nylira/vue-page-header'
import ArticleBody from '@nylira/vue-article-body'
import ArticleFooter from './ArticleFooter'
import SectionComments from './SectionComments'

import { mapGetters } from 'vuex'

export default {
  name: 'page-blog-entry',
  components: {
    PageHeader,
    ArticleBody,
    ArticleFooter,
    SectionComments
  },
  computed: {
    entrySubtitle () {
      let value = this.entry.dateFriendly
      if (this.entry.author) {
        value += ` by ${this.entry.author}`
      }
      return value
    },
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

<style lang="stylus">
@require '../styles/variables.styl'

.page-blog-entry
  background c-app-fg

.page-blog-content
  padding-bottom 3rem
</style>
