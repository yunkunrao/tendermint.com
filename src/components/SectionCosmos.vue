<template>
  <div class="section-cosmos">
    <div class="section-cosmos-container">
      <header class="section-cosmos-header">
        <h2 class="section-cosmos-title">Cosmos Fundraiser</h2>
        <div class="section-cosmos-subtitle">raised $16.8 million USD in 28 minutes.</div>
      </header>
      <main class="section-cosmos-main">
        <div class="section-cosmos-description">Fundraiser has ended on April 6th, 6:28AM PDT. Thank you for your contributions!</div>
        <btn
          class="section-cosmos-btn"
          size="lg"
          value="View Fundraiser"
          theme="tendermint"
          icon="bar-chart"
          @click.native="gotoFundraiser">
        </btn>
      </main>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Btn from '@nylira/vue-button'
export default {
  name: 'section-cosmos',
  components: {
    Btn
  },
  computed: {
    ...mapGetters(['config'])
  },
  methods: {
    gotoCosmos () {
      window.location.href = this.config.SELF_URL
    },
    gotoFundraiser () {
      window.location.href = this.config.FUNDRAISER_URL
    }
  }
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.section-cosmos
  border-bottom 1px solid lighten(mcolor, 10%)
  color lighten(mcolor, 60%)

.section-cosmos-container
  max-width 40rem
  margin 0 auto

  text-align center
  padding 2rem 1.5rem

.section-cosmos-header, .section-cosmos-description
  margin-bottom 1.5rem

.section-cosmos-title
  font-size 1.5rem
  font-weight 600
  color lighten(mcolor, 75%)

.section-cosmos-subtitle
  font-size 1.375rem

.section-cosmos-form
  border none

.section-cosmos-form .input-group
  margin 0

.section-cosmos-btn.ni-btn-wrapper
  width 100%
  margin 0 auto
  max-width 18rem

.section-cosmos-description
  margin-left auto
  margin-right auto
  max-width 26rem
  font-size 0.875rem
  a
    color lighten(mcolor, 80%)
    font-weight 500

@media screen and (min-width: 768px)
  .section-cosmos-container
    padding-top 4rem
    padding-bottom 4rem

  .section-cosmos-header
    margin-bottom 2rem

  .section-cosmos-title
    font-size 2rem

  .section-cosmos-subtitle
    font-size 1.66rem

  .section-cosmos-description
    font-size 1rem
    margin-bottom 2.25rem
</style>
