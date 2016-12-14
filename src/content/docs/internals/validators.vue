<template><div><h1>Validators</h1>
<p>Validators are responsible for committing new blocks in the blockchain.
These validators participate in the consensus protocol by broadcasting <em>votes</em> which contain cryptographic signatures signed by each validator&#x2019;s public key.</p>
<p>Some Proof-of-Stake consensus algorithms aim to create a &#x201C;completely&#x201D; decentralized system where all stakeholders (even those who are not always available online) participate in the committing of blocks.  Tendermint has a different approach to block creation.  Validators are expected to be online, and the set of validators is permissioned/curated by some external process.  Proof-of-stake is not required, but can be implemented on top of Tendermint consensus.  That is, validators may be required to post collateral on-chain, off-chain, or may not be required to post any collateral at all.</p>
<p>Validators have a cryptographic key-pair and an associated amount of &#x201C;voting power&#x201D;.  Voting power need not be the same.</p>
<h2>Becoming a Validator</h2>
<p>There are two ways to become validator.</p>
<ol>
<li>They can be pre-established in the <router-link to=/docs/internals/genesis>genesis state</router-link></li>
<li>The <a href=https://github.com/tendermint/tmsp>TMSP app responds to the EndBlock message</a> with changes to the existing validator set.</li>
</ol>
<h2>Committing a Block</h2>
<p><em>+2/3 is short for &#x201C;more than 2/3&#x201D;</em></p>
<p>A block is committed when +2/3 of the validator set sign <router-link to=/docs/internals/block-structure#vote>precommit votes</router-link> for that block at the same <router-link to=/docs/internals/consensus>round</router-link>.  The +2/3 set of precommit votes is called a <router-link to=/docs/internals/block-structure#commit><em>commit</em></router-link>.  While any +2/3 set of precommits for the same block at the same height&amp;round can serve as validation, the canonical commit is included in the next block (see <router-link to=/docs/internals/block-structure>LastCommit</router-link>.</p>
</div></template>