<template>
  <div><h1 id=documentation>Documentation</h1>
<p>If you&#x2019;re new here, start with the <router-link to=/intro>Tendermint Intro</router-link>.</p>
<p>To start building an ABCI application and integrating with Tendermint,
see the <router-link to=/docs/guides/app-development>App Development</router-link>
and <router-link to=/docs/guides/app-architecture>App Architecture</router-link> guides.</p>
<p>To learn more about running the Tendermint software, see the <router-link to=/docs/guides/using-tendermint>Using Tendermint Guide</router-link>.</p>
<p>To learn more about Tendermint&#x2019;s various pieces, checkout the <router-link to=/docs>Documentation</router-link>.
For a deeper dive, see <a href=https://atrium.lib.uoguelph.ca/xmlui/handle/10214/9769>this thesis</a>.
There is also the <router-link to=/static/docs/tendermint.pdf>original whitepaper</router-link>, though it is now quite outdated.
You might also be interested in the <a href=https://cosmos.network/whitepaper>Cosmos Whitepaper</a>,
which describes Tendermint, ABCI, and how to build a scalable, heterogeneous, cryptocurrency network.</p>
<p>For details on how the software has changed, and what changes are in store, see the <router-link to=/docs/changelog>Changelog</router-link> and the <router-link to=/docs/roadmap>Roadmap</router-link>.</p>
<p>If you&#x2019;re interested in contributing, see our <router-link to=/docs/contributing>Contributor Guidelines</router-link></p>
<p>The Tendermint <router-link to=/ecosystem>Software Ecosystem</router-link> contains many example applications and related software built by the Tendermint team and others.
Check it out for some motivation and inspiration!</p>
<p>See our <router-link to=/community>Community</router-link> page for more ways to collaborate.</p>
<p>You can also <router-link to=/contact>get in touch with the team</router-link>.</p>
<p>Most importantly, enjoy!</p>
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
