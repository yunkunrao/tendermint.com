<template>
  <div class="thumb-button">
    <i :class="iconClass"></i>
  </div>
</template>

<script>
export default {
  computed: {
    iconClass () {
      return 'fa fa-' + this.icon
    }
  },
  props: ['icon']
}
</script>

<style lang="stylus" scoped>
@require '../../styles/variables.styl'

.thumb-button
  position absolute
  bottom x
  right x

  width 3*x
  height 3*x
  border 1px solid bc
  border-radius 1.5*x

  text-align center
  line-height 3*x

  background #fff
</style>
