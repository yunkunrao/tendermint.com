<template>
  <div class="thumb-button">
    <i :class="iconClass"></i>
  </div>
</template>

<script>
export default {
  name: 'thumb-button',
  computed: {
    iconClass () {
      return 'fa fa-' + this.icon
    }
  },
  methods: {
  },
  props: ['icon']
}
</script>

<style lang="stylus" scoped>
@require '../../styles/variables.styl'

.thumb-button
  position fixed
  bottom x
  right x

  width 3*x
  height 3*x
  font-size x
  line-height 3*x - 2px
  border-radius 1.5*x

  border 1px solid bc

  text-align center

  background #fff

  cursor pointer

  z-index 1000
</style>
