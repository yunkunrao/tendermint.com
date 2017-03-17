<template>
  <page-split>
    <page-header
      title="Presentations"
      subtitle="Watch presentations and other videos about and by the Tendermint team."
      type="split"
      slot="header"
      theme="tendermint">
    </page-header>
    <ni-section>
      <card-post
        v-for="p in presentations"
        :key="p.title"
        :url="'/presentations/' + p.slug"
        :title="p.title"
        :desc="p.description"
        :meta="p.date">
      </card-post>
    </ni-section>
  </page-split>
</template>

<script>
import NiSection from './NiSection'
import PageHeader from '@nylira/vue-page-header'
import PageSplit from '@nylira/vue-page-split'
import { mapGetters } from 'vuex'
import { orderBy } from 'lodash'
import CardPost from './CardPost'
export default {
  name: 'page-presentations-index',
  components: {
    CardPost,
    NiSection,
    PageHeader,
    PageSplit
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
