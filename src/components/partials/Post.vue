<template>
  <div class="post-item">

    <template v-if="url.substr(0,4) === 'http'">
      <a class="title" :href="url">{{ title }}</a>
    </template>
    <template v-else>
      <router-link class="title" :to="url">{{ title }}</router-link>
    </template>

    <div class="meta">{{ meta }}</div>
    <div class="desc">{{ desc }}</div>
  </div>
</template>

<script>
export default {
  props: ['title', 'desc', 'meta', 'url']
}
</script>


<style lang="stylus" scoped>
@require '../../styles/variables.styl'

.post-item
  padding-bottom 1.5em
  border-bottom 1px dotted bc
  margin 0 auto 1.5em

  &:last-of-type
    border-bottom none
    margin-bottom 0
    padding-bottom 0
  a.title
    font-weight 500
    line-height 1.25
    color txt
    &:hover
      color link
  .meta
    text-transform uppercase
    font-size 0.75em
    font-weight 500
    line-height 2
    color light
  .desc
    max-width 40em

@media screen and (min-width: 360px)
  .post-item
    a.title
      font-size 1.125em
    .meta
      font-size 0.85em

@media screen and (min-width: 720px)
  .post-item
    font-size 1.125*x
    padding-bottom 2em
    margin-bottom 2em
</style>
