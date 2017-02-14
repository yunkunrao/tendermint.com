# Block Structure

The tendermint consensus engine records all agreements by a supermajority of
nodes into a blockchain, which is replicated among all node.  This blockchain
is accessible via various rpc endpoint, mainly `/block?height=` to get the full
block, as well as `/blockchain?minHeight=_&maxHeight=_` to get a list of headers.
But what exactly is stored in these blocks?

### Block

A [Block](./tendermint-types.md#Block) contains:

* a [Header](#header), which contains merkle hashes for various chain state
* the [Data](./tendermint-types.md#Data), which is all transactions which are to be processed, and
* the [LastCommit](#commit) > 2/3 signatures for the last block

The first thing we notice here is that the signatures returned along with block `H`,
are those validating block `H-1`.  This can be a little confusing, but we must also
consider that the [Header](./tendermint-types.md#Header) also contains the `LastCommitHash`.
It would be impossible for the Header to maintain the hash for the commits that
were signing the same Header (infinite loop here). But when we get block `H`, we
find `Header.LastCommitHash`, which must match the hash of `LastCommit`.

### Header

The [Header](./tendermint-types.md#Header) contains lots of information (the link
has the up-to-date info).  Notably, it maintains a the `Height`, the `LastBlockID`
(to make it a chain), and hashes of the data, the app state, and the validator set.
This is important, as the only item that is signed by the validators is the `Header`,
and all other data must be validated against one of the merkle hashes in the `Header`.

The `DataHash` can provide a nice check on the [Data](./tendermint-types.md#Data)
returned in this same block. If you streaming blocks and reacting on the data,
you should at least validate the `DataHash` in valid, if not waiting for the
`LastCommit` from the next block to make sure it was properly signed.

The `ValidatorHash` contains a hash of the current
[Validators](./tendermint-types.md#Validator). Tracking all changes in the
validator set is a complex theme, but a client can quickly compare this hash
with the [hash of the currently known validators](./tendermint-types.md#ValidatorSet.Hash)
to see if there have been changes.

Most interesting to most clients is the `AppHash`, as this serves as the basis for
validating any merkle proofs that come from the [ABCI application](https://github.com/tendermint/abci),
and represents the state of the actual application, rather that the state of the
blockchain itself. This makes it key to perform any business logic, such as
verifying and account balance.

**Note** The `AppHash` returned for the header at height `H` is the root hash of
the merkle tree maintaining the state after all transactions from block `H-1`
are applied.  Like the `LastCommit` issue, this is a requirement of the
immutability of the block chain, as the application only applies transactions
*after* they are commited to the chain, recording the results in the next block.

### Commit

The [Commit](./tendermint-types.md#Commit) contains a set of
[Votes](./tendermint-types.md#Vote) that were made by the validator set to
reach consensus on this block. This is the key to the security in any PoS
system, and actually no data that cannot be traced back to a block header
with a valid set of Votes can be trusted. Thus, getting the Commit data
and verifying the votes is extremely important.

As mentioned above, in order to find the `precommit votes` for block header `H`,
we need to query block `H+1`.  Then we need to check the votes, make sure they
really are for that block, and properly formatted. Much of this code is implemented
in go in the [light-client](https://github.com/tendermint/light-client) package,
especially [Node.SignedHeader](https://github.com/tendermint/light-client/blob/develop/rpc/node.go#L117).
If you look at the code, you will notice that we need to provide the `chainID`
of the blockchain in order to properly calculate the votes.  This is to protect
anyone from swapping votes between chains to fake (or frame) a validator.
Also note that this `chainID` is in the `config.toml` from the tendermint app,
not the `genesis.json` from the basecoin app (that is a different chainID...).

Once we have those votes, and checked they are all pointing to the same block,
and we calculated the proper [sign bytes](./tendermint-types.md#Vote.WriteSignBytes)
using the chainID and a [nice helper function](./tendermint-types.md#SignBytes),
we can verify them.  The light client is responsible for maintaining a set of
validators that we trust.  Each vote only stores the validators `Address`, as well
as the `Signature`. Assuming we have a local copy of the trusted validator set,
we can look up the `Public Key` of the validator given its `Address`, then
verify that the `Signature` matches the `SignBytes` and `Public Key`.
Then we sum up the total voting power of all validators, whose votes fulfilled
all these stringent requirements. If the total number of valid votes is greater
than 2/3 of the total of all validator votes, then we can finally trust the
block header, the AppHash, and the proof we got from the ABCI application.

To make this a bit more concrete, you can take a look at a
[StaticCertifier](https://github.com/tendermint/light-client/blob/develop/rpc/certifier.go#L23)
to see how this logic works, given a static set of validators. And you can see
an example of how one can perform the entire chain of validation in the
proxy server [proof call](https://github.com/tendermint/light-client/blob/develop/proxy/viewer.go#L61)
or the [test code for auditing](https://github.com/tendermint/light-client/blob/develop/rpc/tests/node_test.go#L102).

#### Vote Sign Bytes
The `sign-bytes` of a vote is produced by taking a [`stable-json`](https://github.com/substack/json-stable-stringify)-like deterministic JSON [`wire`](/docs/internals/wire-protocol) encoding of the vote (excluding the `Signature` field), and wrapping it with `{"chain_id":"tendermint","vote":...}`.

For example, a precommit vote might have the following `sign-bytes`:

```json
{"chain_id":"tendermint","vote":{"block_hash":"611801F57B4CE378DF1A3FFF1216656E89209A99","block_parts_header":{"hash":"B46697379DBE0774CC2C3B656083F07CA7E0F9CE","total":123},"height":1234,"round":1,"type":2}}
```

### Block Hash

The [block hash](./tendermint-types.md#Block.Hash) is the [Simple Tree hash](Merkle-Trees#simple-tree-with-dictionaries) of the fields of the block `Header` encoded as a list of `KVPair`s.

### Transaction

A transaction is any sequence of bytes.  It is up to your [ABCI](https://github.com/tendermint/abci) application to accept or reject transactions.

### BlockID

Many of these data structures refer to the [BlockID](./tendermint-types.md#BlockID),
which is the `BlockHash` (hash of the block header, also referred to by the next block)
along with the `PartSet`.  The `PartSet` is explained below and is used internally
to orchestrate the p2p propogation.  For clients, it is basically opaque bytes,
but they must match for all votes.

### PartSet

PartSet is used to split a byteslice of data into parts (pieces) for transmission.
By splitting data into smaller parts and computing a Merkle root hash on the list,
you can verify that a part is legitimately part of the complete data, and the
part can be forwarded to other peers before all the parts are known.  In short,
it's a fast way to propagate a large file over a gossip network.

PartSet was inspired by the LibSwift project.

Usage:

```Go
data := RandBytes(2 << 20) // Something large

partSet := NewPartSetFromData(data)
partSet.Total()     // Total number of 4KB parts
partSet.Count()     // Equal to the Total, since we already have all the parts
partSet.Hash()      // The Merkle root hash
partSet.BitArray()  // A BitArray of partSet.Total() 1's

header := partSet.Header() // Send this to the peer
header.Total        // Total number of parts
header.Hash         // The merkle root hash

// Now we'll reconstruct the data from the parts
partSet2 := NewPartSetFromHeader(header)
partSet2.Total()    // Same total as partSet.Total()
partSet2.Count()    // Zero, since this PartSet doesn't have any parts yet.
partSet2.Hash()     // Same hash as in partSet.Hash()
partSet2.BitArray() // A BitArray of partSet.Total() 0's

// In a gossip network the parts would arrive in arbitrary order, perhaps
// in response to explicit requests for parts, or optimistically in response
// to the receiving peer's partSet.BitArray().
for !partSet2.IsComplete() {
    part := receivePartFromGossipNetwork()
    added, err := partSet2.AddPart(part)
    if err != nil {
		// A wrong part,
        // the merkle trail does not hash to partSet2.Hash()
    } else if !added {
        // A duplicate part already received
    }
}

data2, _ := ioutil.ReadAll(partSet2.GetReader())
bytes.Equal(data, data2) // true
```
