<template>
  <div><h1 id=configuration>Configuration</h1>
<p>TendermintCore can be configured via a TOML file in <code>$TMROOT/config.toml</code>.  Some of these parameters can be overridden by command-line flags.</p>
<h3 id=config-parameters>Config parameters</h3>
<p>The main config parameters are defined <a href=https://github.com/tendermint/tendermint/blob/master/config/tendermint/config.go>here</a>.</p>
<ul>
<li><code>genesis_file</code>: The location of the genesis file.  <em>Default</em>: <code>&quot;$TMROOT/genesis.json&quot;</code></li>
<li><code>proxy_app</code>: The ABCI app endpoint.  <em>Default</em>: <code>&quot;tcp://127.0.0.1:46658&quot;</code></li>
<li><code>moniker</code>: Name of this node.  <em>Default</em>: <code>&quot;anonymous&quot;</code></li>
<li><code>node_laddr</code>: TendermintCore listen address.  <em>Default</em>: <code>&quot;0.0.0.0:46656&quot;</code></li>
<li><code>fast_sync</code>: Whether to sync faster from the block pool.  <em>Default</em>: <code>true</code></li>
<li><code>seeds</code>: Initial peers to connect to.  e.g. <code>&quot;addr1:46656,addr2:46656&quot;</code>  <em>Default</em>: <code>&quot;&quot;</code></li>
<li><code>skip_upnp</code>: Skip UPNP detection.  <em>Default</em>: <code>false</code></li>
<li><code>addrbook_file</code>: Peer address book.  <em>Default</em>: <code>&quot;$TMROOT/addrbook.json&quot;</code>.  <strong>NOT USED</strong></li>
<li><code>priv_validator_file</code>: Validator private key file.  <em>Default</em>: <code>&quot;$TMROOT/priv_validator.json&quot;</code></li>
<li><code>db_backend</code>: Database backend for the blockchain and TendermintCore state.  <code>leveldb</code> or <code>memdb</code>.  <em>Default</em>: <code>&quot;leveldb&quot;</code></li>
<li><code>db_dir</code>: Database dir.  <em>Default</em>: <code>&quot;$TMROOT/data&quot;</code></li>
<li><code>log_level</code>: <em>Default</em>: <code>&quot;info&quot;</code></li>
<li><code>rpc_laddr</code>: RPC listen address. <em>Default</em>: <code>&quot;0.0.0.0:46657&quot;</code></li>
<li><code>prof_laddr</code>: Profile listen address. <em>Default</em>: <code>&quot;&quot;</code></li>
<li><code>revision_file</code>: <strong>TODO</strong></li>
<li><code>cswal</code>: Consensus state WAL.  <em>Default</em>: <code>&quot;$TMROOT/data/cswal&quot;</code></li>
<li><code>cswal_light</code>: Whether to use light-mode for Consensus state WAL.  <em>Default</em>: <code>false</code></li>
<li><code>block_size</code>: Maximum number of block txs.  <em>Default</em>: <code>10000</code></li>
<li><code>disable_data_hash</code>: Disable Merkle-izing block txs. <em>Default</em>: <code>false</code></li>
<li><code>timeout_*</code>: Various consensus timeout parameters <strong>TODO</strong></li>
<li><code>mempool_*</code>: Various mempool parameters <strong>TODO</strong></li>
</ul>
<p><strong>TODO</strong> Document command-line flag parameters from <a href=https://github.com/tendermint/tendermint/blob/master/cmd/tendermint/flags.go>here</a></p>
</div>
</template>

<script>
export default {
  name: 'page-docs-entry',
  mounted () {
    document.title = 'Configuration - Documentation - Tendermint'
  }
}
</script>
