# Configuration

TendermintCore can be configured via a TOML file in `$TMROOT/config.toml`.  Some of these parameters can be overridden by command-line flags.

### Config parameters

The main config parameters are defined [here](https://github.com/tendermint/tendermint/blob/master/config/tendermint/config.go).

* `genesis_file`: The location of the genesis file.  _Default_: `"$TMROOT/genesis.json"`
* `proxy_app`: The ABCI app endpoint.  _Default_: `"tcp://127.0.0.1:46658"`
* `moniker`: Name of this node.  _Default_: `"anonymous"`
* `node_laddr`: TendermintCore listen address.  _Default_: `"0.0.0.0:46656"`
* `fast_sync`: Whether to sync faster from the block pool.  _Default_: `true`
* `seeds`: Initial peers to connect to.  e.g. `"addr1:46656,addr2:46656"`  _Default_: `""`
* `skip_upnp`: Skip UPNP detection.  _Default_: `false`
* `addrbook_file`: Peer address book.  _Default_: `"$TMROOT/addrbook.json"`.  **NOT USED**
* `priv_validator_file`: Validator private key file.  _Default_: `"$TMROOT/priv_validator.json"`
* `db_backend`: Database backend for the blockchain and TendermintCore state.  `leveldb` or `memdb`.  _Default_: `"leveldb"`
* `db_dir`: Database dir.  _Default_: `"$TMROOT/data"`
* `log_level`: _Default_: `"info"`
* `rpc_laddr`: RPC listen address. _Default_: `"0.0.0.0:46657"`
* `prof_laddr`: Profile listen address. _Default_: `""`
* `revision_file`: **TODO**
* `cswal`: Consensus state WAL.  _Default_: `"$TMROOT/data/cswal"`
* `cswal_light`: Whether to use light-mode for Consensus state WAL.  _Default_: `false`
* `block_size`: Maximum number of block txs.  _Default_: `10000`
* `disable_data_hash`: Disable Merkle-izing block txs. _Default_: `false`
* `timeout_*`: Various consensus timeout parameters **TODO**
* `mempool_*`: Various mempool parameters **TODO**

**TODO** Document command-line flag parameters from [here](https://github.com/tendermint/tendermint/blob/master/cmd/tendermint/flags.go)
