<template>
  <div class="component">
    <section id="section-top">
      <div class="section-container">
        <h1>Community</h1>
        <p>Discover the vibrant ecosystem around Tendermint.</p>
      </div>
    </section>

    <section class="section-default">
      <div class="section-container">
        <header class="section-header"><h2>Collaborate</h2></header>
        <div class="section-content">

          <div class="li-article">
            <a class="li-article-link" href="http://forum.tendermint.com:3000/">
              <header class="li-article-header"><h2>Slack</h2></header>
              <div class="li-article-content">Chat with other Tendermint developers and the official team on Slack.</div>
            </a>
          </div>

          <div class="li-article">
            <a href="https://github.com/tendermint/tendermint/issues" class="li-article-link">
              <header class="li-article-header"><h2><i class="fa fa-github"></i> Issues</h2></header>
              <div class="li-article-content">View the features and improvements we're working on with the community.</div>
            </router-link>
          </div>

          <div class="li-article">
            <router-link class="li-article-link" :to="'/ecosystem'">
              <header class="li-article-header"><h2>Ecosystem</h2></header>
              <div class="li-article-content">View the wide variety of software talented developers are building upon Tendermint.</div>
            </router-link>
          </div>

        </div>
      </div>
    </section>

    <section class="section-default">
      <div class="section-container">
        <header class="section-header"><h2>People</h2></header>
        <div class="section-content">

          <div class="li-article">
            <router-link class="li-article-link" :to="'/about'">
              <header class="li-article-header"><h2>About</h2></header>
              <div class="li-article-content">Learn more about Tendermint's team.</div>
            </router-link>
          </div>

          <div class="li-article">
            <router-link class="li-article-link" :to="'/careers'">
              <header class="li-article-header"><h2>Careers</h2></header>
              <div class="li-article-content">Interested in working at Tendermint? Check out what roles we're currently hiring.</div>
            </router-link>
          </div>

          <div class="li-article">
            <router-link class="li-article-link" :to="'/press'">
              <header class="li-article-header"><h2>Press</h2></header>
              <div class="li-article-content">Tendermint mentioned across global media.</div>
            </router-link>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'page-community',
  mounted () {
    document.title = 'Community - Tendermint'
  }
}
</script>

<style lang="stylus" scoped>
@require '../../../styles/variables.styl'
</style>
