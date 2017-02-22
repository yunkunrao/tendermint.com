<template>
  <div><h1 id=genesis>Genesis</h1>
<p>The genesis.json file in <code>$TMROOT</code> defines the initial TendermintCore state upon genesis of the blockchain (<a href=https://github.com/tendermint/tendermint/blob/master/types/genesis.go>see definition</a>).</p>
<p>NOTE: This does not (yet) specify the application state (e.g. initial distribution of tokens). Currently we leave it up to the application to load the initial application genesis state.  In the future, we may include genesis SetOption messages that get passed from TendermintCore to the app upon genesis.</p>
<h3 id=fields>Fields</h3>
<ul>
<li><code>genesis_time</code>: Official time of blockchain start.</li>
<li><code>chain_id</code>: ID of the blockchain.  This must be unique for every blockchain.  If your testnet blockchains do not have unique chain IDs, you will have a bad time.</li>
<li><code>validators</code>:
<ul>
<li><code>pub_key</code>: The first element specifies the pub_key type. 1 == Ed25519.  The second element are the pubkey bytes.</li>
<li><code>amount</code>: The validator&#x2019;s voting power.</li>
<li><code>name</code>: Name of the validator (optional).</li>
</ul>
</li>
<li><code>app_hash</code>: The expected application hash (as returned by the <code>Commit</code> ABCI message) upon genesis.  If the app&#x2019;s hash does not match, a warning message is printed.</li>
</ul>
<h3 id=sample-genesisjson>Sample genesis.json</h3>
<p>This example is from the Basecoin mintnet example (<a href=https://github.com/tendermint/mintnet/blob/master/examples/basecoin/mach1/core/genesis.json>link to file</a>).</p>
<pre><code class=language-json>{
  &quot;genesis_time&quot;: &quot;2016-02-05T06:02:31.526Z&quot;,
  &quot;chain_id&quot;: &quot;chain-tTH4mi&quot;,
  &quot;validators&quot;: [
    {
      &quot;pub_key&quot;: [
        1,
        &quot;9BC5112CB9614D91CE423FA8744885126CD9D08D9FC9D1F42E552D662BAA411E&quot;
      ],
      &quot;amount&quot;: 1,
      &quot;name&quot;: &quot;mach1&quot;
    },
    {
      &quot;pub_key&quot;: [
        1,
        &quot;F46A5543D51F31660D9F59653B4F96061A740FF7433E0DC1ECBC30BE8494DE06&quot;
      ],
      &quot;amount&quot;: 1,
      &quot;name&quot;: &quot;mach2&quot;
    },
    {
      &quot;pub_key&quot;: [
        1,
        &quot;0E7B423C1635FD07C0FC3603B736D5D27953C1C6CA865BB9392CD79DE1A682BB&quot;
      ],
      &quot;amount&quot;: 1,
      &quot;name&quot;: &quot;mach3&quot;
    },
    {
      &quot;pub_key&quot;: [
        1,
        &quot;4F49237B9A32EB50682EDD83C48CE9CDB1D02A7CFDADCFF6EC8C1FAADB358879&quot;
      ],
      &quot;amount&quot;: 1,
      &quot;name&quot;: &quot;mach4&quot;
    }
  ],
  &quot;app_hash&quot;: &quot;15005165891224E721CB664D15CB972240F5703F&quot;
}
</code></pre>
</div>
</template>

<script>
export default {
  name: 'page-docs-entry',
  mounted () {
    document.title = 'Genesis - Documentation - Tendermint'
  }
}
</script>
