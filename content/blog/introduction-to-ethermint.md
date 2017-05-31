~~~
title: "Introduction to Ethermint"
description: "Running vanilla Ethereum on top of Tendermint consensus."
date: "2017-05-26"
author: "Adrian Brink"
categories: 
    - "ethermint"
    - "proof-of-stake"
    - "consensus"
    - "tendermint"
~~~

As you might have heard, the Tendermint consensus engine can support almost any
other crypto-currency, as long as the source code is open-source and some 
developer is willing to write an ABCI wrapper around it. 

As part of Tendermint's goal to launch the COSMOS hub, we are enabling Ethereum
to run on top of Tendermint. This allows developers to have all the nice features
of Ethereum, while at the same time benefit from Tendermint's proof of stake 
implementation. Tendermint combined with Ethereum results in fast block times,
transaction finality while also getting the goodies of smart contracts.

## Installation
Depending on how cutting edge you would like to be, you can choose between the
`develop` branch or the `master` branch. **Currently you have to choose the
`develop` branch for Ethermint.**

### Install go1.8
To explore the possibilities of Ethermint you need a couple of prerequisites.
First, you need to have [go1.8](https://golang.org/doc/install) installed and your $GOPATH properly configured.
This is necessary since we are currently not shipping binaries for 
Ethermint.

### Install Tendermint
The second requirement is that you are able to run a Tendermint node, since this
engine handles all the blockchain aspects, like P2P and consensus. To install
Tendermint just run `go get -u github.com/tendermint/tendermint/cmd/tendermint` 
and you should be good to go. If not follow this [link](https://tendermint.com/docs/guides/install).
As an alternative you can also download [binaries](https://tendermint.com/download).

### Install Ethermint
Lastly, we need to install `ethermint` itself. First clone the source code 
(`git clone https://github.com/tendermint/ethermint.git`). Afterwards, switch into
the source code directory and run `make install` and voila, Ethermint should be
installed.

### Install geth
Geth is an Ethereum tool that allows you to attach to a running Ethereum node
over RPC. We will use it later to interact with Ethermint. Please follow this
[guide](https://github.com/ethereum/go-ethereum/wiki/Building-Ethereum) to install
it on your local machine.

## Running Ethermint
### Starting Tendermint
First you need to initialise Tendermint by running
`tendermint --home ~/.ethermint/tendermint init`. This initialises the Tendermint
node. The next step is to run `tendermint --home ~/.ethermint/tendermint node`
to start the Tendermint node.

### Starting Ethermint
In a second terminal window switch into the folder with the Ethermint source
code. Then run `ethermint --datadir ~/.ethermint init dev/genesis.json` to
initialise the Ethermint files. Afterwards, start the Ethermint node by running
`ethermint --datadir ~/.ethermint --rpc --rpcaddr=0.0.0.0 --ws --wsaddr=0.0.0.0 --rpcapi eth,net,web3,personal,admin`.
This tells Ethermint to expose a lot of its functionality over RPC.

At this stage you should see blocks streaming by in both the Tendermint and the
Ethermint windows.

### Attaching geth to Ethermint
In a third terminal window run `geth attach http://localhost:8545`. Now you
should find yourself in a console environment, where you can use the [Web3](https://github.com/ethereum/wiki/wiki/JavaScript-API)
commands to interact with the Ethermint node.

## Conclusion
In this short introduction I have explained how to setup Ethermint and how to 
interact with it using geth. From here, you should be able to develop smart contract
applications or simply send transaction between different accounts.

If you have any trouble setting up any of the above systems or are running
into issues using them, please find me on [slack](https://tendermint.slack.com) under
@adrian, via [twitter](https://twitter.com/adrian_brink) or via email
adrian@tendermint.com .

## Next Up
In my next blog post I will explain how to use docker to setup multiple Ethermint
instances, so that you can experiment with running networks of Ethermint nodes.
Furthermore, I will explain how Ethermint relates to the COSMOS hub.
