<template>
<div class="master" v-bind:class="{ 'mobile-active': isActive, 'mobile-inactive': !isActive }" @click="toggleManual">
  <nav>
  <div class="title">Index</div>
  <router-link :to="'/docs'" exact>Index</router-link>
  <router-link :to="'/docs/roadmap'">Roadmap</router-link>
  <router-link :to="'/docs/source-code'">Source Code</router-link>
  <div class="title">Guides</div>
  <router-link :to="'/docs/guides/app-architecture'">App Architecture</router-link>
  <router-link :to="'/docs/guides/app-development'">App Development</router-link>
  <router-link :to="'/docs/guides/contributing'">Contributing</router-link>
  <router-link :to="'/docs/guides/install'">Install</router-link>
  <router-link :to="'/docs/guides/using-tendermint'">Using Tendermint</router-link>
  <div class="title">Internals</div>
  <router-link :to="'/docs/internals/block-structure'">Block Structure</router-link>
  <router-link :to="'/docs/internals/byzantine-consensus-algorithm'">Byzantine Consensus Algorithm</router-link>
  <router-link :to="'/docs/internals/configuration'">Configuration</router-link>
  <router-link :to="'/docs/internals/fast-sync'">Fast Sync</router-link>
  <router-link :to="'/docs/internals/genesis'">Genesis</router-link>
  <router-link :to="'/docs/internals/light-client-protocol'">Light Client Protocol</router-link>
  <router-link :to="'/docs/internals/merkle'">Merkle</router-link>
  <router-link :to="'/docs/internals/rpc'">RPC</router-link>
  <router-link :to="'/docs/internals/secure-p2p'">Secure P2P</router-link>
  <router-link :to="'/docs/internals/tendermint-types'">Tendermint Types</router-link>
  <router-link :to="'/docs/internals/validators'">Validators</router-link>
  <router-link :to="'/docs/internals/wire-protocol'">Wire Protocol</router-link>
</nav>
  <btn-thumb v-show="isActive" icon="close"></btn-thumb>
  <btn-thumb v-show="!isActive" icon="bars"></btn-thumb>
</div><!--master-->
</template>

<script>
import $ from 'jquery'
import BtnThumb from './BtnThumb'

export default {
  name: 'page-master',
  components: {
    BtnThumb
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
  }
}
</script>
