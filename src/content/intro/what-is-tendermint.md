# Introduction to Tendermint

Welcome to the Tendermint guide!  This is the best place to start if you're new
to Tendermint.  If you're already familiar with the basics of Tendermint and
TMSP, find more details in the [documentation](/docs).

## What is Tendermint?

Tendermint is designed to provide an advanced form of fault tolerance to a large class of applications.
It does so via two chief technical components: a consensus algorithm and an application interface.
The consensus algorithm enables many instances of the application to exist simultaneously in different locations and yet 
stay in sync with one another, even if some of them fail.
The application interface models the application as an arbitrary state machine, 
and enables the consensus algorithm to work for many different kinds of applications, written in any programming language.

In more technical jargon, we say that Tendermint is general purpose software for [Byzantine fault tolerant (BFT)](/docs/definitions#BFT)
[state machine replication](/docs/definitions#state-machine-replication).
Given an arbitrary deterministic state machine, written in any programming language, 
Tendermint ensures that every replica of the state machine sees the same ordered set of input transactions, and computes the same results,
even in the face of arbitrary (Byzantine) failures. 
Replicas may crash, get hacked, succumb to radiation damage, or otherwise - 
but so long as less than 1/3 of them are faulty, all correct replicas will agree on the history of transactions and the current state.

The totally ordered set of transactions produced by Tendermint is called a [blockchain](/docs/definitions#blockchain),
because transactions are grouped in batches, or blocks, and each block contains a cryptographic
commitment to the previous one, forming a chain. Thus, if you like, you can call Tendermint a blockchain consensus engine.

[Most blockchains or consensus solutions](/intro/tendermint-vs) provide a built-in application,
typically in the form of an opinionated key-value store, scripting language, or virtual machine design.
In contrast, Tendermint strives to make a minimal number of assumptions about the application state, 
giving developers the utmost freedom to express their application logic using the tools right for them. 

To achieve this flexibility, Tendermint and the application it powers run in
separate UNIX processes, and speak to each other via a simple messaging protocol
called the Tendermint Socket Protocol, or TMSP. Tendermint will work with any application
conforming to the TMSP interface to ensure that transactions are run in the same order for each replica of the application.

In addition to the flexibility provided to application developers, 
the [Tendermint consensus algorithm](/docs/internals/byzantine-consensus-algorithm) itself
has many benefits when compared with alternative consensus algorithms, 
like Proof-of-Work, Raft, PBFT, and so on:

* __simplicity__: Tendermint continuously commits
blocks and uses the same mechanism to commit blocks as it does to handle failure, 
making it easy to understand and reason about.

* __speed__: Tendermint blocks can commit to finality in the order of 1 second.
Tendermint can handle transaction volume at rates of up to 10,000
transactions per second for 250byte transactions.  The bottleneck is in the
application.  

* __security__: Tendermint consensus is not just fault tolerant,
it's optimally Byzantine fault-tolerant, with accountability.  When the
blockchain forks, there is a way to determine liability and punish those who
misbehaved.

* __scalability__: Unlike Proof-of-Work, running parallel blockchains does not diminish the speed or
security of each chain, so it is possible to shard the application state and
achieve greater horizontal scalability. 
The algorithm can also scale to hundreds or thousands of validators (depending on desired block times), and
will only get better over time with advances in bandwidth and cpu capacity.

## Next Steps

- See how [tendermint compares to other software](tendermint-vs)
- Continue with the [getting started guide](getting-started) to install and run example tendermint applications
