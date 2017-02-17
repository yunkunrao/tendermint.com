<template>
  <div><h1 id=first-abci-app>First ABCI App</h1>
<h2 id=a-first-example>A First Example</h2>
<p>Make sure you <a href=https://golang.org/doc/install>have Go installed</a> and <a href=https://github.com/tendermint/tendermint/wiki/Setting-GOPATH>put <code>$GOPATH/bin</code> in your <code>$PATH</code></a>.</p>
<p>Next, install the <code>abci-cli</code> tool and example applications:</p>
<pre><code>go get -u github.com/tendermint/abci/cmd/...
</code></pre>
<p>Now run <code>abci-cli --help</code> to see the list of commands:</p>
<pre><code>COMMANDS:
   batch        Run a batch of ABCI commands against an application
   console      Start an interactive console for multiple commands
   echo         Have the application echo a message
   info         Get some info about the application
   set_option   Set an option on the application
   deliver_tx    Append a new tx to application
   check_tx     Validate a tx
   commit       Get application Merkle root hash
   help, h      Shows a list of commands or help for one command

GLOBAL OPTIONS:
   --address &quot;tcp://127.0.0.1:46658&quot;    address of application socket
   --help, -h                           show help
   --version, -v                        print the version
</code></pre>
<p>The <code>abci-cli</code> tool lets us send ABCI messages to our application, to help build and debug them.</p>
<p>The most important messages are <code>deliver_tx</code>, <code>check_tx</code>, and <code>commit</code>,
but there are others for convenience, configuration, and information purposes.</p>
<p>Let&#x2019;s start a dummy application. The dummy just stores transactions in a merkle tree:</p>
<pre><code>dummy
</code></pre>
<p>In another terminal, run</p>
<pre><code>abci-cli echo hello
abci-cli info
</code></pre>
<p>The application should echo <code>hello</code> and give you some information about itself.</p>
<p>An ABCI application must provide two things:</p>
<ul>
<li>a socket server</li>
<li>a handler for ABCI messages</li>
</ul>
<p>When we run the <code>abci-cli</code> tool we open a new connection to the application&#x2019;s socket server,
send the given ABCI message, and wait for a response.</p>
<p>The server may be generic for a particular language, and we provide one for Go in <code>abci/server</code>.
There is one for Python in <code>example/python/abci/server.py</code>, and one for Node JS in <code>github.com/tendermint/js-abci</code>.</p>
<p>The handler is specific to the application, and may be arbitrary,
so long as it is deterministic and conforms to the ABCI interface specification.</p>
<p>So when we run <code>abci-cli info</code>, we open a new connection to the ABCI server, which calls the <code>Info()</code> method on the application, which tells us the number of transactions in our Merkle tree.</p>
<p>Now, since every command opens a new connection, we provide the <code>abci-cli console</code> and <code>abci-cli batch</code> commands,
to allow multiple ABCI messages to be sent over a single connection.</p>
<p>Running <code>abci-cli console</code> should drop you in an interactive console for speaking ABCI messages to your application.</p>
<p>Try running these commands:</p>
<pre><code>&gt; echo hello
-&gt; data: hello

&gt; info
-&gt; data: {&quot;size&quot;:0}

&gt; commit
-&gt; data: 0x

&gt; deliver_tx &quot;abc&quot;
-&gt; code: OK

&gt; info
-&gt; data: {&quot;size&quot;:1}

&gt; commit
-&gt; data: 0x750502FC7E84BBD788ED589624F06CFA871845D1

&gt; query &quot;abc&quot;
-&gt; code: OK
-&gt; data: {&quot;index&quot;:0,&quot;value&quot;:&quot;abc&quot;,&quot;exists&quot;:true}

&gt; deliver_tx &quot;def=xyz&quot;
-&gt; code: OK

&gt; commit
-&gt; data: 0x76393B8A182E450286B0694C629ECB51B286EFD5

&gt; query &quot;def&quot;
-&gt; code: OK
-&gt; data: {&quot;index&quot;:1,&quot;value&quot;:&quot;xyz&quot;,&quot;exists&quot;:true}
</code></pre>
<p>Note that if we do <code>deliver_tx &quot;abc&quot;</code> it will store <code>(abc, abc)</code>,
but if we do <code>deliver_tx &quot;abc=efg&quot;</code> it will store <code>(abc, efg)</code>.</p>
<p>Similarly, you could put the commands in a file and run <code>abci-cli --verbose batch &lt; myfile</code>.</p>
<h2 id=another-example>Another Example</h2>
<p>Now that we&#x2019;ve got the hang of it, let&#x2019;s try another application, the &#x201C;counter&#x201D; app.</p>
<p>The counter app doesn&#x2019;t use a Merkle tree, it just counts how many times we&#x2019;ve sent a transaction,
asked for a hash, or committed the state. The result of <code>commit</code> is just the number of transactions sent.</p>
<p>This application has two modes: <code>serial=off</code> and <code>serial=on</code>.</p>
<p>When <code>serial=on</code>, transactions must be a big-endian encoded incrementing integer, starting at 0.</p>
<p>If <code>serial=off</code>, there are no restrictions on transactions.</p>
<p>We can toggle the value of <code>serial</code> using the <code>set_option</code> ABCI message.</p>
<p>When <code>serial=on</code>, some transactions are invalid.
In a live blockchain, transactions collect in memory before they are committed into blocks.
To avoid wasting resources on invalid transactions,
ABCI provides the <code>check_tx</code> message,
which application developers can use to accept or reject transactions,
before they are stored in memory or gossipped to other peers.</p>
<p>In this instance of the counter app, <code>check_tx</code> only allows transactions whose integer is greater than the last committed one.</p>
<p>Let&#x2019;s kill the console and the dummy application, and start the counter app:</p>
<pre><code>counter
</code></pre>
<p>In another window, start the <code>abci-cli console</code>:</p>
<pre><code>&gt; set_option serial on
-&gt; data: serial=on

&gt; check_tx 0x00
-&gt; code: OK

&gt; check_tx 0xff
-&gt; code: OK

&gt; deliver_tx 0x00
-&gt; code: OK

&gt; check_tx 0x00
-&gt; code: BadNonce
-&gt; log: Invalid nonce. Expected &gt;= 1, got 0

&gt; deliver_tx 0x01
-&gt; code: OK

&gt; deliver_tx 0x04
-&gt; code: BadNonce
-&gt; log: Invalid nonce. Expected 2, got 4

&gt; info
-&gt; data: {&quot;hashes&quot;:0,&quot;txs&quot;:2}
</code></pre>
<p>This is a very simple application, but between <code>counter</code> and <code>dummy</code>, its easy to see how you can build out arbitrary application states on top of the ABCI.
In the near future, <code>erisdb</code> of Eris Industries will also run atop ABCI, bringing with it Ethereum-like accounts, the Ethereum virtual-machine, Eris&#x2019;s permissioning scheme, and native contracts extensions.</p>
<p>But the ultimate flexibility comes from being able to write the application easily in any language.</p>
<p>We have implemented the counter in a number of languages (see the example directory).</p>
<p>To run the Node JS version, <code>cd</code> to <code>example/js</code> and run</p>
<pre><code>node app.js
</code></pre>
<p>(you&#x2019;ll have to kill the other counter application process).
In another window, run the console and those previous ABCI commands.
You should get the same results as for the Go version.</p>
<p>Want to write the counter app in your favorite language?! We&#x2019;d be happy to accept the pull request!</p>
<h2 id=next-step>Next Step</h2>
<p>In the next tutorial, we will show how to <router-link to=/intro/getting-started/deploy-testnet>deploy a ABCI testnet</router-link>.</p>
</div>
</template>

<script>
export default {
  mounted () {
    document.title = 'First Abci App - Documentation - Tendermint'
  }
}
</script>
