<template>
  <div class="section-bottom-container">
    <!--<section-cosmos></section-cosmos>-->
    <section class="section-bottom">
      <h2>Get Started</h2>
      <btn
        type="link"
        id="download-button"
        to="/download"
        size="lg"
        icon="cloud-download"
        theme="tendermint"
        value="Download">
      </btn>
    </section>
    <section class="section-bottom">
      <h2>Get Newsletter</h2>
      <form-email-signup></form-email-signup>
    </section>
  </div>
</template>

<script>
// import SectionCosmos from './SectionCosmos'
import FormEmailSignup from './FormEmailSignup'
import Btn from '@nylira/vue-button'
export default {
  name: 'section-bottom',
  components: {
    FormEmailSignup,
    Btn
    // SectionCosmos
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
  display flex
  flex-flow column
  justify-content center
  h2
    color lighten(mcolor, 75%)
    font-weight 500
    font-size 1.25rem
    text-align center
    line-height 1
    margin-bottom 1.5rem
  
  #download-button, form
    margin 0 auto
    width 100%
    max-width 18rem

@media screen and (min-width: 768px)
  .section-bottom-container
    display flex
    flex-flow row wrap
    .section-cosmos
      width 100%
    .section-bottom
      padding-top 3rem
      padding-bottom 3rem
      flex 1

@media screen and (min-width: 1024px)
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
