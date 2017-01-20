<template>
  <div class="master-detail page-intro-entry">
    <master></master>
    <div class="detail">
      <vue-article-body>
        <what-is-tendermint v-if="r()"></what-is-tendermint>
        <tendermint-vs v-if="r('tendermint-vs')"></tendermint-vs>
        <abci-overview v-if="r('abci-overview')"></abci-overview>
        <consensus-overview v-if="r('consensus-overview')"></consensus-overview>
        <download v-if="r('download')"></download>
        <first-abci v-if="r('first-abci')"></first-abci>
        <deploy-testnet v-if="r('deploy-testnet')"></deploy-testnet>
        <next-steps v-if="r('next-steps')"></next-steps>
      </vue-article-body>
    </div>
  </div>
</template>

<script>
import Master from './PageIntroMaster'
import VueArticleBody from '@nylira/vue-article-body'

import TendermintVs from '../content/intro/tendermint-vs.vue'
import WhatIsTendermint from '../content/intro/what-is-tendermint.vue'
import AbciOverview from '../content/intro/abci-overview.vue'
import ConsensusOverview from '../content/intro/consensus-overview.vue'
import Download from '../content/intro/getting-started/download.vue'
import FirstAbci from '../content/intro/getting-started/first-abci-app.vue'
import DeployTestnet from '../content/intro/getting-started/deploy-testnet.vue'
import NextSteps from '../content/intro/getting-started/next-steps.vue'
export default {
  name: 'page-intro-entry',
  components: {
    Master,
    VueArticleBody,
    TendermintVs,
    WhatIsTendermint,
    AbciOverview,
    ConsensusOverview,
    Download,
    FirstAbci,
    DeployTestnet,
    NextSteps
  },
  methods: {
    r (fragment) { return this.$route.params.page === fragment },
    setPageTitle () {
      let val
      switch (this.$route.params.page) {
        case undefined: val = 'Introduction to Tendermint'; break
        case 'tendermint-vs': val = 'Tendermint vs. Other Software'; break
        case 'abci-overview': val = 'ABCI Overview'; break
        case 'consensus-overview': val = 'Consensus Overview'; break
        case 'download': val = 'Download Tendermint'; break
        case 'first-abci': val = 'First ABCI App'; break
        case 'deploy-testnet': val = 'Deploy a Testnet'; break
        case 'next-steps': val = 'Next Steps Consensus'; break
        default: this.$router.replace({ path: '/404' }); break
      }
      document.title = val += ' - Tendermint'
    },
    onParamChange () {
      this.setPageTitle()
    }
  },
  mounted () { this.onParamChange() },
  watch: { '$route.params.page' () { this.onParamChange() } }
}
</script>
