<template>
  <div class="master" v-bind:class="{ active: isActive }">
    <a href="https://github.com/tendermint/tendermint/issues">Open Issues (Github)</a>
    <router-link :to="'/community/software-ecosystem'">Software Ecosystem</router-link>
    <router-link :to="'/community/media'">Media Mentions</router-link>
    <router-link :to="'/community/about'">About Tendermint</router-link>
    <thumb-button @click="setIsActive(false)" v-show="isActive" icon="close"></thumb-button>
    <thumb-button @click="setIsActive(true)" v-show="!isActive" icon="bars"></thumb-button>
  </div><!--nav-blocks-->
</template>

<script>
import ThumbButton from '../../partials/ThumbButton'

export default {
  name: 'community-master',
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
