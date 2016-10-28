<template>

</template>

<script>
export default {
  props: ['blocks']
}
</script>
<style lang="stylus" scoped>
@require '../../styles/variables.styl'

.nav-blocks 
  border 1px solid bc
  border-bottom none
  a
    display block
    padding 0.75*x x
    border-bottom 1px solid bc
    position relative
    &:after
      content '\f105'
      font-family FontAwesome
      line-height 1.5
      text-align center
      display block
      line-height 3*x
      width 3*x
      position absolute
      top 0
      right 0
</style>
