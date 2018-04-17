<template>
  <div class="card-title">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "card-title"
}
</script>

<style lang="stylus">
@require '~variables'

.card-title
  padding 0 1rem
  font-size 1rem
  line-height 3
  border-bottom 1px solid var(--bc)
  font-weight 500
  background var(--app-fg)

@media screen and (min-width:768px)
  .card-title
    border-top 1px solid var(--bc)
</style>
