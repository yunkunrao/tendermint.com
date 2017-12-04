<template>
  <page-split class="page-bounties-index">
    <page-header
      title="Bounties"
      subtitle="Get paid in BTC by working on Tendermint-based projects."
      type="split"
      slot="header"
      theme="tendermint">
    </page-header>
    <article-body>
      <h2>The Tendermint Bug Bounty Program</h2>
      <p>To responsibly report a vulnerability for $$$ in Tendermint core, please fill out <a target="_blank" href="https://goo.gl/forms/pAohzyeZTpszEZxm2">this form</a>. Our team will evaluate the report, rate its severity, and then get back to you as fast as we can.</p>
      <p>Thank you,</p>
      <p>The Tendermint team!</p>
    </article-body>
  </page-split>
</template>

<script>
import $ from 'jquery'
import { mapGetters } from 'vuex'
import { union, orderBy } from 'lodash'
import CardBounty from './CardBounty'
import NiSection from './NiSection'
import PageHeader from '@nylira/vue-page-header'
import PageSplit from '@nylira/vue-page-split'
import ArticleBody from '@nylira/vue-article-body'
export default {
  name: 'page-bounties-index',
  components: {
    CardBounty,
    NiSection,
    PageHeader,
    PageSplit,
    ArticleBody
  },
  computed: {
    tags () {
      let tags = []
      this.bounties.map(function (bounty) {
        tags = union(tags, bounty.tags)
      })
      return tags
    },
    filteredBounties () {
      let activeTag = this.activeTag
      let orderedBounties = orderBy(this.bounties, ['weight'], ['asc'])

      if (activeTag === 'all') {
        return orderedBounties
      } else {
        return orderedBounties.filter(bounty => bounty.tags.includes(activeTag))
      }
    },
    ...mapGetters({ bounties: 'allBounties' })
  },
  data () {
    return {
      activeTag: 'all'
    }
  },
  methods: {
    setActiveTag ($event, tagName) {
      $('.tag').removeClass('active')
      if (tagName) {
        $($event.target).addClass('active')
        this.activeTag = tagName
        return
      }
      $('#tag-all').addClass('active')
      this.activeTag = 'all'
      return
    }
  },
  mounted () {
    document.title = 'Bounties - Tendermint'
  }
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

.page-bounties-index
  .tags
    margin-top 1rem
    max-width 40*x
    display flex
    flex-flow row wrap

  .tag
    font-size 1rem
    background lighten(bc, 50%)
    color dim
    margin-right 0.5rem
    margin-bottom 0.5rem
    padding 0.25*x 0.5*x

    cursor pointer

    background hsla(0,0,0,25%)
    color #fff
    &.active
      background darken(acolor,25%)

@media screen and (min-width: 768px)
  .page-bounties-index
    .tags
      margin-top 2*x
    
@media screen and (min-width: 1024px)
  .page-bounties-index
    .tags
      justify-content flex-start
</style>
