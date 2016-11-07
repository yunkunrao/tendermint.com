<template>
  <div id="site-footer-wrapper">

    <section id="section-social" class="section-default section-dark">
      <div class="section-container">
        <header class="section-header"><h2>Social</h2></header>
        <div class="section-content">
          <connections></connections>
        </div>
      </div>
    </section>

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
export default {
  name: 'site-footer',
  components: {
    SectionFooterCta: require('../sections/FooterCta'),
    Connections: require('../partials/Connections')
  }
}
</script>

<style lang="stylus" scoped>
@require '../../styles/variables.styl'

#site-footer-wrapper
  position relative
  z-index 11

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
