</script>
<template>
  <div class="master-detail page-intro-entry">
    <master></master>
    <div class="detail">
      <article-body>
        <entries></entries>
        <h1 id=first-tendermint-app>First Tendermint App</h1>
<p>As a general purpose blockchain engine, Tendermint is agnostic to the application you want to run.
So, to run a complete blockchain that does something useful, you must start two programs:
one is Tendermint Core, the other is your application, which can be written in any programming language.
Recall from <router-link to=/intro/abci-overview>the intro to ABCI</router-link> that Tendermint Core handles all the p2p and consensus stuff,
and just forwards transactions to the application when they need to be validated, or when they&#x2019;re ready to be committed to a block.</p>
<p>In this guide, we show you some examples of how to run an application using Tendermint.</p>
<h2 id=install>Install</h2>
<p>First, make sure you have <router-link to=/intro/getting-started/download-tendermint>installed Tendermint</router-link>.
The first apps we will work with are written in Go.
To install them, you need to <a href=https://golang.org/doc/install>install Go</a> and
<a href=https://github.com/tendermint/tendermint/wiki/Setting-GOPATH>put <code>$GOPATH/bin</code> in your <code>$PATH</code></a>.</p>
<p>Then run</p>
<pre><code>go get -u github.com/tendermint/abci/cmd/...
</code></pre>
<p>If there is an error, download the <code>glide</code> tool to pin the dependencies:</p>
<pre><code>go get github.com/Masterminds/glide
cd $GOPATH/src/github.com/tendermint/abci
glide install
go install ./cmd/...
</code></pre>
<p>Now you should have two apps installed:</p>
<pre><code>dummy --help
counter --help
</code></pre>
<p>Both of these applications are in Go.
But we also want to run an application in another language -
in this case, we&#x2019;ll run a Javascript version of the <code>counter</code>.
To run it, you&#x2019;ll need to <a href=https://nodejs.org/en/download/ >install node</a>.</p>
<p>You&#x2019;ll also need to fetch the relevant repository, from <a href=https://github.com/tendermint/js-abci>https://github.com/tendermint/js-abci</a>.
Since I keep all my code under the <code>$GOPATH</code>, I just <code>go get github.com/tendermint/js-abci &amp;&gt; /dev/null</code>.
Then <code>cd</code> into the <code>example</code> directory within that repository and run <code>npm install</code>.
For instance, if you used <code>go get</code>,</p>
<pre><code>cd $GOPATH/src/github.com/tendermint/js-abci/example
npm install
</code></pre>
<p>Now, let&#x2019;s run some apps!</p>
<h2 id=a-first-example-dummy>A First Example - Dummy</h2>
<p>The dummy app is a <a href=https://en.wikipedia.org/wiki/Merkle_tree>Merkle tree</a> that just stores all transactions.
If the transaction contains an <code>=</code>, eg. <code>key=value</code>,
then the <code>value</code> is stored under the <code>key</code> in the Merkle tree.
Otherwise, the full transaction bytes are stored as the key and the value.</p>
<p>Let&#x2019;s start a dummy application.</p>
<pre><code>dummy
</code></pre>
<p>In another terminal, we can start Tendermint.
If you have never run Tendermint before, use:</p>
<pre><code>tendermint init 
tendermint node
</code></pre>
<p>If you have used Tendermint, you may want to reset the data for a new blockchain by running <code>tendermint unsafe_reset_all</code>.
Then you can run <code>tendermint node</code> to start Tendermint, and connect to the app.
For more details, see <router-link to=/docs/guides/using-tendermint>the guide on using Tendermint</router-link>.</p>
<p>You should see Tendermint making blocks!
We can get the status of our Tendermint node as follows:</p>
<pre><code>curl -s localhost:46657/status
</code></pre>
<p>The <code>-s</code> just silences <code>curl</code>. For nicer output, pipe the result into a tool like <a href=https://stedolan.github.io/jq/ >jq</a>
or <a href=https://github.com/jmhodges/jsonpp>jsonpp</a>.</p>
<p>Now let&#x2019;s send some transactions to the dummy.</p>
<pre><code>curl -s &apos;localhost:46657/broadcast_tx_commit?tx=&quot;abcd&quot;&apos;
</code></pre>
<p>Note the single quote (<code>&apos;</code>) around the url, which ensures that the double quotes (<code>&quot;</code>) are not escaped by bash.
This command sent a transaction with bytes <code>abcd</code>, so <code>abcd</code> will be stored as both the key and the value in the Merkle tree.
The response should look something like:</p>
<pre><code>{&quot;jsonrpc&quot;:&quot;2.0&quot;,&quot;id&quot;:&quot;&quot;,&quot;result&quot;:[98,{&quot;check_tx&quot;:{},&quot;deliver_tx&quot;:{}}],&quot;error&quot;:&quot;&quot;}
</code></pre>
<p>The <code>98</code> is a type-byte, and can be ignored (it&#x2019;s useful for serializing and deserializing arbitrary json).
Otherwise, this result is empty - there&#x2019;s nothing to report on and everything is OK.</p>
<p>We can confirm that our transaction worked and the value got stored by querying the app:</p>
<pre><code>curl -s &apos;localhost:46657/abci_query?data=&quot;abcd&quot;&amp;path=&quot;&quot;&amp;prove=false&apos;
</code></pre>
<p>The <code>path</code> and <code>prove</code> arguments can be ignored for now, and in a future release can be left out.
The result should look like:</p>
<pre><code>{&quot;jsonrpc&quot;:&quot;2.0&quot;,&quot;id&quot;:&quot;&quot;,&quot;result&quot;:[112,{&quot;response&quot;:{&quot;value&quot;:&quot;61626364&quot;,&quot;log&quot;:&quot;exists&quot;}}],&quot;error&quot;:&quot;&quot;}
</code></pre>
<p>Again, the <code>112</code> is the type-byte. Note the <code>value</code> in the result (<code>61626364</code>); this is the hex-encoding of the ASCII of <code>abcd</code>.
You can verify this in a python shell by running <code>&quot;61626364&quot;.decode(&apos;hex&apos;)</code>.
Stay tuned for a future release that makes this output more human-readable ;).</p>
<p>Now let&#x2019;s try setting a different key and value:</p>
<pre><code>curl -s &apos;localhost:46657/broadcast_tx_commit?tx=&quot;name=satoshi&quot;&apos;
</code></pre>
<p>Now if we query for <code>name</code>, we should get <code>satoshi</code>, or <code>7361746F736869</code> in hex:</p>
<pre><code>curl -s &apos;localhost:46657/abci_query?data=&quot;name&quot;&amp;path=&quot;&quot;&amp;prove=false&apos;
</code></pre>
<p>Try some other transactions and queries to make sure everything is working!</p>
<h2 id=another-example-counter>Another Example - Counter</h2>
<p>Now that we&#x2019;ve got the hang of it, let&#x2019;s try another application, the &#x201C;counter&#x201D; app.</p>
<p>The counter app doesn&#x2019;t use a Merkle tree, it just counts how many times we&#x2019;ve sent a transaction,
or committed the state.</p>
<p>This application has two modes: <code>serial=off</code> and <code>serial=on</code>.</p>
<p>When <code>serial=on</code>, transactions must be a big-endian encoded incrementing integer, starting at 0.</p>
<p>If <code>serial=off</code>, there are no restrictions on transactions.</p>
<p>In a live blockchain, transactions collect in memory before they are committed into blocks.
To avoid wasting resources on invalid transactions,
ABCI provides the <code>CheckTx</code> message,
which application developers can use to accept or reject transactions,
before they are stored in memory or gossipped to other peers.</p>
<p>In this instance of the counter app, with <code>serial=on</code>, <code>CheckTx</code> only allows transactions whose integer is greater than the last committed one.</p>
<p>Let&#x2019;s kill the previous instance of tendermint and the dummy application, and start the counter app.
We can enable <code>serial=on</code> with a flag:</p>
<pre><code>counter --serial
</code></pre>
<p>In another window, reset and start Tendermint:</p>
<pre><code>tendermint unsafe_reset_all
tendermint node
</code></pre>
<p>Once again, you can see the blocks streaming by. Let&#x2019;s send some transactions.
Since we have set <code>serial=on</code>, the first transaction must be the number <code>0</code>:</p>
<pre><code>curl localhost:46657/broadcast_tx_commit?tx=0x00
</code></pre>
<p>Note the empty, hence successful, response.
The next transaction must be the number <code>1</code>. If instead, we try to send a <code>5</code>, we get an error:</p>
<pre><code>&gt; curl localhost:46657/broadcast_tx_commit?tx=0x05
{&quot;jsonrpc&quot;:&quot;2.0&quot;,&quot;id&quot;:&quot;&quot;,&quot;result&quot;:[98,{&quot;check_tx&quot;:{},&quot;deliver_tx&quot;:{&quot;code&quot;:3,&quot;log&quot;:&quot;Invalid nonce. Expected 1, got 5&quot;}}],&quot;error&quot;:&quot;&quot;}
</code></pre>
<p>But if we send a <code>1</code>, it works again:</p>
<pre><code>&gt; curl localhost:46657/broadcast_tx_commit?tx=0x01
{&quot;jsonrpc&quot;:&quot;2.0&quot;,&quot;id&quot;:&quot;&quot;,&quot;result&quot;:[98,{&quot;check_tx&quot;:{},&quot;deliver_tx&quot;:{}}],&quot;error&quot;:&quot;&quot;}
</code></pre>
<p>For more details on the <code>broadcast_tx</code> API,
see <router-link to=/docs/guides/using-tendermint>the guide on using Tendermint</router-link>.</p>
<h2 id=example-in-another-language-counterjs>Example in Another Language - CounterJS</h2>
<p>The ultimate flexibility in Tendermint comes from being able to easily write the application in any language.
While we already used the implementation written in Go,
let&#x2019;s now try the Counter application written in Javascript!</p>
<p>Kill the previous <code>counter</code> and <code>tendermint</code> processes.
Change directory to the location of the <code>github.com/tendermint/abci-js</code>.
If you fetched the repository with <code>go get</code>, it would be</p>
<pre><code>cd $GOPATH/src/github.com/tendermint/js-abci
</code></pre>
<p>Now run the app:</p>
<pre><code>node example/app.js
</code></pre>
<p>In another window, reset and start <code>tendermint</code>:</p>
<pre><code>tendermint unsafe_reset_all
tendermint node
</code></pre>
<p>Once again, you should see blocks streaming by - but now, our application is written in javascript!
Try sending some transasctions, like before - the results should be the same:</p>
<pre><code>curl localhost:46657/broadcast_tx_commit?tx=0x00 # ok
curl localhost:46657/broadcast_tx_commit?tx=0x05 # invalid nonce
curl localhost:46657/broadcast_tx_commit?tx=0x01 # ok
</code></pre>
<p>Neat, eh?</p>
<h2 id=a-more-interesting-example-basecoin>A More Interesting Example - Basecoin</h2>
<p>Before concluding, we&#x2019;d like to introduce you to our star application, <a href=https://github.com/tendermint/basecoin>Basecoin</a>.
Unlike the <code>dummy</code> and <code>counter</code>, which are strictly for example purposes,
<code>basecoin</code> is designed to be actually useful - it&#x2019;s a general purpose framework for building cryptocurrencies.</p>
<p>The default <code>basecoin</code> application is a multi-asset cryptocurrency that supports inter-blockchain communication.
For more details on how basecoin works and how to use it, see our <a href=https://github.com/tendermint/basecoin/blob/develop/docs/guide/basecoin-basics.md>basecoin guide</a></p>
<h2 id=next-step>Next Step</h2>
<p>In this tutorial you learned how to run applications using Tendermint on a single node.
You saw how applications could be written in different languages,
and how to send transactions and query for the latest state.
But the true power of Tendermint comes from its ability to securely and efficiently run an application
across a distributed network of nodes, while keeping them all in sync using its state-of-the-art consensus protocol.
This is the subject of the next tutorial, where we show you <router-link to=/intro/getting-started/deploy-testnet>how to deploy Tendermint networks</router-link>.</p>

      </article-body>
    </div>
  </div>
</template>

<script>
import Master from './PageIntroMaster'
import ArticleBody from '@nylira/vue-article-body'
import Entries from './PageIntroEntries'
export default {
  name: 'page-docs-entry',
  components: {
    Master,
    ArticleBody,
    Entries
  },
  mounted () {
    document.title = '2. First ABCI App - Documentation - Tendermint'
  }
}
</script>
