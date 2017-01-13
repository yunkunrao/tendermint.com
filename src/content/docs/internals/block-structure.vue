<template><div><h1>Block Structure</h1>
<h3>Block</h3>
<p>A <code>Block</code> is composed of:</p>
<ul>
<li><a href=#header><code>Header</code></a>: basic information about the chain and last state</li>
<li><a href=#data><code>Data</code></a>: transactions and other data</li>
<li><a href=#commit><code>LastCommit</code></a>: +2/3 precommit signatures for the previous block</li>
</ul>
<h3>Header</h3>
<p>The block <code>Header</code> is composed of:</p>
<ul>
<li><code>ChainId (string)</code>: name of the blockchain, e.g. &#x201C;tendermint&#x201D;</li>
<li><code>Height (int)</code>: sequential block number starting with 1</li>
<li><code>Time (time)</code>: local time of the proposer who proposed this block</li>
<li><code>LastBlockHash ([]byte)</code>: <a href=#block-hash><code>block hash</code></a> of the previous block at height <code>Height-1</code></li>
<li><code>LastBlockParts (PartSetHeader)</code>: <a href=#partset-header><code>partset header</code></a> of the previous block</li>
<li><code>StateHash ([]byte)</code>: <a href=#state-hash><code>state hash</code></a> of the state after processing this block</li>
</ul>
<h3>Data</h3>
<p>The block <code>Data</code> is composed of:</p>
<ul>
<li><code>Txs ([]Tx)</code>: a list of <a href=#transaction><code>transactions</code></a></li>
</ul>
<h3>Commit</h3>
<p>The block <code>Commit</code> is composed of:</p>
<ul>
<li><code>Precommits ([]Vote)</code>: a list of <a href=#vote><code>precommit votes</code></a></li>
</ul>
<h3>Vote</h3>
<p>A <code>Vote</code> is composed of:</p>
<ul>
<li><code>Height (int)</code>: The block height being decided on</li>
<li><code>Round (int)</code>: The consensus round number, starting with 0</li>
<li><code>Type (byte)</code>: The type of vote, either a <code>prevote</code> or a <code>precommit</code></li>
<li><code>BlockHash ([]byte)</code>: The <a href=#block-hash><code>block hash</code></a> of a valid block, or <code>nil</code></li>
<li><code>BlockParts (PartSetHeader)</code>: The corresponding <a href=#partset-header><code>partset header</code></a>, or <code>x0000</code> if the <code>block hash</code> is <code>nil</code></li>
<li><code>Signature (Signature)</code>: The signature of this <code>Vote</code>&apos;s <a href=#vote-sign-bytes><code>sign-bytes</code></a></li>
</ul>
<h4>Vote Sign Bytes</h4>
<p>The <code>sign-bytes</code> of a transaction is produced by taking a <a href=https://github.com/substack/json-stable-stringify><code>stable-json</code></a>-like deterministic JSON <router-link to=/docs/internals/wire-protocol><code>wire</code></router-link> encoding of the vote (excluding the <code>Signature</code> field), and wrapping it with <code>{&quot;chain_id&quot;:&quot;tendermint&quot;,&quot;vote&quot;:...}</code>.</p>
<p>For example, a precommit vote might have the following <code>sign-bytes</code>:</p>
<pre><code class=language-json>{&quot;chain_id&quot;:&quot;tendermint&quot;,&quot;vote&quot;:{&quot;block_hash&quot;:&quot;611801F57B4CE378DF1A3FFF1216656E89209A99&quot;,&quot;block_parts_header&quot;:{&quot;hash&quot;:&quot;B46697379DBE0774CC2C3B656083F07CA7E0F9CE&quot;,&quot;total&quot;:123},&quot;height&quot;:1234,&quot;round&quot;:1,&quot;type&quot;:2}}
</code></pre>
<h3>Block Hash</h3>
<p>The block hash is the <a href=Merkle-Trees#simple-tree-with-dictionaries>Simple Tree hash</a> of the fields of the block <code>Header</code> encoded as a list of <code>KVPair</code>s.</p>
<h3>State Hash</h3>
<p>The state hash is the <a href=Merkle-Trees#simple-tree-with-dictionaries>Simple Tree hash</a> of the state&#x2019;s fields (e.g. <code>BondedValidators</code>, <code>UnbondingValidators</code>, <code>Accounts</code>, <code>ValidatorInfos</code>, and <code>NameRegistry</code>) encoded as a list of <code>KVPair</code>s.  This state hash is recursively included in the block <code>Header</code> and thus the <a href=#block-hash>block hash</a> indirectly.</p>
<h3>Transaction</h3>
<p>A transaction is any sequence of bytes.  It is up to your <a href=https://github.com/tendermint/abci>ABCI</a> application to accept or reject transactions.</p>
<h3>PartSet</h3>
<p>PartSet is used to split a byteslice of data into parts (pieces) for transmission.
By splitting data into smaller parts and computing a Merkle root hash on the list,
you can verify that a part is legitimately part of the complete data, and the
part can be forwarded to other peers before all the parts are known.  In short,
it&#x2019;s a fast way to propagate a large file over a gossip network.</p>
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
</div></template>