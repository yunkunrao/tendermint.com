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

  border-radius 1.5*x

  width 3*x
  line-height 3*x

  text-align center

  background hsla(0,0,0,0.8)
  color #fff

  cursor pointer

  z-index 1000
</style>
