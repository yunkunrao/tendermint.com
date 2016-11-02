<template>
  <section class="section-default">
    <div class="section-container blocks">
      <div class="block">
        <div class="key"><i class="fa fa-group"></i> Byzantine Fault Tolerant</div>
        <div class="value">Tolerate up to 1/3 of machines failing arbitrarily, including explicitly malicious behaviour.</div>
      </div><!--block-->
      <div class="block">
        <div class="key"><i class="fa fa-database"></i>State Machine Replication</div>
        <div class="value">Replicate deterministic state machines written in any programming language using the Tendermint Socket Protocol.</div>
      </div><!--block-->
      <div class="block">
        <div class="key"><i class="fa fa-lock"></i>Secure P2P</div>
        <div class="value">Gossip protocols and peer discovery secured via authenticated encryption.</div>
      </div><!--block-->
      <div class="block">
        <div class="key"><i class="fa fa-bolt"></i>Blazing Speed</div>
        <div class="value">Thousands of transaction per second at 1000ms latencies.</div>
      </div><!--block-->
      <div class="block">
        <div class="key"><i class="fa fa-cloud-upload"></i>Easy Deployment</div>
        <div class="value">Quickly deploy to any cloud provider supported by docker-machine using the mintnet tool.</div>
      </div><!--block-->
      <div class="block">
        <div class="key"><i class="fa fa-group"></i>Open Source</div>
        <div class="value">All our code is licensed Apache2.0 and available on <a
  href="https://github.com/tendermint">GitHub</a></div>
      </div><!--block-->
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
