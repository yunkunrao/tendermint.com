---
title: "The Tendermint Socket Protocol (TMSP)"
description: "TMSP lets you create blockchain application easily in any languge.  This post describes the motivation behind TMSP and links to tutorials."
date: "2015-12-19"
categories: 
    - "TMSP"
---

### Motivation

Thus far, all blockchains have had a monolithic design.  That is, each blockchain app is a single program that handles all the concerns of a decentralized ledger; this includes P2P connectivity, the "mempool" broadcasting of transactions, consensus on the most recent block, account balances, Turing-complete contracts, user-level permissions, etc.

This approach to blockchain development has several problems, two of which will be mentioned here.  The first problem is that creating a new blockchain app requires forking an existing blockchain "stack" (such as [Bitcoin](https://github.com/bitcoin/bitcoin)), and this comes with the cost of complexity.  First you need to understand all the components of a blockchain stack, even those that aren't directly relevant to the logic of your application.  This is especially true when the codebase is not modular in design and suffers from "spaghetti code".

The second problem to this approach is that it limits you to the language of the blockchain stack (or vice versa).  In the case of Ethereum which supports a Turing-complete bytecode virtual-machine, it limits you to languages that compile down to that bytecode; today, those are Serpent and Solidity.

If we could only split a blockchain into two so that a standalone application speaks to the rest of the blockchain via a language-agnostic socket protocol, we wouldn't be limited in this way.  Lo and behold, TMSP is that socket protocol.  Implementing TMSP is the easiest way to develop a new blockchain app.  You don't need to fork a whole blockchain stack, and you can program your application in any language.

The other half of TMSP is the [Tendermint Core](https://github.com/tendermint/tendermint) program (the "consensus provider").  Tendermint Core speaks to your TMSP application via a socket connection to empower your application with the best propoerties of blockchains, including optimal Byzantine fault-tolerant consensus, P2P connectivity, transaction mempool, blockchain storage, and more.  Of course, you're not limited to Tendermint Core.  In the future there will likely be different implementations of consensus providers that you can pair your application with.  You're not locked in to Tendermint Core with TMSP. 

As an added benefit, designing your blockchain app to support TMSP is a great way to make your application logic more modular and testable.


### TMSP Overview

The Tendermint Socket Protocol (TMSP) is an asyncronous message passing protocol
enabing a consensus engine, running in one process,
to manage an application state, running in another.

If you are of sound mind, the consensus engine will be Tendermint, 
and regardless of your soundness of mind, your application can be written in any programming language.

The only requirements we have are that applications be deterministic and implement the TMSP API.

The API is quite simple, as it boils down to the most basic interface between a consensus engine and its application state: `append_tx`, `get_hash`, `commit`, `rollback`.

That is, the consensus engine will receive new txs in the mempool, 
and run them through the application using `append_tx`.

After a few transactions, the consensus engine can ask for the state hash with `get_hash`.
This way, the only thing consensus has to know about the application is the state root hash,
which goes in the block header, so applications can support light client proofs easily.

When a block is committed, the consensus sends a `commit` message, indicating the application should save its latest state.

Converesely, a `rollback` message tells the application to go back to the latest committed state.


### Tutorials

* [Run your first TMSP application](/tutorials/run-your-first-tmsp-application/)
* [Launch a TMSP testnet](/tutorials/launch-a-tmsp-testnet/)
