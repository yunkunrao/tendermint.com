<template>
  <div class="page-presentations-footer">
    <router-link class="index" :to="'/presentations'">
      <i class="fa fa-angle-left"></i> Presentations Index
    </router-link>
    <div class="share">
      <a :href="facebookUrl" target="_blank"><i class="fa fa-footbook"></i></a>
      <a :href="twitterUrl" target="_blank"><i class="fa fa-twatter"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['facebook-url', 'twitter-url']
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.page-presentations-footer
  border-top 4px solid bc
  display flex
  margin-top 3rem
  padding 1.5rem 0

  .index
    display flex
    align-items center
    line-height 3rem
    height 3rem
    color txt
    &:hover
      color link
      text-decoration none
    i.fa
      font-size 1.5rem
      width 1.5rem
      text-align center

  .share
    flex 1
    display flex
    justify-content flex-end

    a
      height 3rem
      padding 0.5rem

      i.fa
        font-size 1.5rem
        color light

      &:hover i.fa
        color link
</style>
