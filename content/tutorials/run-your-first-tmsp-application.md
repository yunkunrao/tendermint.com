---
title: "Run your first TMSP application"
description: "We explain what TMSP is and how to inspect TMSP applications using the tmsp_cli tool"
date: "2015-12-16"
categories: 
    - "tutorial"
    - "TMSP"
    - "tmsp_cli"
---

_This tutorial is first in a series.  See [Introducing TMSP](/posts/introducing-tmsp/) for links to all the tutorials in this series._

### A First Example

Make sure you [have Go installed](https://golang.org/doc/install) and [put `$GOPATH/bin` in your `$PATH`](https://github.com/tendermint/tendermint/wiki/Setting-GOPATH).

Next, install the `tmsp_cli` tool and example applications:

```
go get github.com/tendermint/tmsp/cmd/...
```

Now run `tmsp_cli --help` to see the list of commands:

```
COMMANDS:
   batch        Run a batch of TMSP commands against an application
   console      Start an interactive console for multiple commands
   echo         Have the application echo a message
   info         Get some info about the application
   set_option   Set an option on the application
   append_tx    Append a new tx to application
   get_hash     Get application Merkle root hash
   commit       Commit the application state
   rollback     Roll back the application state to the latest commit
   help, h      Shows a list of commands or help for one command
   
GLOBAL OPTIONS:
   --address "tcp://127.0.0.1:46658"    address of application socket
   --help, -h                           show help
   --version, -v                        print the version
```

The `tmsp_cli` tool lets us send TMSP messages to our application, to help build and debug them.

As you can see, the TMSP API has more than the four messages outlined above 
for convenience, configuration, and information purposes, but it remains quite general.

Let's start a dummy application:

```
dummy
```

In another terminal, run 

```
tmsp_cli echo hello
tmsp_cli info
```

A TMSP application must provide two things:

  - a socket server
  - a handler for TMSP messages

When we run the `tmsp_cli` tool we open a new connection to the application's socket server, 
send the given TMSP message, and wait for a response.

The server may be generic for a particular language, and we provide one for Go in `tmsp/server`.
There is one for Python in `example/python/tmsp/server.py`, but it could use more love.

The handler is specific to the application, and may be arbitrary, 
so long as it is deterministic and conforms to the TMSP interface specification.

For example, starting the `dummy` application in Go looks like:

```go
server.StartListener("tcp://0.0.0.0:46658", example.NewDummyApplication())
```

Where `example.NewDummyApplication()` has methods for each of the TMSP messages and `server` handles everything else.

See the dummy app in `example/golang/dummy.go`. It simply adds transaction bytes to a merkle tree, hashing when we call `get_hash` and saving when we call `commit`.

So when we run `tmsp_cli info`, we open a new connection to the TMSP server, which calls the `Info()` method on the application, which tells us the number of transactions in our merlke tree.

Now, since every command opens a new connection, we provide the `tmsp_cli console` and `tmsp_cli batch` commands, 
to allow multiple TMSP messages on a single connection.

Running `tmsp_cli console` should drop you in an interactive console for speaking TMSP messages to your application.

Try running these commands:

```
> echo hello
> info
> get_hash
> append_tx abc
> info
> get_hash
```

Similarly, you could put the commands in a file and run `tmsp_cli batch < myfile`.

### Another Example

Now that we've got the hang of it, let's try another application, the "counter" app.

This application has two modes: `serial=off` and `serial=on`.

When `serial=on`, transactions must be a big-endian encoded incrementing integer, starting at 0.

We can toggle the value of `serial` using the `set_option` TMSP message.

Let's kill the console and the dummy application, and start the counter app:

```
counter
```

Again, the code is just 

```go
server.StartListener("tcp://0.0.0.0:46658", example.NewCounterApplication())
```

where the CounterApplication is defined in `example/golang/counter.go`, and implements the TMSP application interface.

In another window, start the `tmsp_cli console`:

```
> echo hello
> info
> get_hash
> info
> append_tx abc
> get_hash
> set_option serial on
> append_tx def
> append_tx 0x01
> append_tx 0x02
> append_tx 0x05
> info
> commit
> info
```

This is a very simple application, but between `counter` and `dummy`, its easy to see how you can build out arbitrary application states on top of the TMSP.
In the near future, `erisdb` of Eris Industries will also run atop TMSP, bringing with it Ethereum-like accounts, the Ethereum virtual-machine, Eris's permissioning scheme, and native contracts extensions.

But the ultimate flexibility comes from being able to write the application easily in any language. 

We have implemented the counter app in Python:

```
cd example/python
python app.py
```

(you'll have to kill the other counter application process). 
In another window, run the console and those previous TMSP commands. 
You should get the same results as for the Go version.

Want to write the counter app in your favorite language?! We'd be happy to accept the pull request.

Before continuing, please kill the `python app.py` process.

TODO: write it in Javascript

### Next steps

In the next tutorial, we will show how to [launch a TMSP testnet](/tutorials/launch-a-tmsp-testnet).
