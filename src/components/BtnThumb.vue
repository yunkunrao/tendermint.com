<template>
  <div class="btn-thumb">
    <i :class="iconClass"></i>
  </div>
</template>

<script>
export default {
  name: 'btn-thumb',
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

<style lang="stylus">
@require '../styles/variables.styl'

.btn-thumb
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
