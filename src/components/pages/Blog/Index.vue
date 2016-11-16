<template>
  <div class="split-page">
    <div class="page-header">
      <h1>Blog</h1>
      <p>Learn about what we&rsquo;re working on, right this moment. <a href="/static/feed.xml">Subscribe</a></p>
    </div>

    <section class="section-default page-content">
      <div class="section-container">
        <div class="section-content">

          <post :title="post.title" :desc="post.description" :url="'/blog/' + post.slug"
            :meta="post.dateFriendly" v-for="post in posts">
          </post>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'blog-index',
  components: {
    Post: require('../../partials/Post')
  },
  computed: mapGetters({
    posts: 'allPosts'
  }),
  mounted () {
    document.title = 'Blog - Tendermint'
  }
}
</script>

<style lang="stylus" scoped>
@require '../../../styles/variables.styl'
</style>

