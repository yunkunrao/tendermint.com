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

Now, fetch the testnets repository, which contains some initialization files and an install script:

```
TESTNET_FILES=~/.cosmos-testnets/files
git clone https://github.com/tendermint/testnets $TESTNET_FILES
cd $TESTNET_FILES
```

Now run the install script to set some useful environment variables, create directories, and copy the configuration files into place:

```
source scripts/mercury-hermes-1.sh
```

The install script also creates some useful aliases for us, such as `basecoin-mercury` and `basecoin-hermes` that set the correct home directory.
We encourage you to inspect the script - it's quite simple!

## Running a Full Node

To run a full node, we just need to start the Basecoin and Tendermint processes.
All the configuration was handled by the install script.

```
basecoin-mercury start --address tcp://localhost:23458 --without-tendermint &> mercury-basecoin.log &
tendermint-mercury node &> mercury-tendermint.log &
```

For `hermes`, we do the same thing:

```
basecoin-hermes start --address tcp://localhost:12348 --without-tendermint &> hermes-basecoin.log &
tendermint-hermes node &> hermes-tendermint.log &
```

You are now running two full nodes, both syncing with the testnet. Check on their progress with `tail -f mercury-tendermint.log` and `tail -f hermes-tendermint.log`

It may take some time to sync up. You can see the latest height for remote nodes under the `/status` endpoint, for instance at http://merucry-node4.testnets.interblock.io:46657/status.

## Running a Relay

If we want to be able to send funds from one chain to the other, we must ensure some process is relaying the necessary information.
For this, we use the `basecoin relay` command to start a process that listens for outgoing packets from multiple chains and forwards them to their destination.
For now, the relay is quite simple and only works with two chains, and with one node from each chain. So we can use it to relay between the two full nodes 
we're running locally. If you don't run the relay yourself, you will be only be able to send coins across chains if someone else does.



TODO


## Get Coins

To send transactions, you need an account and some coins. First things first, generate a key.
We'll generate the key on `hermes`, but you're just as welcome to make keys and request coins on `mercury`.
Note that the same key will not work on multiple chains unless you do some manual work moving files across directories ...

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
