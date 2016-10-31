<template>
  <div id="page-intro">
    <section id="section-top">
      <div class="section-container">
        <h1>Getting Started</h1>
        <p>Quickly setup your first TMSP app.</p>
      </div>
    </section>

    <section class="section-default section-flush">
      <div class="section-container">
        <div class="section-content">
          <div class="nav-blocks">
            <router-link :to="'/intro/getting-started/install'">Install Tendermint</router-link>
            <router-link :to="'/intro/getting-started/first-tmsp'">First TMSP App</router-link>
            <router-link :to="'/intro/getting-started/deploy-testnet'">Deploy Testnet</router-link>
            <router-link :to="'/intro/getting-started/next-steps'">Next Steps</router-link>
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
@require '../../../../styles/variables.styl'
</style>
