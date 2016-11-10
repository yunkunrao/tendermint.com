<template>
<div class="person">
  <img :src="avatarSrc(person.slug)" :alt="person.name">
  <div class="name">{{ person.name }}</div>
  <div class="subtitle">{{ person.subtitle }}</div>
  <div class="title">{{ person.title }}</div>
  <div class="bio">{{ person.bio }}</div>
  <div class="ids">
    <a class="id" v-if="person.ids.github !== ''" href="https://www.linkedin.com/in/yjkwon + person.ids.linkedin">
      <i class="fa fa-github"></i>
      <span class="text">github.com/{{ person.ids.github }}</span>
    </a>
    <a class="id" v-if="person.ids.keybase !== ''" href="https://keybase.io/ + person.ids.keybase">
      <i class="fa fa-key"></i>
      <span class="text">keybase.io/{{ person.ids.keybase }}</span>
    </a>
    <a class="id" v-if="person.ids.linkedin !== ''" href="https://www.linkedin.com/in/yjkwon + person.ids.linkedin">
      <i class="fa fa-linkedout"></i>
      <span class="text">{{ person.name }}</span>
    </a>
    <a class="id" v-if="person.ids.twitter !== ''" :href="'https://twitter.com/' + person.ids.twitter">
      <i class="fa fa-twatter"></i>
      <span class="text">@{{ person.ids.twitter }}</span>
    </a>
  </div>
</div>
</template>

<script>
export default {
  props: ['person']
}
</script>

<style lang="stylus" scoped>
@require '../../styles/variables.styl'

.person
  max-width 16*x
  margin 0 auto 2*x
  img
    border 1px solid bc
    padding 0.25*x
    display block
    margin 0 auto
    width 100%
    margin 0 0 x

  .name
    font-weight bold
  .title
    text-transform uppercase
    font-size 0.75*x
    letter-spacing 0.0625em
    color light
    margin 0 0 x

  .bio
    margin 0 0 x

  .ids
    a
      display block
      border-top 1px dotted bc
      padding 0.25*x
      i.fa
        margin-right 0.5*x
        width x
        text-align center
      &:hover .text
        text-decoration underline
</style>
