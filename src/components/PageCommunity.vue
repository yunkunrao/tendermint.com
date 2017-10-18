<template lang="pug">
page-split
  page-header(title='Community', subtitle='Discover the vibrant ecosystem around Tendermint.', type='split', slot='header', theme='tendermint')
  ni-section
    card-title Community
    card-community(v-for='link in communityLinks', :link='link', :key='link.url')
  ni-section
    card-title All In Bits, Inc.
    card-community(v-for='link in companyLinks', :link='link', :key='link.url')
</template>

<script>
import {mapGetters} from 'vuex'
import CardCommunity from './CardCommunity'
import CardTitle from './CardTitle'
import NiSection from './NiSection'
import PageHeader from '@nylira/vue-page-header'
import PageSplit from '@nylira/vue-page-split'
export default {
  name: 'page-community',
  components: {
    CardCommunity,
    CardTitle,
    NiSection,
    PageHeader,
    PageSplit
  },
  computed: {
    ...mapGetters(['links']),
    communityLinks () {
      return [
        {
          url: this.links.tm.chat,
          title: 'Chat on Matrix',
          icon: 'comments-o'
        },
        {
          url: this.links.tm.github.issues,
          title: 'Github Issues',
          icon: 'github-alt'
        },
        {
          route: '/bounties',
          title: 'Code Bounties',
          icon: 'btc'
        },
        {
          url: this.links.tm.docs.ecosystem,
          title: 'Software Ecosystem',
          icon: 'code'
        }
      ]
    },
    companyLinks () {
      return [
        {
          route: '/about',
          title: 'About',
          icon: 'users'
        },
        {
          route: '/careers',
          title: 'Careers',
          icon: 'user'
        },
        {
          route: '/presentations',
          title: 'Presentations',
          icon: 'video-camera'
        },
        {
          route: '/press',
          title: 'Press Mentions',
          icon: 'newspaper-o'
        }
      ]
    }
  },
  mounted () {
    document.title = 'Community - Tendermint'
  }
}
</script>
