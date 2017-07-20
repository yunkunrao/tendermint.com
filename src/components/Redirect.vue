<template lang='pug'>
#redirect
  i.fa.fa-spinner.fa-spin
  p {{ label }}&hellip;
</template>

<script>
export default {
  name: 'redirect',
  mounted () {
    document.title = `${this.label} - Tendermint - Blockchain Consensus`
    window.location.replace(this.url)
  },
  props: ['label', 'url']
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'
#redirect
  position fixed
  top 0
  left 0
  width 100vw
  height 100vh
  background mcolor

  display flex
  flex-flow column nowrap
  align-items center
  justify-content center

  padding 0 1.5rem
  text-align center

  i.fa
    font-size 3rem
    margin-bottom 1rem
    color lighten(mcolor, 50%)
  p
    font-size 1.5rem
    color lighten(mcolor, 90%)
</style>
