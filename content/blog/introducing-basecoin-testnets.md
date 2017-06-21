~~~
title: "Introducing Basecoin Testnets"
description: "We're launching two Basecoin testnets that can send coins back and forth between eachother"
date: "2017-06-21"
categories: 
    - "testnets"
    - "basecoin"
~~~

With the release of [Basecoin v0.6.0](), we're announcing the availability of our two public Basecoin testnets:
`mercury` and `hermes`. We are hosting seven validators for each network and invite the community to run their own 
full-nodes and to try sending transactions across the chains. This post explains how to do that.

In the future, we'll upgrade the application to allow new validators to participate, and to include inflationary rewards.

## Install

If you just want to run a node, install [basecoin]() and [tendermint]().

If you want to send transactions and make queries, install [basecli]().

It's probably a good idea to install all three :).

### Preliminaries

```
# first, clean up any old garbage for a fresh slate...
rm -rf ~/.cosmos-testnets/
```

Let's start by setting up some environment variables and directories:


```
export BCHOME_MERCURY_CLIENT=~/.cosmos-testnets/mercury/client
export BCHOME_MERCURY_SERVER=~/.cosmos-testnets/mercury/server
export TMHOME_MERCURY=~/.cosmos-testnets/mercury/server/tendermint
export BCHOME_HERMES_CLIENT=~/.cosmos-testnets/hermes/client
export BCHOME_HERMES_SERVER=~/.cosmos-testnets/hermes/server
export TMHOME_HERMES=~/.cosmos-testnets/mercury/server/tendermint

mkdir -p $TMHOME_HERMES $TMHOME_MERCURY
```

We also create some aliases to use instead of raw `basecli` and `basecoin` to ensure we're using the right configuration for the chain we want to talk to.

```
alias basecli-mercury="basecli --home $BCHOME_MERCURY_CLIENT"
alias basecli-venus="basecli --home $BCHOME_HERMES_CLIENT"
alias basecoin-mercury="basecoin --home $BCHOME_MERCURY_SERVER"
alias basecoin-venus="basecoin --home $BCHOME_HERMES_SERVER"
```

And since we may run two different chains on one machine, we need to maintain different sets of ports:

```
export PORT_PREFIX1=1234
export PORT_PREFIX2=2345
export NODE_PORT1=${PORT_PREFIX1}6
export NODE_PORT2=${PORT_PREFIX2}6
export RPC_PORT1=${PORT_PREFIX1}7
export RPC_PORT2=${PORT_PREFIX2}7
export APP_PORT1=${PORT_PREFIX1}8
export APP_PORT2=${PORT_PREFIX2}8
```

## Running a Full Node

To run a full node, we just need the relevant `genesis.json` files. 
For instance, for `mercury`:

```
curl https://s3-us-west-2.amazonaws.com/tendermint/testnets/mercury/basecoin/genesis.json > $BCHOME_MERCURY_SERVER/genesis.json
curl https://s3-us-west-2.amazonaws.com/tendermint/testnets/mercury/tendermint/genesis.json > $TMHOME_MERCURY/genesis.json

# start basecoin and tendermint
basecoin-mercury start --address tcp://localhost:$APP_PORT1 --without-tendermint &> mercury-basecoin.log &
TMHOME=$TMHOME_MERCURY tendermint node --proxy_app tcp://localhost:$APP_PORT1 --p2p.laddr $NODE_PORT1 --rpc.laddr $RPC_PORT1 --p2p.seeds mercury-node0.testnets.interblock.io:46656,mercury-node1.testnets.interblock.io:46656,mercury-node2.testnets.interblock.io:46656,mercury-node3.testnets.interblock.io:46656,mercury-node4.testnets.interblock.io:46656,mercury-node5.testnets.interblock.io:46656,mercury-node6.testnets.interblock.io:46656 --log_level=info &> mercury-tendermint.log &
```

For `hermes`, we do the same thing:

```
curl https://s3-us-west-2.amazonaws.com/tendermint/testnets/hermes/basecoin/genesis.json > $BCHOME_HERMES_SERVER/genesis.json
curl https://s3-us-west-2.amazonaws.com/tendermint/testnets/hermes/tendermint/genesis.json > $TMHOME_HERMES/genesis.json

# start basecoin and tendermint
basecoin-hermes start --address tcp://localhost:$APP_PORT2 --without-tendermint &> hermes-basecoin.log &
TMHOME=$TMHOME_HERMES tendermint node --proxy_app tcp://localhost:$APP_PORT2 --p2p.laddr $NODE_PORT2 --rpc.laddr $RPC_PORT2 --p2p.seeds hermes-node0.testnets.interblock.io:46656,hermes-node1.testnets.interblock.io:46656,hermes-node2.testnets.interblock.io:46656,hermes-node3.testnets.interblock.io:46656,hermes-node4.testnets.interblock.io:46656,hermes-node5.testnets.interblock.io:46656,hermes-node6.testnets.interblock.io:46656 --log_level=info &> hermes-tendermint.log &
```

You are now running two full nodes, both syncing with the testnet. Check on their progress with `tail -f mercury-tendermint.log` and `tail -f hermes-tendermint.log`

It may take some time to sync up. You can see the latest height for remote nodes under the `/status` endpoint, for instance at http://merucry-node4.testnets.interblock.io:46657/status.


## Get Coins

To send transactions, you need an account and some coins. First things first, generate a key.
We'll generate the key on `hermes`, but you're just as welcome to make keys and request coins on `mercury`.
Note that the seem key will not work on multiple chains unless you do some manual work moving files across directories ...

```
basecli-hermes keys new mykey
ME=$(basecli-hermes keys get mykey | awk '{print $2}')
echo $ME
```

Now ask someone in the #testnets channel on the [tendermint slack]() to send some coins to your address.
You can check your balance with:

```
basecli-hermes query account $ME
```

By default it will look for a local node. To use a remote node, use the `--node` flag.

While you're waiting for coins, initialize the client:

```
basecli-hermes init --chain-id=hermes ---node=tcp://localhost:$RPC_PORT2
```

If you don't have a full node, follow the instructions above to run one, or change `--node` to point to a public node,
for instance `tcp://hermes-node4.testnets.interblock.io:46657`.

## Send Transactions

Once you have coins, you can send funds to a different account:

```
basecli-hermes keys new mykey2
ME2=$(basecli-hermes keys get mykey2 | awk '{print $2}')

basecli-hermes tx send --name=mykey --amount=5bumblebee --to=0x$ME2 --sequence=1
```

Of course, you may need to replace `5bumblebee` with some number of whatever coins you have.
Remember, you also need to increase the `--sequence` value with each subsequent transaction
from the same accounnt!

You can also send funds to an account on the other blockchain! If we're on `hermes`, we can send funds to `mercury` like so:

```
basecli-mercury keys new mykey
ME3=$(basecli-mercury keys get mykey | awk '{print $2}')

basecli-hermes tx send --name=mykey --amount=5bumblebee --to=mercury/0x$ME2 --sequence=2
```

Sending coins to an account on a different chain is a simple as just prefixing the address with the chain ID!

Now check your balance on `mercury`:

```
basecli-mercury query account $ME3
```

Tada!
