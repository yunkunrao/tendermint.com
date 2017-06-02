<template>
  <div class="article-footer">
    <nav>
      <btn
        theme="tendermint"
        type="link"
        to="/blog"
        icon="angle-left"
        value="Return to Blog Index">
      </btn>
      <btn
        theme="tendermint"
        type="anchor"
        href="/static/feed.xml"
        icon="rss"
        value="Subscribe via RSS">
      </btn>
    </nav>
    <menu class="share">
      <a :href="email" target="_blank"><i class="fa fa-envelope"></i></a>
      <a :href="reddit" target="_blank"><i class="fa fa-raddit-alien"></i></a>
      <a :href="facebook" target="_blank"><i class="fa fa-footbook"></i></a>
      <a :href="twitter" target="_blank"><i class="fa fa-twatter"></i></a>
    </menu>
  </div>
</template>

<script>
import Btn from '@nylira/vue-button'
export default {
  name: 'article-footer',
  components: {
    Btn
  },
  props: ['email', 'reddit', 'facebook', 'twitter']
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.article-footer
  margin 0 auto
  padding 1rem 0

  nav
    margin-bottom 1rem
    display flex
    flex-flow column nowrap
    justify-content center
    align-items center
    .ni-btn
      margin-bottom 0.5rem
      width 100%
      max-width 18rem
      &:last-of-type
        margin-bottom 0
  menu
    display flex
    justify-content center
    align-items center
    a
      height 3rem
      width 3rem
      display flex
      align-items center
      justify-content center

      i.fa
        font-size 1.5rem
        color lighten(mcolor, 75%)

@media screen and (min-width: 414px)
  .article-footer
    nav
      .ni-btn
        margin-bottom 1rem
@media screen and (min-width: 768px)
  .article-footer
    padding 1.5rem 0
    nav 
      flex-flow row nowrap
      margin-bottom 1.5rem
      .ni-btn
        margin 0 1.5rem
    menu
      a
        margin 0 0.5rem
</style>
