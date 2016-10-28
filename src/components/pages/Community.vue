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
          <nav class="nav-blocks">
            <a class="external" href="https://github.com/tendermint/tendermint/issues">Open Issues (Github)</a>
            <router-link :to="'/software-ecosystem'">Software Ecosystem</router-link>
            <router-link :to="'/media'">Media Mentions</router-link>
            <router-link :to="'/about'">About Tendermint</router-link>
          </nav>
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
