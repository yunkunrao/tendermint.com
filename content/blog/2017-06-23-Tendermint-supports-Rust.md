~~~
title: "Tendermint supports Rust"
description: "Rust support will enable you to write blazingly fast ABCI apps on top of Tendermint using Rust."
date: "2017-06-20"
author: "Adrian Brink"
categories:
    - "Tendermint"
    - "Rust-Lang"
    - "ABCI"
~~~

# Tendermint supports Rust
*Links to the bindings are at the bottom.*

Before I joined the Tendermint/COSMOS project I always thought that I would end up on a project that required me to write rust-lang full-time, 
since at the time I thought (and to some extend still think) that rust is the most amazing language to build highly complex software in. 
After joining the Tendermint team though where we almost exclusively work in go-lang I now appreciate the need for a language that is much simpler,
has good concurrency features and doesn’t come with a massively steep learning curve.

## A quick introduction to Tendermint and ABCI
*If know those two words above, you can safely skip this part.*

Tendermint is a blockchain engine. It handles the P2P networking and the consensus rules. In simple terms, it establishes a network with other nodes
and decides on the order of transactions and blocks. However, this by itself isn’t very interesting since Tendermint doesn’t come with any logic
of what those transactions could contain or mean.

That part is the job of the ABCI app. The ABCI app tracks the state of your blockchain and determines what are valid state changes. For example,
it tracks how much money an account contains and who has the right to spend that money.

Now the question is, how do these two pieces, Tendermint Core and the ABCI app, communicate with each other. Oh, and the ABCI app can be written
in any language, such as JavaScript or Rust. The communication happens over a protocol called ABCI that sends pre-defined messages (protobuf files)
from Tendermint to the ABCI and then the ABCI app can respond with a pre-defined response.

## Introducing the rust-abci
If you are a rust developer and always wanted to build your own blockchain application, such as the next bitcoin or ethereum, now is your chance. 
I have released the rust language bindings for ABCI along with two examples of how to use them. These bindings are under active development and 
will see major speed improvements in the near future through the support of sockets instead of GRPC. However, even now they are blazingly 
fast and fun to work with.

If you have any suggestions please open [issues](https://github.com/tendermint/rust-abci/issues). Also, more examples and improved documentation
are always welcome, so if you want to show off your cool app, just open a [PR](https://github.com/tendermint/rust-abci/pulls) and I’ll include it
in the repository.

## Releases
[Rust-ABCI 0.1.0  - Moist von Lipwig](https://github.com/tendermint/rust-abci/releases)

## Conclusion
If you have any questions, please ask me on [twitter](https://twitter.com/adrian_brink) (@adrian_brink), via [slack](http://slack.cosmos.network/) or
via [email](mailto:adrian@tendermint.com).
I am happy to help anyone who has problems getting up and running or who just has a simple question.
