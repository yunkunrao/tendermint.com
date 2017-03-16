<template>
  <div class="section-cosmos">
    <div class="section-cosmos-container">
      <header class="section-cosmos-header">
        <h2 class="section-cosmos-title">Cosmos Fundraiser</h2>
        <time-remaining class="section-cosmos-subtitle" :date="endDate" :started="fundraiseStarted" :fuzzy="false"></time-remaining>
      </header>
      <main class="section-cosmos-main">
        <template v-if="fundraiseEnded">
          <div class="section-cosmos-description">Fundraise has ended.</div>
          <btn
            class="section-cosmos-btn"
            size="lg"
            value="View Fundraiser"
            theme="tendermint"
            icon="bar-chart"
            @click.native="gotoFundraiser">
          </btn>
        </template>
        <template v-else-if="fundraiseStarted">
          <div class="section-cosmos-description">Fundraise is live! Click to visit the donation page.</div>
          <btn
            class="section-cosmos-btn"
            size="lg"
            value="View Fundraiser"
            theme="tendermint"
            icon="bar-chart"
            @click.native="gotoFundraiser">
          </btn>
        </template>
        <template v-else>
          <div class="section-cosmos-description">The team behind Tendermint also built  <strong>Cosmos, Internet of Blockchains</strong>. The fundraiser for Cosmos will begin on March 31st, 2017 at 6AM PDT.</div>
          <btn
            class="section-cosmos-btn"
            size="lg"
            value="Visit Cosmos Site"
            theme="tendermint"
            @click.native="gotoCosmos">
          </btn>
        </template>
      </main>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Btn from '@nylira/vue-button'
import TimeRemaining from './TimeRemaining'
import moment from 'moment'
export default {
  name: 'section-cosmos',
  components: {
    Btn,
    TimeRemaining
  },
  computed: {
    startDate () {
      return moment(moment.utc(this.config.START_DATETIME)).local()
    },
    endDate () {
      if (this.fundraiseStarted) {
        let utcEndDate = moment.utc(this.config.START_DATETIME)
          .add(this.config.ENDS_AFTER, 'days').valueOf()
        return moment(utcEndDate).local()
      } else {
        return this.startDate
      }
    },
    ...mapGetters(['config'])
  },
  data: () => ({
    fundraiseStarted: false,
    fundraiseEnded: false
  }),
  methods: {
    gotoCosmos () {
      window.location.href = this.config.SELF_URL
    },
    gotoFundraiser () {
      window.location.href = this.config.SALE_URL
    },
    refreshTimers () {
      if (Date.now() >= moment(this.startDate).valueOf()) {
        this.fundraiseStarted = true
      }
      if (Date.now() >= moment(this.endDate).valueOf()) {
        this.fundraiseEnded = true
      }
    }
  },
  mounted () {
    this.refreshTimers()
    setInterval(this.refreshTimers, 1000)
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
