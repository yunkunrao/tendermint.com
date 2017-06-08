~~~
title: "Tendermint 0.8 Release"
description: "Tendermint 0.8.0 is the culmination of four months of work, providing many new features and vastly improved stability for network deployments both big and small."
date: "2017-01-25"
author: "Jae Kwon"
~~~


> *Credits to our [team](https://tendermint.com/about),
> [community](http://forum.tendermint.com:3000/), and especially [Ethan
> Buchman](https://twitter.com/buchmanster) for the hard work in making this
> release possible (and most of this post, to be honest).
> View blog post on [Medium](https://hackernoon.com/tendermint-0-8-release-eff1d308b583#.vwmgic4s5).*

Tendermint 0.8.0 is the culmination of four months of work, providing many new
features and vastly improved stability for network deployments both big and
small.

See the [v0.8.0 release
notes](https://github.com/tendermint/tendermint/releases/tag/v0.8.0) for more
details.

**The interface between Tendermint and the application, previously Tendermint
Socket Protocol (TMSP), is now called Asynchronous Blockchain Interface
(**[ABCI](http://github.com/tendermint/abci)**).**

One of Tendermint’s unique advantages is its ability to support applications
written in any programming language. It does this by employing a socket
protocol, known as the *Tendermint Socket Protocol*, or TMSP. While we’ve become
comfortable with the acronym TMSP, we are changing the name to a more
backend-agnostic “ABCI” (short for *Asynchronous Blockchain Interface*, or
alternatively, *Atomic Broadcast Interface*) to emphasize its purpose to serve
as a general interface between any BFT consensus engine and any application.
With this name change, we are signalling to the community that we are committed
to designing protocols that benefit the entire blockchain ecosystem. We expect
to see other consensus engines adopt the ABCI in the future, whether they be
based on Tendermint, Raft, or any other fault-tolerant consensus algorithm.

**ABCI: works-in-process, with Sockets, or with GRPC**

Applications that implement the ABCI in Golang can continue to be compiled with
Tendermint as a single binary. Applications written in other languages such as
Python, Java, or JavaScript can connect with the Tendermint process via a
network or Unix socket. With 0.8.0, applications can now also expose ABCI
endpoints via Google’s GRPC, which may enable faster prototyping for a wide
variety of languages.

For non-Golang applications that require high throughput, developers are
encouraged to use ABCI-over-sockets, since transactions can be pushed to the
application asynchronously in order. Due to a design limitation of GRPC,
ABCI-over-GRPC delivers messages synchronously, so it should only be used for
initial proof-of-concepts, or applications that don’t require high transaction
throughput.

For more details, see our [guide on app development and the
ABCI](/docs/guides/app-development).

**Persistence and Handshakes**

Prior versions of Tendermint did not handle application state persistence well.
That is, when a Tendermint node restarted, it had to re-run all the transactions
of the locally stored blockchain to get back in sync. This served our users well
for proof-of-concept builds, but obviously that doesn’t work for production
systems.

With the 0.8.0 release, we’ve implemented an ABCI handshake protocol that lets
the application tell Tendermint which blocks it already knows about. Thus, upon
a restart of either Tendermint, the application, or both, only the most recent
blocks need to be pushed to the application. This marks a major milestone,
*allowing Tendermint to be used for actual production environments.*

In fact, in late 2016 we successfully completed a production deployment of a
voting blockchain application with [Votem](https://votem.com/). This was the
first production run of the software, and it went off without a hitch,
processing over 1.5 million votes over two months on an 8-node cluster on AWS.

**Cosmos and Basecoin**

[Cosmos](http://cosmos.network/), the “Internet of Blockchains”, is a network of
public and private blockchains. The essential public blockchains of Cosmos,
including the Cosmos Hub and the Cosmos DEX (distributed exchange), are ABCI
applications powered by Tendermint. Staying true to good software engineering
principles, we intend to build these applications out of smaller modules, the
basis of which we call [Basecoin](https://github.com/tendermint/basecoin).

Basecoin is a simple multi-asset cryptocurrency that forms the foundation for
what will eventually become the Cosmos Hub. It is an ABCI app written in Golang,
featuring Ethereum-like accounts with a simple plugin architecture that makes it
very easy to extend. Its purpose is to be both a baseline cryptocurrency for
other implementers to fork from, and a base module for paying fees in more
complex state machines. So, if you want to create a new public cryptocurrency
application in Golang with experimental features, or perhaps create a
private/consortium blockchain application that requires users to pay fees,
consider starting with Basecoin!

For more details on the design and use of Basecoin, see [our latest blog
post](https://medium.com/@jaekwon/cosmos-creating-interoperable-blockchains-part-1-2929435ba1fa).

**Tendermint Roadmap**

Here are some of the items up next on our stack:

* Update ABCI to include vote information (e.g. evidence of double-signing)
* Update ABCI to support light-client queries
* Implement transaction indexing and querying
* Secure the RPC server
* Better Basecoin guides, documentation, and tooling
* Implement Inter-Blockchain Communication (IBC) as a Basecoin plugin.

To find out more, check out [our GitHub
issues](https://github.com/tendermint/tendermint/issues), follow us on
[Twitter](http://twitter.com/tendermint_team), or ask us questions directly on
[our Slack](http://forum.tendermint.com:3000/).
