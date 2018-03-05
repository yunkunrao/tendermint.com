<template lang="pug">
page-split.page-contribute-index
  page-header(
    title='Contribute'
    subtitle="We need your help! Please aid us in fix bugs and add features to Tendermint. Explore these issues to see where your skills can be of use."
    type='split'
    slot='header'
    theme='tendermint')
  ni-section
    div(slot='title') Tendermint Issues
    card-issue(v-for="i in issues" :key="i.id" :issue="i")
</template>

<script>
import { mapGetters } from 'vuex'
import CardIssue from './CardIssue'
import NiSection from './NiSection'
import PageHeader from '@nylira/vue-page-header'
import PageSplit from '@nylira/vue-page-split'
export default {
  name: 'page-careers-index',
  components: {
    CardIssue,
    NiSection,
    PageHeader,
    PageSplit
  },
  computed: {
    ...mapGetters(['issues'])
  },
  mounted () {
    document.title = 'Contribute - Tendermint'
  }
}
</script>
