<template>
<div class="card-company">
  <div class="photo">
    <!--<img src="avatarSrc" :alt="company.name">-->
  </div>
  <div class="data">
    <div class="name">{{ company.name }}</div>
    <div class="subtitle">{{ company.subtitle }}</div>
    <div class="title">{{ company.title }}</div>
    <div class="bio" v-if="company.bio">{{ company.bio }}</div>
    <div class="ids">
      <a v-if="company.ids.github" href="https://www.linkedin.com/in/yjkwon + company.ids.linkedin">
        <i class="fa fa-github"></i>
        <span class="label">github.com/{{ company.ids.github }}</span>
      </a>
      <a v-if="company.ids.keybase" href="https://keybase.io/ + company.ids.keybase">
        <i class="fa fa-key"></i>
        <span class="label">keybase.io/{{ company.ids.keybase }}</span>
      </a>
      <a v-if="company.ids.linkedin" href="https://www.linkedin.com/in/yjkwon + company.ids.linkedin">
        <i class="fa fa-linkedout"></i>
        <span class="label">{{ company.name }}</span>
      </a>
      <a v-if="company.ids.twitter" :href="'https://twitter.com/' + company.ids.twitter">
        <i class="fa fa-twatter"></i>
        <span class="label">@{{ company.ids.twitter }}</span>
      </a>
      <a v-if="company.ids.website" :href="'http://' + company.ids.website">
        <i class="fa fa-globe"></i>
        <span class="label">{{ company.ids.website }}</span>
      </a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'card-company',
  props: ['company']
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

.card-company
  margin 0 auto 2*x
  display flex
  flex-flow column nowrap
  align-items stretch
  padding 0 x
  max-width 60*x

  .photo, .title, .bio
    margin-bottom x

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
    font-size 0.75*x
    letter-spacing 0.0625em
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

@media screen and (min-width: 720px)
  .card-company
    flex-flow row
    margin-bottom 3*x

    .photo
      margin-bottom 0

    .data
      flex 1
      padding-left 2*x

      .name, .title
        text-align left

      .name
        font-size 1.25*x

      .title
        font-size x

@media screen and (min-width: 960px)
  .card-company
    .data
      display flex
      flex-flow column nowrap
</style>
