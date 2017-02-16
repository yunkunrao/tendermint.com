<template><div><h1>Application Architecture Guide</h1>
<h2>Overview</h2>
<p>A blockchain application is more than the consensus engine and the transaction logic (eg. smart contracts, business logic) as implemented in the ABCI app.  There are also (mobile, web, desktop) clients that will need to connect and make use of the app.  We will assume for now that you have a well designed transactions and database model, but maybe this will be the topic of another article.  This article is more interested in various ways of setting up the &#x201C;plumbing&#x201D; and connecting these pieces, and demonstrating some evolving best practices.</p>
<h2>Security</h2>
<p>A very important aspect when constructing a blockchain is security.  The consensus model can be DoSed (no consensus possible) by corrupting 1/3 of the validators and exploited (writing arbitrary blocks) by corrupting 2/3 of the validators. So, while the security is not that of the &#x201C;weakest link&#x201D;, you should take care that the &#x201C;average link&#x201D; is sufficiently hardened.</p>
<p>One big attack surface on the validators is the communication between the ABCI app and the tendermint core.  This should be highly protected. Ideally, the app and the core are running on the same machine, so no external agent can target the communication channel.  You can use unix sockets (with permissions preventing access from other users), or even compile the two apps into one binary if the ABCI app is also writen in go (@ebuchman says this is possible). If you are unable to do that due to language support, then the ABCI app should bind a TCP connection to localhost (127.0.0.1), which is less efficient and secure, but still not reachable from outside.  If you must run the ABCI app and tendermint core on separate machines, make sure you have a secure communication channel (ssh tunnel?)</p>
<p>Now assuming, you have linked together your app and the core securely, you must also make sure no one can get on the machine it is hosted on.  At this point it is basic network security. Run on a secure operating system (SELinux?). Limit who has access to the machine (user accounts, but also where the physical machine is hosted).  Turn off all services except for ssh, which should only be accessible by some well-guarded public/private key pairs (no password). And maybe even firewall off access to the ports used by the validators, so only known validators can connect.</p>
<p>There was also a suggestion on slack from @jhon about compiling everything together with a unikernel for more security, such as <a href=https://mirage.io>Mirage</a> or <a href=https://github.com/emc-advanced-dev/unik>UNIK</a>.</p>
<h2>Connecting your client to the blockchain</h2>
<h3>Tendermint Core RPC</h3>
<p>I believe this was the original design from @ebuchman.  The concept is that the ABCI app is completely hidden from the outside world and only communicated through a tested and secured <router-link to=/docs/internals/rpc>interface exposed by the tendermint core</router-link>. This interface exposes a lot of data on the block header and consensus process, which is quite useful for externally verifying the system.  It also includes 3(!) methods to broadcast a transaction (propose it for the blockchain, and possibly await a response).  And one method to query app-specific data from the ABCI application.</p>
<p>Pros:</p>
<ul>
<li>Server code already written</li>
<li>Access to block headers to validate merkle proofs (nice for light clients)</li>
<li>Basic read/write functionality is supported</li>
</ul>
<p>Cons:</p>
<ul>
<li>Limited interface to app.  All queries must be serialized into []byte (less expressive than JSON over HTTP) and there is no way to push data from ABCI app to the client (eg. notify me if account X receives a transaction)</li>
</ul>
<h3>Custom ABCI server</h3>
<p>This was proposed by @wolfposd on slack and demonstrated by <a href=https://github.com/wolfposd/TMChat>TMChat</a>, a sample app. The concept is to write a custom server for your app (with typical REST API/websockets/etc for easy use by a mobile app). This custom server is in the same binary as the ABCI app and data store, so can easily react to complex events there that involve understanding the data format (send a message if my balance drops below 500). All &#x201C;writes&#x201D; sent to this server are proxied via websocket/JSON-RPC to tendermint core.  When they come back as deliver_tx over ABCI, they will be written to the data store. For &#x201C;reads&#x201D;, we can do any queries we wish that are supported by our architecture, using any web technology that is useful. The general architecture is shown in the following diagram:</p>
<p><img src=https://raw.githubusercontent.com/wolfposd/tutorials/master/images/tendermint/TMApplicationExample.png alt="Application Architecture"></p>
<p>Pros:</p>
<ul>
<li>Separates application logic from blockchain logic</li>
<li>Allows much richer, more flexible client-facing API</li>
<li>Allows pub-sub, watching certain fields, etc.</li>
</ul>
<p>Cons:</p>
<ul>
<li>Access to ABCI app can be dangerous (be VERY careful not to write unless it comes from the validator node)</li>
<li>No direct access to the blockchain headers to verify tx</li>
<li>You must write your own API (but maybe that&#x2019;s a pro&#x2026;)</li>
</ul>
<h3>Hybrid solutions</h3>
<p>Likely the least secure but most versatile.  The client can access both the tendermint node for all blockchain info, as well as a custom app server, for complex queries and pub-sub on the abci app.</p>
<p>Pros:</p>
<ul>
<li>All from both above solutions</li>
</ul>
<p>Cons:</p>
<ul>
<li>Even more complexity</li>
<li>Even more attack vectors (less security)</li>
</ul>
<h2>Scalability</h2>
<p>Read replica using non-validating nodes?  They could forward transactions to the validators (fewer connections, more security), and locally allow all queries in any of the above configurations. Thus, while transaction-processing speed is limited by the speed of the abci app and the number of validators, one should be able to scale our read performance to quite an extent (until the replication process drains too many resources from the validator nodes).</p>
<h2>Example Code</h2>
<ul>
<li><a href=https://github.com/wolfposd/TMChat>TMChat</a></li>
</ul>
<p>TODO: more!</p>
<h2>Contributions</h2>
<p>Many thanks to Ethan Frey for writing this page.</p>
</div></template>
