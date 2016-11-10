~~~
title: "Tendermint for Fast Settlement"
description: "Blockchains provide new opportunities in fast settlement"
date: "2015-10-03"
categories: 
    - "consensus"
    - "clearing"
    - "settlement"
~~~

Some experts in the nascent blockchain industry have said the following:

* The blockchain is just a database_
* _Blockchains don’t help with fast settlement_
* _The future of finance on the blockchain may not involve consensus_
* _You can build on top of the Bitcoin blockchain for fast settlement_

This short post will address these statements and paint a different picture.


### Clearing and settlement woes

Clearing and settlement are separate but related terms.  The source of the differences stems from the significant duration of time (on the order of days) for the delivery of assets (e.g. paper certificates used to take over a week to deliver by courier).  A clearinghouse provides faster settlement between two trading parties by acting as the counterparty for both.

So, it isn't the clearing that is slow. Part of the purpose of clearing is to mitigate the slowness of settlement.  The reason why we don't have fast settlement is because "Current banking databases are disparate and therefore require reconciliation between each other.", and, "the existence of \[3rd party\] consortia ... prevented banking systems from evolving, because there was no incentive for a single bank to create a better system outside of the consortia"  ([source](https://medium.com/design-matters-4/blockchains-and-banks-cef72f0fcf29)).  To solve the problem of reconciliation, we need a common ledger and platform.

Once we have a common ledger, we can think about tradeoffs between security and settlement speed.  When settlement becomes fast on the order of seconds, human intermediation becomes difficult, which in turn means that we need the system to be as fault tolerant as possible.


### The source of Bitcoin’s security

Bitcoin and Bitcoin’s proof-of-work (PoW) mining, or Nakamoto consensus, provides something that until 2008 had never existed before.  Bitcoin was the first open decentralized application to provide Byzantine fault-tolerant (BFT) consensus on a global currency ledger.  Nakamoto consensus is a novel BFT consensus algorithm that utilizes computational power as a proxy for membership.

The security of Nakamoto consensus depends on extrinsic factors such as the availability of energy and access to semiconductor fabs.  Ignoring these factors, the security of Nakamoto consensus can be modeled by the makeup and diversity of the mining network.  The more diverse the mining participants, the more difficult it is to coordinate a sufficiently large coalition to successfully attack the network and cause double-spends. If we discount the difficulty of coordination (which may be prudent considering that major mining pools communicate with each other routinely), what’s left is the opportunity cost of producing blockchain forks--just 25 bitcoins per block at today’s inflationary reward schedule.

The Bitcoin blockchain does help with settlement in that it provides a BFT ledger.  The problem is that Nakamoto consensus is slow and expensive, as its security is only proportional to the cumulative sum of energy burned over time.


### Classical BFT enables additive security

Classical BFT consensus algorithms don’t rely on the opportunity cost of energy expenditure for security.  They use pseudonymous identities and cryptographic signatures to ensure that a sufficient quorum of participants approve of new transactions before they are committed.  These algorithms had been around since the 70’s and 80’s, and culminated in 1999 with the renowned PBFT algorithm.  Existing PBFT solutions are difficult to use or incomplete ([source](http://arxiv.org/abs/1110.4854)), so there is a need for a new free and open-source implementation.  Tendermint is such an open-source implementation of the PBFT consensus protocol (see [explanation](http://tendermint.com/posts/tendermint-vs-pbft/)).  Tendermint can commit blocks to finality on a global ledger with hundreds of validators on the order of seconds.

Unlike Nakamoto consensus, there is no extrinsic opportunity cost for signing conflicting blocks on the blockchain, since cryptographic signatures are practically free. Instead, we can design classical BFT consensus protocols to be _accountable_; that is, **when the blockchain is forked, we can review the signatures and determine which participants caused the fork to happen**.  If we combine this BFT accountability with the concept of collateral, we get something that I’m calling _additive-security_.  Each individual participant of the BFT consensus process might only post a small amount of collateral (limited by their confidence in ability to secure their hardware and software), but **the total effective collateral can be large**.  For example, if there are 1000 validators that each post $1M worth of collateral, a double-spend attack would cost attackers at minimum $333M dollars ($1M × 1000 × ⅓).  By the way, we can increase the minimum fraction of collateral at stake (beyond ⅓) by requiring a larger quorum of validators to commit each block.

A consortium of banks could run a Tendermint blockchain where the validators are publicly identified.  Each validator can post collateral secured by legal contracts with real assets held in escrow by each other, and/or with tokens intrinsic to the blockchain.  Each validator on such a blockchain network would secure their public/private key to the best of their ability.  To mitigate the risk of accidents and hacks, each validator keypair can be derived from multiple keypairs that produce signatures jointly using a cryptographic threshold signature scheme;  in effect, each validator node would be running a BGA consensus network recursively for additional security.  Tendermint validators uses the Ed25519 Schnorr signature scheme because it supports cryptographic threshold signatures ([source](http://cacr.uwaterloo.ca/techreports/2001/corr2001-13.ps)).  I'll write more about this in a future post, but for now lets just say that, under this scheme, a single bank with a single effective public key on the main ledger could reasonably post billions of dollars in collateral.

For public permissionless blockchains, Nielsen's law of internet bandwidth is at play.  If we naively assume that doubling the number of validators requires four times the bandwidth, and that bandwidth doubles every two years, every four years a public blockchain can support twice as many validators (thus naively twice as much collateral) and still commit blocks at the same speed.  I bet we can do better.


## Fin

With publicly identified Tendermint validators with collateral at risk, we can have a shared decentralized ledger that offers fast settlement.  This is a novel concept and one that has the potential to change the nature of banking itself.
