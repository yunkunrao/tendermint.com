<template>
  <div class="page-split page-community">
    <page-header
      title="Community"
      subtitle="Discover the vibrant ecosystem around Tendermint."
      type="split"
      theme="tendermint">
    </page-header>

    <div class="page-content page-community-content">
      <div class="section section-default">
        <div class="section-container">
          <card-title>Collaborate</card-title>
          <card-community
            v-for="link in communityLinks"
            :link="link"
            :key="link.url">
          </card-community>
        </div>
      </div>
      <div class="section section-default">
        <div class="section-container">
          <card-title>Company</card-title>
          <card-community
            v-for="link in companyLinks"
            :link="link"
            :key="link.url">
          </card-community>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '@nylira/vue-page-header'
import CardCommunity from './CardCommunity'
import CardTitle from './CardTitle'
export default {
  name: 'page-community',
  components: {
    PageHeader,
    CardCommunity,
    CardTitle
  },
  data () {
    return {
      communityLinks: [
        {
          url: 'http://forum.tendermint.com:3000/',
          title: 'Slack Chat',
          icon: 'slick'
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
          title: 'About All In Bits, Inc.',
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

<style lang="stylus">
@require '../styles/variables.styl'

.page-community-content
  background #fff
</style>
