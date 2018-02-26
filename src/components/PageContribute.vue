<template lang="pug">
page-split.page-contribute-index
  page-header(
    title='Contribute'
    subtitle="Help us with development bounties to earn money. You'll also be speeding up the construction of the Cosmos Network."
    type='split'
    slot='header'
    theme='tendermint')
  ni-section
    div(slot='title') Bounties
    a.card-bounty(v-for="b in bounties" :key="b.id" :href="b.html_url" target="_blank")
      .state(v-if="b.state === 'open'"): i.material-icons error
      .state(v-else): i.material-icons check_circle
      .text
        .title {{ b.title }}
        .body
          | \#{{b.number}} opened on {{b.created_at}} by {{b.user.login}}
</template>

<script>
import MarkdownIt from 'markdown-it'
import { mapGetters } from 'vuex'
import NiSection from './NiSection'
import PageHeader from '@nylira/vue-page-header'
import PageSplit from '@nylira/vue-page-split'
export default {
  name: 'page-careers-index',
  components: {
    NiSection,
    PageHeader,
    PageSplit
  },
  computed: {
    ...mapGetters(['bounties'])
  },
  methods: {
    markdown (text) {
      let md = new MarkdownIt()
      return md.renderInline(text)
    }
  },
  mounted () {
    document.title = 'Contribute - Tendermint'
  }
}
</script>

<style lang="stylus">
@require '~variables'

.card-bounty
  display block
  border 1px solid bc
  border-bottom none
  color txt
  display flex
  flex-flow row nowrap

  text-align left
  &:nth-of-type(2n)
    background #f6f6f6

  .state
    text-transform uppercase
    display flex
    justify-content center
    padding 0.75rem 0.5rem 0.5rem
    border-right 1px solid bc

    i
      font-size 1.25rem
      color #0c0

  .text
    flex 1
    padding 0.5rem

  .title
    font-weight 500
    line-height 1.25rem
    margin-bottom 0.25rem

  .body
    color dim
    font-size 0.75rem

  &:hover
    .title
      color link
</style>
