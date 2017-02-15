<template>
<div class="card-person">
  <div class="avatar-container">
    <div class="avatar">
      <img v-if="person.slug !==''" :src="avatarSrc(person.slug)" :alt="person.name">
      <i v-else class="fa fa-user"></i>
    </div>
  </div>
  <div class="data">
    <div class="name">{{ person.name }}</div>
    <div class="subtitle">{{ person.subtitle }}</div>
    <div class="title">{{ person.title }}</div>
    <div class="bio" v-if="person.bio">{{ person.bio }}</div>
    <div class="ids">
      <a v-if="person.ids.email"
        :href="'mailto:' + person.ids.email + '@tendermint.com'">
        <i class="fa fa-envelope"></i>
        <span class="label">{{ person.ids.email }}@tendermint.com</span>
      </a>
      <a v-if="person.ids.github" :href="'https://github.com/' + person.ids.github">
        <i class="fa fa-github"></i>
        <span class="label">github.com/{{ person.ids.github }}</span>
      </a>
      <a v-if="person.ids.keybase" :href="'https://keybase.io/' + person.ids.keybase">
        <i class="fa fa-key"></i>
        <span class="label">keybase.io/{{ person.ids.keybase }}</span>
      </a>
      <a v-if="person.ids.linkedin" :href="'https://www.linkedin.com/in/' + person.ids.linkedin">
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
  name: 'card-person',
  methods: {
    avatarSrc (slug) {
      return require('../assets/images/people/' + slug + '.jpg')
    }
  },
  props: ['person']
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

.card-person
  margin 0 auto 2rem

  display flex
  flex-flow column nowrap
  align-items justify

  padding 0 x
  max-width 60*x
  &:last-of-type
    margin-bottom 0

  .avatar-container, .title
    margin-bottom x

  .bio
    margin-bottom 1.5*x

  .avatar-container
    display flex
    justify-content center

  .avatar
    border 1px solid bc
    padding 0.25rem
    height 10rem
    width 10rem

    display flex

    img, i.fa
      flex 1
      width 100%
      height auto
      display block

    i.fa
      font-size 4rem
      color link
      background bc
      display flex
      align-items center
      justify-content center
      color link

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
  .card-person
    .data
      .name
        font-size 1.125*x

@media screen and (min-width: 720px)
  .card-person
    flex-flow row
    margin-bottom 3*x

    .avatar-container
      margin-bottom 0

    .data
      flex 1
      padding-left 2*x

      .name, .title
        text-align left

      .name
        font-size 1.25*x
@media screen and (min-width: 960px)
  .card-person
    .data
      display flex
      flex-flow column nowrap
</style>
