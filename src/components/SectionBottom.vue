<template>
  <div class="section-bottom-container">
    <section class="section-bottom">
      <h2>Get Started</h2>
      <vue-button
        id="download-button"
        @click.native="go('/intro/getting-started/install')"
        btn-size="large"
        btn-icon="cloud-download"
        btn-style="tendermint"
        btn-value="Install Tendermint">
      </vue-button>
    </section>
    <section class="section-bottom">
      <h2>Get Newsletter</h2>
      <form-email-signup></form-email-signup>
    </section>
  </div>
</template>

<script>
import FormEmailSignup from './FormEmailSignup'
import VueButton from '@nylira/vue-button'
export default {
  name: 'section-bottom',
  components: {
    FormEmailSignup,
    VueButton
  },
  methods: {
    go (destination) { this.$router.push(destination) }
  }
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

.section-bottom-container
  background mcolor

.section-bottom
  padding 2rem 1rem
  border-bottom 1px solid lighten(mcolor, 10%)
  h2
    color lighten(mcolor, 75%)
    font-weight 500
    font-size 1.25rem
    text-align center
    line-height 1
    margin-bottom 1.5rem
  
  #download-button, form
    margin 0 auto
    max-width 18rem

  #download-button
    width 100%

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
