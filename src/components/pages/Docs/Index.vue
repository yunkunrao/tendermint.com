<template>
  <div id="page-docs">
    <section id="section-top">
      <div class="section-container">
        <h1>Docs</h1>
        <p>The complete documentation for Tendermint.</p>
      </div>
    </section>
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
