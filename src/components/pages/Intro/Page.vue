<template>
  <div class="master-detail">
    <master></master>
    <div class="detail"><div class="article-body">
      <what-is-tendermint v-if="r()"></what-is-tendermint>
      <tendermint-vs v-if="r('tendermint-vs')"></tendermint-vs>
      <what-is-tmsp v-if="r('what-is-tmsp')"></what-is-tmsp>
      <consensus v-if="r('consensus')"></consensus>
      <install v-if="r('install')"></install>
      <first-tmsp v-if="r('first-tmsp')"></first-tmsp>
      <deploy-testnet v-if="r('deploy-testnet')"></deploy-testnet>
      <next-steps v-if="r('next-steps')"></next-steps>
    </div></div>
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
    Consensus: require('../../../content/intro/consensus.md'),
    Install: require('../../../content/intro/getting-started/install.md'),
    FirstTmsp: require('../../../content/intro/getting-started/first-tmsp-app.md'),
    DeployTestnet: require('../../../content/intro/getting-started/deploy-testnet.md'),
    NextSteps: require('../../../content/intro/getting-started/next-steps.md')
  },
  methods: {
    r (fragment) { return this.$route.params.page === fragment },
    setPageTitle () {
      let val
      switch (this.$route.params.page) {
        case 'tendermint-vs': val = 'Tendermint vs. Other Software'; break
        case 'what-is-tmsp': val = 'What is TMSP?'; break
        case 'consensus': val = 'Tendermint Consensus'; break
        case 'install': val = 'Install Tendermint'; break
        case 'first-tmsp': val = 'First TMSP App'; break
        case 'deploy-testnet': val = 'Deploy a Testnet'; break
        case 'next-steps': val = 'Next Steps Consensus'; break
        default: val = 'Introduction to Tendermint'; break
      }
      document.title = val += ' - Tendermint'
    }
  },
  mounted () { this.setPageTitle() },
  watch: {
    '$route.params.page' () { this.setPageTitle() }
  }
}
</script>

<style lang="stylus" scoped>
@require '../../../styles/variables.styl'
</style>
