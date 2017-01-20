<template>
  <div class="page-bounties-entry">
    <vue-page-header
      :title="bounty.title"
      :subtitle="bounty.subtitle"
      header-style="tendermint">
    </vue-page-header>
    <section class="section-default">
      <div class="section-container">
        <div class="section-content">
          <vue-article-body>
            <h2>Requirements</h2>
            <ul class="requirements">
              <li v-for="r in bounty.requirements">{{ r }}</li>
            </ul>
            <h2>Reward</h2>
            <p>{{ bounty.reward }}</p>
            <h2>Deliver the bounty</h2>
            <p>Email us with the name of the bounty, a link to your source code, and your BTC deposit address:</p>
            <a href="mailto:hello@tendermint.com" class="btn btn-large">hello@tendermint.com</a>
          </vue-article-body>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VueArticleBody from '@nylira/vue-article-body'
import VuePageHeader from '@nylira/vue-page-header'
import { mapGetters } from 'vuex'
export default {
  name: 'page-bounties-entry',
  components: {
    VueArticleBody,
    VuePageHeader
  },
  computed: {
    bounty () {
      if (this.bounties) {
        return this.bounties.find(b => b.id === this.$route.params.entry)
      }
      return {
        title: 'Loading...',
        subtitle: 'Loading...'
      }
    },
    ...mapGetters({
      bounties: 'allBounties'
    })
  },
  mounted () {
    document.title = this.bounty.title + ' - Careers - Tendermint'
  }
}
</script>


<style lang="stylus">
@require '../styles/variables.styl'

.page-bounties-entry
  .tags
    margin-top 1.5*x
    text-align center
    max-width 40*x
    display flex
    flex-flow row wrap
    justify-content center

  .tag
    font-size 0.75*x
    background lighten(bc, 50%)
    color dim
    margin-right 0.25*x
    margin-bottom 0.25*x
    padding 0.25*x 0.5*x

    cursor pointer

    background hsla(0,0,0,25%)
    color #fff
    &.active
      background darken(acolor,25%)

  a.btn
    width 18*x
    text-decoration none

@media screen and (min-width: 720px)
  .page-bounties-entry
    .tags
      margin-top 2*x

    .tag
      font-size x
</style>
