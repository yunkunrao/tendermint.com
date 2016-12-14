<template><div><h1>Contributing</h1>
<p>Thanks for considering making contributions to Tendermint!</p>
<p>Please follow standard github best practices: fork the repo, branch from the tip of develop, make some commits, and submit a pull request to develop. See the <a href=https://github.com/tendermint/tendermint/issues>open issues</a> for things we need help with!</p>
<p>Please make sure to use <code>gofmt</code> before every commit - the easiest way to do this is have your editor run it for you upon saving a file.</p>
<h2>Forking</h2>
<p>Please note that Go requires absolute paths. So to work on a fork of tendermint, you have to still work in <code>$GOPATH/src/github.com/tendermint/tendermint</code>. But you can check out a branch from your fork in that directory. For instance, to work on a branch from my fork, I would:</p>
<pre><code>cd $GOPATH/src/github.com/tendermint/tendermint
git remote add ebuchman https://github.com/ebuchman/tendermint
git fetch -a ebuchman
git checkout -b mybranch ebuchman/mybranch
</code></pre>
<p>Now I will have the branch <code>mybranch</code> from my fork at <code>github.com/ebuchman/tendermint</code> checked out, but locally it&#x2019;s in <code>$GOPATH/src/github.com/tendermint/tendermint</code>, rather than <code>$GOPATH/src/github.com/ebuchman/tendermint</code>, which should actually never exist.</p>
<p>Now I can make changes, commit, and push to my fork:</p>
<pre><code>&lt; make some changes &gt;
git add -u
git commit -m &quot;... changes ...&quot;
git push ebuchman mybranch
</code></pre>
<p>Then I can submit pull requests from my fork!</p>
<h2>Dependencies</h2>
<p>We use <a href=https://github.com/masterminds/glide>glide</a> to manage dependencies.
That said, the master branch of every Tendermint repository should just build with <code>go get</code>, which means they should be kept up-to-date with their dependencies so we can get away with telling people they can just <code>go get</code> our software.
Since some dependencies are not under our control, a third party may break our build, in which case we can fall back on <code>glide install</code>. Even for dependencies under our control, glide helps us keeps multiple repos in sync as they evolve. Anything with an executable, such as apps, tools, and the core, should use glide.</p>
<p>Run <code>bash scripts/glide/status.sh</code> to get a list of vendored dependencies that may not be up-to-date.</p>
<h2>Testing</h2>
<p>All repos should be hooked up to circle.
If they have <code>.go</code> files in the root directory, they will be automatically tested by circle using <code>go test -v -race ./...</code>. If not, they will need a <code>circle.yml</code>. Ideally, every repo has a <code>Makefile</code> that defines <code>make test</code> and includes its continuous integration status using a badge in the <a href=http://README.md>README.md</a>.</p>
<h2>Branching Model and Release</h2>
<p>User-facing repos should adhere to the branching model: <a href=http://nvie.com/posts/a-successful-git-branching-model/ >http://nvie.com/posts/a-successful-git-branching-model/</a>.
That is, these repos should be well versioned, and any merge to master requires a version bump and tagged release.</p>
<p>Libraries need not follow the model strictly, but would be wise to,
especially <code>go-p2p</code> and <code>go-rpc</code>, as their versions are referenced in tendermint core.</p>
<p>Release Checklist:</p>
<ul>
<li>development accumulates on <code>develop</code></li>
<li>use <code>--no-ff</code> for all merges</li>
<li>prepare changelog/release issue</li>
<li>create <code>release-x.x.x</code> branch; ensure version is correct</li>
<li>push release branch, integration tests run (see <code>test_integrations</code> in Makefile).</li>
<li>make PR to master; link changelog</li>
<li>when tests pass, MERGE to master</li>
<li>tag the release and push to github or open the tag/release directly on github</li>
<li>bump version on develop</li>
<li>remove release branch</li>
</ul>
<p>Automation TODOs</p>
<ul>
<li>Push builds: docker, AMIs</li>
<li>Update <a href=http://github.com/tendermint/tendermint-stable>github.com/tendermint/tendermint-stable</a> with latest master and vendored deps for debian releases</li>
</ul>
<p>TODO: sign releases</p>
<h2>Docker</h2>
<p>We have loose dependencies on docker. The mintnet tool uses the <code>tendermint/tmbase</code> docker image, which is really just a fluffy Go image. The mintnet tooling runs an <code>init.sh</code> script in the container which clones the repo from github and installs it at run time, rather than building it into the image, for faster dev cycles.</p>
</div></template>