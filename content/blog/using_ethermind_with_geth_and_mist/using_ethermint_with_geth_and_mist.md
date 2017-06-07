# Using Ethermint with Geth and Mist

## Setup
Please make sure that you have all the following tools installed and can access them through a terminal window.

For the installation of ethermint and tendermint you can follow along with [Part 1](https://tendermint.com/blog/introduction-to-ethermint).

The instructions for installing geth can be found [here](https://github.com/ethereum/go-ethereum) and for installing mist can be found
[here](https://github.com/ethereum/mist).

The end result should be that you can type `ethermint`, `tendermint` and `geth` inside a terminal window with your shell finding the command.

### Initialising Tendermint
`tendermint --home ~/.ethermint/tendermint init`
[pic1]

### Initialising Ethermint
`ethermint --datadir ~/.ethermint init dev/genesis.json`
Please make sure that you are inside the of the ethermint repository to have access to the genesis file. If you want you can also create
a custom genesis file, since tendermint does not mind.
[pic2]

## Running everything together
Currently you need five separate terminal windows to run all the tooling. In the future we will look into decreasing that number.

### Running Tendermint
`tendermint --home ~/.ethermint/tendermint node`
[pic3]

### Running Ethermint
`ethermint --datadir ~/.ethermint --rpc --rpcaddr=0.0.0.0 --ws --wsaddr=0.0.0.0 --rpcapi eth,net,web3,personal,admin`
[pic4]

### Running geth
`geth attach http://localhost:8545`
[pic5]

### Running mist
This happens inside the mist directory.
`cd interface && meteor --no-release-check`
`electron . --rpc http://localhost:8545`
[pic6]
[pic7]
[pic8]

## Conclusion
Getting started with ethermint and the tools from go-ethereum is very easy and will help you get up and running in no time.

If you have any questions, please ask me on twitter (adrian_brink), via slack (tendermint.slack.com) or via email (adrian@tendermint.com).
I am happy to help anyone who has problems getting up and running or who just has a simple question.
 
