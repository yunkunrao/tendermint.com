<template>
  <div class="split-page page-presentations-index">
    <div class="page-header">
      <h1>Presentations</h1>
      <p>Watch presentations and other videos about and by the Tendermint team.</p>
    </div>
    <section class="section-default page-content">
      <div class="section-container">
        <div class="section-content">
          <card-post v-for="p in presentations" :url="'/presentations/' + p.slug"
            :title="p.title" :desc="p.description" :meta="p.date">
          </card-post>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { orderBy } from 'lodash'
import CardPost from './CardPost'
export default {
  name: 'page-presentations-index',
  components: {
    CardPost
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
