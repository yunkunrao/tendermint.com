<template>
  <section id="section-architecture" class="section-default">
    <div class="section-container">
      <header class="section-header">
        <h2>Tendermint Consensus</h2>
      </header>
      <div class="section-content">
        <img src="../../assets/images/home/consensus_logic.png">
        <div class="text">
          <p>Tendermint is an easy-to-understand, mostly asynchronous, BFT consensus protocol<p>
        </div>
      </div>
    </div>

    <div class="section-container">
      <header class="section-header">
        <h2>Applications in Any Programming Language</h2>
      </header>
      <div class="section-content">
        <img src="../../assets/images/home/tmsp.png">
        <div class="text">
          <p>The Tendermint Socket Protocol (TMSP) allows for Byzantine Fault Tolerant replication of applications written in any programming language</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
@require '../../styles/variables.styl'

#section-architecture
  .section-content
    display flex
    flex-flow column

    img
      display block
      max-width 640px
      margin 0 auto
    .text
      max-width 640px
      margin 0 auto
      text-align center
</style>
