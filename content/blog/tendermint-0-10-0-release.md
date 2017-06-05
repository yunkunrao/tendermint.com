~~~
title: "Tendermint 0.10.0 Release"
description: "Tendermint 0.10.0 includes some major refactoring of the repositories, config, and logger"
date: "2017-05-31"
author: "Ethan Buchman"
~~~

> *Credits to our [team](/about),
> and [community](http://forum.tendermint.com:3000/) for the hard work in making this
> release possible. Esepcially to [Anton Kaliaev (@melekes)](https://twitter.com/akaliaev)
> for his work on the new logger, and to Ethan Frey (@ethanfrey) for fixing everything that
> broke during this massive refactor!

The main purpose of Tendermint 0.10.0 is to perform some major, long-overdue, cleanup.
This includes merging repositories, introducing configuration structs,
overhauling our logger, and cleaning up the JSON APIs.

Get the latest release at [our downloads page](/download).
See the [v0.10.0 release
notes](https://github.com/tendermint/tendermint/blob/master/CHANGELOG.md#0100-june-2-2017) for more details.

**Repository Merging**

When we initially introduced the ABCI in late 2015, we took apart the Tendermint codebase by moving many of the pieces
into their own repositories. Most notable were the `go-p2p`, `go-rpc`, `go-crypto`, and `go-wire`, libraries, but there
were also many more like `go-db`, `go-common`, `go-autofile`, and so on. Needless to say, it was painful to synchronize changes
across all these repositories.

In v0.10.0, we merged `go-p2p` and `go-rpc` back into `tendermint`, in the `p2p` and `rpc/lib` subdirectories, respectively.
We also merged most of the other `go-XXX` repositories into a new repository, called `tmlibs`.
So now `go-common` is `tmlibs/common`, `go-db` is `tmlibs/db`, and so on.

The remaining independent libraries are now the following:

- `tmlibs`
- `go-wire`
- `go-crypto`
- `abci`
- `tendermint`

The `go-merkle` repository is an exception. It contained two kinds of Merkle tree: a simple, static tree (eg. for hashing transactions),
and a dynamic tree, the IAVL tree (eg. for storing state). The former has been moved to `tmlibs/merkle`. The latter can be found in `merkleeyes/iavl`.
Note that `merkleeyes` is effectively an ABCI wrapper around the IAVL tree, so its a natural place for the library itself to live. It is also not used
by Tendermint core, and is more a part of our application framework (which includes Basecoin) than a part of the core.

**Config Structs**

Until now, configuration of a Tendermint node has been completely flat and somewhat adhoc. The config data was stored in a `map` and just passed around everywhere.
In v0.10.0, we finally provided some structure, by defining an explicit `Config` struct, consisting of substructs for each important piece of Tendermint that needs to be configured. We also updated many functions, wherever suitable, to only pass in required arguments rather than an entire configuration.

The new configuration structs and there defaults can all be found in [config/config.go](https://github.com/tendermint/tendermint/blob/master/config/config.go#L11).
We hope this makes the configuration options in Tendermint much more obvious, and simplifies configuring a node just the way you like it.

Some major differences to note are the `rpc` and `p2p` sub-configs. For instance, to specify seed nodes to connect with from the command line, you need to use the `p2p` prefix:

```
tendermint node --p2p.seeds=1.2.3.4:46656,4.3.2.1:46656
```

**New Logger**

Until now, our logging implementation was quite lazy. Each package had its own global logger, and it was very difficult to configure it.
This made it difficult to import Tendermint from other projects, and complicated important features like per-package log levels.
So we completely overhauled the logger implementation. Loggers must now be explicitly passed where they are needed. 
We also now support per-package logging that can be specified in the `config.toml` or from the command line.
We are so proud of our new logging implementation that we wrote a blog post just for it - [check it out!]()

Please note that we have compressed what was once six log levels down to only three: `error`, `info`, and `debug`. 
This probably means you need to change your `config.toml` files to replace `notice` with `info`.
Better yet, try out our new default setting, which takes advantage of the per-package log levels: `state:info,*:error`!
It says to use `info` for the `state` package, and `error` for everything else.
If you think you need more log levels, [take it up with Dave Cheney](https://dave.cheney.net/2015/11/05/lets-talk-about-logging).

**Cleaner APIs (no more go-wire!)**

Tendermint is a blockchain engine, which means strict determinism and efficient data formatting are paramount to success.
For this reason, we defined our own serialization format - a simple binary representation of the basic data types, but with the additional
ability to easily deserialize into interface types in Go. To achieve this, each implementation of an interface is given a type-byte and registered
with the serialization library. Then when an interface type is being serialized, its simply prepended with the type-byte of the particular underlying implementation.
This has been quite useful for things like transactions, keys, protocol messages, events, and so on.

Of course, as anyone who has used Tendermint probably knows, the problem with this was JSON serialization. For no good reason, we represented interfaces in JSON as an array, where the first element was the type byte and the second was the actual data. This caused no end of suffering for our users, and even ourselves.
Well, I'm proud to say that we have eradicated all use of this obtuse JSON format from Tendermint! For instance, a public key that used to look like:

```
[1, "377212927E6AA3370EDFC838AC9512B7D9AF19EB0CC2033C43FC80B0BAD7B9A5"]
```

Now looks like:

```
{"type":"ed25519","data":"377212927E6AA3370EDFC838AC9512B7D9AF19EB0CC2033C43FC80B0BAD7B9A5"}
```

Isn't that nice?

Furthermore, we've actually removed all type information from the RPC responses. We hope this makes parsing (and hence using) them much easier and more enjoyable!

If you have other ways you think we can improve our APIs, please [let us know!](https://github.com/tendermint/tendermint/issues/new)

**Up Next**

Phew! v0.10.0 marks some quite substantial cleanup - we're thrilled with the result and we hope you are too.
Tendermint should be much easier to use now, both for those using the RPC, and for those importing Tendermint as a library.

Next up for us are some important changes to ABCI to allow apps to decide what to do with validators who are offline or who misbehaved.
This is critical for Proof-of-Stake protocols that use the security-deposits and "slashing", and is the last big change we need to make to Tendermint
to prepare for its use in Cosmos.

Cheers!
