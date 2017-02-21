<template>
<div>
  <abci-cli v-if="r('abci-cli')"></abci-cli>
  <app-architecture v-if="r('app-architecture')"></app-architecture>
  <app-development v-if="r('app-development')"></app-development>
  <contributing v-if="r('contributing')"></contributing>
  <install-from-source v-if="r('install-from-source')"></install-from-source>
  <using-tendermint v-if="r('using-tendermint')"></using-tendermint>
  <index v-if="r()"></index>
  <block-structure v-if="r('block-structure')"></block-structure>
  <byzantine-consensus-algorithm v-if="r('byzantine-consensus-algorithm')"></byzantine-consensus-algorithm>
  <configuration v-if="r('configuration')"></configuration>
  <fast-sync v-if="r('fast-sync')"></fast-sync>
  <genesis v-if="r('genesis')"></genesis>
  <light-client-protocol v-if="r('light-client-protocol')"></light-client-protocol>
  <merkle v-if="r('merkle')"></merkle>
  <rpc v-if="r('rpc')"></rpc>
  <secure-p2p v-if="r('secure-p2p')"></secure-p2p>
  <tendermint-types v-if="r('tendermint-types')"></tendermint-types>
  <validators v-if="r('validators')"></validators>
  <wire-protocol v-if="r('wire-protocol')"></wire-protocol>
  <roadmap v-if="r('roadmap')"></roadmap>
  <source-code v-if="r('source-code')"></source-code>
</div>
</template>

<script>
export default {
  name: 'page-entry-body',
  components: {
    AbciCli: require('../content/docs/guides/abci-cli.vue'),
    AppArchitecture: require('../content/docs/guides/app-architecture.vue'),
    AppDevelopment: require('../content/docs/guides/app-development.vue'),
    Contributing: require('../content/docs/guides/contributing.vue'),
    InstallFromSource: require('../content/docs/guides/install-from-source.vue'),
    UsingTendermint: require('../content/docs/guides/using-tendermint.vue'),
    Index: require('../content/docs/index.vue'),
    BlockStructure: require('../content/docs/internals/block-structure.vue'),
    ByzantineConsensusAlgorithm: require('../content/docs/internals/byzantine-consensus-algorithm.vue'),
    Configuration: require('../content/docs/internals/configuration.vue'),
    FastSync: require('../content/docs/internals/fast-sync.vue'),
    Genesis: require('../content/docs/internals/genesis.vue'),
    LightClientProtocol: require('../content/docs/internals/light-client-protocol.vue'),
    Merkle: require('../content/docs/internals/merkle.vue'),
    Rpc: require('../content/docs/internals/rpc.vue'),
    SecureP2p: require('../content/docs/internals/secure-p2p.vue'),
    TendermintTypes: require('../content/docs/internals/tendermint-types.vue'),
    Validators: require('../content/docs/internals/validators.vue'),
    WireProtocol: require('../content/docs/internals/wire-protocol.vue'),
    Roadmap: require('../content/docs/roadmap.vue'),
    SourceCode: require('../content/docs/source-code.vue')
  },
  methods: {
    r (fragment) { return this.$route.params.page === fragment }
  }
}
</script>
