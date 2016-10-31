
<template>
  <div class="navigation" v-bind:class="{ active: isActive }">
    <router-link class="block" :to="'/intro/what-is-tendermint'">What is Tendermint?</router-link>
    <router-link class="block" :to="'/intro/tendermint-vs'">Tendermint vs. Other Software</router-link>
    <router-link class="block" :to="'/intro/what-is-tmsp'">TMSP Overview</router-link>
    <div class="block">Getting Started</div>
    <ol class="sub-nav">
      <li><router-link :to="'/intro/getting-started/install'">Install Tendermint</router-link></li>
      <li><router-link :to="'/intro/getting-started/first-tmsp'">First TMSP App</router-link></li>
      <li><router-link :to="'/intro/getting-started/deploy-testnet'">Deploy Testnet</router-link></li>
      <li><router-link :to="'/intro/getting-started/next-steps'">Next Steps</router-link></li>
    </ol>
    <thumb-button @click="setIsActive(false)" v-show="isActive" icon="close"></thumb-button>
    <thumb-button @click="setIsActive(true)" v-show="!isActive" icon="bars"></thumb-button>
  </div><!--nav-blocks-->
</template>

<script>
import ThumbButton from '../../partials/ThumbButton'

export default {
  components () {
    ThumbButton
  },
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    setIsActive (value) {
      this.isActive = value
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../../../styles/variables.styl'
</style>
