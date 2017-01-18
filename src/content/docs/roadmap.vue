<template><div><h1>Roadmap</h1>
<ul>
<li>Use the chain as its own CA for its nodes and validators.</li>
<li>Graceful handling/recovery for apps that have non-determinism or fail to halt</li>
<li>Consensus version 0.8: Update so <code>Commit</code> is not just +2/3 precommits for a block, but the entire <code>JSet</code>.  While the commit size may grow unbounded in size, it makes a fork immediately slash a +1/3 Byzantine subset of validators.</li>
</ul>
</div></template>