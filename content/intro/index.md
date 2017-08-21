# Introduction to Tendermint

Welcome to the Tendermint guide! This is the best place to start if you're new
to Tendermint. If you're already familiar with the basics of Tendermint and
ABCI, find more details in the [documentation](/docs).

## What is Tendermint?


### From a Slack Conversation

(edited for clarity)

It's like how Apache Web Server sits in front of Wordpress, and talks to Wordpress via `fastcgi`. They both combine into one server-side process that handles connection logic, like throttling and security. Tendermint is like Apache Web Server for distributed ledgers. It handles things like p2p networking, consensus, transaction broadcasting, etc. It's agnostic to any business logic process of transactions; to Tendermint they look like binary bytes. You plug in a program that processes the raw transaction bytes. Once a network of validators agree on a block and commit it, the transactions get pushed into the application via ABCI, a network socket protocol that is analogous to `fastcgi` in the Apache Web Server & Wordpress example. What will be the next Wordpress nobody knows.

### Another explanation

Tendermint is software for securely and consistently replicating an application on many machines.
By securely, we mean that Tendermint works even if up to 1/3 of machines fail in arbitrary ways.
By consistently, we mean that every non-faulty machine sees the same transaction log and computes the same state.
Secure and consistent replication is a fundamental problem in distributed systems; 
it plays a critical role in the fault tolerance of a broad range of applications, 
from currencies, to elections, to infrastructure orchestration, and beyond.

The ability to tolerate machines failing in arbitrary ways, including becoming malicious, is known as Byzantine fault tolerance (BFT).
The theory of BFT is decades old, but software implementations have only became popular recently,
due largely to the success of "blockchain technology" like Bitcoin and Ethereum. 
Blockchain technology is just a reformalization of BFT in a more modern setting,
with emphasis on peer-to-peer networking and cryptographic authentication.
The name derives from the way transactions are batched in blocks,
where each block contains a cryptographic hash of the previous one, forming a chain.
In practice, the blockchain data structure actually optimizes BFT design.

Tendermint consists of two chief technical components: a blockchain consensus engine and a generic application interface.
The consensus engine, called Tendermint Core, ensures that the same transactions are recorded on every machine in the same order.
The application interface, called the Application BlockChain Interface (ABCI), enables the transactions to be processed in any programming language.
Unlike other blockchain and consensus solutions, which come pre-packaged with built in state machines (like a fancy key-value store,
or a quirky scripting language), developers can use Tendermint for BFT state machine replication of applications written in 
whatever programming language and development environment is right for them.

Tendermint is designed to be easy-to-use, simple-to-understand, highly performant, and useful
for a wide variety of distributed applications. [Get started with Tendermint](/download) today!

## Next Steps

- See how [Tendermint compares to other software](/intro/tendermint-vs).
- Continue with the [Getting Started](/download) guide to install and run example tendermint applications.
