<template>
  <div class="card-title">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'card-title'
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

.card-title
  padding 0 1rem
  font-size 1rem
  line-height 3
  border-bottom 1px solid bc
  font-weight 500
  background lighten(bc,75%)

@media screen and (min-width:768px)
  .card-title
    border-top 1px solid bc

</style>
