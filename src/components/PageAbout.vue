<template lang="pug">
page(title="About" )
  div(slot="subtitle") We are currently working full time on bringing <a href='https://cosmos.network'>Cosmos</a> to reality. We're also hiring blockchain engineers. Join us!
  div(slot="menu")
    btn(icon="person_add" value="Join our team!" type="anchor" href="https://tendermint.com/careers" target="_blank" color="primary")

  part(title='Tendermint Team')
    cards.people
      card-person(group='aib', v-for="person in ppl('aib')", :key='person.slug', :person='person')
  part(title='Company')
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
import { mapGetters } from "vuex"
import Btn from "@nylira/vue-button"
import CardLink from "./CardLink"
import CardPerson from "cards/CardPerson"
import Cards from "common/NiCards"
import Page from "common/NiPage"
import Part from "common/NiPart"
export default {
  name: "page-about",
  metaInfo: { title: "About" },
  components: {
    Btn,
    Cards,
    CardPerson,
    CardLink,
    Page,
    Part
  },
  computed: {
    ...mapGetters(["people"])
  },
  methods: {
    ppl(tag) {
      if (this.people) {
        return this.people.filter(p => p.groups[tag])
      } else {
        return []
      }
    }
  }
}
</script>

<style lang="stylus">
@import '~variables'

.people
  margin-bottom 1rem

@media screen and (min-width: 768px)
  .people
    .ni-card-person
      flex 0 0 50%

@media screen and (min-width: 1024px)
  .people
    .ni-card-person
      flex 0 0 33.333%
</style>
