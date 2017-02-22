<template>
  <div><h1 id=block-structure>Block Structure</h1>
<p>The tendermint consensus engine records all agreements by a supermajority of
nodes into a blockchain, which is replicated among all nodes.  This blockchain
is accessible via various rpc endpoints, mainly <code>/block?height=</code> to get the full
block, as well as <code>/blockchain?minHeight=_&amp;maxHeight=_</code> to get a list of headers.
But what exactly is stored in these blocks?</p>
<h3 id=block>Block</h3>
<p>A <router-link to=/docs/internals/tendermint-types#Block>Block</router-link> contains:</p>
<ul>
<li>a <a href=#header>Header</a> contains merkle hashes for various chain states</li>
<li>the [Data]((/docs/internals/tendermint-types#Data) is all transactions which are to be processed</li>
<li>the <a href=#commit>LastCommit</a> &gt; 2/3 signatures for the last block</li>
</ul>
<p>The signatures returned along with block <code>H</code> are those validating block <code>H-1</code>.
This can be a little confusing, but we must also consider that the
<router-link to=/docs/internals/tendermint-types#Header>Header</router-link> also contains the <code>LastCommitHash</code>.
It would be impossible for a Header to include the commits that sign it, as it
would cause an infinite loop here. But when we get block <code>H</code>, we find
<code>Header.LastCommitHash</code>, which must match the hash of <code>LastCommit</code>.</p>
<h3 id=header>Header</h3>
<p>The <router-link to=/docs/internals/tendermint-types#Header>Header</router-link> contains lots of information (follow
link for up-to-date info).  Notably, it maintains the <code>Height</code>, the <code>LastBlockID</code>
(to make it a chain), and hashes of the data, the app state, and the validator set.
This is important as the only item that is signed by the validators is the <code>Header</code>,
and all other data must be validated against one of the merkle hashes in the <code>Header</code>.</p>
<p>The <code>DataHash</code> can provide a nice check on the <router-link to=/docs/internals/tendermint-types#Data>Data</router-link>
returned in this same block. If you are subscribed to new blocks, via tendermint RPC, in order to display or process the new transactions
you should at least validate that the <code>DataHash</code> is valid.
If it is important to verify autheniticity, you must wait for the <code>LastCommit</code> from the next block to make sure the block header (including <code>DataHash</code>) was properly signed.</p>
<p>The <code>ValidatorHash</code> contains a hash of the current
<router-link to=/docs/internals/tendermint-types#Validator>Validators</router-link>. Tracking all changes in the
validator set is complex, but a client can quickly compare this hash
with the <router-link to=/docs/internals/tendermint-types#ValidatorSet.Hash>hash of the currently known validators</router-link>
to see if there have been changes.</p>
<p>The <code>AppHash</code> serves as the basis for validating any merkle proofs that come
from the <a href=https://github.com/tendermint/abci>ABCI application</a>. It represents
the state of the actual application, rather that the state of the blockchain
itself. This means it&#x2019;s necessary in order to perform any business logic,
such as verifying and account balance.</p>
<p><strong>Note</strong> After the transactions are committed to a block, they still need to
be processed in a separate step, which happens between the blocks. If you
find a given transaction in the block at height <code>H</code>, the effects of running
that transaction will be first visible in the <code>AppHash</code> from the block
header at height <code>H+1</code>.</p>
<p>Like the <code>LastCommit</code> issue, this is a requirement of the
immutability of the block chain, as the application only applies transactions
<em>after</em> they are commited to the chain.</p>
<h3 id=commit>Commit</h3>
<p>The <router-link to=/docs/internals/tendermint-types#Commit>Commit</router-link> contains a set of
<router-link to=/docs/internals/tendermint-types#Vote>Votes</router-link> that were made by the validator set to
reach consensus on this block. This is the key to the security in any PoS
system, and actually no data that cannot be traced back to a block header
with a valid set of Votes can be trusted. Thus, getting the Commit data
and verifying the votes is extremely important.</p>
<p>As mentioned above, in order to find the <code>precommit votes</code> for block header <code>H</code>,
we need to query block <code>H+1</code>.  Then we need to check the votes, make sure they
really are for that block, and properly formatted. Much of this code is implemented
in Go in the <a href=https://github.com/tendermint/light-client>light-client</a> package,
especially <a href=https://github.com/tendermint/light-client/blob/develop/rpc/node.go#L117>Node.SignedHeader</a>.
If you look at the code, you will notice that we need to provide the <code>chainID</code>
of the blockchain in order to properly calculate the votes.  This is to protect
anyone from swapping votes between chains to fake (or frame) a validator.
Also note that this <code>chainID</code> is in the <code>genesis.json</code> from <em>Tendermint</em>,
not the <code>genesis.json</code> from the basecoin app (<a href=https://github.com/tendermint/basecoin/issues/32>that is a different chainID&#x2026;</a>).</p>
<p>Once we have those votes,
and we calculated the proper <router-link to=/docs/internals/tendermint-types#Vote.WriteSignBytes>sign bytes</router-link>
using the chainID and a <router-link to=/docs/internals/tendermint-types#SignBytes>nice helper function</router-link>,
we can verify them.  The light client is responsible for maintaining a set of
validators that we trust.  Each vote only stores the validators <code>Address</code>, as well
as the <code>Signature</code>. Assuming we have a local copy of the trusted validator set,
we can look up the <code>Public Key</code> of the validator given its <code>Address</code>, then
verify that the <code>Signature</code> matches the <code>SignBytes</code> and <code>Public Key</code>.
Then we sum up the total voting power of all validators, whose votes fulfilled
all these stringent requirements. If the total number of voting power for a single block is greater
than 2/3 of all voting power, then we can finally trust the
block header, the AppHash, and the proof we got from the ABCI application.</p>
<p>To make this a bit more concrete, you can take a look at a
<a href=https://github.com/tendermint/light-client/blob/develop/rpc/certifier.go#L23>StaticCertifier</a>
to see how this logic works, given a static set of validators. And you can see
an example of how one can perform the entire chain of validation in the
proxy server <a href=https://github.com/tendermint/light-client/blob/develop/proxy/viewer.go#L61>proof call</a>
or the <a href=https://github.com/tendermint/light-client/blob/develop/rpc/tests/node_test.go#L102>test code for auditing</a>.</p>
<h4 id=vote-sign-bytes>Vote Sign Bytes</h4>
<p>The <code>sign-bytes</code> of a vote is produced by taking a <a href=https://github.com/substack/json-stable-stringify><code>stable-json</code></a>-like deterministic JSON <router-link to=/docs/internals/wire-protocol><code>wire</code></router-link> encoding of the vote (excluding the <code>Signature</code> field), and wrapping it with <code>{&quot;chain_id&quot;:&quot;my_chain&quot;,&quot;vote&quot;:...}</code>.</p>
<p>For example, a precommit vote might have the following <code>sign-bytes</code>:</p>
<pre><code class=language-json>{&quot;chain_id&quot;:&quot;my_chain&quot;,&quot;vote&quot;:{&quot;block_hash&quot;:&quot;611801F57B4CE378DF1A3FFF1216656E89209A99&quot;,&quot;block_parts_header&quot;:{&quot;hash&quot;:&quot;B46697379DBE0774CC2C3B656083F07CA7E0F9CE&quot;,&quot;total&quot;:123},&quot;height&quot;:1234,&quot;round&quot;:1,&quot;type&quot;:2}}
</code></pre>
<h3 id=block-hash>Block Hash</h3>
<p>The <router-link to=/docs/internals/tendermint-types#Block.Hash>block hash</router-link> is the <a href=Merkle-Trees#simple-tree-with-dictionaries>Simple Tree hash</a> of the fields of the block <code>Header</code> encoded as a list of <code>KVPair</code>s.</p>
<h3 id=transaction>Transaction</h3>
<p>A transaction is any sequence of bytes.  It is up to your <a href=https://github.com/tendermint/abci>ABCI</a> application to accept or reject transactions.</p>
<h3 id=blockid>BlockID</h3>
<p>Many of these data structures refer to the <router-link to=/docs/internals/tendermint-types#BlockID>BlockID</router-link>,
which is the <code>BlockHash</code> (hash of the block header, also referred to by the next block)
along with the <code>PartSetHeader</code>.  The <code>PartSetHeader</code> is explained below and is used internally
to orchestrate the p2p propogation.  For clients, it is basically opaque bytes,
but they must match for all votes.</p>
<h3 id=partsetheader>PartSetHeader</h3>
<p>The <router-link to=/docs/internals/tendermint-types#PartSetHeader>PartSetHeader</router-link> contains the total number of pieces in a <router-link to=/docs/internals/tendermint-types#PartSet>PartSet</router-link>, and the Merkle root hash of those pieces.</p>
<h3 id=partset>PartSet</h3>
<p>PartSet is used to split a byteslice of data into parts (pieces) for transmission.
By splitting data into smaller parts and computing a Merkle root hash on the list,
you can verify that a part is legitimately part of the complete data, and the
part can be forwarded to other peers before all the parts are known.  In short,
it&#x2019;s a fast way to securely propagate a large chunk of data (like a block) over a gossip network.</p>
<p>PartSet was inspired by the LibSwift project.</p>
<p>Usage:</p>
<pre><code class=language-Go>data := RandBytes(2 &lt;&lt; 20) // Something large

partSet := NewPartSetFromData(data)
partSet.Total()     // Total number of 4KB parts
partSet.Count()     // Equal to the Total, since we already have all the parts
partSet.Hash()      // The Merkle root hash
partSet.BitArray()  // A BitArray of partSet.Total() 1&apos;s

header := partSet.Header() // Send this to the peer
header.Total        // Total number of parts
header.Hash         // The merkle root hash

// Now we&apos;ll reconstruct the data from the parts
partSet2 := NewPartSetFromHeader(header)
partSet2.Total()    // Same total as partSet.Total()
partSet2.Count()    // Zero, since this PartSet doesn&apos;t have any parts yet.
partSet2.Hash()     // Same hash as in partSet.Hash()
partSet2.BitArray() // A BitArray of partSet.Total() 0&apos;s

// In a gossip network the parts would arrive in arbitrary order, perhaps
// in response to explicit requests for parts, or optimistically in response
// to the receiving peer&apos;s partSet.BitArray().
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
</code></pre>
</div>
</template>

<script>
export default {
  name: 'page-docs-entry',
  mounted () {
    document.title = 'Block Structure - Documentation - Tendermint'
  }
}
</script>
