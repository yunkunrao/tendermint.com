<template>
  <header class="app-header">
    <router-link to="/" class="nav-home" exact>
      <img src="../assets/images/logo-green-88.jpg" alt="Tendermint logo"/>
    </router-link>
    <nav>
      <router-link class="nav-intro" :to="'/intro'">Intro</router-link>
      <router-link class="nav-docs" :to="'/docs'">Docs</router-link>
      <router-link class="nav-community" :to="'/community'">Community</router-link>
      <router-link class="nav-blog" :to="'/blog'">Blog</router-link>
      <a class="nav-github" href="https://github.com/tendermint/tendermint">
        <i class="fa fa-github"></i>
        <span class="label">GitHub</span>
      </a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

default-border-top-sm()
  border-top 3px solid c-app-bg

default-border-top()
  border-top 4px solid c-app-bg

highlighted-border-top-color()
  border-top-color lighten(mcolor, 33%) !important

.app-header
  position fixed
  top 0
  left 0
  z-index 100
  background mcolor
  width 100vw
  display flex

  height 2.4*x

  a.nav-home
    display block
    default-border-top-sm()
    border-top-color darken(acolor,25%) !important
    img
      width 2.4*x - 3px
      height 2.4*x - 3px
    &:hover
      border-top-color darken(acolor,25%) !important

  nav
    flex 1
    display flex
    justify-content flex-end
    default-border-top-sm()
    padding-right 0.5*x
    a
      display block
      padding 0 0.5*x
      color lighten(mcolor,75%)
      default-border-top-sm()

      margin-top -3px
      line-height 2.4*x - 3px
      font-size 0.9*x

      .label
        display none

      &:hover
        highlighted-border-top-color()
        color lighten(mcolor,90%)

      &.router-link-active
        highlighted-border-top-color()

@media screen and (min-height: 400px)
  .app-header
    height 3*x
    a.nav-home
      default-border-top()
      img
        width 3*x - 4px
        height 3*x - 4px
    nav
      default-border-top()
      a
        default-border-top()
        margin-top -4px
        line-height 3*x - 4px

@media screen and (min-width: 360px)
  .app-header
    nav
      a
        font-size x
        &.nav-code
          display block

@media screen and (min-width: 400px)
  .app-header
    nav
      padding-left 0.75*x
      a
        padding 0 0.75*x

@media screen and (min-width: 480px)
  .app-header
    nav
      a
        &.nav-media
          display block

@media screen and (min-width: 640px)
  .app-header
    nav
      a
        padding 0 1.5*x

@media screen and (min-width: 720px)
  .app-header
    nav
      a
        i.fa
          margin-right 0.25*x
        .label
          display inline
</style>
