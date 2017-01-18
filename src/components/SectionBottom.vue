<template>
  <div class="section-bottom-container">
    <section class="section-bottom">
      <h2>Get Started</h2>
      <router-link to="/intro/getting-started/install" class="btn btn-large">
        <i class="fa fa-cloud-download"></i>Install Tendermint
      </router-link>
    </section>
    <section class="section-bottom">
      <h2>Get Newsletter</h2>
      <form-email-signup></form-email-signup>
    </section>
  </div>
</template>

<script>
import FormEmailSignup from './FormEmailSignup'
export default {
  name: 'section-bottom',
  components: {
    FormEmailSignup
  }
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

.section-bottom-container
  background mcolor
  border-bottom 1px solid lighten(mcolor, 10%)

.section-bottom
  padding 2rem 1rem
  h2
    color lighten(mcolor, 75%)
    font-weight 500
    font-size 1.25rem
    text-align center
    line-height 1
    margin-bottom 1.5rem
  .btn, form
    margin 0 auto
    max-width 18rem

@media screen and (min-width: 720px)
  .section-bottom-container
    display flex
    .section-bottom
      padding-top 3rem
      padding-bottom 3rem
      flex 1

@media screen and (min-width: 960px)
  .section-bottom-container
    .section-bottom
      h2
        font-size 1.5rem
        margin-bottom 2rem
    .section-bottom:last-of-type
      border-left 1px solid lighten(mcolor, 10%)

@media screen and (min-width: 1200px)
  .section-bottom-container
    .section-bottom
      padding-top 4rem
      padding-bottom 4rem
</style>
