<template>
  <a class="cover-alert" href="https://cosmos.network/blog/cosmos-fundraiser-date">
    <span class="key">ANNOUNCEMENT:</span>
    <span class="value">Fundraiser for Cosmos, Internet of Blockchains begins {{ pdtStartDate }}</span>
    <i class="fa fa-angle-double-right" aria-hidden="true"></i>
  </a>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment-timezone'
export default {
  computed: {
    pdtStartDate () {
      let utc = moment.utc(this.config.START_DATETIME)
      let pdt = moment(utc).tz(this.config.TIMEZONE)
      return pdt.format('LLL z')
    },
    ...mapGetters(['config'])
  }
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

.cover-alert
  display block
  border 1px solid lighten(mcolor,20%)
  padding 0.4375rem 0.75rem
  margin-bottom 2rem
  font-size 0.75rem
  position relative
  overflow hidden
  &:hover
    border-color lighten(mcolor, 35%)

  i.fa
    display block
    position absolute
    bottom -0.25rem
    right 0.25rem
    font-size 3rem
    line-height 1
    color lighten(mcolor, 5%)
    z-index -1

  .key
    text-transform uppercase
    color #fff
    font-weight 500
    color lighten(mcolor,90%)
  .value
    color lighten(mcolor,70%)

@media screen and (min-width:360px)
  .cover-alert
    font-size 0.875rem
    margin-bottom 2.5rem
@media screen and (min-width:400px)
  .cover-alert
    font-size 1rem
@media screen and (min-width:1200px)
  .cover-alert
    margin-bottom 3rem
</style>
