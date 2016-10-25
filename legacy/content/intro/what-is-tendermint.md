# Introduction to Tendermint

Welcome to the Tendermint guide!  This is the best place to start if you're new
to Tendermint.  If you're already familiar with the basics of Tendermint and
TMSP, find more details in the [documentation](documentation).

# What is Tendermint?

Tendermint is a high-performance blockchain consensus engine that enables you to
run Byzantine fault tolerant applications, written in any programming language,
on many machines spread across the globe.
Unlike most blockchains or consensus solutions, which utilize opinionated 
key-value stores, scripting languages, or development environments, Tendermint makes no assumptions about the
application state, giving developers the utmost freedom to express their business
logic using the tools right for them. This makes it possible to use any
programming language, and even to integrate with existing codebases like
Bitcoind, go-ethereum, consul, etcd, or otherwise.

To achieve this flexibility, Tendermint and the application it powers run in
separate UNIX processes, and speak to each other via a simple messaging protocol
called the Tendermint Socket Protocol, or TMSP. Tendermint takes an application
conforming to the TMSP interface and replicates it on many machines,
ensuring that transactions are run in the same order on each machine.

In addition to flexibility for application developers, the main benefits of
using Tendermint (as opposed to using Proof-of-Work systems or other BFT
consensus engines), are those derrived from the [Tendermint consensus
algorithm](Byzantine-Consensus-Algorithm):

* __simplicity__: Tendermint consensus commits blocks continuously commits
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

* __scalability__: Unlike PoW, running parallel blockchains does not diminish the speed or
security of each chain, so it is possible to shard the application state and
achieve greater horizontal scalability. 
The algorithm can also scale to hundreds or thousands of validators (depending on desired block times), and
will only get better over time with advances in bandwidth and cpu capacity.

# Next Steps

- See how [tendermint compares to other software](tendermint-vs)
- Continue with the [getting started guide](getting-started) to install and run example tendermint applications
