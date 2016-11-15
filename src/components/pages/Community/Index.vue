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
        <div class="section-content">

          <div class="li-article">
            <a class="li-article-link" href="http://forum.tendermint.com:3000/">
              <header class="li-article-header"><h2>Chat on Slack</h2></header>
              <div class="li-article-content">Have a conversation with other Tendermint developers and the official team.</div>
            </a>
          </div>

          <div class="li-article">
            <a href="https://github.com/tendermint/tendermint/issues" class="li-article-link">
              <header class="li-article-header"><h2>Issues on GitHub</h2></header>
              <div class="li-article-content">View the features and improvements we're working on with the community.</div>
            </router-link>
          </div>

          <div class="li-article">
            <router-link class="li-article-link" :to="'/ecosystem'">
              <header class="li-article-header"><h2>Software Ecosystem</h2></header>
              <div class="li-article-content">View the wide variety of software talented developers are building upon Tendermint.</div>
            </router-link>
          </div>

          <!--
          <div class="li-article">
            <router-link class="li-article-link" :to="'/companies'">
              <header class="li-article-header"><h2>Companies Using Tendermint</h2></header>
              <div class="li-article-content">These companies are building upon Tendermint to achieve their core business goals.</div>
            </router-link>
          </div>
          -->

        </div>
      </div>
    </section>

    <section class="section-default">
      <div class="section-container">
        <header class="section-header"><h2>Team</h2></header>
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
            <router-link class="li-article-link" :to="'/presentations'">
              <header class="li-article-header"><h2>Presentations</h2></header>
              <div class="li-article-content">Video and slides from presentations we've given about Tendermint.</div>
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
