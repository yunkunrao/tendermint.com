<template><div><h1>Introduction to Tendermint</h1>
<p>Welcome to the Tendermint guide!  This is the best place to start if you&#x2019;re new
to Tendermint.  If you&#x2019;re already familiar with the basics of Tendermint and
TMSP, find more details in the <router-link to=/docs>documentation</router-link>.</p>
<h2>What is Tendermint?</h2>
<p>Tendermint is software for securely and consistently replicating an application on many machines.
By securely, we mean that Tendermint works even if up to 1/3 of machines fail in arbitrary ways.
By consistently, we mean that every non-faulty machine sees the same transaction log and computes the same state.
Secure and consistent replication is a fundamental problem in distributed systems;
it plays a critical role in the fault tolerance of a broad range of applications,
from currencies, to elections, to infrastructure orchestration, and beyond.</p>
<p>The ability to tolerate machines failing in arbitrary ways, including becoming malicious, is known as Byzantine fault tolerance (BFT).
The theory of BFT is decades old, but software implementations have only became popular recently,
due largely to the success of &#x201C;blockchain technology&#x201D; like Bitcoin and Ethereum.
Blockchain technology is just a reformalization of BFT in a more modern setting,
with emphasis on peer-to-peer networking and cryptographic authentication.
The name derrives from the way transactions are batched in blocks,
where each block contains a cryptographic hash of the previous one, forming a chain.
In practice, the blockchain data structure actually optimizes BFT design.</p>
<p>Tendermint consists of two chief technical components: a blockchain consensus engine and a generic application interface.
The consensus engine, called Tendermint Core, ensures that the same transactions are recorded on every machine in the same order.
The application interface, called the Tendermint Socket Protocol (TMSP), enables the transactions to be processed in any programming language.
Unlike other blockchain and consensus solutions, which come pre-packaged with built in state machines (like a fancy key-value store,
or a quirky scripting language), developers can use Tendermint for BFT state machine replication of applications written in
whatever programming language and development environment is right for them.</p>
<p>Tendermint is designed to be easy-to-use, simple-to-understand, highly performant, and useful
for a wide variety of distributed applications. <router-link to=/intro/getting-started/install>Get started with Tendermint</router-link> today!</p>
<h2>Next Steps</h2>
<ul>
<li>See how <router-link to=/intro/tendermint-vs>Tendermint compares to other software</router-link>.</li>
<li>Continue with the <router-link to=/intro/getting-started/install>Getting Started</router-link> guide to install and run example tendermint applications.</li>
</ul>
</div></template>