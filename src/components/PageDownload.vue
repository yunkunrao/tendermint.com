<template>
  <page-split class="page-intro-download">
    <page-header
      title="Download Tendermint"
      subtitle="Tendermint 0.10.3 has been released! "
      type="split"
      theme="tendermint"
      slot="header">
    </page-header>
    <master-detail style="margin-left: 0">

      <article-body  slot="detail">
        <h1>Download Tendermint</h1>
        <p>Tendermint 0.10.3 has been released! View <a href="https://github.com/tendermint/tendermint/blob/master/CHANGELOG.md#0103-august-10-2017">the changelog</a>.</p>

        <download-links></download-links>

        <h2>Install From Source</h2>
        <p>If you prefer, you can also install Tendermint <router-link to="/docs/guides/install">from source</router-link>.</p>

        <h2>Next Step</h2>
        <p>Once you've installed Tendermint onto your computer, get started by creating your first <router-link to="/docs/getting-started/first-abci-app">ABCI app</router-link>.</p>
      </article-body>
    </master-detail>
  </page-split>
</template>

<script>
import MasterDetail from './MasterDetail'
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
    MasterDetail,
    PageHeader
  },
  mounted () {
    document.title = '1. Download Tendermint - Introduction - Tendermint'
  }
}
</script>

<style lang="stylus">
  .page-intro-download
    .detail
      margin-left auto!important

</style>
