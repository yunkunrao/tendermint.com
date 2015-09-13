---
title: "Cases for Tendermint"
description: "Why you should build on Tendermint, and whether to use the EVM"
date: "2015-09-13"
categories: 
    - "consensus"
    - "EVM"
---

<br/>
I got a great piece of feedback yesterday.  I was explaining to someone whether a blockchain application should be built on the 
EVM or as a native transaction type in Tendermint.  After doing so, the feedback that I got was "You should be blogging about this stuff, Tendermint doesn’t have enough marketing / explanation of how it fits into the ecosystem."

We're going to fix that starting today.

You may have an application that benefits from blockchain technology, and you may be trying to figure out whether to build that on Bitcoin, some meta-coin protocol like Counterparty, with Solidity/Serpent on the Ethereum virtual machine, or on a new blockchain stack altogether.  This blog post will attempt to demonstrate why you should seriously consider building on Tendermint.

## A little background on Tendermint

Tendermint is not a fork of Bitcoin, NXT, Ripple, or Ethereum.  Tendermint is its own blockchain stack written from the ground up in a very opinionated fashion.  It started back in 2014 as an ambitious project to solve the Bitcoin mining problem and bring real Byzantine fault tolerant consensus to cryptocurrencies.  First we adapted an existing BGA consensus algorithm to make it suitable for blockchains.  Next for the actual implementation we considered forking Bitcoin, NXT, BitShares, and other projects, but none could easily accomodate the desired project architecture.  So, a brand spanking new blockchain stack was born.

Tendermint offers:

* Byzantine fault tolerant consensus with unparalleled speed and security guarantees -- without mining.
* A very clean codebase with clear separation of concerns -- no spaghetti, thanks Golang!
* Throttled/fair P2P stack to handle multiplexed channels of communication.
* Clear p2p logic with the reactor pattern

On top of this framework, we've built more advanced blockchain features.

* A compatible and efficient Ethereum VM implementation
* A permissions system that works across accounts and VM contracts

We're going to build more exciting features going forward, except this time we'll blog about it while we do it, so hang on to your metaphorical horses, this will get interesting.  By the way, if you go to http://tendermint.com and sign up for the newsletter, we'll
send you an email with every published blog post.


## On Tendermint consensus

The consensus system is the foundational layer of any blockchain stack. It is the process by which all of the transaction validators (aka miners) agree on the state of the network.  Improvements in speed, security, and cost of a consensus system ripple up and improve performance of any networks & applications built on top of it.  Lets dive into some examples to get a sense of how it works.

### Case 1: Payment verification

Say that you're in a room and your mobile phone is connected to untrusted wifi, and you're making a business deal with Satoshi.  Satoshi just sent you a large payment, and you need to verify that this payment was committed onto the blockchain network irreversibly.

With Bitcoin, you generally need to wait up to 6 confirmation blocks (about 1 hour, sometimes longer) to consider a transaction fully committed.  For very large payment transactions you should wait even longer, because the security afforded by the blockchain miners is no greater than the cost of double-spending that transaction, which is today only about 25 Bitcoins per reverted block, and soon to be half of that.

With Tendermint, a global network of 1000 independent validators can commit a transaction in less than 60 seconds, though this is a very conservative estimate and can probably be much faster; and it only gets faster with increased bandwidth and computational capacity of each node.  In the near future we'll be able to commit transactions on a global Tendermint blockchain with more than 1000 validators in a matter of seconds -- the only real limitation is the speed of light.

### Case 2: Name registry lookup

Say that you're in the same room with Satoshi, but instead of verifying a payment, you need to verify Satoshi's public key as registered under the name "@satoshi" on a name-registry blockchain.  The main difference here is that you're looking to verify the current value of a pre-existing value on the blockchain-derived name-registry state.

With Bitcoin (and Namecoin), you can verify that "@satoshi" was registered with a particular public key at some point in the past, but you wouldn't know whether the public key had been updated because Bitcoin (and Namecoin) doesn't support balanced merkle trees on the state derived from the blockchain.  In Namecoin you can check that a transaction was included in the blockchain, but you cannot efficiently check for the exclusion of updates that may follow without downloading the entire blockchain.  Even if Bitcoin/Namecoin did support balanced merkle trees on name-registry state, you would still have to download and verify all the blockchain hashes and headers, and if the value might have been updated recently you're still vulnerable to a fork-censorship attack.

With Tendermint, all you need is the most recent blockhash signed by more than 2/3 of the validators, and a merkle proof that proves the current value associated with the name "@staoshi".  You don't even need to wait for a single commit.  If you're interested, see https://github.com/tendermint/tendermint/wiki/Merkle-Trees#iavl-tree for more information on our balanced binary merkle tree implementation.

In future posts we'll go into detail about the consensus algorithm and how it can provide these unique speed & security guarantees without proof-of-work mining.  For now, you can check the most recent Tendermint spec on the github wiki here: https://github.com/tendermint/tendermint/


## Tendermint architecture

<img src="/images/tm_architecture.png"/>

The above diagram is meant to show that:
 * the consensus and tx-execution modules are separate except for the shared (immutable/merkle-ized) state.
 * the consensus module takes a block, a commit for the block, and the last state and uses the tx-execution module to produce the next state.
 * the VM call transaction is one of many transaction types offered by the tx-execution module.
 * the Ethereum VM (EVM) is only one of potentially many supported virtual machines.
 * the next state is completely determined by the old state and the transactions in a block.

So, if you have a blockchain application in mind, on Tendermint there are two options to consider -- a smart contract on the Ethereum VM (and in the future, other VMs as well), or, a native transaction type (like SendTx or NameTx above).

## Whether to develop a VM smart contract or develop a native Tendermint contract

The main benefit of a turing-complete VM on a blockchain is that potentially anyone can upload new contract logic onto the blockchain.  This is especially true on big-bad-public-blockchains (BBPB) like Bitcoin or Ethereum which were designed to allow anyone to upload new contract logic.  On the other hand, private blockchains and consortium blockchains that are more tightly managed may not need or even want arbitrary user-defined logic.

One thing that developers will appreciate in Tendermint is how much easier it is to code contract logic natively at the blockchain level, rather than as a contract script on a virtual machine.  You should use the VM if you need to deploy the contract on a public blockchain such as Ethereum.  You should use the EVM if you don't have systems programming experience, and you find that writing a solidity contract is easier than writing in Golang, or if your contract-logic is simple enough that you wouldn't mind stepping over bytecode execution to debug your contract.  But for other applications where the former exceptions don't apply, you probably want to write native code on Tendermint for a variety of reasons -- Golang's language tooling is better so debugging is easier, it's computationally more efficient by far, and it's two less complex layers (one for the bytecode compiled language, and one for the VM itself) for already seasoned developers to have to deal with.

I'm not knocking on EVM development.  The Ethereum team did a great job inventing the EVM and developing a lot of theory behind turing-complete smart-contracts.  It's necessary on a public blockchain like Ethereum.  So, if you want to port your EVM contract over to Tendermint, that's easy.  On the other hand, if you want full control over your merkle-ized data structures (e.g. without the 32-by-32-byte restriction of the EVM's patricia trie) then you can write your contract as a native transaction type on Tendermint.

## Fin

* Go to http://tendermint.com and sign up for the newsletter.
* Develop on Tendermint.
* Email us at hello@tendermint.com with your full name to join our Slack channel.
