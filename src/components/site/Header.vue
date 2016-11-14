<template>
  <header id="site-header">
    <router-link to="/" id="nav-home" exact>
      <img src="../../assets/images/home/tendermint-logo-88-green.jpg" alt="Tendermint logo"/>
    </router-link>
    <nav>
      <router-link id="nav-intro" :to="'/intro'">Intro</router-link>
      <router-link id="nav-docs" :to="'/docs'">Docs</router-link>
      <router-link id="nav-community" :to="'/community'">Community</router-link>
      <router-link id="nav-blog" :to="'/blog'">Blog</router-link>
      <a id="nav-github" href="https://github.com/tendermint/tendermint">
        <i class="fa fa-github"></i>
        <span class="label">GitHub</span>
      </a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'site-header',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../../styles/variables.styl'

default-border-top-sm()
  border-top 3px solid c-site-bg

default-border-top()
  border-top 4px solid c-site-bg

highlighted-border-top-color()
  border-top-color lighten(mcolor, 33%) !important

#site-header
  position fixed
  top 0
  left 0
  z-index 100

  background mcolor url('../../assets/images/home/gradient.jpg') no-repeat top right
  background mcolor
  background-size cover

  width 100vw
  display flex

  // box-shadow hsla(mhue,msat,mlit - 15%,0.15) 0 0.125*x 0.16*x

  height 2.4*x

  a#nav-home
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
    box-shadow inset lighten(mcolor,10%) 1px 0 0
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
  #site-header
    height 3*x
    a#nav-home
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
  #site-header
    nav
      a
        font-size x
        &#nav-code
          display block

@media screen and (min-width: 400px)
  #site-header
    nav
      padding-left 0.75*x
      a
        padding 0 0.75*x

@media screen and (min-width: 480px)
  #site-header
    nav
      a
        &#nav-media
          display block

@media screen and (min-width: 640px)
  #site-header
    nav
      a
        padding 0 1.5*x

@media screen and (min-width: 720px)
  #site-header
    nav
      a
        i.fa
          margin-right 0.25*x
        .label
          display inline
</style>
