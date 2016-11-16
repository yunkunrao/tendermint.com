<template>
  <div class="component split-page">
    <div class="page-header">
      <h1>Community</h1>
      <p>Discover the vibrant ecosystem around Tendermint.</p>
    </div>

    <section class="section-default page-content">
      <div class="section-container">
        <div class="section-content">
          <post :title="link.title" :desc="link.desc"
            :url="link.url" v-for="link in links">
          </post>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'page-community',
  components: {
    Post: require('../partials/Post')
  },
  data () {
    return {
      links: [
        {
          url: 'http://forum.tendermint.com:3000/',
          internal: false,
          title: 'Chat',
          desc: 'Talk on Slack with people interested in Tendermint.'
        },
        {
          url: 'https://github.com/tendermint/tendermint/issues',
          internal: false,
          title: 'Issues',
          desc: 'View the features and improvements we\'re working right now.'
        },
        {
          url: '/ecosystem',
          internal: true,
          title: 'Ecosystem',
          desc: 'View the software that talented developers are building upon Tendermint.'
        },
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
          desc: 'Interested in working at Tendermint? Check out what roles we\'re seeking.'
        },
        {
          url: '/presentations',
          internal: true,
          title: 'Presentations',
          desc: 'Video and slides from presentations we\'ve given about Tendermint.'
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

<style lang="stylus" scoped>
@require '../../styles/variables.styl'
</style>
