<template>
  <page-split>
    <page-header
      title="Community"
      subtitle="Discover the vibrant ecosystem around Tendermint."
      type="split"
      slot="header"
      theme="tendermint">
    </page-header>
    <ni-section>
      <card-title>Community</card-title>
      <card-community
        v-for="link in communityLinks"
        :link="link"
        :key="link.url">
      </card-community>
    </ni-section>
    <ni-section>
      <card-title>All In Bits, Inc.</card-title>
      <card-community
        v-for="link in companyLinks"
        :link="link"
        :key="link.url">
      </card-community>
    </ni-section>
  </page-split>
</template>

<script>
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
  data () {
    return {
      communityLinks: [
        {
          url: 'http://cosmos.rocket.chat',
          title: 'Chat on Rocket',
          icon: 'rocket'
        },
        {
          url: 'https://github.com/tendermint/tendermint/issues',
          title: 'Github Issues',
          icon: 'github-alt'
        },
        {
          route: '/bounties',
          title: 'Code Bounties',
          icon: 'btc'
        },
        {
          route: '/ecosystem',
          title: 'Software Ecosystem',
          icon: 'code'
        }
      ],
      companyLinks: [
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
