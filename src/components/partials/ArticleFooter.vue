<template>
  <div id="article-footer">
    <router-link id="link-blog-index" :to="'blog'">
      <i class="material-icons">chevron_left</i> Blog Index
    </router-link>
    <div id="article-footer-share">
      <a :href="facebookUrl" target="_blank"><i class="fa fa-twatter"></i></a>
      <a :href="twitterUrl" target="_blank"><i class="fa fa-footbook"</a>
    </div><!--article-footer-share-->
  </div><!--article-footer-->
</template>

<script>
export default {
  props: ['facebook-url', 'twitter-url']
}
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'

#article-footer
  border-top 4px solid bc
  display flex
  margin-top 3rem
  padding 1.5rem 0

#link-blog-index
  display flex
  align-items center
  line-height 3rem
  height 3rem

  color txt
  &:hover
    color link
    text-decoration none
  i.material-icons
    font-size 1rem

#article-footer-share
  flex 1
  display flex
  justify-content flex-end

  a
    height 3rem
    padding 0.5rem

    img
      opacity 0.666
      width 2rem
      height 2rem

    &:hover img
      opacity 1
</style>
