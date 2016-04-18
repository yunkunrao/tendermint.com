---
title: "Launch a TMSP testnet using mintnet"
description: "This tutorial shows how to launch a TMSP blockchain application using the mintnet tool"
date: "2015-12-16"
categories: 
    - "tutorial"
    - "TMSP"
    - "mintnet"
aliases:
    - /tutorials/launch-a-tmsp-testnet/
---

_This tutorial is second in a series.  See [this post](/posts/tendermint-socket-protocol/) for links to all the tutorials in this series._

### Tendermint Core

Now that we've seen how TMSP works, and even played with a few applications using the `tmsp-cli` tool,
let's run an actual Tendermint node.

When running a live application, a Tendermint node takes the place of the `tmsp-cli` tool by sending TMSP requests
to the application: many `append_tx` msgs to run transactions followed by a `commit` to get the application Merkle root hash, and so on.

Installing Tendermint is easy:

```
go get github.com/tendermint/tendermint/cmd/tendermint
```

If you already have Tendermint installed, then you can either set a new `$GOPATH` and run the previous command,
or else fetch and checkout the latest master branch in `$GOPATH/src/github.com/tendermint/tendermint`,
and from that directory run

```
go get ./cmd/tendermint
go install ./cmd/tendermint
```

To initialize a genesis and validator key in `~/.tendermint`, run

```
tendermint init
```

You can change the directory by setting the `$TMROOT` environment variable.

Now,

```
tendermint node
```

You should see `Failed to connect to proxy for mempool: dial tcp 127.0.0.1:46658: getsockopt: connection refused`

That's because we don't have an application process running, and Tendermint will only run if there's an application it can speak TMSP with.

So lets start the `dummy` app,

```
dummy
```

and in another window, start Tendermint:

```
tendermint node
```

After a few seconds you should see blocks start streaming in!

Now you can send transactions through the Tendermint RPC server with curl requests, or from your browser:

```
curl http://localhost:46657/broadcast_tx?tx=\"abcd\"
```

For handling responses, we recommend you [install the `jsonpp` tool](http://jmhodges.github.io/jsonpp/) to pretty print the JSON

We can see the chain's status at the `/status` end-point:

```
curl http://localhost:46657/status |  jsonpp
```

and the `latest_app_hash` in particular:

```
curl http://localhost:46657/status |  jsonpp | grep app_hash
```

visit http://localhost:46657 in your browser to see the other endpoints.

### Deploy a Tendermint Testnet

Now that we've run a single Tendermint node with one validator and a couple applications, 
let's deploy a testnet to run our application with four validators.

For this part of the tutorial, we assume you have an account at digital ocean and are willing to 
pay to start some new droplets to run your nodes. You can of course stop and destroy them at any time.

First, install [`docker-machine`](https://docs.docker.com/machine/install-machine/) and get a DigitalOcean account and access token.

Then, install `mintnet`.

```
go get github.com/tendermint/mintnet
```

To provision machines on DigitalOcean:

```
mintnet create -- --driver=digitalocean --digitalocean-access-token=YOUR_ACCCESS_TOKEN
```

By default this creates 4 new machines.  Check the help messages for more info, e.g. `mintnet create --help`.

Next, create the testnet configuration folders.

```
mintnet init mytest_dir/
```

This creates directories in `mytest` for the application.

```
ls mytest_dir/
  app   # Common configuration directory for your blockchain applicaiton
  mach1 # Configuration directory for the Tendermint core daemon on machine 1
  mach2 # Configuration directory for the Tendermint core daemon on machine 2
  mach3 # Configuration directory for the Tendermint core daemon on machine 3
  mach4 # Configuration directory for the Tendermint core daemon on machine 4
```

You can change the files in the app folder to change which TMSP application run on your testnet.
The default script app/init.sh gets run on each node to install the TMSP application straight from Github.

Now start the testnet service.

```
mintnet start mytest mytest_dir/
```

You can stop and remove the application as well.

```
mintnet stop mytest; mintnet rm mytest
```

Don't forget to destroy your provisioned machines!

```
mintnet destroy --machines="mach1,mach2,mach3,mach4"
```

TODO: Document tutorial on docker-machine ssh mach1, docker ps, etc, or at least link to good Docker tutorials.
