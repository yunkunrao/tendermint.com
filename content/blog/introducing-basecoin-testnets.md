~~~
title: "Introducing Basecoin Testnets"
description: "We're launching two Basecoin testnets that can send coins back and forth between each other"
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

It may take some time to sync up. You can see the latest height for remote nodes under the `/status` endpoint, for instance at `http://mercury-node4.testnets.interblock.io:46657/status`.

## Running a Relay

If we want to be able to send funds from one chain to the other, we must ensure some process is relaying the necessary information.
For this, we use the `basecoin relay` command to start a process that listens for outgoing packets from multiple chains and forwards them to their destination.
For now, the relay is quite simple and only works with two chains, and with one node from each chain. So we can use it to relay between the two full nodes 
we're running locally. If you don't run the relay yourself, you will only be able to send coins across chains if someone else does.

For now, we'll run a relay, because we're still cleaning up the tool. Soon, we'll stop running it, and y'all can run them yourselves ;).
If you want to run one already, you can see how it works in the [IBC guide](https://github.com/tendermint/basecoin/blob/master/docs/guide/ibc.md).

### Challenge

After playing with the tools for a bit, and especially after working through the [IBC guide](https://github.com/tendermint/basecoin/blob/master/docs/guide/ibc.md),
it will be possible to find the private key being used for the relay. It has a bunch of coins. Go steal them. Write a blog post about it.
Collect your reward :)

## Get Coins

To send transactions, you need an account and some coins. But to check your account balance securely,
you need to initialize a light-client and authenticate the validator set hash. This only needs to be done once,
and afterwards, all transactions and state can be trustlessly verified! 

The validator hashes for mercury and hermes are:

```
# Validator Set Hashes
mercury: F135CD1311FC01CB71EDD2CAFA296AE006B07644
hermes: 7C7F71CB8888DFBFC98470D57C9B19894A7638E0
```

You can initalize the light-clients to use your local full nodes.
If you don't have a full node, follow the instructions above to run one, or change `--node` to point to a public node,
for instance `tcp://hermes-node4.testnets.interblock.io:46657`.

```
basecli-mercury init --node=tcp://localhost:23457
```

Verify that the validator hash is as above. 
If the command failed, you're not fully synced yet. We need to fix this.
In the meantime, remove the client directory, wait for your node to sync, 
and then try to initialize again:

```
rm -rf ~/.cosmos-testnets/mercury/client
tail -f mercury-tendermint.log

# wait until it slows down. then
basecli-mercury init --node=tcp://localhost:23457
```

Verify the validator hash.

Do the same for hermes:

```
basecli-hermes init --node=tcp://localhost:12347
```

Verify the validator hash.

Now you're ready to generate a key.
We'll generate the key on `hermes`, but you're just as welcome to make keys and request coins on `mercury`.
Note that the same key will not work on multiple chains unless you do some manual work moving files across directories...

```
basecli-hermes keys new mykey
ME=$(basecli-hermes keys get mykey | awk '{print $2}')
echo $ME
```

Now ask someone in the #testnets channel on the [tendermint slack](http://forum.tendermint.com:3000/) to send some coins to your address.
You can check your balance with:

```
basecli-hermes query account $ME
```

## Send Transactions

Once you have coins, you can send funds to a different account:

```
basecli-hermes keys new mykey2
ME2=$(basecli-hermes keys get mykey2 | awk '{print $2}')

basecli-hermes tx send --name=mykey --amount=5bumblebee --to=$ME2 --sequence=1
```

Of course, you may need to replace `5bumblebee` with some number of whatever coins you have.
Remember, you also need to increase the `--sequence` value with each subsequent transaction
from the same account! If you forget what the sequence number should be, check by querying for your account.

You can also send funds to an account on the other blockchain! If we're on `hermes`, we can send funds to `mercury` like so:

```
basecli-mercury keys new mykey
ME3=$(basecli-mercury keys get mykey | awk '{print $2}')

basecli-hermes tx send --name=mykey --amount=5bumblebee --to=mercury/$ME2 --sequence=2
```

Sending coins to an account on a different chain is simple as just prefixing the address with the chain ID!

Now check your balance on `mercury`:

```
basecli-mercury query account $ME3
```

Tada!

## Clean Up

To kill the processes, just run `killall tendermint basecoin`. You should be able to restart them any time.

## Conclusion

Here we demonstrated how to run full nodes on the two testnets, how to run light-clients on them,
and how to send coins between them. The UX is still a little rough, but we wanted to get this out there
so folks could start playing with it and giving feedback. We will continue polishing the tools and rolling out 
upgrades to the testnets as they become available, including letting others become validators. We are also
working on the UI element, but it still needs some love. Stay tuned for a more complete testnet roadmap.

