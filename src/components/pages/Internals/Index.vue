<template>
  <div id="page-community">
    <section id="section-top">
      <div class="section-container">
        <h1>Tendermint Internals</h1>
        <p>Everything about Tendermint Core.</p>
      </div>
    </section>

    <section class="section-default section-flush">
      <div class="section-container">
        <div class="section-content">
          <div class="nav-blocks">
            <router-link :to="'/internals/introduction'">Introduction</router-link>
            <router-link :to="'/internals/validators'">Validators</router-link>
            <router-link :to="'/internals/byzantine-consensus-algorithm'">Byzantine Consensus Algorithm</router-link>
            <router-link :to="'/internals/block-structure'">Block Structure</router-link>
            <router-link :to="'/internals/rpc'">RPC</router-link>
            <router-link :to="'/internals/genesis'">Genesis</router-link>
            <router-link :to="'/internals/configuration'">Configuration</router-link>
            <router-link :to="'/internals/light-client-protocol'">Light Client Protocol</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style lang="stylus" scoped>
@require '../../../styles/variables.styl'
</style>
