<template>
  <div><h1 id=deploy-a-testnet>Deploy a Testnet</h1>
<p>Now that we&#x2019;ve seen how ABCI works, and even played with a few applications on a single validator node,
it&#x2019;s time to deploy a test network to four validator nodes.
For this deployment, we&#x2019;ll use the <code>basecoin</code> application.</p>
<h2 id=manual-deployments>Manual Deployments</h2>
<p>It&#x2019;s relatively easy to setup a Tendermint cluster manually.
The only requirements for a particular Tendermint node are a private key for the validator,
stored as <code>priv_validator.json</code>, and a list of the public keys of all validators, stored as <code>genesis.json</code>.
These files should be stored in <code>~/.tendermint</code>, or wherever the <code>$TMROOT</code> variable might be set to.</p>
<p>Here are the steps to setting up a testnet manually:</p>
<ol>
<li>Provision nodes on your cloud provider of choice</li>
<li>Install Tendermint and the application of interest on all nodes</li>
<li>Generate a private key for each validator using <code>tendermint gen_validator</code></li>
<li>Compile a list of public keys for each validator into a <code>genesis.json</code> file.</li>
<li>Run <code>tendermint node --seeds=&lt; seed addresses &gt;</code> on each node, where <code>&lt; seed addresses &gt;</code> is a
comma separated list of the IP:PORT combination for each node. The default port for Tendermint is <code>46656</code>.
Thus, if the IP addresses of your nodes were <code>192.168.0.1, 192.168.0.2, 192.168.0.3, 192.168.0.4</code>,
the command would look like: <code>tendermint node --seeds=192.168.0.1:46656,192.168.0.2:46656,192.168.0.3:46656,192.168.0.4:46656</code>.</li>
</ol>
<p>After a few seconds, all the nodes should connect to eachother and start making blocks!
For more information, see the Tendermint Networks section of <router-link to=/docs/guides/using-tendermint>the guide to using Tendermint</router-link>.</p>
<h2 id=automated-deployments>Automated Deployments</h2>
<p>While the manual deployment is easy enough, an automated deployment is always better.
For this, we have the <a href=https://github.com/tendermint/mintnet-kubernetes>mintnet-kubernetes tool</a>,
which allows us to automate the deployment of a Tendermint network on an already provisioned kubernetes cluster.</p>
<p>For more details, see the <a href=https://github.com/tendermint/mintnet-kubernetes>mintnet-kubernetes repo</a>,
and check out <a href=https://cloud.google.com/ >Google Cloud Platform</a> for simple provisioning of kubernetes clusters.</p>
<p>TODO: a better tutorial here, and Ansible/Terraform.</p>
<h2 id=next-steps>Next Steps</h2>
<p>Done trying out the testnet? Continue <router-link to=/intro/getting-started/next-steps>onwards</router-link>.</p>
</div>
</template>

<script>
export default {
  name: 'page-docs-entry',
  mounted () {
    document.title = '3. Deploy Testnet - Documentation - Tendermint'
  }
}
</script>
