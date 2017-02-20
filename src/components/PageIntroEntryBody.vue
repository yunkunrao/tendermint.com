<template>
<div>
  <abci-overview v-if="r('abci-overview')"></abci-overview>
  <consensus-overview v-if="r('consensus-overview')"></consensus-overview>
  <num-01-download-tendermint v-if="r('01-download-tendermint')"></num-01-download-tendermint>
  <num-02-first-abci-app v-if="r('02-first-abci-app')"></num-02-first-abci-app>
  <num-03-deploy-testnet v-if="r('03-deploy-testnet')"></num-03-deploy-testnet>
  <num-04-next-steps v-if="r('04-next-steps')"></num-04-next-steps>
  <index v-if="r()"></index>
  <tendermint-vs-x v-if="r('tendermint-vs-x')"></tendermint-vs-x>
</div>
</template>

<script>
export default {
  name: 'page-entry-body',
  components: {
    AbciOverview: require('../content/intro/abci-overview.vue'),
    ConsensusOverview: require('../content/intro/consensus-overview.vue'),
    Num01DownloadTendermint: require('../content/intro/getting-started/#01-download-tendermint.vue'),
    Num02FirstAbciApp: require('../content/intro/getting-started/#02-first-abci-app.vue'),
    Num03DeployTestnet: require('../content/intro/getting-started/#03-deploy-testnet.vue'),
    Num04NextSteps: require('../content/intro/getting-started/#04-next-steps.vue'),
    Index: require('../content/intro/index.vue'),
    TendermintVsX: require('../content/intro/tendermint-vs-x.vue')
  },
  methods: {
    r (fragment) { return this.$route.params.page === fragment }
  }
}
</script>
