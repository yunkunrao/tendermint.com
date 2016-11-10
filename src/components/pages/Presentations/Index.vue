<template>
  <div id="page-blog-index">
    <section id="section-top">
      <div class="section-container">
        <div class="article-wrapper" id="blog-index">
          <h1>Presentations</h1>
          <p>Watch presentations and other videos about and by the Tendermint team.</p>
        </div>
      </div>
    </section>

    <section class="section-default section-flush">
      <div class="section-container">
        <div class="section-content">

          <div class="li-article" v-for="presentation in orderedPresentations">
            <router-link class="li-article-link" :to="'/blog/' + presentation.slug">
              <header class="li-article-header"><h2>{{ presentation.title }}</h2></header>
              <div class="li-article-content">{{ presentation.description }}</div>
            </router-link>
            <div class="li-article-meta">
              <div class="date">Posted on {{ presentation.date }}</div>
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
  computed: {
    orderedPresentations () { return orderBy(this.presentations, ['date'], ['desc']) },
    ...mapGetters({
      presentations: 'allPresentations'
    })
  }
}
</script>
