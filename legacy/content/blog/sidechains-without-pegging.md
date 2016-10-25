---
title: "Sidechains without Pegging"
description: "Sidechains is more than one-way or two-way pegging, and beyond Bitcoin Maximalism."
date: "2014-11-25"
categories: 
    - "sidechains"
    - "pegging"
aliases:
    - /posts/sidechains-without-pegging/
---

There is an interesting debate happening between Bitcoin maximalists and the rest of the cryptocurrency community.

First, BlockStream published Bitcoin maximalist paper on [sidechains](http://www.blockstream.com/sidechains.pdf).
Then, Dominic of Pebble responded with due [criticism](http://blog.pebble.io/post/100702644738/on-sidechains-bitcoin-maximalism-and-freedom).
Vitalik of Ethereum responded with [more analysis](https://blog.ethereum.org/2014/11/20/bitcoin-maximalism-currency-platform-network-effects/).
And finally, Joel of Union Square Ventures wrote about a very [Bitcoin maximal world](http://joel.mn/post/103546215249/the-blockchain-application-stack).

I’d like to add a few points to this conversation.

First, let’s get this out of the way.  Metacoins like Counterparty are a nuisance for Bitcoin, regardless of the merits of the Counterparty protocol itself.  They benefit by taking advantage of the Bitcoin consensus network.  They bloat the block-chain space with transactions that aren’t relevant to other Bitcoin users.  The security of the Counterparty system is dependent on the security of Bitcoin’s, while it’s entirely possible that the market cap of assets in Counterparty become higher than that of Bitcoin, creating a lopsided security threat.  Metacoins will phase out as it becomes easier to bootstrap a secure coin with a pre-built consensus engine (such as Tendermint) that doesn’t rely on proof-of-work.  When the valuation of Bitcoin drops enough, Counterparty will be forced to migrate to its own block-chain too.

The main thing I’d like to talk about is sidechains.  The term was first introduced by Bitcoin developers who were considering ways to encourage innovation in the alt-coin space while cutting down on the speculation and volatility that results from bootstrapping a new coin ex nihilo, by 1-way or 2-way pegging.  It works by having one block-chain track the consensus state of another block-chain.  It’s no wonder that the term “sidechain” refers to two distinct concepts — interchain-communication and pegging.  I like the term for its succinctness, so I’m going to try to hijack it to mean only interchain-communication — with or without pegging.

The beautiful thing about sidechains is that it’s more than currency pegging.  For example, it can be used to run a decentralized exchange between two currencies.  You can do this now with “cross-chain-transactions”, but it requires both parties to be online, or for both to trust a few “smart oracles” with threshold signatures to handle the trade.  But when your block-chain can track the state of another with sidechain technology, you don’t have to trust anyone except the cryptocurrency network, which you trust already.  If you trust a block-chain enough to hold coins in it, you should trust the block-chain to enforce your exchange orders for you when you want to trade with a sidechain.  So now you can bootstrap a currency *and* provide liquidity without trusted centralized exchanges, and really incentivize the development of new currencies without pegging the valuation onto <s>the Euro</s>Bitcoin.  It’s especially important to have sovereign unpegged market-priced block-chains if the very thing you want to experiment with is monetary policy.

Sidechain technology is more than 1-way or 2-way pegging to Bitcoin. It's about contractual agreement between two communities represented by different consensus ledgers.  To pretend otherwise will only hurt the cryptocurrency movement.
