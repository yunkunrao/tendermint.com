<template>
  <div class="page-blog-entry">
    <page-header
      :title="entry.title"
      :subtitle="entrySubtitle"
      theme="tendermint">
    </page-header>
    <article-body>
      <div v-html="entry.body"></div>
    </article-body>
    <ni-section>
      <article-footer
        :facebook-url="facebookUrl"
        :twitter-url="twitterUrl">
      </article-footer>
      <section-comments></section-comments>
    </ni-section>
    <overlay-btns>
      <overlay-btn v-show="isActive" icon="chevron-left" @click.native="gotoBlog"></overlay-btn>
    </overlay-btns>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PageHeader from '@nylira/vue-page-header'
import ArticleBody from '@nylira/vue-article-body'
import ArticleFooter from './ArticleFooter'
import OverlayBtns from './OverlayBtns'
import OverlayBtn from './OverlayBtn'
import NiSection from './NiSection'
import SectionComments from './SectionComments'
export default {
  name: 'page-blog-entry',
  components: {
    ArticleBody,
    ArticleFooter,
    OverlayBtn,
    OverlayBtns,
    NiSection,
    PageHeader,
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
      let post = this.allPosts.find(p => p.slug === slug)
      if (post) {
        return post
      } else {
        return {
          title: ''
        }
      }
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
  methods: {
    gotoBlog () {
      this.$router.push('/blog')
    }
  },
  beforeMount () {
    if (this.entry.title === '') this.$router.push('/404')
  },
  mounted () {
    document.title = this.entry.title + ' - Tendermint'
  }
}
</script>
