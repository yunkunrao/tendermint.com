<template>
  <router-link class="card-bounty" to="/bounty">
    Bounty!
  </div>
</template>

<script>
export default {
  props: 'bounty'
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

.card-bounty
  display block
</style>
