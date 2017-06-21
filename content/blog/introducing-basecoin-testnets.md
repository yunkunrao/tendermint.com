~~~
title: "Introducing Basecoin Testnets"
description: "We're launching two Basecoin testnets that can send coins back and forth between eachother"
date: "2017-06-21"
categories: 
    - "testnets"
    - "basecoin"
~~~

With the release of [Basecoin v0.6.0](), we're announcing the availability of our two public Basecoin testnets:
`up-n-comer` and `ball-n-chain`. We are hosting seven validators for each network and invite the community to run their own 
full-nodes and to try sending transactions across the chains. This post explains how to do that.

## Install

If you just want to run a node, install [basecoin]() and [tendermint]().

If you want to send transactions and make queries, install [basecli]().

It's probably a good idea to install all three :).

## Running a Full Node

To run a full node, you just need the relevant `genesis.json` files. 
For instance, for `up-n-comer`:

```
# set the testnet name
export TESTNET=up-n-comer

# set the home directories
export BCHOME=~/.$TESTNET/basecoin
export TMHOME=~/.$TESTNET/tendermint
mkdir -p $BCHOME $TMHOME

# fetch the genesis files
curl https://s3-us-west-2.amazonaws.com/tendermint/testnets/$TESTNET/basecoin/genesis.json > $BCHOME/genesis.json
curl https://s3-us-west-2.amazonaws.com/tendermint/testnets/$TESTNET/tendermint/genesis.json > $TMHOME/genesis.json

# start basecoin and tendermint
basecoin start --without-tendermint &> basecoin.log &
tendermint node --p2p.seeds $TESTNET-node0.testnets.interblock.io:46656,$TESTNET-node1.testnets.interblock.io:46656,$TESTNET-node2.testnets.interblock.io:46656,$TESTNET-node3.testnets.interblock.io:46656,$TESTNET-node4.testnets.interblock.io:46656,$TESTNET-node5.testnets.interblock.io:46656,$TESTNET-node6.testnets.interblock.io:46656 --log_level=info &> tendermint.log &
```

For `ball-n-chain`, just `export TESTNET=ball-n-chain` instead and then run all the same commands.
Note you cannot run both at once without changing the listening ports in the `config.toml`.


## Get Coins

To send transactions, you need an account and some coins. First things first, generate a key:

```
basecli keys new mykey
ME=$(basecli keys get mykey | awk '{print $2}')
echo $ME
```

Now ask someone in the #testnets channel on the [tendermint slack]() to send some coins to your address.
You can check your balance with:

```
basecli query account $ME
```

By default it will look for a local node. To use a remote node, use the `--node` flag.

While you're waiting for coins, initialize the client:

```
basecli init --home ~/.$TESTNET/basecli --chain-id=$TESTNET ---node=tcp://localhost:46657
```

Make sure `$TESTNET` is set to the chain you're expecting to receive coins on.
If you don't have a full node, follow the instructions above to run one, or change `--node` to point to a public node,
for instance `tcp://$TESTNET-node4.testnets.interblock.io:46657`.

## Send Transactions

Once you have coins, you can send funds to a different account:

```
basecli keys new mykey2
ME2=$(basecli keys get mykey2 | awk '{print $2}')

basecli tx send --home ~/.$TESTNET/basecli --name=mykey --amount=5bumblebee --to=0x$ME2 --sequence=1
```

Of course, you may need to replace `5bumblebee` with some number of whatever coins you have.
Remember, you also need to increase the `--sequence` value with each subsequent transaction
from the same accounnt!

You can also send funds to an account on the other blockchain! If we're on `ball-n-chain`, we can send funds to `up-n-comer` like so:

```
basecli tx send --home ~/.ball-n-chain/basecli --name=mykey --amount=5bumblebee --to=up-n-comer/0x$ME --sequence=2
```

Sending coins to an account on a different chain is a simple as just prefixing the address with the chain ID!

Check your balance on the other chain:





