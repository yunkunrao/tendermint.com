<template>
  <div class="page-split page-contact">
    <page-header
      title="Contact"
      subtitle="Get in touch with us"
      type="split"
      theme="tendermint">
    </page-header>
    <section class="section-default page-content">
      <div class="section-container">
        <article-body>
          <h2>Email</h2>
          <p>Questions or comments for the Tendermint team? Email us at <a href="mailto:hello@tendermint.com">hello@tendermint.com</a> and we'll get back to you promptly.</p>
          <h2>Slack</h2>
          <p>We also hang out all day on Slack. <a href="http://forum.tendermint.com:3000/">Come join us!</a></p>
          <h2>Other</h2>
          <p>We are also reachable by other methods.</p>
          <ul>
            <li><a href="https://www.facebook.com/tendermint/">Facebook</a></li>
            <li><a href="https://github.com/tendermint/tendermint">GitHub</a></li>
            <li><a href="https://www.linkedin.com/company/tendermint">LinkedIn</a></li>
            <li><a href="https://twitter.com/tendermint_team">Twitter</a></li>
          </ul>
        </article-body>
      </div>
    </section>
  </div>
</template>

<script>
import PageHeader from '@nylira/vue-page-header'
import ArticleBody from '@nylira/vue-article-body'
export default {
  name: 'page-contact',
  components: {
    PageHeader,
    ArticleBody
  },
  mounted () {
    document.title = 'Contact - Tendermint'
  }
}
</script>
