<template>
  <div class="card-bounty">
    <router-link :to="/bounties/ + bounty.id">
      <div class="title">{{ bounty.title }}</div>
      <div class="meta">{{ bounty.tags }}</div>
      <div class="desc">Reward: {{ bounty.reward }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'card-bounty',
  props: ['bounty']
}
</script>


<style lang="stylus">
@require '../styles/variables.styl'

.card-bounty
  border-bottom 1px solid bc
  margin 0 auto

  &:first-of-type
    margin-top -1.5*x
  &:last-of-type
    border-bottom none

  .title
    font-weight 500
    line-height 1.25
    color txt
  .meta
    text-transform uppercase
    font-size 0.75em
    font-weight 500
    line-height 2
    color light
  .desc
    max-width 40em

  a
    padding 1.5*x 0
    display block
    color txt
    &:hover .title
      color link

@media screen and (min-width: 360px)
  .card-bounty
    .title
      font-size 1.125em
    .meta
      font-size 0.85em

@media screen and (min-width: 768px)
  .card-bounty
    font-size 1.125*x
    a
      padding 2*x 0
</style>
