# Consensus Overview

Tendermint is an easy-to-understand, mostly asynchronous, BFT consensus protocol.
The protocol follows a simple state machine that looks like this:

<img src="~assets/images/consensus_logic.png">

Participants in the protocol are called "validators";
they take turns proposing blocks of transactions and voting on them.
Blocks are committed in a chain, with one block at each "height".
A block may fail to be committed, in which case the protocol moves to the next "round",
and a new validator gets to propose a block for that height.
Two stages of voting are required to successfully commit a block;
we call them "pre-vote" and "pre-commit".
A block is committed when more than 2/3 of validators pre-commit for the same block in the same round.

There is a picture of a couple doing the polka because validators are doing something like a polka dance.
When more than two-thirds of the validators pre-vote for the same block, we call that a "polka".
Every pre-commit must be justified by a polka in the same round.

Validators may fail to commit a block for a number of reasons; 
the current proposer may be offline, or the network may be slow.
Tendermint allows them to establish that a validator should be skipped.
Validators wait a small amount of time to receive a complete proposal block from the proposer before voting to move to the next round.
This reliance on a timeout is what makes Tendermint a weakly synchronous protocol, rather than an asynchronous one.
However, the rest of the protocol is asynchronous, and validators only make progress after hearing from more than two-thirds of the validator set.
A simplifying element of Tendermint is that it uses the same mechanism to commit a block as it does to skip to the next round.

Assuming less than one-third of the validators are Byzantine, Tendermint guarantees that safety will never be violated - that is, validators will never commit conflicting blocks at the same height.
To do this it introduces a few "locking" rules which modulate which paths can be followed in the flow diagram.
Once a validator precommits a block, it is "locked" on that block. 
Then, 

1) it must prevote for the block it is locked on
2) it can only unlock, and precommit for a new block, if there is a polka for that block in a later round


# Stake

In many systems, not all validators will have the same "weight" in the consensus protocol. 
Thus, we are not so much interested in one-third or two-thirds of the validators, but in those proportions of the total voting power, 
which may not be uniformly distributed across individual validators.

Since Tendermint can replicate arbitrary applications, it is possible to define a currency, and denominate the voting power in that currency.
When voting power is denominated in a native currency, the system is often referred to as Proof-of-Stake.
Validators can be forced, by logic in the application, 
to "bond" their currency holdings in a security deposit that can be destroyed if they're found to misbehave in the consensus protocol.
This adds an economic element to the security of the protocol, allowing one to quantify the cost of violating the assumption that less than one-third of voting power is Byzantine. 

The [Cosmos Network](http://cosmos.network) is designed to use this Proof-of-Stake mechanism across an array of cryptocurrencies implemented as TMSP applications.

## Next Steps

- Continue with the <router-link to="/intro/getting-started/install">Getting Started</router-link> guide to install and run example tendermint applications.
