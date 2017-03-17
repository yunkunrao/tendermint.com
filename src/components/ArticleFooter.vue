<template>
  <div class="article-footer">
    <router-link class="index" :to="'/blog'">
      <i class="fa fa-angle-left"></i> Blog Index
    </router-link>
    <div class="share">
      <a :href="facebookUrl" target="_blank"><i class="fa fa-footbook"></i></a>
      <a :href="twitterUrl" target="_blank"><i class="fa fa-twatter"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'article-footer',
  props: ['facebook-url', 'twitter-url']
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.article-footer
  display flex
  margin 0 auto
  padding 1rem 1.25rem
  max-width 60rem

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
