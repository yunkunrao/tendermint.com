<template>
  <div><h1 id=consensus-overview>Consensus Overview</h1>
<p>Tendermint is an easy-to-understand, mostly asynchronous, BFT consensus protocol.
The protocol follows a simple state machine that looks like this:</p>
<img src=~assets/images/consensus_logic.png>
<p>Participants in the protocol are called &#x201C;validators&#x201D;;
they take turns proposing blocks of transactions and voting on them.
Blocks are committed in a chain, with one block at each &#x201C;height&#x201D;.
A block may fail to be committed, in which case the protocol moves to the next &#x201C;round&#x201D;,
and a new validator gets to propose a block for that height.
Two stages of voting are required to successfully commit a block;
we call them &#x201C;pre-vote&#x201D; and &#x201C;pre-commit&#x201D;.
A block is committed when more than 2/3 of validators pre-commit for the same block in the same round.</p>
<p>There is a picture of a couple doing the polka because validators are doing something like a polka dance.
When more than two-thirds of the validators pre-vote for the same block, we call that a &#x201C;polka&#x201D;.
Every pre-commit must be justified by a polka in the same round.</p>
<p>Validators may fail to commit a block for a number of reasons;
the current proposer may be offline, or the network may be slow.
Tendermint allows them to establish that a validator should be skipped.
Validators wait a small amount of time to receive a complete proposal block from the proposer before voting to move to the next round.
This reliance on a timeout is what makes Tendermint a weakly synchronous protocol, rather than an asynchronous one.
However, the rest of the protocol is asynchronous, and validators only make progress after hearing from more than two-thirds of the validator set.
A simplifying element of Tendermint is that it uses the same mechanism to commit a block as it does to skip to the next round.</p>
<p>Assuming less than one-third of the validators are Byzantine, Tendermint guarantees that safety will never be violated - that is, validators will never commit conflicting blocks at the same height.
To do this it introduces a few &#x201C;locking&#x201D; rules which modulate which paths can be followed in the flow diagram.
Once a validator precommits a block, it is &#x201C;locked&#x201D; on that block.
Then,</p>
<ol>
<li>it must prevote for the block it is locked on</li>
<li>it can only unlock, and precommit for a new block, if there is a polka for that block in a later round</li>
</ol>
<h1 id=stake>Stake</h1>
<p>In many systems, not all validators will have the same &#x201C;weight&#x201D; in the consensus protocol.
Thus, we are not so much interested in one-third or two-thirds of the validators, but in those proportions of the total voting power,
which may not be uniformly distributed across individual validators.</p>
<p>Since Tendermint can replicate arbitrary applications, it is possible to define a currency, and denominate the voting power in that currency.
When voting power is denominated in a native currency, the system is often referred to as Proof-of-Stake.
Validators can be forced, by logic in the application,
to &#x201C;bond&#x201D; their currency holdings in a security deposit that can be destroyed if they&#x2019;re found to misbehave in the consensus protocol.
This adds an economic element to the security of the protocol, allowing one to quantify the cost of violating the assumption that less than one-third of voting power is Byzantine.</p>
<p>The <a href=http://cosmos.network>Cosmos Network</a> is designed to use this Proof-of-Stake mechanism across an array of cryptocurrencies implemented as ABCI applications.</p>
<h2 id=next-steps>Next Steps</h2>
<ul>
<li>Continue with the <router-link to=/intro/getting-started/download-tendermint>Getting Started</router-link> guide to install and run example tendermint applications.</li>
</ul>
</div>
</template>

<script>
export default {
  mounted () {
    document.title = 'Consensus Overview - Documentation - Tendermint'
  }
}
</script>
