<template lang='pug'>
  #redirect
    i.fa.fa-spinner.fa-spin
    p Redirecting you to Medium&hellip;
</template>

<script>
export default {
  name: 'page-redirect-to-medium',
  mounted () {
    document.title = 'Redirecting to Medium Blog - Tendermint'
    window.location.replace('https://blog.cosmos.network/tendermint/home')
  }
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

  padding 0 1rem
  text-align center

  i.fa
    font-size 3rem
    margin-bottom 1rem
    color lighten(mcolor, 50%)
  p
    font-size 1.5rem
    color lighten(mcolor, 90%)
</style>

