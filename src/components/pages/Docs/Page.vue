<template>
  <div class="master-detail">
    <master></master>
    <div class="detail"><div class="article-body">
      <index v-if="r()"></index>
      <faq v-if="r('faq')"></faq>
      <roadmap v-if="r('roadmap')"></roadmap>
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
export default {
  name: 'intro-page',
  components: {
    Master: require('./Master'),
    Index: require('../../../content/docs/index.md'),
    Commands: require('../../../content/docs/commands.md'),
    Faq: require('../../../content/docs/faq.md'),
    Roadmap: require('../../../content/docs/roadmap.md'),

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
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../../../styles/variables.styl'
</style>
