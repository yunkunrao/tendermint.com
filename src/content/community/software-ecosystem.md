# Software Ecoysystem

An overview of the wider Tendermint software ecosystem

## TMSP Apps

| Name | Language | Author | Description |

| [Basecoin](http://github.com/tendermint/basecoin)
| Go
| Tendermint
| A prototypical account based crypto currency state machine supporting plugins

| [Geth-TMSP](http://github.com/eris-ltd/geth-tmsp)
| Go
| Tendermint
| The go-ethereum state machine run as a TMSP app.

| [Merkle AVL Tree](https://github.com/tendermint/merkleeyes)
| Go
| Tendermint
| Tendermint IAVL tree implemented as tmsp app

| [ErisDB](http://github.com/eris-ltd/erisdb)			
| Go		
| Monax Industries	
| Ethereum Virtual Machine augmented with native permissioning scheme and global key-value store

| [Merkle AVL Tree](https://github.com/jTMSP/MerkleTree)
| Java
| jTMSP
| Tendermint IAVL tree implemented as tmsp app

| [TMChat](https://github.com/wolfposd/TMChat)
| Java
| jTMSP
| P2P chat using Tendermint

| [Comit](https://github.com/zballs/comit)
| Go
| Zach Balder
| Public service reporting and tracking

| [Passwerk](https://github.com/rigelrozanski/passwerk)
| Go
| Rigel Rozanski
| Encrypted storage web-utility backed by Tendermint


## TMSP Servers

| Name | Language | Author | 

| [tmsp](https://github.com/tendermint/tmsp)
| Go
| Tendermint

| [js-tmsp](https://github.com/tendermint/js-tmsp)
| Javascript
| Tendermint

| [cpp-tmsp] (https://github.com/mdyring/cpp-tmsp)
| C++
| Martin Dyring

| [jTMSP](https://github.com/jTMSP/jTMSP)
| Java
| jTMSP

| [Spearmint](https://github.com/dennismckinnon/spearmint)
| Javascript
| Dennis McKinnon

| [ocaml-tmsp](https://github.com/zballs/ocaml-tmsp)
| Ocaml
| Zach Balder


## Deployment Tools

| Name | Technology | Author | Description

| [mintnet](https://github.com/tendermint/mintnet)
| docker-machine 
| Tendermint
| Deploy a Tendermint test network on any provider supported by docker-machine

| [terraform-modules](https://github.com/tendermint/terraform-modules)
| Terraform 
| Tendermint
| Deploy a production Tendermint network with load balancing over multiple AWS availability zones

| [brooklyn-tendermint](https://github.com/cloudsoft/brooklyn-tendermint)
| Clocker for Apache Brooklyn 
| Cloudsoft
| Deploy a tendermint test network in docker containers 


## Competitors (Potential Collaborators!)

| Name | Language | Author | Description | 
| [Hyperledger](https://github.com/hyperledger/fabric)
| Go
| Linux Foundation
| PBFT state machine replication for dynamic set of simple dockerized applications

| [Hydrachain](https://github.com/HydraChain/hydrachain)
| Python
| HydraChain
| Pyethereum adapted to a non-BFT consensus algorithm modelled on Tendermint.

| [Juno](https://github.com/kadena-io/juno)
| Haskell
| Kadena
| Variant of Tangaroa, a BFT version of Raft

| [HoneyBadgerBFT](https://github.com/amiller/HoneyBadgerBFT)
| Python
| Andrew Miller
| Fully asynchronous and highly optimized BFT using secret-sharing
