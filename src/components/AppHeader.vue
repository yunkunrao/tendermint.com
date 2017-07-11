<template>
<header class="app-header">
  <div class="container">

  <div class="header-item" @click="toggleMenuApp" v-if="!desktop">
    <i v-if="!activeMenuApp" class="fa fa-bars"></i>
    <i v-else class="fa fa-times"></i>
  </div>

  <router-link to="/" class="header-item header-item-flush">
    <img src="../assets/images/logo-green-88.jpg" alt="Tendermint logo"/>
  </router-link>

  <menu class="menu-popup menu-app" v-if="activeMenuApp || desktop">
    <nav class="nav-app">
      <router-link to="/intro" @click.native="close" exact>Intro</router-link>
      <router-link to="/docs" @click.native="close" exact>Docs</router-link>
      <router-link to="/community" @click.native="close" exact>Community</router-link>
      <router-link to="/blog" @click.native="close" exact>Blog</router-link>
      <router-link to="/careers" @click.native="close" exact>Careers</router-link>
      <router-link to="/about" @click.native="close" exact>About</router-link>
    </nav>
  </menu>

  <div class="header-item header-item-alert">
    <a href="https://github.com/tendermint">
      <i class="fa fa-github"></i>
    <span class="label" v-if="desktop">GitHub</span>
    </a>
  </div>

  </div>
</header>
</template>

<script>
import { mapGetters } from 'vuex'
import disableScroll from 'disable-scroll'
export default {
  name: 'app-header',
  computed: {
    ...mapGetters(['config'])
  },
  data: () => ({
    activeMenuApp: false,
    desktop: false
  }),
  methods: {
    close () {
      this.activeMenuApp = false
      disableScroll.off()
    },
    goto (route) {
      this.close()
      // console.log('going to', route)
      this.$router.push(route)
      return
    },
    toggleMenuApp () {
      this.activeMenuApp = !this.activeMenuApp
      if (this.activeMenuApp) disableScroll.on()
      else disableScroll.off()
    },
    watchWindowSize () {
      let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
      if (w >= 1024) {
        this.close()
        this.desktop = true
        return
      }
      this.desktop = false
      return
    }
  },
  mounted () {
    this.watchWindowSize()
    window.onresize = this.watchWindowSize
  }
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

navc = #94c0ec

.app-header
  position fixed
  top 0
  left 0
  z-index 100
  width 100%

  background alpha(mcolor, 95%)
  backdrop-filter blur(0.125rem)
  shadow()

  .container
    max-width 1024px
    margin 0 auto
    display flex
    flex-flow row wrap
    justify-content space-between

  .header-item
    height 3rem
    display flex
    align-items center
    padding 0 1rem

    color navc
    cursor pointer
    &:hover
      color link

    i.fa
      width 1rem
      text-align center
      position relative
    i.fa + .label
      margin-left 0.5rem
    i.fa, .label
      color navc
      font-weight 400

    .label
      user-select none

    img
      display block
      height 3rem
      width auto

    &.header-item-flush
      padding 0

    &.header-item-alert
      justify-content flex-end
      .alert
        df()
        font-size 0.5rem
        font-weight 600
        line-height 1
        color #fff
        display flex
        align-items center
        justify-content center

        width 0.666rem
        height 0.666rem
        border-radius 0.333rem
        background #f00
        position absolute
        bottom -0.3rem
        right -0.3rem
    &:hover
      i.fa, .label
        color link

  .menu-app
    nav
      a
        display flex
        align-items center
        cursor pointer
        font-weight 400
        i.fa
          margin-right 0.25rem
        img
          height 1rem
          margin-right 0.1rem

  .menu-popup
    z-index 101
    user-select none

@media screen and (max-width:1023px)
  .menu-popup
    height 100vh
    position fixed
    top 3rem
    left 0
    bottom 0
    width 100vw

    background c-app-fg
    user-select none

    nav
      display flex
      flex-flow column
      padding 1.5rem 3rem
      > a, > p
        padding 0.75rem 0
      > a
        color txt
        border-bottom 1px solid bc
        display flex
        align-items center
        justify-content space-between
        user-select none
        &.disabled
          color light
          cursor not-allowed
        &:hover
          color link
        .alert
          display flex
          align-items center
          background link
          color c-app-fg
          font-size 0.75rem
          padding 0 0.5rem
          border-radius 0.25rem
          height 1.5rem
          i.fa
            color c-app-fg
          i.fa + .ni-time-left
            margin-left 0.25rem
      > p
        .ni-time-left
          display inline
          font-weight bold
        a
          color link
          &:hover
            text-decoration underline

@media screen and (min-width: 1024px)
  .app-header
    .container
      .header-item
        width 8rem

  .menu-popup.menu-app
    display flex
    padding 0 1rem

    .container
      display flex

    nav
      display flex
      flex-flow row
      align-items center
      > a
        padding 0 1rem
        color navc
        line-height 3rem
        &:hover
          color link
        &.router-link-active
          background lighten(mcolor, 15%)
          cursor default
          &:hover
            color navc
</style>
