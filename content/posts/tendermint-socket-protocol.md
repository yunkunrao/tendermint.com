---
title: "The Tendermint Socket Protocol (TMSP)"
description: "TMSP lets you create blockchain application easily in any languge.  This post describes the motivation behind TMSP and links to tutorials."
date: "2015-12-19"
categories: 
    - "TMSP"
---

### Motivation

Thus far, all blockchains "stacks" (such as [Bitcoin](https://github.com/bitcoin/bitcoin)) have had a monolithic design.  That is, each blockchain stack is a single program that handles all the concerns of a decentralized ledger; this includes P2P connectivity, the "mempool" broadcasting of transactions, consensus on the most recent block, account balances, Turing-complete contracts, user-level permissions, etc.

This approach to blockchain development has several problems.  First, creating a new blockchain requires forking an existing blockchain stack, and this comes with the cost of complexity.  First you need to understand all the components of a blockchain stack, even those that aren't directly relevant to the logic of your application.  This is especially true when the codebase is not modular in design and suffers from "spaghetti code".

Another problem with this approach is that it limits you to the language of the blockchain stack (or vice versa).  In the case of Ethereum which supports a Turing-complete bytecode virtual-machine, it limits you to languages that compile down to that bytecode; today, those are Serpent and Solidity.

If we could only split a blockchain into two so that a standalone "business logic" application speaks to the rest of the blockchain via a language-agnostic socket protocol, we wouldn't be limited in this way.  Lo and behold, TMSP is that socket protocol.  Implementing TMSP is the easiest way to develop a new blockchain app.  You don't need to fork a whole blockchain stack, and you can program your application in any language.

The other half of TMSP is the [Tendermint Core](https://github.com/tendermint/tendermint) program (the "consensus engine").  Tendermint Core speaks to your TMSP application via a socket connection to empower it with the best propoerties of blockchains, including optimal Byzantine fault-tolerant consensus, P2P connectivity, transaction mempool, blockchain storage, and more.  Of course, you're not limited to Tendermint Core.  In the future there will likely be alternative consensus engines to choose from.  You're not locked in to Tendermint Core with TMSP. 

As an added benefit, designing your blockchain app to support TMSP is a great way to make your application more modular and testable.

### TMSP Overview

The Tendermint Socket Protocol (TMSP) is an asyncronous message-passing protocol
enabing a consensus engine (e.g. Tendermint Core), running in one process,
to manage an application state, running in another.

The only requirements we have are that applications be deterministic and implement the TMSP API.
The API is quite simple, as it boils down to the most basic interface between a consensus engine and its application state: `append_tx`, `get_hash`, `commit`, and `rollback`.

For example, when Tendermint Core receives a new tx in the mempool, it is passed to the application using the `append_tx` message.  The application must then respond with a return-code that tells Tendermint Core whether the tx was valid or not.

After a few transactions, the consensus engine can ask for the state hash with `get_hash`.
This way, the only thing consensus has to know about the application is the state Merkle root hash,
which goes in the block header, so applications can support light client proofs easily.

When a block is committed in Tendermint Core, the application is sent a `commit` message, telling it to save its latest state.  All transactions prior to this `commit` message are considered committed and final.  Converesely, a `rollback` message tells the application to go back to the latest committed state.

### A Note on Determinism

The logic for blockchain transaction processing must be deterministic.  If the application logic weren't deterministic, consensus would not be reached among the Tendermint Core replica nodes.  

Solidity on Ethereum is a great language of choice for blockchain applications because, among other reasons, it is a completely deterministic programming language.  However, it's also possible to create deterministic applications using existing popular languages like Java, C++, Python, or Go.  Game programmers and blockchain developers are already familiar with creating deterministic programs by avoiding sources of non-determinism such as:

 * random number generators (without deterministic seeding)
 * race conditions on threads (or avoiding threads altogether)
 * the system clock
 * uninitialized memory (in unsafe programming languages like C or C++)
 * [floating point arithmetic](http://gafferongames.com/networking-for-game-programmers/floating-point-determinism/)
 * language features that are random (e.g. map iteration in Go)

While programmers can avoid non-determinism by being careful, it is also possible to create a special linter or static analyzer for each language to check for determinism.  In the future we may work with partners to create such tools.

### Tutorials

Follow these tutorials to quickly get started developing your TMSP application.

* [Run your first TMSP application](/tutorials/run-your-first-tmsp-application/)
* [Launch a TMSP testnet](/tutorials/launch-a-tmsp-testnet/)
