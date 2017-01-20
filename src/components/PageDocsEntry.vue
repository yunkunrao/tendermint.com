<template>
  <div class="master-detail page-docs-entry">
    <master></master>
    <div class="detail"><div class="article-body">
      <vue-article-body>
        <index v-if="r()"></index>
        <faq v-if="r('faq')"></faq>
        <roadmap v-if="r('roadmap')"></roadmap>
        <definitions v-if="r('definitions')"></definitions>
        <install v-if="r('install')"></install>
        <using-tendermint v-if="r('using-tendermint')"></using-tendermint>
        <app-dev v-if="r('app-development')"></app-dev>
        <app-arch v-if="r('app-architecture')"></app-arch>
        <contributing v-if="r('contributing')"></contributing>
        <merkle v-if="r('merkle')"></merkle>
        <validators v-if="r('validators')"></validators>
        <consensus v-if="r('consensus')"></consensus>
        <block-structure v-if="r('block-structure')"></block-structure>
        <rpc v-if="r('rpc')"></rpc>
        <genesis v-if="r('genesis')"></genesis>
        <config v-if="r('configuration')"></config>
        <light-client v-if="r('light-client-protocol')"></light-client>
        <secure-peer-to-peer v-if="r('secure-p2p')"></secure-peer-to-peer>
        <fast-sync v-if="r('fast-sync')"></fast-sync>
        <wire-protocol v-if="r('wire-protocol')"></wire-protocol>
      </vue-article-body>
    </div>
  </div>
</template>

<script>
import Master from './PageDocsMaster'
import Index from '../content/docs/index.vue'
import VueArticleBody from '@nylira/vue-article-body'

import Faq from '../content/docs/faq.vue'
import Roadmap from '../content/docs/roadmap.vue'
import Definitions from '../content/docs/definitions.vue'

// guides
import Install from '../content/docs/guides/install.vue'
import UsingTendermint from '../content/docs/guides/using-tendermint.vue'
import AppDev from '../content/docs/guides/app-dev.vue'
import AppArch from '../content/docs/guides/app-architecture.vue'
import Contributing from '../content/docs/guides/contributing.vue'

// internals
import Merkle from '../content/docs/internals/merkle.vue'
import Validators from '../content/docs/internals/validators.vue'
import Consensus from '../content/docs/internals/byzantine-consensus-algorithm.vue'
import BlockStructure from '../content/docs/internals/block-structure.vue'
import Rpc from '../content/docs/internals/rpc.vue'
import Genesis from '../content/docs/internals/genesis.vue'
import Config from '../content/docs/internals/configuration.vue'
import LightClient from '../content/docs/internals/light-client-protocol.vue'
import SecurePeerToPeer from '../content/docs/internals/secure_p2p.vue'
import FastSync from '../content/docs/internals/fast_sync.vue'
import WireProtocol from '../content/docs/internals/wire-protocol.vue'

export default {
  name: 'page-docs-entry',
  components: {
    Master,
    VueArticleBody,

    Index,
    Faq,
    Roadmap,
    Definitions,

    // guides
    Install,
    UsingTendermint,
    AppDev,
    AppArch,
    Contributing,

    // internals
    Merkle,
    Validators,
    Consensus,
    BlockStructure,
    Rpc,
    Genesis,
    Config,
    LightClient,
    SecurePeerToPeer,
    FastSync,
    WireProtocol
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
        case 'install': val = 'Install from Source - Guides'; break
        case 'using-tendermint': val = 'Using Tendermint - Guides'; break
        case 'app-architecture': val = 'Application Architecture - Guides'; break
        case 'app-development': val = 'Application Development - Guides'; break
        case 'contributing': val = 'Contributing - Guides'; break
        case 'merkle': val = 'Merkle - Internals'; break
        case 'validators': val = 'Validators - Internals'; break
        case 'consensus': val = 'Byzantine Consensus Algorithm - Internals'; break
        case 'block-structure': val = 'Block Structure - Internals'; break
        case 'rpc': val = 'RPC - Internals'; break
        case 'genesis': val = 'Genesis - Internals'; break
        case 'configuration': val = 'Configuration - Internals'; break
        case 'light-client-protocol': val = 'Light Client Protocol - Internals'; break
        case 'secure-p2p': val = 'Secure P2P - Internals'; break
        case 'fast-sync': val = 'Fast Sync - Internals'; break
        case 'wire-protocol': val = 'Wire Protocol - Internals'; break
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
