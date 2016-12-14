# What is TMSP?

The Tendermint Socket Protocol (TMSP) allows for Byzantine Fault Tolerant replication of applications written in any programming language.

## Motivation

Thus far, all blockchains "stacks" (such as [Bitcoin](https://github.com/bitcoin/bitcoin)) have had a monolithic design.  That is, each blockchain stack is a single program that handles all the concerns of a decentralized ledger; this includes P2P connectivity, the "mempool" broadcasting of transactions, consensus on the most recent block, account balances, Turing-complete contracts, user-level permissions, etc.

Using a monolithic architecture is typically bad practice in computer science.
It makes it difficult to reuse components of the code, and attempts to do so result in complex maintanence procedures for forks of the codebase.
This is especially true when the codebase is not modular in design and suffers from "spaghetti code".

Another problem with monolithic design is that it limits you to the language of the blockchain stack (or vice versa).  In the case of Ethereum which supports a Turing-complete bytecode virtual-machine, it limits you to languages that compile down to that bytecode; today, those are Serpent and Solidity.

In contrast, our approach is to decouple the consensus engine and P2P layers from the details of the application state of the particular blockchain application.
We do this by abstracting away the details of the application to an interface, which is implemented as a socket protocol; namely, the Tendermint Socket Protocol (TMSP).

## Intro to TMSP

[Tendermint Core](https://github.com/tendermint/tendermint) (the "consensus engine") communicates with the application via a socket protocol called [TMSP](https://github.com/tendermint/tmsp). 

To draw an analogy, lets talk about a well-known cryptocurrency, Bitcoin.  Bitcoin is a cryptocurrency blockchain where each node maintains a fully audited Unspent Transaction Output (UTXO) database. If one wanted to create a Bitcoin-like system on top of TMSP, Tendermint Core would be responsible for 

- Sharing blocks and transactions between nodes
- Establishing a canonical/immutable order of transactions (the blockchain)

The application will be responsible for

- Maintaining the UTXO database
- Validating cryptographic signatures of transactions
- Preventing transactions from spending non-existent transactions
- Allowing clients to query the UTXO database.

Tendermint is able to decompose the blockchain design by offering a very simple API between the application process and consensus process.

The API consists of 3 primary message types that get delivered from the core to the application.  The application replies with corresponding response messages.

The messages are specified here: [TMSP Message Types](https://github.com/tendermint/tmsp#message-types)

The `AppendTx` message is the work horse of the application.  Each transaction in the blockchain is delivered with this message. The application needs to validate each transaction received with the `AppendTx` message against the current state, application protocol, and the cryptographic credentials of the transaction. A validated transaction then needs to update the application state — by binding a value into a key values store, or by updating the UTXO database, for instance.

The `CheckTx` message is similar to `AppendTx`, but it's only for validating transactions.  Tendermint Core's mempool first checks the validity of a transaction with `CheckTx`, and only relays valid transactions to its peers.  For instance, an application may check an incrementing sequence number in the transaction and return an error upon `CheckTx` if the sequence number is old. Alternatively, they might use a capabilities based system that requires capabilities to be renewed with every transaction.

The `Commit` message is used to compute a cryptographic commitment to the current application state, to be placed into the next block header. This has some handy properties. Inconsistencies in updating that state will now appear as blockchain forks which catches a whole class of programming errors. This also simplifies the development of secure lightweight clients, as Merkle-hash proofs can be verified by checking against the block hash, and the block hash is signed by a quorum.

There can be multiple TMSP socket connections to an application.  Tendermint Core creates three TMSP connections to the application; one for the validation of transactions when broadcasting in the mempool, one for the consensus engine to run block proposals, and one more for querying the application state.

It's probably evident that applications designers need to very carefully design their message handlers to create a blockchain that does anything useful but this architecture provides a place to start. The diagram below illustrates the flow of messages via TMSP.

<img src="~assets/images/tmsp.png">

## A Note on Determinism

The logic for blockchain transaction processing must be deterministic.  If the application logic weren't deterministic, consensus would not be reached among the Tendermint Core replica nodes.

Solidity on Ethereum is a great language of choice for blockchain applications because, among other reasons, it is a completely deterministic programming language.  However, it's also possible to create deterministic applications using existing popular languages like Java, C++, Python, or Go.  Game programmers and blockchain developers are already familiar with creating deterministic programs by avoiding sources of non-determinism such as:

 * random number generators (without deterministic seeding)
 * race conditions on threads (or avoiding threads altogether)
 * the system clock
 * uninitialized memory (in unsafe programming languages like C or C++)
 * [floating point arithmetic](http://gafferongames.com/networking-for-game-programmers/floating-point-determinism/)
 * language features that are random (e.g. map iteration in Go)

While programmers can avoid non-determinism by being careful, it is also possible to create a special linter or static analyzer for each language to check for determinism.  In the future we may work with partners to create such tools.

## Next Steps

- Read an overview of [how the consensus algorithm works](/intro/consensus-overview).
- Continue with the [Getting Started](/intro/getting-started/install) guide to install and run example tendermint applications.

## Contributions

_Many thanks to Zaki Manian for providing the "Intro to TMSP" section._
