<template>
  <div id="page-docs">
    <section id="section-top">
      <div class="section-container">
        <h1>Docs</h1>
        <p>The complete documentation for Tendermint.</p>
      </div>
    </section>

    <section class="section-default section-flush">
      <div class="section-container">
        <div class="section-content">
          <div class="nav-blocks">
            <router-link :to="'/internals'">Tendermint Internals</router-link>
            <router-link :to="'/commands'">Tendermint Commands</router-link>
            <router-link :to="'/guides'">Guides</router-link>
            <router-link :to="'/roadmap'">Roadmap</router-link>
            <router-link :to="'/faq'">FAQ</router-link>
          </div>
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
