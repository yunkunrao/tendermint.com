<template>
  <div class="master" v-bind:class="{ 'mobile-active': isActive, 'mobile-inactive': !isActive }" @click="toggleManual">
    <nav>
      <div class="title">Intro</div>
      <router-link :to="'/intro'" exact>Introduction to Tendermint</router-link>
      <router-link :to="'/intro/tendermint-vs'">Tendermint vs. Other Software</router-link>
      <router-link :to="'/intro/tmsp-overview'">TMSP Overview</router-link>
      <router-link :to="'/intro/consensus-overview'">Consensus Overview</router-link>
      <div class="title">Getting Started</div>
      <router-link :to="'/intro/getting-started/install'">Install Tendermint</router-link>
      <router-link :to="'/intro/getting-started/first-tmsp'">First TMSP App</router-link>
      <router-link :to="'/intro/getting-started/deploy-testnet'">Deploy Testnet</router-link>
      <router-link :to="'/intro/getting-started/next-steps'">Next Steps</router-link>
    </nav>
    <btn-thumb v-show="isActive" icon="close"></btn-thumb>
    <btn-thumb v-show="!isActive" icon="bars"></btn-thumb>
  </div><!--master-->
</template>

<script>
import $ from 'jquery'
import BtnThumb from './BtnThumb'

export default {
  name: 'page-intro-master',
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
