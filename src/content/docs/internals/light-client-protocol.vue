<template><div><h1>Light Client Protocol</h1>
<p>Light clients are an important part of the complete blockchain system for most applications.  Tendermint provides unique speed and security properties for light client applications.</p>
<h2>Overview</h2>
<p>The objective of the light client protocol is to get a <router-link to=/docs/internals/validators#committing-a-block>commit</router-link> for a recent <router-link to=/docs/internals/block-structure#block-hash>block hash</router-link> where the commit includes a majority of signatures from the last known validator set.  From there, all the application state is verifiable with <router-link to=/docs/internals/merkle-trees#iavl-tree>merkle proofs</router-link>.</p>
<h3>Syncing the Validator Set</h3>
<p>TODO</p>
<h2>Properties</h2>
<ul>
<li>You get the full collateralized security benefits of Tendermint;  No need to wait for confirmations.</li>
<li>You get the full speed benefits of Tendermint;  Transactions commit instantly.</li>
<li>You can get the most recent version of the application state non-interactively (without committing anything to the blockchain).  For example, this means that you can get the most recent value of a name from the name-registry without worrying about fork censorship attacks, without posting a commit and waiting for confirmations.  It&#x2019;s fast, secure, and free!</li>
</ul>
</div></template>
