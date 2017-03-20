<template>
  <div class="app-bottom">
    <section-bottom></section-bottom>
    <footer class="app-footer">
      <div class="sections">
        <section>
          <img src="../assets/images/logo-white-alpha-160.png" class="footer-logo">
          <span>&copy; 2016 All In Bits, Inc.</span>
        </section>
        <section>
          <header>Company</header>
          <router-link :to="'/blog'">Blog</router-link>
          <router-link :to="'/about'">About</router-link>
          <router-link :to="'/careers'">Careers</router-link>
          <router-link :to="'/press'">Press</router-link>
          <router-link :to="'/contact'">Contact</router-link>
        </section>
        <section>
          <header>Community</header>
          <a href="https://www.facebook.com/tendermint/">
            <i class="fa fa-footbook"></i>Facebook
          </a>
          <a href="https://github.com/tendermint/tendermint">
            <i class="fa fa-github"></i>GitHub
          </a>
          <a href="https://www.linkedin.com/company/tendermint">
            <i class="fa fa-linkedout"></i>LinkedIn
          </a>
          <a href="http://forum.tendermint.com:3000">
            <i class="fa fa-slick"></i>Slack
          </a>
          <a href="https://twitter.com/tendermint_team">
            <i class="fa fa-twatter"></i>Twitter
          </a>
        </section>
        <section>
          <header>Developers</header>
          <nav>
            <router-link :to="'/intro/getting-started/download-tendermint'">Download</router-link>
            <router-link :to="'/intro'">Introduction</router-link>
            <router-link :to="'/docs'">Documentation</router-link>
            <router-link :to="'/docs/guides/contributing'">Contributing</router-link>
            <a href="https://github.com/tendermint/tendermint/issues">Issues</a>
          </nav>
        </section>
      </div><!--sections-->
    </footer>
  </div>
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
      max-width 1200px
    section
      flex 0 0 25%
</style>
