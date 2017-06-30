~~~
title: "Join the Ethermint Testnet - Part 3"
description: "We're launching our first Ethermint testnet. It allows you to do everything you can do with the standard go-ethereum network, but it 10-times the speed and a much lower cost per transaction"
date: "2017-06-29"
categories:
    - "testnet"
    - "ethermint"
    - "go-ethereum"
    - "tendermint"
~~~

We're happy to announce the availability of our first Ethermint testnet, code-named **VENUS**. It combines all the
amazing features of go-ethereum with the incredible advancements made by Tendermint in terms
of Proof-of-Stake, scalability, speed and transaction cost.

We are hosting seven validators that secure the testnet on servers world-wide and invite
the community to run their own full-nodes. In the next month we will work on enabling 
upgrading the validator set, at which point we will invite the community to also run their own
validator nodes.

## Install
To connect to **VENUS** you will need two pieces of software.
The first one is Tendermint, which runs the core engine and the second one is Ethermint, which
enables the running of smart contract and sending transactions through go-ethereum.

You have two options to install get those programs. 

### Binaries
The first one is to download the binaries
for [Tendermint](https://github.com/tendermint/tendermint/releases/tag/v0.10.1) and [Ethermint](https://github.com/tendermint/ethermint/releases/tag/v0.3.0)
and move them into your path.

Assuming that you have downloaded the binaries for your correct platform into `~/Downloads` and
have unzipped them by double-clicking you can move them into your `$PATH` like so:
```bash
mv ethermint /usr/bin/ethermint

mv tendermint /usr/bin/tendermint
```
These instructions only apply for Unix based systems. If you are on windows please consult the
github repositories for [Tendermint](https://github.com/tendermint/tendermint) and [Ethermint](https://github.com/tendermint/ethermint).

To install from source, please follow the [first part](https://medium.com/@adrian_brink/introducing-ethermint-4551ff5aece2) and the [second part](https://blog.cosmos.network/using-ethermint-with-geth-and-mist-d4b7715abbd9) of this series.

Check that everything is installed:
```bash
# v.10.0
tendermint version

# v0.3.0
ethermint version
```
If you get the error `Command not found`, it means that Tendermint and Ethermint aren't installed correctly.
Please go back through the instructions and let us know on twitter or github.

### Preliminaries
Now you can fetch the newest testnet repository, which contains some initialisation files and an install script.
```bash
TESTNET_FILES=~/.cosmos-testnets/files

git clone https://github.com/tendermint/testnets $TESTNET_FILES

cd $TESTNET_FILES
```

If you already cloned this before just run:
```bash
TESTNET_FILES=~/.cosmos-testnets/files

cd $TESTNET_FILES

git pull origin master
```

Now you can run the install script to setup a couple of useful environment variables, create
directories and copy the configuration files into place:
```bash
source scripts/testnet-setup.sh
```
The install script also creates some useful aliases for us.
We encourage you to inspect the script - it is quite simple!

## Connecting to **VENUS**
*If you prefer to see all the output in the terminal like me, you can remove `&> xxx.log &` from the commands below.*

Now the cool part starts. To connect to the **VENUS** testnet you need to initialise Ethermint
with its genesis state. In order to do that, just run:
```bash
ethermint-venus init $TESTNET_FILES/venus/ethermint/genesis.json &> venus-ethermint.log &
```

Now you are ready to start the Tendermint core engine by running:
```bash
tendermint-venus node &> venus-tendermint.log &
```

And lastly you need to start the Ethermint instance by running:
```bash
ethermint-venus --rpc --rpcaddr=0.0.0.0 --rpccorsdomain=* --ws --wsaddr=0.0.0.0  --rpcapi eth,net,web3,personal,admin,txpool &> venus-ethermint.log &
```

You are now running a full ethermint node that is syncing with the venus testnet. You can check
on its progress with `tail -f venus-ethermint.log` and `tail -f venus-tendermint.log`.

Initially it will take quite some time to sync up. You can see the latest height for the remote
node [here](http://venus-node0.testnets.interblock.io:46657/status).

## Interacting with the Ethermint network
Now you can follow the guide from [Part 2](https://blog.cosmos.network/using-ethermint-with-geth-and-mist-d4b7715abbd9) to connect `geth` and `Mist` to your full ethermint node
and to send transactions.

## Conclusion
In this part of the series I have explained how to connect to **VENUS**, the Ethermint testnet and how to take advantage of
blazzing fast block time to send transactions.

In the near future I will also be publishing benchmarking results, cost per transactions comparisons and use cases that
can only be tackled with Ethermint and not the standard Ethereum networks.

If you have any questions, please ask me on [twitter](https://twitter.com/adrian_brink), via [slack](http://slack.cosmos.network/) or via [email](mailto:adrian@tendermint.com).
I am happy to help anyone who has problems getting up and running or who just has a simple question.





