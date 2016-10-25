<template>
  <section id="section-architecture" class="section-default section-dark">
    <div class="section-container">
      <header class="section-header">
        <h2>Tendermint Consensus</h2>
      </header>
      <div class="section-content">
        <a class="anchor-img" href="/posts/tendermint-socket-protocol"><img src="/images/home/tendermint-consensus.png"/></a>
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
        <div class="text">
          <p>The Tendermint Socket Protocol (TMSP) allows for Byzantine Fault Tolerant replication of applications written in any programming language</p>
        </div>
        <a class="anchor-img" href="/posts/tendermint-socket-protocol"><img src="/images/home/tmsp_architecture.png"/></a>
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

    a.anchor-img
      text-align center
      display block
      margin 0 auto
      img
        display block
        max-height 360px
        margin 0 auto

    .text
      border 1px solid dbc
      background hsla(0,0,0,0.15)
      p
        border-bottom 1px dotted dbc
        padding 0.666*x x
        &:last-of-type
          border-bottom none

@media screen and (min-width: 640px)
  #section-architecture
    .section-container
      .section-content
        flex-flow row

        a.anchor-img
          margin-right x
        .text
          flex 1

@media screen and (min-width: 960px)
  #section-architecture
    .section-container

      .section-content
        max-width 960px
        display flex

        a.anchor-img
          padding-right 1.5*x

        .text
          p
            padding x 1.5*x
</style>
