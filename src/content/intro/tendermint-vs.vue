<template><div><h1>Tendermint vs. Other Software</h1>
<p>Tendermint is broadly similar to two classes of software.
The first class consists of distributed key-value stores,
like Zookeeper, etcd, and consul, which use non-BFT consensus.
The second class is known as &#x201C;blockchain technology&#x201D;,
and consists of both cryptocurrencies like Bitcoin and Ethereum,
and alternative distributed ledger designs like Hyperledger and ErisDB.</p>
<h2>Zookeeper, etcd, consul</h2>
<p>Zookeeper, etcd, and consul are all implementations of a key-value store atop a classical,
non-BFT consensus algorithm. Zookeeper uses a version of Paxos called Zookeeper Atomic Broadcast,
while etcd and consul use the Raft consensus algorithm, which is much younger and simpler.
A typical cluster contains 3-5 machines, and can tolerate crash failures in up to 1/2 of the machines,
but even a single Byzantine fault can destroy the system.</p>
<p>Each offering provides a slightly different implementation of a featureful key-value store,
but all are generally focused around providing basic services to distributed systems,
such as dynamic configuration, service discovery, locking, leader-election, and so on.</p>
<p>Tendermint is in essence similar software, but with two key differences:</p>
<ul>
<li>It is Byzantine Fault Tolerant, meaning it can only tolerate up to a 1/3 of failures,
but those failures can include arbitrary behvaiour - including hacking and malicious attacks.</li>
<li>It does not specify a particular application, like a fancy key-value store. Instead,
it focuses on arbitrary state machine replication, so developers can build the application logic
that&#x2019;s right for them, from key-value store to cryptocurrency to e-voting platform and beyond.</li>
</ul>
<p>The layout of this Tendermint website content is also ripped directly and without shame from
<a href=https://www.consul.io/ >consul.io</a> and the other <a href=https://www.hashicorp.com/#tools>Hashicorp sites</a>.</p>
<h2>Bitcoin, Ethereum, etc.</h2>
<p>Tendermint emerged in the tradition of cryptocurrencies like Bitcoin, Ethereum, etc.
with the goal of providing a more efficient and secure consensus algorithm than Bitcoin&#x2019;s Proof of Work.
In the early days, Tendermint had a simple currency built in, and to participate in consensus
user&#x2019;s had to &#x201C;bond&#x201D; units of the currency into a security deposit which could be revoked if they misbehaved -
this is what made Tendermint a Proof-of-Stake algorithm.</p>
<p>Since then, Tendermint has evolved to be a general purpose blockchain consensus engine that can host arbitrary application states.
That means it can be used as a plug-and-play replacement for the consensus engines of other blockchain software.
So one can take the current Ethereum code base, whether in Rust, or Go, or Haskell, and run it as a ABCI application
using Tendermint consensus. Indeed, <a href=https://github.com/tendermint/geth-abci>we did that</a>.
And we plan to do the same for Bitcoin, ZCash, and various other deterministic applications as well.</p>
<p>Another example of a cryptocurrency application built on Tendermint is <a href=http://cosmos.network>Cosmos</a></p>
<h2>Hyperledger, ErisDB</h2>
<p><a href=https://github.com/hyperledger/fabric>Hyperledger</a>, takes a similar approach to Tendermint, but is more opinionated about how the state is managed,
and requires that all application behaviour runs in potentially many docker containers, modules it calls &#x201C;chaincode&#x201D;.
It uses an implementation of <a href=http://pmg.csail.mit.edu/papers/osdi99.pdf>PBFT</a>
from a team at IBM that is
<a href=https://www.zurich.ibm.com/~cca/papers/sieve.pdf>augmented to handle potentially non-deterministic chaincode</a>
It is possible to implement this docker-based behaviour as a ABCI app in Tendermint,
though extending Tendermint to handle non-determinism remains for future work.</p>
<p><a href=https://github.com/eris-ltd/eris-db>ErisDB</a> is an implementation of the Ethereum Virtual Machine and Ethereum transaction mechanics,
with additional features for a name-registry, permissions, and native contracts, and an alternative blockchain API.
It uses Tendermint as its consensus engine, and provides a particular application state.</p>
<h2>Next Steps</h2>
<ul>
<li>Read an overview of the motivation and design behind the <router-link to=/intro/abci-overview>Tendermint Socket Protocol</router-link>.</li>
<li>Continue with the <router-link to=/intro/getting-started/install>Getting Started</router-link> guide to install and run example tendermint applications.</li>
</ul>
</div></template>