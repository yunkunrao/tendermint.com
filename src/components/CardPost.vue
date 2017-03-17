<template>
  <div class="card-post">
    <template v-if="url.substr(0,4) === 'http'">
      <a :href="url">
        <div class="title">{{ title }}</div>
        <div class="meta">{{ meta }}</div>
        <div class="desc">{{ desc }}</div>
      </a>
    </template>
    <template v-else>
      <router-link :to="url">
        <div class="title">{{ title }}</div>
        <div class="meta">{{ meta }}</div>
        <div class="desc">{{ desc }}</div>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: 'card-post',
  props: ['title', 'desc', 'meta', 'url']
}
</script>


<style lang="stylus">
@require '../styles/variables.styl'

.card-post
  border-bottom 1px solid bc
  margin 0 auto

  &:last-of-type
    border-bottom none

  .title
    font-weight 500
    line-height 1.25
    color txt
  .meta
    text-transform uppercase
    font-size 0.75em
    font-weight 500
    line-height 2
    color light
  .desc
    max-width 40em

  a
    padding 1.5*x 0
    display block
    color txt
    &:hover .title
      color link

@media screen and (min-width: 360px)
  .card-post
    .title
      font-size 1.125em
    .meta
      font-size 0.85em

@media screen and (min-width: 720px)
  .card-post
    font-size 1.125*x
    a
      padding 2*x 0
</style>
