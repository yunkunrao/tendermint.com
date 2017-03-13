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
  props: ['icon']
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

.btn-thumb
  position fixed
  bottom 1rem
  right 1rem

  width 3rem
  height 3rem
  border-radius 1.5rem

  display flex
  justify-content center
  align-items center

  background hsla(0,0,0,0.8)
  color #fff

  cursor pointer

  z-index 1000
</style>
