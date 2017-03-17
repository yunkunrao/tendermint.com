<template>
  <page-split>
    <page-header
      title="Blog"
      subtitle="Learn about what we&rsquo;re working on, right this moment. <a href='/static/feed.xml'>Subscribe</a>"
      type="split"
      slot="header"
      theme="tendermint">
    </page-header>
    <ni-section>
      <card-post
        v-for="post in allPosts"
        :key="post.slug"
        :title="post.title"
        :desc="post.description"
        :url="'/blog/' + post.slug"
        :meta="post.dateFriendly">
      </card-post>
    </ni-section>
  </page-split>
</template>

<script>
import { mapGetters } from 'vuex'
import CardPost from './CardPost'
import NiSection from './NiSection'
import PageHeader from '@nylira/vue-page-header'
import PageSplit from '@nylira/vue-page-split'
export default {
  name: 'page-blog-index',
  components: {
    CardPost,
    NiSection,
    PageHeader,
    PageSplit
  },
  computed: {
    ...mapGetters(['allPosts'])
  },
  mounted () {
    document.title = 'Blog - Tendermint'
  }
}
</script>
