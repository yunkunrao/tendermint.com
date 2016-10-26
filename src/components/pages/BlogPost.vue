<template>
  <article>
    <section id="section-top">
      <div class="section-container">
        <h1>{{ post.title }} </h1>
        <p>{{ post.dateFriendly }} <template v-if="post.author">by {{ post.author }}</template></p>
      </div>
    </section>

    <section class="section-default">
      <div class="section-container">
        <div class="section-content">
          <div class="article-body" v-html="post.body">
          </div><!--article-body-->
          <article-footer :facebook-url="facebookUrl" :twitter-url="twitterUrl"></article-footer>
          <comments></comments>
        </div><!--section-content-->
      </div><!--section-container-->
    </section>

  </article>
</template>

<script>
import ArticleBackBtn from '../partials/ArticleBackBtn.vue'
import ArticleFooter from '../partials/ArticleFooter.vue'
import Comments from '../partials/Comments.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'blog-post',
  components: {
    ArticleBackBtn,
    ArticleFooter,
    Comments
  },
  computed: {
    post () {
      let slug = this.$route.params.post
      if (this.allPosts) {
        return this.allPosts.find(p => p.slug === slug)
      }
      return {}
    },
    ...mapGetters([
      'allPosts'
    ])
  },
  data () {
    return {
      facebookUrl: `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
      twitterUrl: `https://twitter.com/home?status=Tendermint%20vs%20PBFT%20${window.location.href}`
    }
  },
  mounted () {
    console.log(this.$route.params.post)
  }
}
</script>
