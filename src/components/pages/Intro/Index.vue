<template>
  <div id="page-intro" class="vue-component">
    <div class="vue-page">
      <section id="section-top">
        <div class="section-container">
          <h1>Intro</h1>
          <p>A quick introduction to Tendermint.</p>
        </div>
      </section>
    </div>
    <navigation class="inline"></navigation>
  </div>
</template>

<script>
import Navigation from './Navigation'
export default {
  components: {
    Navigation
  }
}
</script>

<style lang="stylus" scoped>
@require '../../../styles/variables.styl'
</style>
