---
title: "Cases for Tendermint"
description: "Why you should build on Tendermint, and whether to use the EVM"
date: "2015-09-13"
categories: 
    - "consensus"
    - "EVM"
---

You may have an application that benefits from blockchain technology, and you may be trying to figure out whether to build that on Bitcoin, some meta-coin protocol like Counterparty, with Solidity/Serpent on the Ethereum virtual machine, or on a new blockchain stack altogether.  Actually, you should seriously consider building on Tendermint.

## A little background on Tendermint

Tendermint is not a fork of Bitcoin, NXT, Ripple, or Ethereum.  Tendermint is its own blockchain stack written from the ground up.  It was built to be the base blockchain stack from which to fork off of for a wide variety of decentralized applications.  It started back in 2014 as an ambitious project to solve the Bitcoin mining problem and bring real Byzantine fault-tolerant consensus to cryptocurrencies.  First we adapted an existing BGA consensus algorithm to make it suitable for blockchains.  For the actual implementation we considered forking Bitcoin, NXT, BitShares, and other projects, but none could easily accommodate the desired project architecture.  So, a brand spanking new blockchain stack was born.

Tendermint offers:

* Byzantine fault-tolerant consensus with unparalleled speed and security guarantees -- without mining. [(see spec)](https://github.com/tendermint/tendermint/wiki/Byzantine-Consensus-Algorithm)
* A very clean codebase with clear separation of concerns -- no spaghetti, thanks Golang!
* Throttled/fair P2P stack to handle multiplexed channels of communication.
* Clear P2P logic with the [reactor pattern](https://en.wikipedia.org/wiki/Reactor_pattern)

On top of this foundation, we've built more advanced blockchain features.

* A compatible and efficient Ethereum VM implementation
* A permissions system that works across accounts and VM contracts

We're going to build more exciting features going forward, except this time we'll blog about it while we do it, so hang on to your metaphorical horses.

## On Tendermint consensus

The consensus system is the foundational layer of any blockchain stack. It is the process by which all of the transaction validators (equivalent to miners in Bitcoin) agree on the state of the network.  Improvements in speed, security, and cost of a consensus system ripple up and improve the performance of any network or application built on top of it.  Let's dive into some examples to get a sense of how it works.

### Case 1: Payment verification

Say that your mobile phone is connected to untrusted wifi, and you're making a business deal with Satoshi.  Satoshi just sent you a large payment, and you need to verify that this payment was committed onto the blockchain network irreversibly.

With Bitcoin, you generally need to wait up to 6 confirmation blocks (about 1 hour, sometimes longer) to consider a transaction fully committed.  For very large payment transactions you should wait even longer, because the security afforded by the blockchain miners is no greater than the cost of double-spending that transaction, which is today only about 25 Bitcoins per reverted block, and soon to be half of that.

With Tendermint, a global network of 1000 independent validators can commit a transaction in less than 60 seconds.  The time required to commit only gets shorter with increased bandwidth and computational capacity of the nodes of the network.  In the near future we'll be able to commit transactions on a global Tendermint blockchain with more than 1000 validators in a matter of seconds -- the only real limitation is the time it takes for light to travel around the globe.

### Case 2: Name registry lookup

Similar to case 1, but instead of verifying a payment, you need to verify Satoshi's public key as registered under the name "@satoshi" on a name-registry blockchain.  The difference here as compared to case 1 is that instead of verifying a new transaction, you're verifying the current value of a pre-registered key that may have been changed by other transactions.

With Bitcoin (and Namecoin), you can verify that "@satoshi" was registered with a particular public key at some point in the past, but you wouldn't know whether the public key had since been updated without downloading the whole blockchain.  This is because the presence of a name-registration transaction in the blockchain does not imply that later transactions hadn't updated the value for that key.  In order for you to efficiently check for the current value of a name, the blockchain should support a balanced Merkle tree on the most recent name-registry state.  Even if Bitcoin/Namecoin did support such a data structure, you would still have to download and verify all the blockchain hashes and headers, and if the value might have been updated recently you're still vulnerable to a fork-censorship attack.

With Tendermint, all you need is the most recent blockhash signed by more than 2/3 of the validators, and a Merkle proof that proves the current value associated with the name "@satoshi".  You don't even need to wait for a single commit.  If you're interested, see [this link](https://github.com/tendermint/tendermint/wiki/Merkle-Trees#iavl-tree) for more information on our balanced binary Merkle tree implementation.

In future posts I'll go into detail about the consensus algorithm and how it can provide these unique speed & security guarantees without proof-of-work mining.  For now, you can check the most recent Tendermint spec on the github wiki [here](https://github.com/tendermint/tendermint/).


## Tendermint architecture

<img src="/images/tm_architecture.png">

The diagram above is meant to show that:

* the consensus and transaction-execution (aka state-transition) modules are separate except for the shared (immutable/Merkle-ized) state.
* the consensus module takes a block, a commit for the block, and the last state, and uses the transaction-execution module to produce the next state.
* the VM call transaction is one of many transaction types offered by the transaction-execution module.
* the Ethereum VM (EVM) is only one of potentially many supported virtual machines.

If you have a blockchain application in mind, on Tendermint there are two options to consider -- a smart contract on the Ethereum VM (and in the future, other VMs as well), or, a native transaction type (like SendTx or NameTx above).

## Whether to develop a VM smart contract or develop a native Tendermint contract

The main benefit of a Turing-complete VM on a blockchain is that anyone can upload new contract logic onto the blockchain.  This is especially true on big-bad-public-blockchains (BBPB) like Bitcoin or Ethereum which were designed to allow anyone to upload new contract logic.  On the other hand, private blockchains and consortium blockchains that are more tightly managed may not need or even want arbitrary user-defined logic.

Sometimes, writing an EVM contract is the right answer.  Use the EVM if you need to deploy the contract on a public blockchain such as Ethereum.  Use the EVM if you don't have systems programming experience, and you find that writing a solidity contract is easier than writing in Golang.  Use the EVM if your contract-logic is simple enough that you wouldn't mind stepping over bytecode execution to debug your contract.

For other applications where the former exceptions don't apply, you probably want to write native code on Tendermint for a variety of reasons -- Golang's language tooling is better so debugging is easier, it's computationally more efficient by far, and it removes two complex layers (one for the bytecode compiled language, and one for the VM itself).  If you want full control over your Merkle-ized data structures (e.g. without the 32-by-32-byte restriction of the EVM's Patricia-trie) then you have to write your contract logic at the native level.  Tendermint provides you with the right tools to make this as easy as possible.

## Fin

* Go to http://tendermint.com and sign up for the newsletter.
* Check out the [Tendermint wiki](https://github.com/tendermint/tendermint/wiki).
* Develop on Tendermint.
* Email us at hello@tendermint.com with your full name to join our Slack channel.
