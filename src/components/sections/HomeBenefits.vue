<template>
  <section class="section-default section-columns">
    <div class="columns">
      <div class="section-container">
        <header class="section-header">
          <i class="fa fa-group"></i>
          <h2>Byzantine Fault Tolerant</h2>
        </header>
        <div class="section-content">
          <p>Tolerate up to 1/3 of machines failing arbitrarily, including explicitly malicious behaviour.
        </div>
      </div>

      <div class="section-container">
        <header class="section-header">
          <i class="fa fa-database"></i>
          <h2>State Machine Replication</h2>
        </header>
        <div class="section-content">
          <p>Replicate deterministic state machines written in any programming language using the Tendermint Socket Protocol.</p>
        </div>
      </div>

      <div class="section-container">
        <header class="section-header">
          <i class="fa fa-lock"></i>
          <h2>Secure P2P</h2>
        </header>
        <div class="section-content">
          <p>Gossip protocols and peer discovery secured via authenticated encryption.</p>
        </div>
      </div>

      <div class="section-container">
        <header class="section-header">
          <i class="fa fa-tachometer"></i>
          <h2>Fast</h2>
        </header>
        <div class="section-content">
          <p>Thousands of transaction per second at 1000ms latencies.</p>
        </div>
      </div>

      <div class="section-container">
        <header class="section-header">
          <i class="fa fa-cloud-upload"></i>
          <h2>Easy Deployment</h2>
        </header>
        <div class="section-content">
          <p>Quickly deploy to any cloud provider supported by docker-machine using the mintnet tool.</p>
        </div>
      </div>
      <div class="section-container">
        <header class="section-header">
          <i class="fa fa-code"></i>
          <h2>Open Source</h2>
        </header>
        <div class="section-content">
          <p>All our code is licensed Apache2.0 and available on <a
  href="https://github.com/tendermint">GitHub</a>. 
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
</style>
