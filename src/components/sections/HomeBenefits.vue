<template>
  <section class="section-default">
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
          <div class="key">Lighting fast</div>
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
</style>
