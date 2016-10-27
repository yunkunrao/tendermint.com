<template>
  <div id="page-community">
    <section id="section-top">
      <div class="section-container">
        <h1>Community</h1>
        <p>Contribute and join our friendly community.</p>
      </div>
    </section>

    <section class="section-default section-flush">
      <div class="section-container">
        <div class="section-content">
          <p>[Open Issues](https://github.com/tendermint/tendermint/issues)</p>
          <p>[Media](media)</p>
          <p>[Software Ecosystem](software-ecosystem)</p>
          <p><router-link :to="'/about'">[About](about)</router-link></p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
@require '../../styles/variables.styl'
</style>
