<template>
  <div class="master-detail page-docs-entry">
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
import Master from './PageDocsMaster'
import Index from '../content/docs/index.md'
import Commands from '../content/docs/commands.md'
import Faq from '../content/docs/faq.md'
import Roadmap from '../content/docs/roadmap.md'
import Definitions from '../content/docs/definitions.md'

// guides
import AppDev from '../content/docs/guides/app-dev.md'
import AppArch from '../content/docs/guides/app-architecture.md'

// internals
import Introduction from '../content/docs/internals/introduction.md'
import Validators from '../content/docs/internals/validators.md'
import Consensus from '../content/docs/internals/byzantine-consensus-algorithm.md'
import BlockStructure from '../content/docs/internals/block-structure.md'
import Rpc from '../content/docs/internals/rpc.md'
import Genesis from '../content/docs/internals/genesis.md'
import Config from '../content/docs/internals/configuration.md'
import LightClient from '../content/docs/internals/light-client-protocol.md'

export default {
  name: 'page-docs-entry',
  components: {
    Master,
    Index,
    Commands,
    Faq,
    Roadmap,
    Definitions,

    // guides
    AppDev,
    AppArch,

    // internals
    Introduction,
    Validators,
    Consensus,
    BlockStructure,
    Rpc,
    Genesis,
    Config,
    LightClient
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
    }
  },
  mounted () { this.onParamChange() },
  watch: { '$route.params.page' () { this.onParamChange() } }
}
</script>
