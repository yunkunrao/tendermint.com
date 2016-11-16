<template>
<div class="person">
  <div class="photo">
    <img :src="avatarSrc(person.slug)" :alt="person.name">
  </div>
  <div class="data">
    <div class="name">{{ person.name }}</div>
    <div class="subtitle">{{ person.subtitle }}</div>
    <div class="title">{{ person.title }}</div>
    <div class="bio" v-if="person.bio">{{ person.bio }}</div>
    <div class="ids">
      <a v-if="person.ids.github" href="https://www.linkedin.com/in/yjkwon + person.ids.linkedin">
        <i class="fa fa-github"></i>
        <span class="label">github.com/{{ person.ids.github }}</span>
      </a>
      <a v-if="person.ids.keybase" href="https://keybase.io/ + person.ids.keybase">
        <i class="fa fa-key"></i>
        <span class="label">keybase.io/{{ person.ids.keybase }}</span>
      </a>
      <a v-if="person.ids.linkedin" href="https://www.linkedin.com/in/yjkwon + person.ids.linkedin">
        <i class="fa fa-linkedout"></i>
        <span class="label">{{ person.name }}</span>
      </a>
      <a v-if="person.ids.twitter" :href="'https://twitter.com/' + person.ids.twitter">
        <i class="fa fa-twatter"></i>
        <span class="label">@{{ person.ids.twitter }}</span>
      </a>
      <a v-if="person.ids.website" :href="'http://' + person.ids.website">
        <i class="fa fa-globe"></i>
        <span class="label">{{ person.ids.website }}</span>
      </a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    avatarSrc (slug) {
      return require('../../assets/images/people/' + slug + '.jpg')
    }
  },
  props: ['person']
}
</script>

<style lang="stylus" scoped>
@require '../../styles/variables.styl'

.person
  margin 0 auto 2*x
  display flex
  flex-flow column nowrap
  align-items stretch
  padding 0 x
  max-width 60*x
  &:last-of-type
    margin-bottom 0

  .photo, .title
    margin-bottom x

  .bio
    margin-bottom 1.5*x

  .photo
    img
      border 1px solid bc
      padding 0.25*x
      display block
      max-width 14*x
      max-height 14*x
      margin 0 auto

  .name, .title
    text-align center

  .name
    font-weight bold

  .title
    text-transform uppercase
    font-size 0.75em
    font-weight 500
    line-height 2
    color light

  .ids
    a
      display block
      border-top 1px dotted bc
      padding 0.25*x
      width 100%
      i.fa
        display inline-block
        width 1.75*x
        text-align center
      &:hover .label
        text-decoration underline

@media screen and (min-width: 400px)
  .person
    .data
      .name
        font-size 1.125*x

@media screen and (min-width: 720px)
  .person
    flex-flow row
    margin-bottom 3*x

    .photo
      margin-bottom 0

    .data
      flex 1
      padding-left 2*x

      .name, .title
        text-align left

@media screen and (min-width: 960px)
  .person
    .data
      display flex
      flex-flow column nowrap
</style>
