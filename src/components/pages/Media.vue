<template>
  <div id="page-blog-index">
    <section id="section-top">
      <div class="section-container">
        <div class="article-wrapper" id="blog-index">
          <h1><i class="fa fa-newspaper-o"></i> Media</h1>
          <p>Tendermint and Cosmos mentions across global media.</p>
        </div>
      </div>
    </section>

    <section class="section-default section-flush">
      <div class="section-container">
        <div class="section-content">

          <div class="li-article" v-for="medium in orderedMedia">
            <a class="li-article-link" :href="medium.url">
              <header class="li-article-header"><h2>{{ medium.title }}</h2></header>
              <div class="li-article-content">{{ medium.description }}</div>
            </a>
            <div class="li-article-meta">
              <div class="date">{{ medium.company }} on {{ medium.date }}</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { orderBy } from 'lodash'

export default {
  head: {
    title: {
      inner: 'Blog'
    }
  },
  computed: {
    orderedMedia () { return orderBy(this.media, ['date'], ['desc']) },
    ...mapGetters({
      media: 'allMedia'
    })
  }
}
</script>
