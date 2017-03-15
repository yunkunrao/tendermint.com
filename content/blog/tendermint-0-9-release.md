~~~
title: "Tendermint 0.9 Release"
description: "Tendermint 0.9.0 makes some important changes to facilitate building and querying applications"
date: "2017-03-15"
author: "Ethan Buchman"
~~~

> *Credits to our [team](/about),
> and [community](http://forum.tendermint.com:3000/) for the hard work in making this
> release possible.*

Tendermint 0.9.0 is the result of the last couple months of work, 
wherein we devoted significant effort to building out an 
[actual, useable, cryptocurrency application](https://github.com/tendermint/basecoin) on Tendermint.
Doing so required some modifications to ABCI to enable more informative queries,
and an additional RPC endpoint for easily fetching commit signatures.
The hard work paid off - we can now do light-client verification of the latest state of a Tendermint blockchain.
We even demonstrated how this could be used to do [InterBlockchain Communication](https://github.com/tendermint/basecoin/blob/master/docs/guide/ibc.md)!

Get the latest release at [our downloads page](/intro/getting-started/download-tendermint).
See the [v0.9.0 release
notes](https://github.com/tendermint/tendermint/blob/master/CHANGELOG.md#090-march-6-2017) for more
details.

**ABCI: Query takes more arguments and returns more results**

The `Query` message in ABCI has been updated to take additional arguments, and return additional values.
First, the new request type allows us to specify the height we want to query from, though loading old states is not implemented yet. 
Second, while before a query request was just arbitrary bytes, we now break up the query bytes into `path` and `data` components for better standardization. 
Finally, a `prove` flag allows callers to specify whether or not they would like a Merkle proof for the result of the query.
The new response type includes the same `code` and `log` we are used to, but renames `data` to `value` and includes the `key` used for lookup and the `index` of this key within the tree. It also includes a `proof`, if it was requested, and the `height` that the query was taken at. These features make queries much more manageable, and facilitate producing proofs for light-clients!

```
message RequestQuery{
	bytes data = 1;
	string path = 2;
	uint64 height = 3;
	bool prove = 4; 
}

message ResponseQuery{
	CodeType          code        = 1;
	int64             index       = 2;
	bytes             key         = 3;
	bytes             value       = 4;
	bytes             proof       = 5;
	uint64            height      = 6;
	string            log         = 7;
}
```


**RPC: New `/commit` endpoint**

A secure light-client in Tendermint needs to verify not only a Merkle proof, but also that the root of the corresponding Merkle tree was signed by more than 2/3 of a validator set they know about. Since validator signatures for block `H` are collected in the `LastCommit` field of block `H+1`, we added a `/commit` RPC endpoint to simplify fetching the commit data for block `H`. The new endpoint takes a height as an argument and returns both the header and commit signatures for that height. A secure light client will verify that at least 2/3 of these signatures are from known active validators, that they are valid signatures of the block header, and that the header contains the relevant Merkle root.

**Basecoin**

This release was all about getting things ready for a real and useable [Basecoin](https://github.com/tendermint/basecoin).
If you're not familiar, Basecoin is our framework for building cryptocurrency applications on Tendermint,
which we plan to use to build out the [Cosmos Hub](https://cosmos.network) and other blockchains in the Cosmos Network.
It's an ABCI app that has some built in cryptocurrency functionality, and can be easily extended by plugins implemented in Go, without forking the repository.
We have a series of example plugins in our [Basecoin examples repository](https://github.com/tendermint/basecoin-examples).
With this release of Tendermint, we are announcing our first official release of Basecoin, v0.3.0.
Checkout the [basecoin guide](https://github.com/tendermint/basecoin/blob/master/docs/guide/basecoin-basics.md) to get started!

One of the most important features of the Cosmos Network is InterBlockchain Communication (IBC), 
which enables different blockchains to send data back and forth.
This works by having the two blockchains act as light-clients of one another. 
We implemented this functionality as a plugin in Basecoin, and it is available now!
Check out the [IBC guide](https://github.com/tendermint/basecoin/blob/master/docs/guide/ibc.md) to demo it today!

**Other improvements**

Included in this release were various other improvements to Tendermint.
Notably, we make it easier to start Tendermint in-process with other applications,
and we made a variety of improvements on the automation and code maintenance front.
We also fixed some bugs, in particular in keeping Tendermint and its ABCI application in-sync after a restart.
We also discovered and fixed a subtle bug in Tendermint's proposer selection logic.
For more details about these and other changes, see [the changelog!](https://github.com/tendermint/tendermint/blob/master/CHANGELOG.md#090-march-6-2017).

**Tendermint Roadmap**

Here are some of the items up next on our stack:

* Update ABCI to include vote information (e.g. evidence of double-signing)
* Implement transaction indexing and querying
* Update the Tendermint block header for more secure validator set changes and transaction result queries
* Secure the RPC server

We've also added an [official roadmap to the website](/docs/roadmap),
and of course you can keep up with us via [our GitHub issues](https://github.com/tendermint/tendermint/issues), 
by following us on [Twitter](http://twitter.com/tendermint_team), or by asking us questions directly on
[our Slack](http://forum.tendermint.com:3000/).

Cheers!
