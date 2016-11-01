<template>
  <div>
    <section id="section-top">
      <div class="section-container">
        <h1>Intro</h1>
        <p>A quick introduction to Tendermint.</p>
      </div>
    </section>
    <master class="inline"></master>
  </div>
</template>

<script>
import Master from './Master'
export default {
  components: {
    Master
  }
}
</script>

<style lang="stylus" scoped>
@require '../../../styles/variables.styl'
</style>
