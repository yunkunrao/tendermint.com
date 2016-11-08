<template>
  <div id="page-blog-index">
    <section id="section-top">
      <div class="section-container">
        <div class="article-wrapper" id="blog-index">
          <h1><i class="fa fa-exclamation-circle"></i>Error 404</h1>
          <p>Page Not Found</p>
        </div>
      </div>
    </section>

    <section class="section-default section-portraits">
      <div class="section-container">
        <div class="section-content article-body">
          <p>Whoops! The page you visited either does not exist or has been deleted in a website reshuffle. We're sorry for the inconvenience. Try visiting one of these pages below:</p>
          <ul>
            <li><router-link :to="'/'">Home</router-link></li>
            <li><router-link :to="'/intro'">Intro</router-link></li>
            <li><router-link :to="'/docs'">Docs</router-link></li>
            <li><router-link :to="'/community'">Community</router-link></li>
            <li><router-link :to="'/blog'">Blog</router-link></li>
          </ul>
          <p>Please notify us at <a href="mailto:hello@tendermint.com">hello@tendermint.com</a> and we will fix this error as soon as we can. Thank you for your patience.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted () {
    document.title = '404 - Tendermint'
  }
}
</script>


<style lang="stylus" scoped>
@require '../../styles/variables.styl'
</style>
