<template><div><h1>Deploy a Testnet</h1>
<h2>Tendermint Core</h2>
<p>Now that we&#x2019;ve seen how TMSP works, and even played with a few applications using the <code>tmsp-cli</code> tool,
let&#x2019;s run an actual Tendermint node.</p>
<p>When running a live application, a Tendermint node takes the place of the <code>tmsp-cli</code> tool by sending TMSP requests
to the application: many <code>append_tx</code> msgs to run transactions followed by a <code>commit</code> to get the application Merkle root hash, and so on.</p>
<p>First, we need to initialize a genesis file and a validator key in <code>~/.tendermint</code>:</p>
<pre><code>tendermint init
</code></pre>
<p>You can change the directory by setting the <code>$TMROOT</code> environment variable.</p>
<p>Now,</p>
<pre><code>tendermint node
</code></pre>
<p>Tendermint will try to connect to a tmsp appliction by default on <a href=127.0.0.1:46658>127.0.0.1:46658</a>,
but you probably don&#x2019;t have one running yet.</p>
<p>So in another window, lets start the <code>dummy</code> app,</p>
<pre><code>dummy
</code></pre>
<p>After a few seconds you should see blocks start streaming in!</p>
<p>Now you can send transactions through the Tendermint RPC server with curl requests, or from your browser:</p>
<pre><code>curl http://localhost:46657/broadcast_tx?tx=\&quot;abcd\&quot;
</code></pre>
<p>For handling responses, we recommend you <a href=http://jmhodges.github.io/jsonpp/ >install the <code>jsonpp</code> tool</a> to pretty print the JSON</p>
<p>We can see the chain&#x2019;s status at the <code>/status</code> end-point:</p>
<pre><code>curl http://localhost:46657/status |  jsonpp
</code></pre>
<p>and the <code>latest_app_hash</code> in particular:</p>
<pre><code>curl http://localhost:46657/status |  jsonpp | grep app_hash
</code></pre>
<p>visit <a href=http://localhost:46657>http://localhost:46657</a> in your browser to see the other endpoints.</p>
<p>For more details, see the <router-link to=/docs/guides/using-tendermint>Using Tendermint Guide</router-link>.</p>
<h2>Deploy a Tendermint Testnet</h2>
<p>Now that we&#x2019;ve run a single Tendermint node with one validator and a couple applications,
let&#x2019;s deploy a testnet to run our application with four validators.</p>
<p>For this part of the tutorial, we assume you have an account at <a href=https://www.digitalocean.com/ >DigitalOcean</a> and are willing to
pay to start some new droplets to run your nodes. You can of course stop and destroy them at any time.</p>
<p>First, install <a href=https://docs.docker.com/machine/install-machine/ ><code>docker-machine</code></a> and get a DigitalOcean account and access token.</p>
<p>Then, install <code>mintnet</code>.</p>
<pre><code>go get github.com/tendermint/mintnet
</code></pre>
<p>To provision machines on DigitalOcean:</p>
<pre><code>mintnet create -- --driver=digitalocean --digitalocean-image=docker --digitalocean-access-token=YOUR_ACCCESS_TOKEN
</code></pre>
<p>You can leave out the <code>--digitalocean-access-token</code> flag if you set your <code>DIGITALOCEAN_ACCESS_TOKEN</code> environment variable.</p>
<p>By default this creates 4 new machines.  Check the help messages for more info, e.g. <code>mintnet create --help</code>.</p>
<p>Next, create the testnet configuration folders.</p>
<pre><code>mintnet init chain mytest_dir/
</code></pre>
<p>This creates directories in <code>mytest</code> for the application.</p>
<pre><code>ls mytest_dir/
  chain_config.json # list of validator pubkeys and ip:ports
  app   # Common configuration directory for your blockchain applicaiton
  core  # Common configuration directory for Tendermint core
  data  # Common configuration directory for the Merkleyes key-value store
  mach1 # Configuration directory for the Tendermint core daemon on machine 1
  mach2 # Configuration directory for the Tendermint core daemon on machine 2
  mach3 # Configuration directory for the Tendermint core daemon on machine 3
  mach4 # Configuration directory for the Tendermint core daemon on machine 4
</code></pre>
<p>You can change the files in the app folder to change which TMSP application run on your testnet.
The default script app/init.sh gets run on each node to install the TMSP application straight from Github.
Edit core/init.sh to change the Tendermint version being run.</p>
<p>Now start the testnet service.</p>
<pre><code>mintnet start mytest mytest_dir/
</code></pre>
<p>You can stop and remove the application as well.</p>
<pre><code>mintnet stop mytest; mintnet rm mytest
</code></pre>
<p>Don&#x2019;t forget to destroy your provisioned machines!</p>
<pre><code>mintnet destroy --machines=&quot;mach1,mach2,mach3,mach4&quot;
</code></pre>
<p>Note you can use the <code>--machines</code> flag on any command to specify machines,
for instance <code>--machines mach[1-3],mach7</code> will apply to mach1, mach2, mach3, and mach7.</p>
<p>TODO: Document tutorial on docker-machine ssh mach1, docker ps, etc, or at least link to good Docker tutorials.</p>
<h2>Next Steps</h2>
<p>Done trying out the testnet? Continue <router-link to=/intro/getting-started/next-steps>onwards</router-link>.</p>
</div></template>