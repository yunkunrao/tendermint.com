<template>
  <section class="section-default section-dark">
    <div class="section-container">
      <div class="blocks">
      <div class="block">
        <i class="fa fa-server"></i> 
        <div class="text">
          <div class="key">Byzantine Fault-Tolerant</div>
          <div class="value">Tendermint tolerates up to a 1/3 of your machines failing arbitrarily. This includes explicitly malicious behaviour.</div>
        </div>
      </div>
      <div class="block">
        <i class="fa fa-clone"></i>
        <div class="text">
          <div class="key">State Machine Replication</div>
          <div class="value">Tendermint can replicate deterministic state machines written in any programming language.</div>
        </div>
      </div>
      <div class="block">
        <i class="fa fa-lock"></i>
        <div class="text">
          <div class="key">Secure P2P</div>
          <div class="value">Gossip protocols and peer discovery are secured via Tendermint's authenticated encryption system.</div>
        </div>
      </div>
      <div class="block">
        <i class="fa fa-fighter-jet"></i>
        <div class="text">
          <div class="key">Lightning fast</div>
          <div class="value">Tendermint supports thousands of transaction per second at 1000ms latencies.</div>
        </div>
      </div>
      <div class="block">
        <i class="fa fa-cloud-upload"></i>
        <div class="text">
          <div class="key">Easy to deploy</div>
          <div class="value">Use mintnet to deploy your app to any cloud provider supported by docker-machine.</div>
        </div>
      </div>
      <div class="block">
        <i class="fa fa-code"></i>
        <div class="text">
          <div class="key">100% open source</div>
          <div class="value">All of Tendermint's source code is licensed under Apache 2.0. Check it out on <a  href="https://github.com/tendermint">GitHub</a>.</div>
        </div>
      </div>
      </div><!--blocks-->
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
@require '../../styles/variables.styl'

.blocks
  padding-top x

.block
  display flex
  margin-bottom 2*x
  padding 0 x

  i.fa
    font-size 1.5*x
    display block

    width 3*x
    height 3*x
    color lighten(mcolor,50%)

    display flex
    justify-content center
    align-items center

  .text
    flex 1
    padding 0 x

  .key
    margin 0 0 0.5*x
    font-weight 500
    font-size 1.125*x

@media screen and (min-width: 360px)
  .block
    i.fa
      width 3.5*x
      height 3.5*x
      font-size 1.75*x
      
    .text
      padding 0 1.5*x

@media screen and (min-width: 400px)
  .block
    i.fa
      width 4*x
      height 4*x
      font-size 2*x

@media screen and (min-width: 720px)
  .blocks
    padding-top 2*x
  .block
    max-width 640px
    margin-left auto
    margin-right auto
    margin-bottom 3*x

    i.fa
      font-size 3*x
      width 5*x
      height 5*x

    .key
      font-size 1.25*x

@media screen and (min-width: 960px)
  .blocks
    padding-top 3*x
    display flex
    flex-flow row wrap
    max-width 900px
    margin 0 auto
  .block
    flex 0 0 50%
    margin-bottom 4.5*x
    padding 0 x
    i.fa
      font-size 3*x
      width 5*x
      height 5*x
    .key
      font-size 1.5*x
      margin-bottom x

    .value
      font-size 1.25*x

@media screen and (min-width: 1200px)
  .blocks
    max-width 1080px
</style>
