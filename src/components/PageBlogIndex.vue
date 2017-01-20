<template>
  <div class="page-split page-blog-index">
    <vue-page-header
      title="Blog"
      subtitle="Learn about what we&rsquo;re working on, right this moment. <a href='/static/feed.xml'>Subscribe</a>"
      type="split"
      header-style="tendermint">
    </vue-page-header>

    <section class="section-default page-content">
      <div class="section-container">
        <div class="section-content">

          <card-post :title="post.title" :desc="post.description" :url="'/blog/' + post.slug"
            :meta="post.dateFriendly" v-for="post in posts">
          </card-post>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VuePageHeader from '@nylira/vue-page-header'
import { mapGetters } from 'vuex'
import CardPost from './CardPost'

export default {
  name: 'page-blog-index',
  components: {
    VuePageHeader,
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
