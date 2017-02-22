<template>
  <div><h1 id=documentation>Documentation</h1>
<p>If you&#x2019;re new here, start with the <router-link to=/intro>Tendermint Intro</router-link>.</p>
<p>Otherwise, find more goodies on this page!</p>
<h2 id=how-to-guides>How-To Guides</h2>
<p>Get started building your ABCI application or server by reading the <router-link to=/docs/guides/app-development>App Development guide</router-link>.</p>
<p>To learn about integrating with clients, see the <router-link to=/docs/guides/app-architecture>App Architecture</router-link> guide.</p>
<p>See Tendermint&#x2019;s <router-link to=/ecosystem>Software Ecosystem</router-link> for motivation and inspiration!</p>
</div>
</template>

<script>
export default {
  name: 'page-docs-entry',
  mounted () {
    document.title = 'Index - Documentation - Tendermint'
  }
}
</script>
