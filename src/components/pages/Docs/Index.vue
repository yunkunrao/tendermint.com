<template>
  <div>
    <section id="section-top">
      <div class="section-container">
        <h1>Docs</h1>
        <p>The complete documentation for Tendermint.</p>
      </div>
    </section>
    <master class="inline"></master>
  </div>
</template>

<script>
export default {
  components: {
    Master: require('./Master')
  }
}
</script>

<style lang="stylus" scoped>
@require '../../../styles/variables.styl'
</style>
