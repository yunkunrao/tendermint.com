---
title: "Tendermint vs PBFT"
description: "Tendermint is a variant of PBFT; similarities and differences explained"
date: "2015-10-03"
categories: 
    - "consensus"
    - "pbft"
---

<br/>
Tendermint was originally inspired by the DLS algorithm ([link](http://groups.csail.mit.edu/tds/papers/Lynch/jacm88.pdf)).  After several iterations to improve efficiency, (namely, making it more asynchronous), it has become quite similar to the PBFT algorithm ([link](http://www.pmg.lcs.mit.edu/papers/osdi99.pdf)).  This document serves to illustrate the similarities and differences between Tendermint and PBFT.


|Tendermint     | PBFT              |
|---------------|-------------------|
|proposer       | primary           |
|validator      | replica           |
|propose step   | pre-prepare phase |
|prevote step   | prepare phase     |
|precommit step | commit phase      |
|round change   | view change       |

_terminology comparison between Tendermint and PBFT_

### Byzantine fault tolerance

Both PBFT and Tendermint are Byzantine fault-tolerant transaction systems.  Both can handle up to ⅓ of malicious Byzantine validators/replicas.  Both require three steps/phases;  the first for broadcasting the block, and the last two for broadcasting signatures.  Finally, both require two quorums of signatures to commit a block.

Where the two differ is in what happens when more than ⅓ of validators are Byzantine.  In PBFT, when there are between ⅓ and ⅔ of Byzantine validators, no guarantees are provided whatsoever; the attackers can return arbitrary results to the client ([source](https://www.usenix.org/conference/nsdi-07/beyond-one-third-faulty-replicas-byzantine-fault-tolerant-systems)).  Tendermint’s consensus model considers a block to be committed when there are more than ⅔ of precommit signatures for the blockhash, which mitigates this issue.   Thus if ½ of the validators are Byzantine they can prevent future blocks from being committed; however, they cannot commit new blocks like they can in PBFT. 

### Round-robin vs sticky leaders

PBFT's whitepaper, which was the inspiration for Hyperledger, illustrates a "sticky" leader (a.k.a. primary/proposer) system.  Tendermint's specification describes a round-robin scheme for selecting new leaders for every block.

In some scenarios, the sticky-leader approach has an advantage over the round-robin approach; the throughput in transactions-per-second is higher with sticky-leaders because the leader doesn't have to wait for block confirmations before proposing the next block.  On the other hand, the round-robin approach has the benefit that leaders are continuously tested (preventing possible cascading failures), and the power to re-order transactions is shared equally among the participants.

We don't have to pick one solution; we can combine the two approaches into a hybrid scheme.  Fortunately, making this change is straightforward in Tendermint, so it's easy to configure it for any purpose.

### Dynamic membership

The PBFT algorithm assumes a fixed set of replicas/validators in the network.  This may work for internal systems, but it doesn't work for "consortium" or "public" blockchains where the participants are expected to change over time.  Tendermint supports dynamic membership safely by requiring a +⅔ quorum of validators to approve of membership changes.  The reference implementation allows anyone to post a bond collateral (with intrinsic coins), but other variations are possible (especially when combined with our permissions framework).  For example, Tendermint could be easily modified to reject new members by default, and only approve new members that have been whitelisted (perhaps by an independent third party).

### Epidemic gossip vs point-to-point

The PBFT algorithm illustrates a point-to-point consensus algorithm, which is simpler but is less robust to disruptions in the network.  Tendermint's implementation uses an epidemic gossip protocol to ensure that consensus can be reached as long as the network is connected, no matter how many point-to-point edge connections have been broken.

### Block propagation optimizations

Tendermint goes a step further than PBFT and implements a BitTorrent/LibSwift-inspired algorithm to quickly broadcast transaction blocks.  This makes the most out of limited available bandwidth to commit transactions sooner.

See [_Performance Analysis of the Libswift P2P Streaming Protocol_](http://www.ict.kth.se/courses/ID2210/presentation-papers/2012%20-%20Performance%20Analysis%20of%20Libswift.pdf) for details on how LibSwift fares in “flashcrowd” scenarios, which is similar to new block propagations in Tendermint.

### Self-balancing Merkle trees

PBFT and its implementation (the BFS filesystem) doesn't provide much by way of useful data structures.  Tendermint ships with a self-balancing Merkle tree library which can be used to keep track of application data (e.g. account balances) and prove any part of the application state to a client (with a Merkle proof and quorum of signatures).  Of course, it's not necessary to use such a data structure if you need to build a blockchain that can handle a million transactions per second -- for that, you should combine Tendermint with an LMAX "disruptor" ([source](http://martinfowler.com/articles/lmax.html)) to process all transactions in memory.

The self-balancing Merkle tree data structure also comes in handy when implementing a parallel-blockchain architecture.  Since the logic for light-client verification of application state is so cheap, efficient, and safe<sup>\*</sup>, the same logic can be used for nodes and validators to keep track of the application state in foreign blockchains.

## Fin

Though Tendermint was developed independently from PBFT, both algorithms share more than a few similarities. Both algorithms attempt to approach optimality in fault tolerance and performance.  Given the similarities, developers wishing to build BFT systems should consider building on Tendermint, which is furthest ahead at meeting the requirements laid out in this paper about PBFT:

<blockquote>
“Interestingly, we may find that the current BFT debate may evolve to resemble the microkernel debate, with one camp advocating that the BFT concept is ultimately impractical for real-world applications and the other camp advocating that it is not the concept that is impractical/faulty, but it is the implementation that is impractical/faulty. Building a complete implementation that supports a real application for a long duration rather than for the length of time it takes to build and test a prototype implementation, that does not cut corners, that is not missing features, that does not make optimizations that break down in corner cases, that can be applied to more than one application, and that has good performance will go a long way to settling the debate. A tall order, for sure.”
</blockquote>
- [_On the Practicality of Byzantine Fault Tolerance_](http://arxiv.org/pdf/1110.4854.pdf), 2011


<sup>\*</sup> _This isn’t completely implemented yet.  The Merkle proof logic is implemented, but we still need to implement a data structure to communicate validator set changes to clients, and ideally client code in Javascript as a demo._
