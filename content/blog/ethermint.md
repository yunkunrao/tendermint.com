~~~
title: "Announcing Ethermint"
description: "GoEthereum powered by Tendermint BFT consensus"
date: "2016-11-16"
categories: 
    - "ethereum"
    - "abci"
~~~

## Announcing Ethermint - GoEthereum powered by Tendermint

While we were at the Shanghai Devcon event a little less than two months ago,
we met and discovered a number of companies that were very interested in an
integration between GoEthereum and Tendermint.

GoEthereum is being used by a number of consortium blockchain initiatives.  But
the proof-of-work component is less than ideal in consortium settings.  For
one, the blockchain isn't secure until it has a sufficient amount of mining
power behind it.  Also, the blocks are generated stochastically, rather than at
semi-regular intervals.  There's no doubt about it, consortium blockchains
require Byzantine fault-tolerant consensus like that provided by Tendermint.

Today, we're happy to announce Ethermint.  It's a minimal modification of
GoEthereum that includes Tendermint consensus, compiled as a single binary. It
works out of the box with standard ethereum tooling like `geth attach` and
web3, so you can deploy contracts and interact with them just as you would with
GoEthereum. See the repository for more details:

[github.com/tendermint/ethermint](https://github.com/tendermint/ethermint).

Please join us on [Slack at #ethermint](http://forum.tendermint.com:3000/) or
<a href="mailto:hello@tendermint.com">email us</a> and give us feedback.  We
want to make Ethermint as accessible and useful for as many people as possible.

To see other applications and libraries, visit [tendermint.com/ecosystem](http://tendermint.com/ecosystem). 

Many thanks to the GoEthereum team for building a fantastic state transition
machine, and to Kobi Gurkan for doing most of the work integrating it with
Tendermint.
