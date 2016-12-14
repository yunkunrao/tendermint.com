<template><div><h1>Install Tendermint</h1>
<h2>Install Go</h2>
<p>Make sure you have installed Go and <a href=https://github.com/tendermint/tendermint/wiki/Setting-GOPATH>set the GOPATH</a>.</p>
<h2>Install Tendermint</h2>
<p>You should be able to install the latest with a simple <code>go get -u github.com/tendermint/tendermint/cmd/tendermint</code>.
The <code>-u</code> makes sure all dependencies are updated as well.</p>
<p>See <code>tendermint version</code> and <code>tendermint --help</code> for more.</p>
<p>If it does not work, see Troubleshooting below.</p>
<p>To start a one-node blockchain with a simple in-process application:</p>
<pre><code>tendermint init
tendermint node --proxy_app=dummy
</code></pre>
<p>See the
<router-link to=/docs/guides/app-development>App Development</router-link>
guide for more details on building applications,
and the
<router-link to=/docs/guides/using-tendermint>Using Tendermint</router-link>
guide for more details about using the <code>tendermint</code> program.</p>
<h3>Reinstall</h3>
<p>If you already have Tendermint installed, then you can either set a new <code>$GOPATH</code> and run the previous <code>go get</code> command,
or else fetch and checkout the latest master branch in <code>$GOPATH/src/github.com/tendermint/tendermint</code>,
and from that directory run</p>
<pre><code>go install ./cmd/tendermint
</code></pre>
<h3>Vendored dependencies</h3>
<p>If updated dependencies break builds, install the vendored commits using <code>glide</code>.</p>
<p>Fist, install <code>glide</code>:</p>
<pre><code>go get github.com/Masterminds/glide
</code></pre>
<p>Now, fetch the dependencies and install them with <code>glide</code> and <code>go</code>:</p>
<pre><code>cd $GOPATH/src/github.com/tendermint/tendermint
glide install
go install ./cmd/tendermint
</code></pre>
<p>The latest Tendermint Core version is now installed. Check by running <code>tendermint version</code>.</p>
<h3>Troubleshooting</h3>
<p>If <code>go get</code> failing bothers you, fetch the code using <code>git</code>:</p>
<pre><code>mkdir -p $GOPATH/src/github.com/tendermint
git clone https://github.com/tendermint/tendermint $GOPATH/src/github.com/tendermint/tendermint
</code></pre>
<h2>Next Step</h2>
<p>Learn how to <router-link to=/intro/getting-started/first-tmsp>create your first TMSP app</router-link>.</p>
</div></template>