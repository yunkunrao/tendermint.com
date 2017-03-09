<template>
  <div><h1 id=install-from-source>Install From Source</h1>
<p>This page provides instructions on installing Tendermint from source.
To download pre-built binaries, see the <a href=intro/getting-started/download-tendermint>downloads page</a>.</p>
<h2 id=install-go>Install Go</h2>
<p>Make sure you have installed Go and <a href=https://github.com/tendermint/tendermint/wiki/Setting-GOPATH>set the GOPATH</a>.</p>
<h2 id=install-tendermint>Install Tendermint</h2>
<p>You should be able to install the latest with a simple</p>
<pre><code>go get github.com/tendermint/tendermint/cmd/tendermint
</code></pre>
<p>Run <code>tendermint --help</code> for more.</p>
<p>If the installation failed, a dependency may been updated and become incompatible with the latest Tendermint master branch.
We solve this using the <code>glide</code> tool for dependency management.</p>
<p>Fist, install <code>glide</code>:</p>
<pre><code>go get github.com/Masterminds/glide
</code></pre>
<p>Now we can fetch the correct versions of each dependency by running:</p>
<pre><code>cd $GOPATH/src/github.com/tendermint/tendermint
glide install
go install ./cmd/tendermint
</code></pre>
<p>Note that even though <code>go get</code> originally failed,
the repository was still cloned to the correct location in the <code>$GOPATH</code>.</p>
<p>The latest Tendermint Core version is now installed.</p>
<h3 id=reinstall>Reinstall</h3>
<p>If you already have Tendermint installed, and you make updates,
simply</p>
<pre><code>cd $GOPATH/src/github.com/tendermint/tendermint
go install ./cmd/tendermint
</code></pre>
<p>To upgrade, there are a few options:</p>
<ul>
<li>set a new <code>$GOPATH</code> and run <code>go get github.com/tendermint/tendermint/cmd/tendermint</code>. This makes a fresh copy of everything for the new version.</li>
<li>run <code>go get -u github.com/tendermint/tendermint/cmd/tendermint</code>, where the <code>-u</code> fetches the latest updates for the repository and its dependencies</li>
<li>fetch and checkout the latest master branch in <code>$GOPATH/src/github.com/tendermint/tendermint</code>, and then run <code>glide install &amp;&amp; go install ./cmd/tendermint</code> as above.</li>
</ul>
<p>Note the first two options should usually work, but may fail.
If they do, use <code>glide</code>, as above:</p>
<pre><code>cd $GOPATH/src/github.com/tendermint/tendermint
glide install
go install ./cmd/tendermint
</code></pre>
<p>Since the third option just uses <code>glide</code> right away, it should always work.</p>
<h3 id=troubleshooting>Troubleshooting</h3>
<p>If <code>go get</code> failing bothers you, fetch the code using <code>git</code>:</p>
<pre><code>mkdir -p $GOPATH/src/github.com/tendermint
git clone https://github.com/tendermint/tendermint $GOPATH/src/github.com/tendermint/tendermint
cd $GOPATH/src/github.com/tendermint/tendermint
glide install
go install ./cmd/tendermint
</code></pre>
<h3 id=run>Run</h3>
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
<h2 id=next-step>Next Step</h2>
<p>Learn how to <router-link to=/intro/getting-started/first-abci-app>create your first ABCI app</router-link>.</p>
</div>
</template>

<script>
export default {
  name: 'page-docs-entry',
  mounted () {
    document.title = 'Install from Source - Documentation - Tendermint'
  }
}
</script>
