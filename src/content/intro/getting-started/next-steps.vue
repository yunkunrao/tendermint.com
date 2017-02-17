<template>
  <div><h1 id=next-steps>Next Steps</h1>
<p>By now you&#x2019;ve seen how to run a simple example ABCI application on a local Tendermint node
and on a remote Tendermint cluster.</p>
<p>To learn more about building ABCI applications and integrating with Tendermint, see the <router-link to=/docs/guides/app-development>Developer Guides</router-link>.
To learn more about running the Tendermint software, see the <router-link to=/docs/guides/using-tendermint>Using Tendermint Guide</router-link>.</p>
<p>To learn more about Tendermint&#x2019;s various pieces, checkout the <router-link to=/docs>Documentation</router-link>.
For a deeper dive, see <a href=https://atrium.lib.uoguelph.ca/xmlui/handle/10214/9769>this thesis</a>.
There is also the <router-link to=/static/docs/tendermint.pdf>original whitepaper</router-link>, though it is now quite outdated.</p>
<p>The Tendermint <router-link to=/ecosystem>Software Ecosystem</router-link> contains many example applications and related software built by the Tendermint team and others. Check it out for some inspiration!</p>
<p>See our <router-link to=/community>Community</router-link> page for more ways to collaborate.</p>
<p>You can also <router-link to=/contact>get in touch with the team</router-link>.</p>
</div>
</template>

<script>
export default {
  mounted () {
    document.title = 'Next Steps - Documentation - Tendermint'
  }
}
</script>
