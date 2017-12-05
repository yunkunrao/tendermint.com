<template>
  <page-split class="page-bounties-index">
    <page-header
      title="Bounties"
      subtitle="Get paid in BTC or ETH by working on Tendermint-based projects."
      type="split"
      slot="header"
      theme="tendermint">
    </page-header>
    <article-body>
      <h2>The Tendermint / Cosmos Network Bug Bounty Program</h2>
      <p> If you discover some vulnerability in Tendermint Core, the Tendermint libraries (go-wire, ...) or the ABCI repository you might be eligible for our bounty program. </p>
      <p> The vulnerability must be applicable to Tendermint Core running the Persistent Dummy application in-process, or out-of-process via the socket server. </p>
      <p> To responsibly report a vulnerability for points in the bug bounty program, please fill out <a target="_blank" href="https://goo.gl/forms/pAohzyeZTpszEZxm2">this form</a>. </p> 
      <p> Our team will evaluate the report, rate its severity, and then get back to you as fast as we can.</p>
      <p> The following table shows the rewards for each level of severity. One point is redeemable at $1 via BTC or ETH. </p>
      <table>
        <tr>
          <td>Critical - up to 7,500+ points</td>
          <td>High - up to 5,000 points</td>
          <td>Medium - up to 2,500 points</td>
          <td>Low - up to 1,000 points</td>
          <td>Note - up to 500 points</td>
        </tr>
      </table>
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
