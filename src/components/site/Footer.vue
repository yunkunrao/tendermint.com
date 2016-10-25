<template>
  <div id="site-footer-wrapper">
    <section-footer-social></section-footer-social>
    <section-footer-cta></section-footer-cta>
    <footer id="site-footer">
      <p class="left">&copy; 2016 Tendermint</p>
      <p class="right">
        <a href="mailto:hello@tendermint.com">
          <i class="fa fa-envelope-o"></i>
          Contact
        </a>
      </p>
    </footer>
  </div>
</template>

<script>
import SectionFooterSocial from '../sections/FooterSocial'
import SectionFooterCta from '../sections/FooterCta'

export default {
  name: 'site-footer',
  components: {
    SectionFooterSocial,
    SectionFooterCta
  }
}
</script>

<style lang="stylus" scoped>
@require '../../styles/variables.styl'

#site-footer
  border-top 1px solid lighten(mcolor, 7%)

  height 3*x
  line-height 3*x
  background mcolor

  display flex
  justify-content space-between

  p
    padding 0 1em
    color lighten(mcolor,50%)

  a
    color lighten(mcolor,90%)
</style>
