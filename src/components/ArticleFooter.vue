<template>
  <div :class="cssClass">
    <nav>
      <btn
        :theme="theme"
        type="link"
        to="/blog"
        icon="angle-left"
        value="Return to Blog Index">
      </btn>
      <btn
        :theme="theme"
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
  computed: {
    cssClass () {
      let value = 'ni-article-footer'
      if (this.theme) value += ` ni-article-footer-theme-${this.theme}`
      return value
    }
  },
  props: ['email', 'reddit', 'facebook', 'twitter', 'theme']
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.ni-article-footer
  margin 0 auto
  padding 1rem 0
  border-top 1px solid bc

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
        color dim

  &.ni-article-footer-theme-tendermint
    border-top none

    menu a i.fa
      color lighten(mcolor, 75%)

@media screen and (min-width: 316px)
  .ni-article-footer
    padding 1.125rem 0

@media screen and (min-width: 414px)
  .ni-article-footer
    padding 1.25rem 0
    nav
      .ni-btn
        margin-bottom 1rem

@media screen and (min-width: 480px)
  .ni-article-footer
    padding 1.5rem 0

@media screen and (min-width: 768px)
  .ni-article-footer
    padding 3rem 0
    nav 
      flex-flow row nowrap
      margin-bottom 1.5rem
      .ni-btn
        margin 0 1.5rem
    menu
      a
        margin 0 0.5rem
</style>
