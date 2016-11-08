<template>
  <div id="page-blog-index">
    <section id="section-top">
      <div class="section-container">
        <div class="article-wrapper" id="blog-index">
          <h1>Tendermint Blog</h1>
          <p>Learn about what we&rsquo;re working on, right this moment. <a href="/static/feed.xml">Subscribe via RSS</a></p>
        </div>
      </div>
    </section>

    <section class="section-default section-flush">
      <div class="section-container">
        <div class="section-content">

          <div class="li-article" v-for="post in posts">
            <router-link class="li-article-link" :to="'/blog/' + post.slug">
              <header class="li-article-header"><h2>{{ post.title }}</h2></header>
              <div class="li-article-content">{{ post.description }}</div>
            </router-link>
            <div class="li-article-meta">
              <div class="date">Posted on {{ post.dateFriendly }}</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    posts: 'allPosts'
  }),
  mounted () {
    document.title = 'Blog - Tendermint'
  }
}
</script>
