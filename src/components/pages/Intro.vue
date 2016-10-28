<template>
  <div id="page-intro">
    <section id="section-top">
      <div class="section-container">
        <h1>Intro</h1>
        <p>A quick introduction to Tendermint.</p>
      </div>
    </section>

    <section class="section-default section-flush">
      <div class="section-container">
        <div class="section-content">
          <div class="nav-blocks">
            <router-link :to="'/what-is-tendermint'">What is Tendermint?</router-link>
            <router-link :to="'/tendermint-vs'">Tendermint vs. Other Software</router-link>
            <router-link :to="'/what-is-tmsp'">TMSP Overview</router-link>
            <router-link :to="'/getting-started'">Getting Started</router-link>
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
