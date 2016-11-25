<template>
  <div class="split-page page-blog-index">
    <div class="page-header">
      <h1>Blog</h1>
      <p>Learn about what we&rsquo;re working on, right this moment. <a href="/static/feed.xml">Subscribe</a></p>
    </div>

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
import { mapGetters } from 'vuex'
import CardPost from './CardPost'

export default {
  name: 'page-blog-index',
  components: {
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
