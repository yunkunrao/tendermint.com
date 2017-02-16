<template><div><h1>Using Tendermint</h1>
<p>This is a guide to using the <code>tendermint</code> program from the command line.
It assumes only that you <router-link to=/intro/getting-started/install>have tendermint installed</router-link> and have some rudimentary idea
of what Tendermint and ABCI are.</p>
<p>You can see the help menu with <code>tendermint --help</code>, and the version number with <code>tendermint version</code>.</p>
<h2>Directory Root</h2>
<p>The default directory for blockchain data is <code>~/.tendermint</code>. Override this by setting the <code>TMROOT</code> environment variable.</p>
<h2>Initialize</h2>
<p>Initialize the root directory by running:</p>
<pre><code>tendermint init
</code></pre>
<p>This will create a new private key (<code>priv_validator.json</code>), and a genesis file (<code>genesis.json</code>) containing the associated public key.
This is all that&#x2019;s necessary to run a local testnet with one validator.</p>
<p>For more elaborate initialization, see our quick and dirty deployment tool, <a href=https://github.com/tendermint/mintnet>mintnet</a>.</p>
<h2>Run</h2>
<p>To run a tendermint node, use</p>
<pre><code>tendermint node 
</code></pre>
<p>By default, Tendermint will try to connect to a abci appliction on <a href=127.0.0.1:46658>127.0.0.1:46658</a>.
If you have the <code>dummy</code> ABCI app installed, run it in another window.
If you don&#x2019;t, kill tendermint and run an in-process version with</p>
<pre><code>tendermint node --proxy_app=dummy
</code></pre>
<p>After a few seconds you should see blocks start streaming in.
Note that blocks are produced regularly, even if there are no transactions.
Hopefully we will change this.</p>
<p>Tendermint supports in-process versions of the dummy, counter, and nil apps that ship as examples in the <a href=https://github.com/tendermint/abci>ABCI repository</a>.
It&#x2019;s easy to compile your own app in-process with tendermint if it&#x2019;s written in Go.
If your app is not written in Go, simply run it in another process,
and use the <code>--proxy_app</code> flag to specify the address of the socket it is listening on, for instance</p>
<pre><code>tendermint node --proxy_app=/var/run/abci.sock
</code></pre>
<h2>Transactions</h2>
<p>To send a transaction, use <code>curl</code> to make requests to the Tendermint RPC server:</p>
<pre><code>curl http://localhost:46657/broadcast_tx_commit?tx=\&quot;abcd\&quot;
</code></pre>
<p>For handling responses, we recommend you <a href=http://jmhodges.github.io/jsonpp/ >install the <code>jsonpp</code> tool</a> to pretty print the JSON</p>
<p>We can see the chain&#x2019;s status at the <code>/status</code> end-point:</p>
<pre><code>curl http://localhost:46657/status |  jsonpp
</code></pre>
<p>and the <code>latest_app_hash</code> in particular:</p>
<pre><code>curl http://localhost:46657/status |  jsonpp | grep app_hash
</code></pre>
<p>Visit <a href=http://localhost:46657>http://localhost:46657</a> in your browser to see the list of other endpoints.
Some take no arguments (like <code>/status</code>), while others specify the argument name and use <code>_</code> as a placeholder.</p>
<h2>Reset</h2>
<p>WARNING: UNSAFE. Only do this in development and only if you can afford to lose all blockchain data!</p>
<p>To reset a blockchain, stop the node, remove the <code>~/.tendermint/data</code> directory and run</p>
<pre><code>tendermint unsafe_reset_priv_validator
</code></pre>
<p>This final step is necessary to reset the <code>priv_validator.json</code>,
which otherwise prevents you from making conflicting votes in the consensus
(something that could get you in trouble if you do it on a real blockchain).
If you don&#x2019;t reset the priv_validator, your fresh new blockchain will not make any blocks.</p>
<h2>Configuration</h2>
<p>Tendermint uses a <code>config.toml</code> for configutation. For details, see <router-link to=/docs/internals/configuration>the documentation</router-link>.</p>
<p>Notable options include the socket address of the application (<code>proxy_app</code>),
the listenting address of the tendermint peer (<code>node_laddr</code>),
and the listening address of the rpc server (<code>rpc_laddr</code>).</p>
<p>Some fields from the config file can be overwritten with flags.</p>
<h2>Broadcast API</h2>
<p>Earlier, we used the <code>broadcast_tx_commit</code> endpoint to send a transaction.
When a transaction is sent to a tendermint node,
it will run via <code>CheckTx</code> against the application.
If it passes <code>CheckTx</code>, it will be included in the mempool,
broadcast to other peers, and eventually included in a block.</p>
<p>Since there are multiple phases to processing a transaction, we offer multiple endpoints to broadcast a transaction:</p>
<pre><code>/broadcast_tx_async
/broadcast_tx_sync
/broadcast_tx_commit
</code></pre>
<p>These correspond to no-processing, processing through the mempool, and processing through a block, respectively.
That is, <code>broadcast_tx_async</code>, will return right away without waiting to hear if the transaction is even valid,
while <code>broadcast_tx_sync</code> will return with the result of running the transaction through <code>CheckTx</code>.
Using <code>broadcast_tx_commit</code> will wait until the transaction is committed in a block or until some timeout is reached,
but will return right away if the transaction does not pass <code>CheckTx</code>.
The return value for <code>broadcast_tx_commit</code> includes two fields, <code>check_tx</code> and <code>deliver_tx</code>, pertaining to the result of running
the transaction through those ABCI messages.</p>
<p>The benefit of using <code>broadcast_tx_commit</code> is that the request returns after the transaction is committed (ie. included in a block),
but that can take on the order of a second.
For a quick result, use <code>broadcast_tx_sync</code>,
but the transaction will not be committed until later, and by that point its effect on the state may change.</p>
<p>We are working to improve the API and add more ways to track the status of a transaction and get its results.</p>
<h2>Tendermint Networks</h2>
<p>When <code>tendermint init</code> is run, both a <code>genesis.json</code> and <code>priv_validator.json</code> are created in <code>~/.tendermint</code>.
The <code>genesis.json</code> might look like:</p>
<pre><code>{
	&quot;app_hash&quot;: &quot;&quot;,
	&quot;chain_id&quot;: &quot;test-chain-HZw6TB&quot;,
	&quot;genesis_time&quot;: &quot;0001-01-01T00:00:00.000Z&quot;,
	&quot;validators&quot;: [
		{
			&quot;amount&quot;: 10,
			&quot;name&quot;: &quot;&quot;,
			&quot;pub_key&quot;: [
				1,
				&quot;5770B4DD55B3E08B7F5711C48B516347D8C33F47C30C226315D21AA64E0DFF2E&quot;
			]
		}
	]
}
</code></pre>
<p>And the <code>priv_validator.json</code>:</p>
<pre><code>{
	&quot;address&quot;: &quot;4F4D895F882A18E1D1FC608D102601DA8D3570E5&quot;,
	&quot;last_height&quot;: 0,
	&quot;last_round&quot;: 0,
	&quot;last_signature&quot;: null,
	&quot;last_signbytes&quot;: &quot;&quot;,
	&quot;last_step&quot;: 0,
	&quot;priv_key&quot;: [
		1,
		&quot;F9FA3CD435BDAE54D0BCA8F1BC289D718C23D855C6DB21E8543F5E4F457E62805770B4DD55B3E08B7F5711C48B516347D8C33F47C30C226315D21AA64E0DFF2E&quot;
	],
	&quot;pub_key&quot;: [
		1,
		&quot;5770B4DD55B3E08B7F5711C48B516347D8C33F47C30C226315D21AA64E0DFF2E&quot;
	]
}
</code></pre>
<p>The <code>priv_validator.json</code> actually contains a private key, and should be kept absolutely secret,
but for now we work with the plain text.
Note the <code>last_</code> fields, which prevent us from signing conflicting messages.</p>
<p>Note also that the <code>pub_key</code> (the public key) in the <code>priv_validator.json</code> is also present in the <code>genesis.json</code>.</p>
<p>The genesis file contains the list of public keys which may participate in the consensus,
and their corresponding voting power.
More than 2/3 of the voting power must be active (ie. the corresponding private keys must be producing signatures)
for the consensus to make progress.
In our case, the genesis file contains the public key of our <code>priv_validator.json</code>,
so a tendermint node started with the default root directory will be able to make new blocks,
as we&#x2019;ve already seen.</p>
<p>If we want to add more nodes to the network, we have two choices:
we can add a new validator node, who will also participate in the consensus
by proposing blocks and voting on them,
or we can add a new non-validator node, who will not participate directly,
but will verify and keep up with the consensus protocol.</p>
<h3>Peers</h3>
<p>To connect to peers on start-up, specify them in the <code>config.toml</code> or on the command line.</p>
<p>For instance,</p>
<pre><code>tendermint node --seeds &quot;1.2.3.4:46656,5.6.7.8:46656&quot;
</code></pre>
<p>Alternatively, you can use the <code>/dial_seeds</code> endpoint of the RPC to specify peers for a running node to connect to:</p>
<pre><code>curl --data-urlencode &quot;seeds=[\&quot;1.2.3.4:46656\&quot;,\&quot;5.6.7.8:46656\&quot;]&quot; localhost:46657/dial_seeds
</code></pre>
<p>Additionally, the peer-exchange protocol can be enabled using the <code>--pex</code> flag,
though this feature is still under development (beware of dragons!).
If <code>--pex</code> is enabled, peers will gossip about known peers and form a more resilient network.</p>
<h3>Adding a Non-Validator</h3>
<p>Adding a non-validator is simple. Just copy the original <code>genesis.json</code> to <code>~/.tendermint</code> on the new machine
and start the node, specifying seeds as necessary.
If no seeds are specified, the node won&#x2019;t make any blocks, because it&#x2019;s not a validator,
and it won&#x2019;t hear about any blocks, because it&#x2019;s not connected to the other peer.</p>
<h3>Adding a Validator</h3>
<p>The easiest way to add new validators is to do it in the <code>genesis.json</code>, before starting the network.
For instance, we could make a new <code>priv_validator.json</code>, and copy it&#x2019;s <code>pub_key</code> into the above genesis.</p>
<p>We can generate a new <code>priv_validator.json</code> with the command:</p>
<pre><code>tendermint gen_validator 
</code></pre>
<p>Now we can update our genesis file. For instance, if the new <code>priv_validator.json</code> looks like:</p>
<pre><code>{
        &quot;address&quot;: &quot;AC379688105901436A34A65F185C115B8BB277A1&quot;,
        &quot;last_height&quot;: 0,
        &quot;last_round&quot;: 0,
        &quot;last_signature&quot;: null,
        &quot;last_signbytes&quot;: &quot;&quot;,
        &quot;last_step&quot;: 0,
        &quot;priv_key&quot;: [
                1,
                &quot;0D2ED337D748ADF79BE28559B9E59EBE1ABBA0BAFE6D65FCB9797985329B950C8F2B5AACAACC9FCE41881349743B0CFDE190DF0177744568D4E82A18F0B7DF94&quot;
        ],
        &quot;pub_key&quot;: [
                1,
                &quot;8F2B5AACAACC9FCE41881349743B0CFDE190DF0177744568D4E82A18F0B7DF94&quot;
        ]
}
</code></pre>
<p>then the new <code>genesis.json</code> will be:</p>
<pre><code>{
	&quot;app_hash&quot;: &quot;&quot;,
	&quot;chain_id&quot;: &quot;test-chain-HZw6TB&quot;,
	&quot;genesis_time&quot;: &quot;0001-01-01T00:00:00.000Z&quot;,
	&quot;validators&quot;: [
		{
			&quot;amount&quot;: 10,
			&quot;name&quot;: &quot;&quot;,
			&quot;pub_key&quot;: [
				1,
				&quot;5770B4DD55B3E08B7F5711C48B516347D8C33F47C30C226315D21AA64E0DFF2E&quot;
			]
		},
		{
			&quot;amount&quot;: 10,
			&quot;name&quot;: &quot;&quot;,
			&quot;pub_key&quot;: [
				1,
				&quot;8F2B5AACAACC9FCE41881349743B0CFDE190DF0177744568D4E82A18F0B7DF94&quot;
			]
		}
	]
}
</code></pre>
<p>Update the <code>genesis.json</code> in <code>~/.tendermint</code>. Copy the genesis file and the new <code>priv_validator.json</code>
to the <code>~/.tendermint</code> on a new machine.</p>
<p>Now run <code>tendermint node</code> on both machines, and use either <code>--seeds</code> or the <code>/dial_seeds</code> to get them to peer up.
They should start making blocks, and will only continue to do so so long as both of them are online.</p>
<p>To make a Tendermint network that can tolerate one of the validators failing, you need at least four validator nodes.</p>
<p>Updating validators in a live network is supported as of v0.8, but it must be explicitly programmed by the application developer.
See the <router-link to=/docs/guides/app-development#Handshake>application developers guide</router-link> for more details.</p>
<h3>Local Network</h3>
<p>To run a network locally, say on a single machine, you must change the <code>_laddr</code> fields in the <code>config.toml</code> (or using the flags)
so that the listening addresses of the various sockets don&#x2019;t conflict.
Additionally, you must set <code>addrbook_strict=false</code> in the <code>config.toml</code>,
otherwise Tendermint&#x2019;s p2p library will deny making connections to peers with the same IP address.</p>
<h2>More</h2>
<p>Got a couple nodes talking to each other using the dummy app?
Try a more sophisticated app like <a href=https://github.com/tendermint/ethermint>Ethermint</a>,
or learn more about building your own in the <router-link to=/docs/guides/app-development>Application Developer&#x2019;s Guide</router-link>.</p>
</div></template>
