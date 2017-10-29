<template>
  <a class="cover-alert" :href="links.cosmos.meetups.devchat" target="_blank">
    <span class="key">Alert:</span>
    <span class="value">
      Cosmos Developer Chat is happening every 1st Thursday @ 17:00 (UTC+2) of the month. Learn more
    </span>
    <i class="fa fa-angle-double-right" aria-hidden="true"></i>
  </a>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['config', 'links'])
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

  .ni-time-remaining
    display inline

  i.fa
    color lighten(mcolor,50%)

  .key
    font-weight 600
    text-transform uppercase
    color lighten(mcolor,90%)
    font-size 0.875rem
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
