<template>
  <section id="section-cta" class="section-default section-dark">
    <div class="section-container">
      <header class="section-header">
        <h2>Get Tendermint&nbsp;news</h2>
      </header>
      <div class="section-content">
        <email-signup></email-signup>
      </div>
    </div>
  </section>
</template>

<script>
import EmailSignup from '../partials/EmailSignup'

export default {
  name: 'section-footer-cta',
  components: {
    EmailSignup
  }
}
</script>


<style lang="stylus" scoped>
@require '../../styles/variables.styl'

#section-cta
  .section-container
    border-top 1px solid lighten(mcolor, 15%)
    border-bottom-color darken(mcolor, 20%)
</style>
