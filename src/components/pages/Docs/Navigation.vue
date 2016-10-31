<template>
  <div class="navigation" v-bind:class="{ active: isActive }">
    <router-link class="block" :to="'/docs/internals'">Tendermint Internals</router-link>
    <router-link class="block" :to="'/docs/commands'">Tendermint Commands</router-link>
    <router-link class="block" :to="'/docs/guides'">Guides</router-link>
    <router-link class="block" :to="'/docs/roadmap'">Roadmap</router-link>
    <router-link class="block" :to="'/docs/faq'">FAQ</router-link>
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
