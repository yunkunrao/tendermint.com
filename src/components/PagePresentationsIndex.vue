<template>
  <div class="page-split page-presentations-index">
    <page-header
      title="Presentations"
      subtitle="Watch presentations and other videos about and by the Tendermint team."
      type="split"
      theme="tendermint">
    </page-header>

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
import PageHeader from '@nylira/vue-page-header'
import { mapGetters } from 'vuex'
import { orderBy } from 'lodash'
import CardPost from './CardPost'
export default {
  name: 'page-presentations-index',
  components: {
    PageHeader,
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
