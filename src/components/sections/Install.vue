<template>
  <section id="section-install">
    <h2>Get Started</h2>
    <install-tendermint></install-tendermint>
  </section>
</template>

<script>
export default {
  name: 'section-footer-install',
  components: {
    InstallTendermint: require('../partials/InstallTendermint')
  }
}
</script>


<style lang="stylus" scoped>
@require '../../styles/variables.styl'

#section-install
  background mcolor
  border-bottom 1px solid lighten(mcolor, 10%)
  padding 2*x x
  h2
    color lighten(mcolor, 75%)
    font-weight 500
    font-size 1.25*x
    text-align center
    line-height 1
    margin-bottom 1.5*x
  .install-tendermint
    margin 0 auto


@media screen and (min-width: 720px)
  #section-install
    padding 3*x x
    h2
      font-size 1.5*x
</style>
