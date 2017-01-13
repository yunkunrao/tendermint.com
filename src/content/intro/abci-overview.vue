<template><div><h1>What is ABCI?</h1>
<p>The Tendermint Socket Protocol (ABCI) allows for Byzantine Fault Tolerant replication of applications written in any programming language.</p>
<h2>Motivation</h2>
<p>Thus far, all blockchains &#x201C;stacks&#x201D; (such as <a href=https://github.com/bitcoin/bitcoin>Bitcoin</a>) have had a monolithic design.  That is, each blockchain stack is a single program that handles all the concerns of a decentralized ledger; this includes P2P connectivity, the &#x201C;mempool&#x201D; broadcasting of transactions, consensus on the most recent block, account balances, Turing-complete contracts, user-level permissions, etc.</p>
<p>Using a monolithic architecture is typically bad practice in computer science.
It makes it difficult to reuse components of the code, and attempts to do so result in complex maintanence procedures for forks of the codebase.
This is especially true when the codebase is not modular in design and suffers from &#x201C;spaghetti code&#x201D;.</p>
<p>Another problem with monolithic design is that it limits you to the language of the blockchain stack (or vice versa).  In the case of Ethereum which supports a Turing-complete bytecode virtual-machine, it limits you to languages that compile down to that bytecode; today, those are Serpent and Solidity.</p>
<p>In contrast, our approach is to decouple the consensus engine and P2P layers from the details of the application state of the particular blockchain application.
We do this by abstracting away the details of the application to an interface, which is implemented as a socket protocol; namely, the Tendermint Socket Protocol (ABCI).</p>
<h2>Intro to ABCI</h2>
<p><a href=https://github.com/tendermint/tendermint>Tendermint Core</a> (the &#x201C;consensus engine&#x201D;) communicates with the application via a socket protocol called <a href=https://github.com/tendermint/abci>ABCI</a>.</p>
<p>To draw an analogy, lets talk about a well-known cryptocurrency, Bitcoin.  Bitcoin is a cryptocurrency blockchain where each node maintains a fully audited Unspent Transaction Output (UTXO) database. If one wanted to create a Bitcoin-like system on top of ABCI, Tendermint Core would be responsible for</p>
<ul>
<li>Sharing blocks and transactions between nodes</li>
<li>Establishing a canonical/immutable order of transactions (the blockchain)</li>
</ul>
<p>The application will be responsible for</p>
<ul>
<li>Maintaining the UTXO database</li>
<li>Validating cryptographic signatures of transactions</li>
<li>Preventing transactions from spending non-existent transactions</li>
<li>Allowing clients to query the UTXO database.</li>
</ul>
<p>Tendermint is able to decompose the blockchain design by offering a very simple API between the application process and consensus process.</p>
<p>The API consists of 3 primary message types that get delivered from the core to the application.  The application replies with corresponding response messages.</p>
<p>The messages are specified here: <a href=https://github.com/tendermint/abci#message-types>ABCI Message Types</a></p>
<p>The <code>AppendTx</code> message is the work horse of the application.  Each transaction in the blockchain is delivered with this message. The application needs to validate each transaction received with the <code>AppendTx</code> message against the current state, application protocol, and the cryptographic credentials of the transaction. A validated transaction then needs to update the application state &#x2014; by binding a value into a key values store, or by updating the UTXO database, for instance.</p>
<p>The <code>CheckTx</code> message is similar to <code>AppendTx</code>, but it&#x2019;s only for validating transactions.  Tendermint Core&#x2019;s mempool first checks the validity of a transaction with <code>CheckTx</code>, and only relays valid transactions to its peers.  For instance, an application may check an incrementing sequence number in the transaction and return an error upon <code>CheckTx</code> if the sequence number is old. Alternatively, they might use a capabilities based system that requires capabilities to be renewed with every transaction.</p>
<p>The <code>Commit</code> message is used to compute a cryptographic commitment to the current application state, to be placed into the next block header. This has some handy properties. Inconsistencies in updating that state will now appear as blockchain forks which catches a whole class of programming errors. This also simplifies the development of secure lightweight clients, as Merkle-hash proofs can be verified by checking against the block hash, and the block hash is signed by a quorum.</p>
<p>There can be multiple ABCI socket connections to an application.  Tendermint Core creates three ABCI connections to the application; one for the validation of transactions when broadcasting in the mempool, one for the consensus engine to run block proposals, and one more for querying the application state.</p>
<p>It&#x2019;s probably evident that applications designers need to very carefully design their message handlers to create a blockchain that does anything useful but this architecture provides a place to start. The diagram below illustrates the flow of messages via ABCI.</p>
<img src=~assets/images/abci.png>
<h2>A Note on Determinism</h2>
<p>The logic for blockchain transaction processing must be deterministic.  If the application logic weren&#x2019;t deterministic, consensus would not be reached among the Tendermint Core replica nodes.</p>
<p>Solidity on Ethereum is a great language of choice for blockchain applications because, among other reasons, it is a completely deterministic programming language.  However, it&#x2019;s also possible to create deterministic applications using existing popular languages like Java, C++, Python, or Go.  Game programmers and blockchain developers are already familiar with creating deterministic programs by avoiding sources of non-determinism such as:</p>
<ul>
<li>random number generators (without deterministic seeding)</li>
<li>race conditions on threads (or avoiding threads altogether)</li>
<li>the system clock</li>
<li>uninitialized memory (in unsafe programming languages like C or C++)</li>
<li><a href=http://gafferongames.com/networking-for-game-programmers/floating-point-determinism/ >floating point arithmetic</a></li>
<li>language features that are random (e.g. map iteration in Go)</li>
</ul>
<p>While programmers can avoid non-determinism by being careful, it is also possible to create a special linter or static analyzer for each language to check for determinism.  In the future we may work with partners to create such tools.</p>
<h2>Next Steps</h2>
<ul>
<li>Read an overview of <router-link to=/intro/consensus-overview>how the consensus algorithm works</router-link>.</li>
<li>Continue with the <router-link to=/intro/getting-started/install>Getting Started</router-link> guide to install and run example tendermint applications.</li>
</ul>
<h2>Contributions</h2>
<p><em>Many thanks to Zaki Manian for providing the &#x201C;Intro to ABCI&#x201D; section.</em></p>
</div></template>