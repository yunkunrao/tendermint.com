<template>
  <div class="master-detail">
    <master></master>
    <div class="detail article-body">
      <tendermint-vs v-if="r('tendermint-vs')"></tendermint-vs>
      <what-is-tendermint v-if="r('what-is-tendermint')"></what-is-tendermint>
      <what-is-tmsp v-if="r('what-is-tmsp')"></what-is-tmsp>
      <install-tendermint v-if="r('install')"></install-tendermint>
      <first-tmsp v-if="r('first-tmsp')"></first-tmsp>
      <deploy-testnet v-if="r('deploy-testnet')"></deploy-testnet>
      <next-steps v-if="r('next-steps')"></next-steps>
    </div>
  </div>
</template>

<script>
export default {
  name: 'intro-page',
  components: {
    Master: require('./Master'),
    TendermintVs: require('../../../content/intro/tendermint-vs.md'),
    WhatIsTendermint: require('../../../content/intro/what-is-tendermint.md'),
    WhatIsTmsp: require('../../../content/intro/what-is-tmsp.md'),
    InstallTendermint: require('../../../content/intro/getting-started/install.md'),
    FirstTmsp: require('../../../content/intro/getting-started/first-tmsp-app.md'),
    DeployTestnet: require('../../../content/intro/getting-started/deploy-testnet.md'),
    NextSteps: require('../../../content/intro/getting-started/next-steps.md')
  },
  methods: {
    r (fragment) {
      return this.$route.params.page === fragment
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../../../styles/variables.styl'
</style>
