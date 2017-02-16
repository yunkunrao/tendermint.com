<template><div><h1>Application Development Guide</h1>
<h2>ABCI Design</h2>
<p>The purpose of ABCI is to provide a clean interface between state transition machines on one computer and the mechanics of their replication across multiple computers. The former we call &#x2018;application logic&#x2019; and the latter the &#x2018;consensus engine&#x2019;. Application logic validates transactions and optionally executes transactions against some persistent state. A consensus engine ensures all transactions are replicated in the same order on every machine. We call each machine in a consensus engine a &#x2018;validator&#x2019;, and each validator runs the same transactions through the same application logic. In particular, we are interested in blockchain-style consensus engines, where transactions are committed in hash-linked blocks.</p>
<p>The ABCI design has a few distinct components:</p>
<ul>
<li>message protocol
<ul>
<li>pairs of request and response messages</li>
<li>consensus makes requests, application responds</li>
<li>defined using protobuf</li>
</ul>
</li>
<li>server/client
<ul>
<li>consensus engine runs the client</li>
<li>application runs the server</li>
<li>two implementations:
<ul>
<li>async raw bytes</li>
<li>grpc</li>
</ul>
</li>
</ul>
</li>
<li>blockchain protocol
<ul>
<li>abci is connection oriented</li>
<li>Tendermint Core maintains three connections:
<ul>
<li><a href=#mempool-connection>mempool connection</a>: for checking if transactions should be relayed before they are committed. only uses <code>CheckTx</code></li>
<li><a href=#consensus-connection>consensus connection</a>: for executing transactions that have been committed. Message sequence is, for every block, <code>BeginBlock, [DeliverTx, ...], EndBlock, Commit</code></li>
<li><a href=#query-connection>query connection</a>: for querying the application state.  only uses Query and Info</li>
</ul>
</li>
</ul>
</li>
</ul>
<img src=https://github.com/ebuchman/thesis/raw/master/figures/diagrams/abci.png width=600>
<p>The mempool and consensus logic act as clients, and each maintains an open ABCI connection with the application, which hosts a ABCI server. Shown are the request and response types sent on each connection.</p>
<h2>Message Protocol</h2>
<p>The message protocol consists of pairs of requests and responses. Some messages have no fields, while others may include byte-arrays, strings, or integers. See the <code>message Request</code> and <code>message Response</code> definitions in <a href=https://github.com/tendermint/abci/blob/master/types/types.proto>the protobuf definition file</a>, and the <a href=https://developers.google.com/protocol-buffers/docs/overview>protobuf documentation</a> for more details.</p>
<p>For each request, a server should respond with the corresponding response, where order of requests is preserved in the order of responses.</p>
<h2>Server</h2>
<p>To use ABCI in your programming language of choice, there must be a ABCI server in that language.
Tendermint supports two kinds of implementation of the server:</p>
<ul>
<li>Asynchronous, raw socket server (Tendermint Socket Protocol, also known as TSP or Teaspoon)</li>
<li>GRPC</li>
</ul>
<p>Both can be tested using the <code>abci-cli</code> by setting the <code>--abci</code> flag appropriately (ie. to <code>socket</code> or <code>grpc</code>).</p>
<p>See examples, in various stages of maintenance, in <a href=https://github.com/tendermint/abci/tree/master/server>go</a>, <a href=https://github.com/tendermint/js-abci>javascript</a>, <a href=https://github.com/tendermint/abci/tree/master/example/python3/abci>python</a>, <a href=https://github.com/mdyring/cpp-abci>c++</a>, and <a href=https://github.com/jABCI/jABCI>java</a>.</p>
<h3>GRPC</h3>
<p>If GRPC is available in your language, this is the easiest approach,
though it will have significant performance overhead.</p>
<p>To get started with GRPC, copy in the <a href=https://github.com/tendermint/abci/blob/master/types/types.proto>protobuf file</a> and compile it using the GRPC plugin for your language.
For instance, for golang, the command is <code>protoc --go_out=plugins=grpc:. types.proto</code>. See the <a href=http://www.grpc.io/docs/ >grpc documentation for more details</a>. <code>protoc</code> will autogenerate all the necessary code for ABCI client and server in your language, including whatever interface your application must satisfy to be used by the ABCI server for handling requests.</p>
<h3>TSP</h3>
<p>If GRPC is not available in your language, or you require higher performance, or otherwise enjoy programming, you may implement your own ABCI server
using the Tendermint Socket Protocol, known affectionaltely as Teaspoon.
The first step is still to auto-generate the relevant data types and codec in your language using <code>protoc</code>.
Messages coming over the socket are Protobuf3 encoded, but additionally length-prefixed to facilitate use as a streaming protocol. Protobuf3 doesn&#x2019;t have an official length-prefix standard, so we use our own. The first byte in the prefix represents the length of the Big Endian encoded length. The remaining bytes in the prefix are the Big Endian encoded length.</p>
<p>For example, if the Protobuf3 encoded ABCI message is 0xDEADBEEF (4 bytes), the length-prefixed message is 0x0104DEADBEEF. If the Protobuf3 encoded ABCI message is 65535 bytes long, the length-prefixed message would be like 0x02FFFF&#x2026;</p>
<p>Note this prefixing does not apply for grpc.</p>
<p>An ABCI server must also be able to support multiple connections, as Tendermint uses three connections.</p>
<h2>Client</h2>
<p>There are currently two use-cases for an ABCI client.
One is a testing tool, as in the <code>abci-cli</code>, which allows ABCI requests to be sent via command line.
The other is a consensus engine, such as Tendermint Core, which makes requests to the application every time a new transaction is received or a block is committed.</p>
<p>It is unlikely that you will need to implement a client. For details of our client, see <a href=https://github.com/tendermint/abci/tree/master/client>here</a>.</p>
<h2>Blockchain Protocol</h2>
<p>In ABCI, a transaction is simply an arbitrary length byte-array.
It is the application&#x2019;s responsibility to define the transaction codec as they please,
and to use it for both CheckTx and DeliverTx.</p>
<p>Note that there are two distinct means for running transactions, corresponding to stages of &apos;awareness&#x2019;
of the transaction in the network. The first stage is when a transaction is received by a validator from a client into the so-called mempool or transaction pool - this is where we use CheckTx. The second is when the transaction is successfully committed on more than 2/3 of validators - where we use DeliverTx. In the former case, it may not be necessary to run all the state transitions associated with the transaction, as the transaction may not ultimately be committed until some much later time, when the result of its execution will be different.
For instance, an Ethereum ABCI app would check signatures and amounts in CheckTx, but would not actually execute any contract code until the DeliverTx, so as to avoid executing state transitions that have not been finalized.</p>
<p>To formalize the distinction further, two explicit ABCI connections are made between Tendermint Core and the application: the mempool connection and the consensus connection. We also make a third connection, the query connection, to query the local state of the app.</p>
<h3>Mempool Connection</h3>
<p>The mempool connection is used <em>only</em> for CheckTx requests.
Transactions are run using CheckTx in the same order they were received by the validator.
If the CheckTx returns <code>OK</code>, the transaction is kept in memory and relayed to other peers in the same order it was received. Otherwise, it is discarded.</p>
<p>CheckTx requests run concurrently with block processing;
so they should run against a copy of the main application state which is reset after every block.
This copy is necessary to track transitions made by a sequence of CheckTx requests before they are included in a block. When a block is committed, the application must ensure to reset the mempool state to the latest committed state. Tendermint Core will then filter through all transactions in the mempool, removing any that were included in the block, and re-run the rest using CheckTx against the post-Commit mempool state.</p>
<h3>Consensus Connection</h3>
<p>The consensus connection is used only when a new block is committed, and communicates all information from the block in a series of requests:  <code>BeginBlock, [DeliverTx, ...], EndBlock, Commit</code>.
That is, when a block is committed in the consensus, we send a list of DeliverTx requests (one for each transaction) sandwiched by BeginBlock and EndBlock requests, and followed by a Commit.</p>
<h4>DeliverTx</h4>
<p>DeliverTx is the workhorse of the blockchain. Tendermint sends the DeliverTx requests asynchronously but in order,
and relies on the underlying socket protocol (ie. TCP) to ensure they are received by the app in order. They have already been ordered in the global consensus by the Tendermint protocol.</p>
<p>DeliverTx returns a abci.Result, which includes a Code, Data, and Log. The code may be non-zero (non-OK), meaning the corresponding transaction should have been rejected by the mempool,
but may have been included in a block by a Byzantine proposer.</p>
<p>The block header will be updated (TODO) to include some commitment to the results of DeliverTx, be it a bitarray of non-OK transactions, or a merkle root of the data returned by the DeliverTx requests, or both.</p>
<h4>Commit</h4>
<p>Once all processing of the block is complete, Tendermint sends the Commit request and blocks waiting
for a response. While the mempool may run concurrently with block processing (the BeginBlock, DeliverTxs, and EndBlock), it is locked for the Commit request so that its state can be safely reset during Commit. This means the app <em>MUST NOT</em> do any blocking communication with the mempool (ie. broadcast_tx) during Commit, or there will be deadlock. Note also that all remaining transactions in the mempool are replayed on the mempool connection (CheckTx) following a commit.</p>
<p>The Commit response includes a byte array, which is the deterministic state root of the application. It is included in the header of the next block. It can be used to provide easily verified Merkle-proofs of the state of the application.</p>
<p>It is expected that the app will persist state to disk on Commit. The option to have all transactions replayed from some previous block is the job of the <a href=#handshake>Handshake</a>.</p>
<h4>BeginBlock</h4>
<p>The BeginBlock request can be used to run some code at the beginning of every block. It also allows Tendermint to send the current block hash and header to the application, before it sends any of the transactions.</p>
<p>The app should remember the latest height and header (ie. from which it has run a successful Commit) so that it can tell Tendermint where to pick up from when it restarts. See information on the Handshake, below.</p>
<h4>EndBlock</h4>
<p>The EndBlock request can be used to run some code at the end of every block. Additionally, the response may contain a list of validators, which can be used to update the validator set. To add a new validator or update an existing one, simply include them in the list returned in the EndBlock response. To remove one, include it in the list with a <code>power</code> equal to <code>0</code>. Tendermint core will take care of updating the validator set. Note validator set changes are only available in v0.8.0 and up.</p>
<h3>Query Connection</h3>
<p>This connection is used to query the application without engaging consensus. It&#x2019;s exposed over the tendermint core rpc, so clients can query the app without exposing a server on the app itself, but they must serialize each query as a single byte array. Additionally, certain &#x201C;standardized&#x201D; queries may be used to inform local decisions, for instance about which peers to connect to.</p>
<p>Tendermint Core currently uses the Query connection to filter peers upon connecting, according to IP address or public key. For instance, returning non-OK ABCI response to either of the following queries will cause Tendermint to not connect to the corresponding peer:</p>
<ul>
<li><code>p2p/filter/addr/&lt;addr&gt;</code>, where <code>&lt;addr&gt;</code> is an IP address.</li>
<li><code>p2p/filter/pubkey/&lt;pubkey&gt;</code>, where <code>&lt;pubkey&gt;</code> is the hex-encoded ED25519 key of the node (not it&#x2019;s validator key)</li>
</ul>
<p>Note: these query formats are subject to change!</p>
<h3>Handshake</h3>
<p>When the app or tendermint restarts, they need to sync to a common height.
When an ABCI connection is first established, Tendermint will call <code>Info</code> on the Query connection.
The response should contain the LastBlockHeight and LastBlockAppHash</p>
<ul>
<li>the former is the last block for the which the app ran Commit successfully,
the latter is the response from that Commit.</li>
</ul>
<p>Using this information, Tendermint will determine what needs to be replayed, if anything, against the app,
to ensure both Tendermint and the app are synced to the latest block height.</p>
<p>If the app returns a LastBlockHeight of 0, Tendermint will just replay all blocks.</p>
<p>Note this functionality is only available in v0.8.0 and up.</p>
</div></template>
