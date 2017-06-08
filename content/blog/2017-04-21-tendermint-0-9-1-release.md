~~~
title: "Tendermint 0.9.1 Release"
description: "Tendermint 0.9.1 fixes a few bugs and introduces transaction indexing"
date: "2017-04-21"
author: "Ethan Buchman"
~~~

> *Credits to our [team](/about),
> and [community](http://forum.tendermint.com:3000/) for the hard work in making this
> release possible.*

The main purpose of Tendermint 0.9.1 is to introduce a long sought feature, transaction indexing.
Until now, it has been difficult to track the result of a transaction, or even to know if it was committed,
unless you were online and subscribed to events via websockets.
Now, we make that easy, with a new rpc endpoint, `/tx?hash=X`.
We also fixed a few bugs in fast sync mode and in the handshake, and upgraded the Command Line Interface
to use the phenomenal `github.com/spf13/cobra` library.

Get the latest release at [our downloads page](/download).
See the [v0.9.1 release
notes](https://github.com/tendermint/tendermint/blob/master/CHANGELOG.md#091-april-18-2017) for more details.

**Tx Indexing**

A blockchain is just a simple list of blocks, where every block contains a list of transactions.
For storage, each block is serialized and stored under its height within a LevelDB database.
Most blockchain software may actually store blocks under their hash, rather than height, 
as there may be multiple blocks for a given height. However, since Tendermint never forks,
we have a unique block for every height and can use this simpler index. 

Finding a transaction under this kind of storage is difficult, since you have to scan through full blocks.
Thus, in the latest release, we index every transaction by its hash, enabling fast queries without having to 
load any blocks. We also store some other data with the transaction: result of processing it (ie. the Code and Data returned by DeliverTx),
the height of the block it was committed in, and the index of the transaction in that block.
Note that the transaction is stored on disk twice: once in the block, and once under the transaction index.

**Fast Sync and Handshake Fixes**

A Tendermint node that has fallen behind its peers has a number of ways to catch up.
Peers that are many blocks behind can use the `fast_sync` option (enabled by default)
to quickly download and verify blocks, without going through any of the expensive consensus protocol 
steps. In this mode, peers are polled for their latest height, and the node starts requesting blocks
from many peers in parallel. If a peer suddenly goes offline, the node must request any blocks that 
peer was supposed to provide from new peers. In this release, we fixed a bug that was not properly accounting
for these new requests when a peer went offline, causing the downloads to halt all together in some cases.

Another important syncing mechanism in Tendermint is the ABCI handshake, introduced in 0.8.0, 
which allows Tendermint to recover from crashing in the middle of processing a block through the ABCI app.
During the handshake, Tendermint sends the Info message to the ABCI app, which responds with the latest block
it has processed. Tendermint can then replay any blocks it has in its store that the app has not processed yet.
There is one particular crash scenario that is more subtle: the app has finished processing a block,
but Tendermint crashes before saving its state. In this scenario, Tendermint cannot replay the block
(since that would confuse the app), but it needs to get the results from processing it, otherwise it would lose
that data, which could contain critical information like validator set changes. This is fixed in the latest release
by saving the results of processing a block before calling Commit, reloading those results if necessary upon a crash/restart.

**New CLI**

Until now, Tendermint's command line interface has been implemented very simply, without using any framework.
This made it somewhat annoying to maintain, as we had to keep track of things that can be done for us by many libraries.
In this release, we ported the CLI to use the [Cobra library](https://github.com/spf13/cobra), which is quite popular in the Go community
and provides many wonderful features. Fortunately, we could make this change without breaking backwards compatibility.

**Up Next**

Next up for us is the grand repo merge! We currently have many little repositories, and even some big ones,
and co-ordinating across all of them has become painful. So we will be doing a massive consolidation.
All the little libraries will be centralized under `github.com/tendermint/tmlibs`, including `go-common`,
which will have its new home under `tmlibs/common`. Our encoding and crypto libraries, `go-wire` and `go-crypto`,
will remain independent. Our Merkle tree implementations will be moved into other libraries, with the simple Merkle tree
going in `tmlibs/merkle` and the IAVL tree moving under `merkleeyes/iavl`. Finally, our p2p and rpc libraries, `go-p2p` and `go-rpc`,
will be merged into Tendermint Core.

Included in the repo merge are some changes to the way we handle JSON, bringing it inline with standard Go libraries.
This will cause breaking changes, for instance to the `genesis.json` file, so we will be releasing all of this together as version 0.10.0.


Cheers!
