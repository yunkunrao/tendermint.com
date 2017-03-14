<template>
  <div><h1 id=tendermint-roadmap>Tendermint Roadmap</h1>
<p>This is an estimate of what we will be working on in Tendermint over the coming months.
It is in the same style as our <router-link to=/docs/changelog>CHANGELOG</router-link>
How these changes will be rolled out in terms of versions and releases can be better <a href=https://github.com/tendermint/tendermint/issues>tracked on Github</a></p>
<p>Please note that Tendermint is not yet production ready;
it is pre-v1.0.0 and we make backwards incompatible changes with each minor version release.
If you require more stability in the near term, please <router-link to=/contact>get in touch</router-link>.</p>
<p>BREAKING CHANGES:</p>
<ul>
<li>Add more fields to the Header: NextValidatorSet, ResultsHash, EvidenceHash</li>
<li>Pass evidence/voteInfo through ABCI</li>
<li>Upgrade the consensus to make more real-time use of evidence during voting;
instead of +2/3 precommits for a block, a Commit becomes the entire <code>JSet</code>.<br>
While the commit size may grow unbounded in size, it makes a fork immediately slash a +1/3 Byzantine subset of validators.</li>
<li>Avoid exposing empty blocks as a first-class citizen of the blockchain</li>
<li>Use a more advanced logging system</li>
</ul>
<p>FEATURES:</p>
<ul>
<li>Use the chain as its own CA for nodes and validators</li>
<li>Tooling to run multiple blockchains/apps, possibly in a single process</li>
<li>State syncing (without transaction replay)</li>
<li>Transaction indexing and improved support for querying history and state</li>
<li>Add authentication and rate-limitting to the RPC</li>
</ul>
<p>IMPROVEMENTS:</p>
<ul>
<li>Better Tendermint CLI</li>
<li>Improve subtleties around mempool caching and logic</li>
<li>Consensus optimizations:
<ul>
<li>cache block parts for faster agreement after round changes</li>
</ul>
</li>
<li>Better testing of the consensus state machine (ie. use a DSL)</li>
<li>Auto compiled serialization/deserialization code instead of go-wire reflection</li>
</ul>
<p>BUG FIXES:</p>
<ul>
<li>Graceful handling/recovery for apps that have non-determinism or fail to halt</li>
<li>Graceful handling/recovery for violations of safety, or liveness</li>
</ul>
</div>
</template>

<script>
export default {
  name: 'page-docs-entry',
  mounted () {
    document.title = 'Roadmap - Documentation - Tendermint'
  }
}
</script>
