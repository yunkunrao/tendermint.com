<template lang="pug">
a.cover-alert(:href='links.cosmos.website' target='_blank')
  span.key Alert:!{' '}
  span.value All of us at Tendermint are preparing the Cosmos Network for release. Visit the project website &raquo;
</template>

<script>
import { mapGetters } from "vuex"
export default {
  computed: {
    ...mapGetters(["config", "links"])
  }
}
</script>

<style lang="stylus">
@require '~variables'

.cover-alert
  display block
  border 1px solid var(--bc-dim)
  padding 0.4375rem 0.75rem
  margin-bottom 2rem
  font-size 0.75rem
  position relative
  overflow hidden
  &:hover
    border-color var(--link)

  .ni-time-remaining
    display inline

  .key
    font-weight 600
    text-transform uppercase
    color var(--bright)
    font-size 0.875rem
  .value
    color var(--txt)

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
