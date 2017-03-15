<template>
  <div class="page-split page-blog-index">
    <page-header
      title="Blog"
      subtitle="Learn about what we&rsquo;re working on, right this moment. <a href='/static/feed.xml'>Subscribe</a>"
      type="split"
      theme="tendermint">
    </page-header>

    <section class="section-default page-content">
      <div class="section-container">
        <div class="section-content">
          <card-post
            v-for="post in posts"
            :key="post.slug"
            :title="post.title"
            :desc="post.description"
            :url="'/blog/' + post.slug"
            :meta="post.dateFriendly">
          </card-post>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PageHeader from '@nylira/vue-page-header'
import { mapGetters } from 'vuex'
import CardPost from './CardPost'

export default {
  name: 'page-blog-index',
  components: {
    PageHeader,
    CardPost
  },
  computed: mapGetters({
    posts: 'allPosts'
  }),
  mounted () {
    document.title = 'Blog - Tendermint'
  }
}
</script>
