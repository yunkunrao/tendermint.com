<template><div><h1>RPC</h1>
<p>Tendermint supports the following RPC protocols:</p>
<ul>
<li>URI over HTTP</li>
<li>JSONRPC over HTTP</li>
<li>JSONRPC over websockets</li>
</ul>
<h3>Configuration</h3>
<p>Set the <code>rpc_laddr</code> config parameter in the $TMROOT/config.toml file or the <code>--rpc-laddr</code> command-line flag to the desired listener:port setting.  Default: <code>0.0.0.0:46657</code>.</p>
<h3>Arguments</h3>
<p>Arguments which expect strings or byte arrays may be passed as quoted strings, like <code>&quot;abc&quot;</code> or as <code>0x</code>-prefixed strings, like <code>0x616263</code></p>
<h3>URI/HTTP</h3>
<p>Example request:</p>
<pre><code class=language-bash>curl &apos;http://localhost:46657/broadcast_tx_sync?tx=&quot;abc&quot;&apos; | jq 
</code></pre>
<p>Response:</p>
<pre><code class=language-json>{&quot;jsonrpc&quot;:&quot;2.0&quot;,&quot;id&quot;:&quot;&quot;,&quot;result&quot;:[96,{&quot;code&quot;:0,&quot;data&quot;:&quot;&quot;,&quot;log&quot;:&quot;&quot;}],&quot;error&quot;:&quot;&quot;}

</code></pre>
<p>The first entry in the result-array (<code>96</code>) is the method this response correlates with. <code>96</code> refers to &#x201C;ResultTypeBroadcastTx&#x201D;, see <a href=https://github.com/tendermint/tendermint/blob/master/rpc/core/types/responses.go>responses.go</a> for a complete overview.</p>
<h3>JSONRPC/HTTP</h3>
<p>JSONRPC requests can be POST&#x2019;d to the root RPC endpoint via HTTP (e.g. <code>http://localhost:46657/</code>).</p>
<p>Example request:</p>
<pre><code class=language-json>{
  &quot;method&quot;: &quot;broadcast_tx_sync&quot;,
  &quot;jsonrpc&quot;: &quot;2.0&quot;,
  &quot;params&quot;: [ &quot;abc&quot; ],
  &quot;id&quot;: &quot;dontcare&quot;
}
</code></pre>
<h3>JSONRPC/websockets</h3>
<p>JSONRPC requests can be made via websocket.  The websocket endpoint is at <code>/websocket</code>, e.g. <code>http://localhost:46657/websocket</code>.  Asynchronous RPC functions like event <code>subscribe</code> and <code>unsubscribe</code> are only available via websockets.</p>
<h3>Endpoints</h3>
<p>An HTTP Get request to the root RPC endpoint (e.g. <code>http://localhost:46657</code>) shows a list of available endpoints.</p>
<pre><code>Available endpoints:
http://localhost:46657/dump_consensus_state
http://localhost:46657/genesis
http://localhost:46657/net_info
http://localhost:46657/num_unconfirmed_txs
http://localhost:46657/status
http://localhost:46657/unconfirmed_txs
http://localhost:46657/unsafe_stop_cpu_profiler
http://localhost:46657/validators

Endpoints that require arguments:
http://localhost:46657/block?height=_
http://localhost:46657/blockchain?minHeight=_&amp;maxHeight=_
http://localhost:46657/broadcast_tx_async?tx=_
http://localhost:46657/broadcast_tx_sync?tx=_
http://localhost:46657/dial_seeds?seeds=_
http://localhost:46657/subscribe?event=_
http://localhost:46657/unsafe_set_config?type=_&amp;key=_&amp;value=_
http://localhost:46657/unsafe_start_cpu_profiler?filename=_
http://localhost:46657/unsafe_write_heap_profile?filename=_
http://localhost:46657/unsubscribe?event=_
</code></pre>
<h3>More Examples</h3>
<p>See the various bash tests using curl in <code>test/</code>, and examples using the <code>Go</code> API in <code>rpc/test/</code>. Tendermint uses the <a href=https://github.com/tendermint/go-rpc>go-rpc</a> library, with docs at <a href=https://godoc.org/github.com./tendermint/go-rpc/client>https://godoc.org/github.com./tendermint/go-rpc/client</a>.</p>
</div></template>
