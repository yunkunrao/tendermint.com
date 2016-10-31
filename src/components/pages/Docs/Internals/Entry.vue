<template>
  <div id="page-community">
    <section id="section-top">
      <div class="section-container">
        <h1>{{ pageTitle }}</h1>
        <p>Tendermint Internals</p>
      </div>
    </section>

    <section class="section-default section-flush">
      <div class="section-container">
        <div class="section-content">
          <div class="article-body">
            <template v-if="this.$route.params.entry === 'introduction'">
              <introduction></introduction>
            </template>
            <template v-if="this.$route.params.entry === 'validators'">
              <validators></validators>
            </template>
            <template v-if="this.$route.params.entry === 'byzantine-consensus-algorithm'">
              <consensus></consensus>
            </template>
            <template v-if="this.$route.params.entry === 'block-structure'">
              <block-structure></block-structure>
            </template>
            <template v-if="this.$route.params.entry === 'rpc'">
              <remote-procedure-call></remote-procedure-call>
            </template>
            <template v-if="this.$route.params.entry === 'genesis'">
              <genesis></genesis>
            </template>
            <template v-if="this.$route.params.entry === 'configuration'">
              <configuration></configuration>
            </template>
            <template v-if="this.$route.params.entry === 'light-client-protocol'">
              <light-client-protocol></light-client-protocol>
            </template>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Introduction from '../../../../content/docs/internals/introduction.md'
import Validators from '../../../../content/docs/internals/validators.md'
import Consensus from '../../../../content/docs/internals/byzantine-consensus-algorithm.md'
import BlockStructure from '../../../../content/docs/internals/block-structure.md'
import RemoteProcedureCall from '../../../../content/docs/internals/rpc.md'
import Genesis from '../../../../content/docs/internals/genesis.md'
import Configuration from '../../../../content/docs/internals/configuration.md'
import LightClientProtocol from '../../../../content/docs/internals/light-client-protocol.md'

import toTitleCase from 'to-title-case'

export default {
  components: {
    Introduction,
    Validators,
    Consensus,
    BlockStructure,
    RemoteProcedureCall,
    Genesis,
    Configuration,
    LightClientProtocol
  },
  computed: {
    pageTitle () {
      let entry = this.$route.params.entry
      if (entry === 'rpc') return 'RPC'
      return toTitleCase(this.$route.params.entry)
    }
  },
  data () {
    return {
      pageTitle: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../../../../styles/variables.styl'
</style>
