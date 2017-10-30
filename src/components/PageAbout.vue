<template lang="pug">
page-split
  page-header(title='About', subtitle="We are currently working full time on bringing <a href='https://cosmos.network'>Cosmos</a> to reality.<br><br><a href='/careers'>We are hiring!</a>", type='split', slot='header', theme='tendermint')
  ni-section
    div(slot='title') Team
    .people
      card-person(group='aib', v-for="person in ppl('aib')", :key='person.slug', :person='person')
  ni-section
    div(slot='title') Company
    card-link(
      icon='user'
      link='/careers'
      title='Careers')
    card-link(
      icon='video-camera'
      link='/presentations'
      title='Presentations')
    card-link(
      icon='newspaper-o'
      link='/press'
      title='Press Mentions')
</template>

<script>
import { mapGetters } from 'vuex'
import CardLink from './CardLink'
import CardPerson from './CardPerson'
import NiSection from './NiSection'
import PageHeader from '@nylira/vue-page-header'
import PageSplit from '@nylira/vue-page-split'
export default {
  name: 'page-about',
  components: {
    CardLink,
    CardPerson,
    NiSection,
    PageHeader,
    PageSplit
  },
  computed: {
    ...mapGetters(['allPeople', 'links'])
  },
  mounted () {
    document.title = 'About - Tendermint'
  },
  methods: {
    ppl (tag) { return this.allPeople.filter(p => p.groups[tag]) }
  }
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.people
  max-width 1024px

@media screen and (min-width: 768px)
  .people
    display flex
    flex-flow row wrap

    .person-wrapper
      flex 0 0 50%

@media screen and (min-width: 1280px)
  .people
    margin 0 auto
    .person-wrapper
      flex 0 0 33.333%
</style>
