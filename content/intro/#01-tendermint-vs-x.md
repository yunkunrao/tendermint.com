# Tendermint vs. Other Software

Tendermint is broadly similar to two classes of software.
The first class consists of distributed key-value stores, 
like Zookeeper, etcd, and consul, which use non-BFT consensus.
The second class is known as "blockchain technology",
and consists of both cryptocurrencies like Bitcoin and Ethereum, 
and alternative distributed ledger designs like Hyperledger's Burrow.

## Zookeeper, etcd, consul

Zookeeper, etcd, and consul are all implementations of a key-value store atop a classical, 
non-BFT consensus algorithm. Zookeeper uses a version of Paxos called Zookeeper Atomic Broadcast,
while etcd and consul use the Raft consensus algorithm, which is much younger and simpler.
A typical cluster contains 3-5 machines, and can tolerate crash failures in up to 1/2 of the machines,
but even a single Byzantine fault can destroy the system.

Each offering provides a slightly different implementation of a featureful key-value store,
but all are generally focused around providing basic services to distributed systems,
such as dynamic configuration, service discovery, locking, leader-election, and so on.

Tendermint is in essence similar software, but with two key differences:
- It is Byzantine Fault Tolerant, meaning it can only tolerate up to a 1/3 of failures,
but those failures can include arbitrary behaviour - including hacking and malicious attacks.
- It does not specify a particular application, like a fancy key-value store. Instead, 
it focuses on arbitrary state machine replication, so developers can build the application logic
that's right for them, from key-value store to cryptocurrency to e-voting platform and beyond.

The layout of this Tendermint website content is also ripped directly and without shame from
[consul.io](https://www.consul.io/) and the other [Hashicorp sites](https://www.hashicorp.com/#tools).

## Bitcoin, Ethereum, etc.

Tendermint emerged in the tradition of cryptocurrencies like Bitcoin, Ethereum, etc.
with the goal of providing a more efficient and secure consensus algorithm than Bitcoin's Proof of Work.
In the early days, Tendermint had a simple currency built in, and to participate in consensus 
user's had to "bond" units of the currency into a security deposit which could be revoked if they misbehaved - 
this is what made Tendermint a Proof-of-Stake algorithm.

Since then, Tendermint has evolved to be a general purpose blockchain consensus engine that can host arbitrary application states.
That means it can be used as a plug-and-play replacement for the consensus engines of other blockchain software.
So one can take the current Ethereum code base, whether in Rust, or Go, or Haskell, and run it as a ABCI application
using Tendermint consensus. Indeed, [we did that](https://github.com/tendermint/ethermint).
And we plan to do the same for Bitcoin, ZCash, and various other deterministic applications as well.

Another example of a cryptocurrency application built on Tendermint is [Cosmos](http://cosmos.network)

## Fabric, Burrow

[Fabric](https://github.com/hyperledger/fabric), takes a similar approach to Tendermint, but is more opinionated about how the state is managed,
and requires that all application behaviour runs in potentially many docker containers, modules it calls "chaincode". 
It uses an implementation of [PBFT](http://pmg.csail.mit.edu/papers/osdi99.pdf) 
from a team at IBM that is 
[augmented to handle potentially non-deterministic chaincode](https://www.zurich.ibm.com/~cca/papers/sieve.pdf)
It is possible to implement this docker-based behaviour as a ABCI app in Tendermint, 
though extending Tendermint to handle non-determinism remains for future work.

[Burrow](https://github.com/hyperledger/burrow) is an implementation of the Ethereum Virtual Machine and Ethereum transaction mechanics,
with additional features for a name-registry, permissions, and native contracts, and an alternative blockchain API.
It uses Tendermint as its consensus engine, and provides a particular application state.

## Next Steps

- Read an overview of the motivation and design behind the [Application BlockChain Interface](/intro/abci-overview).
- Continue with the [Getting Started](/docs/getting-started) guide to install and run example tendermint applications.
