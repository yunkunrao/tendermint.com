<template>
  <a class="community-link" :href="link.url" v-if="link.url" target="_blank">
    <i :class="'fa fa-' + link.icon"></i>{{ link.title }}
    <i class="fa fa-external-link"></i>
  </a>
  <router-link class="community-link" :to="link.route" v-else>
    <i :class="'fa fa-' + link.icon"></i>{{ link.title }}
  </router-link>
</template>

<script>
export default {
  name: 'card-community',
  props: ['link']
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

.community-link
  width 100%
  height 3rem
  display flex
  align-items center
  padding 0 1rem
  border-bottom 1px solid bc
  font-weight 400

  position relative
  &:last-of-type
    border-bottom none

  i.fa
    width 1rem
    display flex
    justify-content center
    margin-right 0.5rem
    &.fa-external-link
      margin 0
      position absolute
      top 0
      right 0
      color light
      height 3rem
      width 3rem
      align-items center

  &:hover
    background lighten(mcolor, 98%)
</style>
