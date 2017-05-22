<template>
  <master-detail>
    <master slot="master"></master>
    <article-body slot="detail">
      <h1>Download Tendermint</h1>

      <p>Tendermint 0.10.0-rc1 has been released! View <a href to="https://github.com/tendermint/tendermint/blob/master/CHANGELOG.md#0100-may-18-2017">latest changes</a>.</p>

      <download-links></download-links>

      <h2>Install From Source</h2>
      <p>If you prefer, you can also install Tendermint <router-link to="/docs/guides/install">from source</router-link>.</p>

      <h2>Next Step</h2>
      <p>Once you've installed Tendermint onto your computer, get started by creating your first <router-link to="/intro/getting-started/first-abci-app">ABCI app</router-link>.</p>
    </article-body>
  </master-detail>
</template>

<script>
import MasterDetail from './MasterDetail'
import Master from '../components/PageIntroMaster'
import ArticleBody from '@nylira/vue-article-body'
import DownloadLinks from './DownloadLinks'
export default {
  name: 'page-intro-download',
  components: {
    ArticleBody,
    DownloadLinks,
    Master,
    MasterDetail
  },
  mounted () {
    document.title = '1. Download Tendermint - Introduction - Tendermint'
  }
}
</script>
