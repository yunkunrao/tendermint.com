<template>
  <page-split>
    <page-header
      title="Downloads"
      subtitle="Check back here periodically for new Tendermint and related binary releases."
      type="split"
      theme="tendermint"
      slot="header">
    </page-header>
    <article-body>
      <p>Tendermint 0.10.3 has been released! View <a href="https://github.com/tendermint/tendermint/blob/master/CHANGELOG.md#0103-august-10-2017">the changelog</a>.</p>
      <download-links></download-links>
      <h2>Install From Source</h2>
      <p>If you prefer, you can also install Tendermint <router-link to="/docs/guides/install">from source</router-link>.</p>
    </article-body>
  </page-split>
</template>

<script>
import PageSplit from '@nylira/vue-page-split'
import ArticleBody from '@nylira/vue-article-body'
import DownloadLinks from './DownloadLinks'
import PageHeader from '@nylira/vue-page-header'
export default {
  name: 'page-intro-download',
  components: {
    ArticleBody,
    DownloadLinks,
    PageSplit,
    PageHeader
  },
  mounted () {
    document.title = 'Downloads - Tendermint - Blockchain Consensus'
  }
}
</script>
