<template>
  <div class="page-community split-page">
    <div class="page-header">
      <h1>Community</h1>
      <p>Discover the vibrant ecosystem around Tendermint.</p>
    </div>

    <div class="page-content">
      <section class="section-default">
        <div class="section-container">
          <div class="section-header">
            <h2>Collaborate</h2>
          </div>
          <div class="section-content">
            <card-post :title="link.title" :desc="link.desc"
              :url="link.url" v-for="link in communityLinks">
            </card-post>
          </div>
        </div>
      </section>
      <section class="section-default">
        <div class="section-container">
          <div class="section-header">
            <h2>Company</h2>
          </div>
          <div class="section-content">
            <card-post :title="link.title" :desc="link.desc"
              :url="link.url" v-for="link in companyLinks">
            </card-post>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import CardPost from './CardPost'
export default {
  name: 'page-community',
  components: {
    CardPost
  },
  data () {
    return {
      communityLinks: [
        {
          url: 'http://forum.tendermint.com:3000/',
          internal: false,
          title: 'Chat',
          desc: 'Talk on Slack with people interested in Tendermint. (External Link)'
        },
        {
          url: 'https://github.com/tendermint/tendermint/issues',
          internal: false,
          title: 'Issues',
          desc: 'View the features we\'re working on right now. (External Link)'
        },
        {
          url: '/bounties',
          internal: true,
          title: 'Bounties',
          desc: 'Get paid in BTC by working on Tendermint-based projects.'
        },
        {
          url: '/ecosystem',
          internal: true,
          title: 'Ecosystem',
          desc: 'View the software developers are building upon Tendermint.'
        }
      ],
      companyLinks: [
        {
          url: '/about',
          internal: true,
          title: 'About',
          desc: 'Learn more about Tendermint\'s team.'
        },
        {
          url: '/careers',
          internal: true,
          title: 'Careers',
          desc: 'Interested in working at Tendermint? We\re hiring.'
        },
        {
          url: '/presentations',
          internal: true,
          title: 'Presentations',
          desc: 'Check out the talks we\'ve given about Tendermint.'
        },
        {
          url: '/press',
          internal: true,
          title: 'Press',
          desc: 'Tendermint mentioned across global media.'
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

@media screen and (min-width:720px)
  .page-community .section-default .section-container
    .section-content
      padding-top 0
      display flex
      flex-flow row wrap
      margin-left -1*x !important
      margin-right -1*x !important
      .card-post
        flex 1 0 50%
        border none
        &:first-of-type
          margin-top 0
        a
          padding 1.5*x x
</style>
