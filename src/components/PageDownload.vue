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
      <download-links></download-links>
      <h2>Install From Source</h2>
      <p>If you prefer, you can also install Tendermint <a href="https://tendermint.readthedocs.io/en/master/install.html">from source</a>.</p>
    </article-body>
  </page-split>
</template>

<script>
import PageSplit from "@nylira/vue-page-split"
import ArticleBody from "@nylira/vue-article-body"
import DownloadLinks from "./DownloadLinks"
import PageHeader from "@nylira/vue-page-header"
export default {
  name: "page-intro-download",
  components: {
    ArticleBody,
    DownloadLinks,
    PageSplit,
    PageHeader
  },
  mounted() {
    document.title = "Downloads - Tendermint - Blockchain Consensus"
  }
}
</script>
