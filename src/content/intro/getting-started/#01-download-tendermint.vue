<template>
  <div><h1 id=download-tendermint>Download Tendermint</h1>
<p>Tendermint 0.9 has been released.</p>
<div class=download-matrix>
  <div class="os os-mac">
    <div class=os-title>macOS</div>
    <div class=bin>
      <div class=key>Tendermint 0.9</div>
      <div class=value><a href=https://s3-us-west-2.amazonaws.com/tendermint/0.9.0/tendermint_0.9.0_darwin_amd64.zip>Download (64-bit)</a></div>
    </div>
    <div class=bin>
      <div class=key>abci-cli</div>
      <div class=value>Coming Soon</div>
    </div>
    <div class=bin>
      <div class=key>basecoin</div>
      <div class=value>Coming Soon</div>
    </div>
    <div class=bin>
      <div class=key>merkleeyes</div>
      <div class=value>Coming Soon</div>
    </div>
  </div>
  <div class="os os-linux">
    <div class=os-title>Linux</div>
    <div class=bin>
      <div class=key>Tendermint 0.9</div>
      <div class=value><a href=https://s3-us-west-2.amazonaws.com/tendermint/0.9.0/tendermint_0.9.0_linux_amd64.zip>Download (64-bit)</a></div>
    </div>
    <div class=bin>
      <div class=key>abci-cli</div>
      <div class=value>Coming Soon</div>
    </div>
    <div class=bin>
      <div class=key>basecoin</div>
      <div class=value>Coming Soon</div>
    </div>
    <div class=bin>
      <div class=key>merkleeyes</div>
      <div class=value>Coming Soon</div>
    </div>
  </div>
  <div class="os os-win">
    <div class=os-title>Windows</div>
    <div class=bin>
      <div class=key>Tendermint 0.9</div>
      <div class=value><a href=https://s3-us-west-2.amazonaws.com/tendermint/0.9.0/tendermint_0.9.0_windows_amd64.zip>Download (64-bit)</a></div>
    </div>
    <div class=bin>
      <div class=key>abci-cli</div>
      <div class=value>Coming Soon</div>
    </div>
    <div class=bin>
      <div class=key>basecoin</div>
      <div class=value>Coming Soon</div>
    </div>
    <div class=bin>
      <div class=key>merkleeyes</div>
      <div class=value>Coming Soon</div>
    </div>
  </div>
</div>
<h2 id=sha256-checksums>SHA256 Checksums</h2>
<p>Verify your download with these checksums below.</p>
<pre><code>./tendermint_0.9.0_darwin_amd64.zip
ee785fed8186e13e741988affc4e90faac278fe6c26245517f1af8a5589278f1

./tendermint_0.9.0_linux_amd64.zip
697033ea0f34f8b34a8a2b74c4dd730b47dd4efcfce65e53e953bdae8eb14364

./tendermint_0.9.0_windows_amd64.zip
97cbd7d134a22e808effcc9549efaa8294372149e27ce0d2cb25d9eb4dc8e74a
</code></pre>
<h2 id=install-from-source>Install From Source</h2>
<p>If you prefer, you can also install Tendermint <router-link to=/docs/guides/install>from source</router-link>.</p>
<h2 id=next-step>Next Step</h2>
<p>Once you&#x2019;ve installed Tendermint onto your computer, get started by creating your first <router-link to=/intro/getting-started/first-abci-app>ABCI app</router-link>.</p>
</div>
</template>

<script>
export default {
  name: 'page-docs-entry',
  mounted () {
    document.title = '1. Download Tendermint - Documentation - Tendermint'
  }
}
</script>
