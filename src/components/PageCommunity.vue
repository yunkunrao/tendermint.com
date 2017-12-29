<template lang="pug">
page-split
  page-header(title='Community' subtitle='Join and contribute to the vibrant Cosmos & Tendermint community.' type='split' slot='header' theme="tendermint")

  ni-section
    div(slot="title") Tendermint - Community
    card-community(
      dt='Software Ecosystem'
      dd='Projects around the world using Tendermint.'
      icon='globe'
      to='/ecosystem')
    card-community(
      dt='Twitter'
      dd='Follow @tendermint_team, our official account.'
      icon='twatter'
      :anchor='links.tm.community.twitter')
    card-community(
      dt='LinkedIn'
      dd='View our company profile on LinkedIn.'
      icon='linkedout'
      :anchor='links.tm.community.linkedin')

  ni-section
    div(slot="title") Cosmos - Discuss & Chat
    card-community(
      dt='Community Chat'
      dd='Join cosmosproject on Telegram'
      icon='telegram'
      :anchor='links.cosmos.community.telegram')
    card-community(
      dt='Developer Chat'
      dd='Join #cosmos:matrix.org with Riot'
      icon='comments-o'
      :anchor='links.cosmos.community.matrix')
    card-community(
      dt='Forum'
      dd='Discuss the latest developer updates'
      icon='university'
      :anchor='links.cosmos.community.discourse')

  ni-section
    div(slot="title") Cosmos - Social Media
    card-community(
      dt='Medium'
      dd='Read the latest on the Cosmos Blog'
      icon='medium'
      :anchor='links.cosmos.blog')
    card-community(
      dt='Twitter'
      dd='Follow @cosmos, our official account'
      icon='twatter'
      :anchor='links.cosmos.community.twitter')
    card-community(
      dt='Reddit'
      dd='Subscribe to /r/cosmosnetwork'
      icon='raddit'
      :anchor='links.cosmos.community.reddit')
</template>

<script>
import {mapGetters} from 'vuex'
import CardCommunity from './CardCommunity'
import NiSection from './NiSection'
import PageHeader from '@nylira/vue-page-header'
import PageSplit from '@nylira/vue-page-split'
export default {
  name: 'page-community',
  components: {
    CardCommunity,
    NiSection,
    PageHeader,
    PageSplit
  },
  computed: {
    ...mapGetters(['links'])
  },
  mounted () {
    document.title = 'Community - Tendermint'
  }
}
</script>
