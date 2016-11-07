<template>
  <div class="master" v-bind:class="{ 'mobile-active': isActive, 'mobile-inactive': !isActive }" @click="toggleManual">
    <nav>
      <div class="title">Docs</div>
      <router-link :to="'/docs'" exact>Index</router-link>
      <router-link :to="'/docs/faq'">FAQ</router-link>
      <router-link :to="'/docs/roadmap'">Roadmap</router-link>
      <router-link :to="'/docs/definitions'">Definitions</router-link>
      <div class="title">Guides</div>
      <router-link :to="'/docs/guides/app-development'">App Development</router-link>
      <router-link :to="'/docs/guides/app-architecture'">App Architecture</router-link>
      <div class="title">Tendermint Internals</div>
      <router-link :to="'/docs/internals/introduction'">Introduction</router-link>
      <router-link :to="'/docs/internals/validators'">Validators</router-link>
      <router-link :to="'/docs/internals/consensus'">Byzantine Consensus Algorithm</router-link>
      <router-link :to="'/docs/internals/block-structure'">Block Structure</router-link>
      <router-link :to="'/docs/internals/rpc'">RPC</router-link>
      <router-link :to="'/docs/internals/genesis'">Genesis</router-link>
      <router-link :to="'/docs/internals/configuration'">Configuration</router-link>
      <router-link :to="'/docs/internals/light-client-protocol'">Light Client Protocol</router-link>
      <router-link class="block" :to="'/docs/commands'">Tendermint Commands</router-link>
    </nav>
    <thumb-button v-show="isActive" icon="close"></thumb-button>
    <thumb-button v-show="!isActive" icon="bars"></thumb-button>
  </div><!--master-->
</template>

<script>
import $ from 'jquery'
import Ps from 'perfect-scrollbar'

export default {
  name: 'docs-master',
  components: {
    ThumbButton: require('../../partials/ThumbButton')
  },
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    toggleAutomatic () {
      let self = this
      if ($(window).width() >= 720) self.isActive = true
      else self.isActive = false
    },
    toggleManual () {
      if ($(window).width() < 720) {
        this.isActive = !this.isActive
      }
    }
  },
  mounted () {
    this.toggleAutomatic()
    $(window).resize(() => this.toggleAutomatic())
    let nav = document.querySelector('.master nav')
    // console.log('docs-master-nav', nav)
    Ps.initialize(nav)
  },
  watch: {
    'isActive' (val) {
      // console.log('isActive changed!', val)
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../../../styles/variables.styl'
</style>
