<template>
  <section class="section-install">
    <h2>Get Started</h2>
    <router-link to="/intro/getting-started/install" class="btn btn-large">
      <i class="fa fa-cloud-download"></i>Install Tendermint
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'section-install'
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

.section-install
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
  .btn
    margin 0 auto
    max-width 16*x

@media screen and (min-width: 720px)
  .section-install
    padding 3*x x
    h2
      font-size 1.5*x
</style>
