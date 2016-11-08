<template>
  <div class="master-detail">
    <master></master>
    <div class="detail"><div class="article-body">
      <index v-if="r()"></index>
      <faq v-if="r('faq')"></faq>
      <roadmap v-if="r('roadmap')"></roadmap>
      <definitions v-if="r('definitions')"></definitions>
      <app-dev v-if="r('app-development')"></app-dev>
      <app-arch v-if="r('app-architecture')"></app-arch>
      <introduction v-if="r('introduction')"></introduction>
      <validators v-if="r('validators')"></validators>
      <consensus v-if="r('consensus')"></consensus>
      <block-structure v-if="r('block-structure')"></block-structure>
      <rpc v-if="r('rpc')"></rpc>
      <genesis v-if="r('genesis')"></genesis>
      <config v-if="r('configuration')"></config>
      <light-client v-if="r('light-client-protocol')"></light-client>
      <commands v-if="r('commands')"></commands>
    </div></div>
  </div>
</template>

<script>
import hljs from 'highlight.js'
export default {
  name: 'intro-page',
  components: {
    Master: require('./Master'),
    Index: require('../../../content/docs/index.md'),
    Commands: require('../../../content/docs/commands.md'),
    Faq: require('../../../content/docs/faq.md'),
    Roadmap: require('../../../content/docs/roadmap.md'),
    Definitions: require('../../../content/docs/definitions.md'),

    // guides
    AppDev: require('../../../content/docs/guides/app-dev.md'),
    AppArch: require('../../../content/docs/guides/app-architecture.md'),

    // internals
    Introduction: require('../../../content/docs/internals/introduction.md'),
    Validators: require('../../../content/docs/internals/validators.md'),
    Consensus: require('../../../content/docs/internals/byzantine-consensus-algorithm.md'),
    BlockStructure: require('../../../content/docs/internals/block-structure.md'),
    Rpc: require('../../../content/docs/internals/rpc.md'),
    Genesis: require('../../../content/docs/internals/genesis.md'),
    Config: require('../../../content/docs/internals/configuration.md'),
    LightClient: require('../../../content/docs/internals/light-client-protocol.md')
  },
  methods: {
    r (fragment) {
      return this.$route.params.page === fragment
    },
    setPageTitle () {
      let val
      switch (this.$route.params.page) {
        case undefined: val = 'Documentation'; break
        case 'faq': val = 'Frequently Asked Questions'; break
        case 'roadmap': val = 'Roadmap'; break
        case 'definitions': val = 'Definitions'; break
        case 'app-architecture': val = 'Application Architecture - Guides'; break
        case 'app-development': val = 'Application Development - Guides'; break
        case 'introduction': val = 'Introduction - Internals'; break
        case 'validators': val = 'Validators - Internals'; break
        case 'consensus': val = 'Byzantine Consensus Algorithm - Internals'; break
        case 'block-structure': val = 'Block Structure - Internals'; break
        case 'rpc': val = 'RPC - Internals'; break
        case 'genesis': val = 'Genesis - Internals'; break
        case 'configuration': val = 'Configuration - Internals'; break
        case 'light-client-protocol': val = 'Light Client Protocol - Internals'; break
        case 'commands': val = 'Commands - Internals'; break
        default: this.$router.replace({ path: '/404' }); break
      }
      document.title = val += ' - Tendermint'
    },
    onParamChange () {
      this.setPageTitle()
      hljs.initHighlightingOnLoad()
    }
  },
  mounted () { this.onParamChange() },
  watch: {
    '$route.params.page' () { this.onParamChange() }
  }
}
</script>

<style lang="stylus" scoped>
@require '../../../styles/variables.styl'
</style>
