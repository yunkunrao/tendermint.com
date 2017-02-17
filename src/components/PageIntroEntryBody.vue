<template>
<div>
  <abci-overview v-if="r('abci-overview')"></abci-overview>
  <consensus-overview v-if="r('consensus-overview')"></consensus-overview>
  <deploy-testnet v-if="r('deploy-testnet')"></deploy-testnet>
  <download v-if="r('download')"></download>
  <first-abci-app v-if="r('first-abci-app')"></first-abci-app>
  <next-steps v-if="r('next-steps')"></next-steps>
  <index v-if="r()"></index>
  <tendermint-vs v-if="r('tendermint-vs')"></tendermint-vs>
</div>
</template>

<script>
export default {
  name: 'page-entry-body',
  components: {
    AbciOverview: require('../content/intro/abci-overview.vue'),
    ConsensusOverview: require('../content/intro/consensus-overview.vue'),
    DeployTestnet: require('../content/intro/getting-started/deploy-testnet.vue'),
    Download: require('../content/intro/getting-started/download.vue'),
    FirstAbciApp: require('../content/intro/getting-started/first-abci-app.vue'),
    NextSteps: require('../content/intro/getting-started/next-steps.vue'),
    Index: require('../content/intro/index.vue'),
    TendermintVs: require('../content/intro/tendermint-vs.vue')
  },
  methods: {
    r (fragment) { return this.$route.params.page === fragment }
  }
}
</script>
