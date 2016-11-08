<template>
  <div class="component">
    <section id="section-top">
      <div class="section-container">
        <div class="article-wrapper">
          <h1></i>About Tendermint</h1>
          <p>Our mission is to bring simplicity, security, and speed to the world&rsquo;s blockchains.</p>
        </div>
      </div>
    </section>

    <section class="section-default section-portraits">
      <div class="section-container">
        <header class="section-header">
          <h2>The Team</h2>
        </header>
        <div class="section-content">

          <div class="portrait" v-for="person in teamMembers">
            <img :src="avatarSrc(person.slug)" :alt="person.name">
            <div class="label">
              <a class="twitter" :href="person.url">
                <div class="name">{{ person.name }}</div>
                <div class="subtitle">{{ person.subtitle }}</div>
              </a>
              <div class="title">{{ person.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-default section-portraits">
      <div class="section-container">
        <header class="section-header">
          <h2>The Advisors</h2>
        </header>
        <div class="section-content">

          <div class="portrait" v-for="person in advisors">
            <img :src="avatarSrc(person.slug)" :alt="person.name">

            <div class="label" >
              <a class="twitter" :href="person.url">
                <div class="name">{{ person.name }}</div>
                <div class="subtitle">{{ person.subtitle }}</div>
              </a>
              <div class="title">{{ person.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    teamMembers () {
      return this.people.filter(p => p.category === 'member')
    },
    advisors () {
      return this.people.filter(p => p.category === 'advisor')
    },
    ...mapGetters({
      people: 'allPeople'
    })
  },
  methods: {
    avatarSrc (slug) {
      return require('../../assets/images/people/' + slug + '.jpg')
    }
  },
  mounted () {
    document.title = 'About - Tendermint'
  }
}
</script>


<style lang="stylus" scoped>
@require '../../styles/variables.styl'

.section-portraits
  .section-container
    padding-left 0
    padding-right 0

  .section-content
    max-width 60*x
    margin 0 auto
    padding 1.5*x 0.5*x 0

    display flex
    flex-flow wrap
    justify-content center

  .portrait
    flex 0 0 50%
    padding 0.5*x 0.5*x x
    max-width 14*x

  img
    width 100%
    border 1px solid bc
    padding 0.25*x
    vertical-align top
    display block

  .label
    text-align center

  a.twitter
    display block
    padding 0.333*x 0
    border 1px solid #fff

    .name
      font-weight 600
      color txt

    .subtitle
      color light
      font-size 0.75*x

    &:hover
      .name
        color link
      .subtitle
        color lighten(link,50%)

  .title
    border-top 1px dotted bc
    padding-top 0.333*x
    font-size 0.75*x


@media screen and (min-width: 360px)
  .section-portraits
    a.twitter
      padding 0.5*x 0

    .title
      padding-top 0.5*x

@media screen and (min-width: 720px)
  .section-portraits
    .portrait
      flex 0 0 25%
      padding-left x
      padding-right x

    a.twitter
      margin 0.25*x 0
      &:hover
        background lighten(mcolor,95%)
        border-color lighten(link,50%)

@media screen and (min-width: 1024px)
  .section-portraits
    a.twitter
      padding 0.666*x 0
      .name
        font-size 1.125*x
      .subtitle
        font-size 0.85*x
    .title
      padding-top 0.666*x
      font-size 0.85*x
</style>
