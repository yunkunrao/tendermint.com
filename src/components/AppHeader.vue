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
  name: 'app-header'
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

default-border-top()
  border-top 0.25rem solid c-app-bg

highlighted-border-top-color()
  border-top-color lighten(mcolor, 33%) !important

.app-header
  position fixed
  top 0
  left 0
  z-index 100
  width 100vw
  display flex
  height 3rem
  background alpha(mcolor, 95%)
  backdrop-filter blur(0.125rem)

  a.nav-home
    display block
    default-border-top()
    border-top-color darken(acolor,25%) !important
    img
      width 3rem - 0.25rem
      height 3rem - 0.25rem
    &:hover
      border-top-color darken(acolor,25%) !important

  nav
    flex 1
    display flex
    justify-content flex-end
    default-border-top()
    padding-right 0.5rem
    a
      display block
      padding 0 0.5rem
      color lighten(mcolor,75%)
      default-border-top()
      margin-top -0.25rem
      line-height 3rem - 0.25rem
      font-size 0.9rem

      .label
        display none

      &:hover
        highlighted-border-top-color()
        color lighten(mcolor,90%)

      &.router-link-active
        highlighted-border-top-color()

@media screen and (min-width: 360px)
  .app-header
    nav
      a
        font-size 1rem
        &.nav-code
          display block

@media screen and (min-width: 414px)
  .app-header
    nav
      padding-left 0.75rem
      a
        padding 0 0.75rem

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
        padding 0 1.5rem

@media screen and (min-width: 768px)
  .app-header
    nav
      a
        i.fa
          margin-right 0.25rem
        .label
          display inline
</style>
