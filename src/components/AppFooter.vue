<template lang='pug'>
.app-bottom
  section-bottom
  footer.app-footer
    .sections
      section
        img.footer-logo(src='../assets/images/logo-white-alpha-160.png')
        span © {{ new Date().getFullYear() }} All In Bits, Inc.
        span 29th Floor, 85 Broad St, New York, NY 10004
      section
        header Company
        router-link(:to="'/about'") About
        a(href='https://blog.cosmos.network/tendermint/home', target='_blank') Blog
        router-link(:to="'/careers'") Careers
        router-link(:to="'/contact'") Contact
        router-link(:to="'/privacy'") Privacy
      section
        header Community
        a(href='https://www.facebook.com/tendermint/')
          i.fa.fa-footbook
          | Facebook
        a(href='https://github.com/tendermint/tendermint')
          i.fa.fa-github
          | GitHub
        a(href='https://www.linkedin.com/company/tendermint')
          i.fa.fa-linkedout
          | LinkedIn
        a(href='https://cosmos.rocket.chat')
          i.fa.fa-rocket
          | Chat on Rocket
        a(href='https://twitter.com/tendermint_team')
          i.fa.fa-twatter
          | Twitter
      section
        header Developers
        nav
          router-link(:to="'/download'") Download

          a(href='https://github.com/tendermint/tendermint/wiki/Contributing' target='_blank') Contributing
          a(href='https://github.com/tendermint/tendermint/issues') Issues
</template>

<script>
import SectionBottom from './SectionBottom'
export default {
  name: 'app-footer',
  components: {
    SectionBottom
  }
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

.app-footer
  background mcolor
  border-bottom 4px solid c-app-bg

  .footer-logo
    width 80px
    height 80px

  .sections
    padding x 0
    color c-app-fg
    margin 0 auto

    display flex
    flex-flow row wrap

  section
    flex 0 0 50%
    padding x 0.5*x

    header
      padding 0.25*x 0.5*x

      color lighten(mcolor, 55%)

      font-size 0.75*x
      font-weight bold
      text-transform uppercase
      letter-spacing 0.0625em

    a, span
      color lighten(mcolor,90%)
      display block
      padding 0.25*x 0.5*x
      i.fa
        display inine-block
        text-align center
        width 1.5*x
        margin-right 0.5*x

@media screen and (min-width: 360px)
  .app-footer
    .sections
      padding x x*0.5
    .section
      padding x

@media screen and (min-width: 414px)
  .app-footer
    .sections
      padding x

@media screen and (min-width: 768px)
  .app-footer
    .sections
      padding 2*x
    section
      flex 0 0 25%
      header
        margin-bottom x

@media screen and (min-width: 1024px)
  .app-footer
    .sections
      max-width 1024px
    section
      flex 0 0 25%

@media screen and (min-width: 1280px)
  .app-footer
    .sections
      max-width 100vw
      padding-left 3rem
      padding-right 3rem
    section
      flex 0 0 25%
</style>
