<template>
  <a :class="'btn btn-' + btnSize">
    <i :class="'fa fa-' + btnIcon" v-if="btnIcon"></i>
    {{ btnText }}
  </a>
</template>

<script>
export default {
  props: ['btn-icon', 'btn-size', 'btn-text']
}
</script>

<style lang="stylus" scoped>
@require '../../styles/variables.styl'

.btn
  background lighten(mcolor, 20%)
  margin 0
  padding 0 1.5em

  height 2em
  font-weight 500
  color #fff

  cursor pointer
  user-select none

  display flex
  justify-content center
  align-items center
  -webkit-appearance none
  &:hover
    background lighten(mcolor, 25%)
  &:active
    background darken(mcolor, 10%)
    color lighten(mcolor, 75%)

  i.fa
    padding-right 0.5em

.btn-small
  height x*1.5
  font-size x*0.75
  padding 0 x

.btn-large
  height x*3
  font-size 1.25*x
</style>
