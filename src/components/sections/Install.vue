<template>
  <section id="section-install">
    <h2>Get Tendermint</h2>
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
    margin 0 0 x
</style>
