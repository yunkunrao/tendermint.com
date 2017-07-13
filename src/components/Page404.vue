<template>
  <page-split>
    <page-header
      title="Error 404"
      subtitle="Page Not Found"
      type="split"
      theme="tendermint"
      slot="header">
    </page-header>
    <article-body>
      <p><strong>Whoops!</strong> The page you visited either does not exist or has been moved elsewhere in a website reshuffle. We're sorry for the inconvenience. Try visiting one of these pages below:</p>
      <ul>
        <li><router-link :to="'/'">Home</router-link></li>
        <li><router-link :to="'/intro'">Intro</router-link></li>
        <li><router-link :to="'/docs'">Docs</router-link></li>
        <li><router-link :to="'/community'">Community</router-link></li>
        <li><router-link :to="'/blog'">Blog</router-link></li>
      </ul>
      <p>Please notify us at <a href="mailto:hello@tendermint.com">hello@tendermint.com</a> and we will fix this error as soon as we can. Thank you for your patience.</p>
    </article-body>
  </page-split>
</template>

<script>
import PageHeader from '@nylira/vue-page-header'
import ArticleBody from '@nylira/vue-article-body'
import PageSplit from '@nylira/vue-page-split'
export default {
  name: 'page-404',
  components: {
    PageSplit,
    ArticleBody,
    PageHeader
  },
  mounted () {
    document.title = '404 - Tendermint'
  }
}
</script>
