<template>
  <div class="split-page">
    <div class="page-header">
      <h1>Presentations</h1>
      <p>Watch presentations and other videos about and by the Tendermint team.</p>
    </div>

    <section class="section-default page-content">
      <div class="section-container">
        <div class="section-content">

          <post v-for="pres in orderedPresentations" :url="'/presentations/' + pres.slug"
            :title="pres.title" :desc="pres.description" :meta="pres.date">
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
    orderedPresentations () { return orderBy(this.presentations, ['date'], ['desc']) },
    ...mapGetters({
      presentations: 'allPresentations'
    })
  },
  mounted () {
    document.title = 'Presentations - Tendermint'
  }
}
</script>
