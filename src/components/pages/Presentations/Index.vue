<template>
  <div class="split-page">
    <div class="page-header">
      <h1>Presentations</h1>
      <p>Watch presentations and other videos about and by the Tendermint team.</p>
    </div>
    <section class="section-default page-content">
      <div class="section-container">
        <div class="section-content">
          <post v-for="p in presentations" :url="'/presentations/' + p.slug"
            :title="p.title" :desc="p.description" :meta="p.date">
          </post>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { orderBy } from 'lodash'
export default {
  name: 'presentations-index',
  components: {
    Post: require('../../partials/Post')
  },
  computed: {
    presentations () { return orderBy(this.allPresentations, ['date'], ['desc']) },
    ...mapGetters({
      allPresentations: 'allPresentations'
    })
  },
  mounted () {
    document.title = 'Presentations - Tendermint'
  }
}
</script>
