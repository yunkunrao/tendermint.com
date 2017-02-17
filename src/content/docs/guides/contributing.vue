<template>
  <div><h1 id=contributing>Contributing</h1>
<p>Thanks for considering making contributions to Tendermint and related repositories (Basecoin, Merkleeyes, etc.)!</p>
<p>Please follow standard github best practices: fork the repo, branch from the tip of develop, make some commits, and submit a pull request to develop. See the <a href=https://github.com/tendermint/tendermint/issues>open issues</a> for things we need help with!</p>
<p>Please make sure to use <code>gofmt</code> before every commit - the easiest way to do this is have your editor run it for you upon saving a file.</p>
<h2 id=forking>Forking</h2>
<p>Please note that Go requires code to live under absolute paths, which complicates forking.
While my fork lives at <code>https://github.com/ebuchman/tendermint</code>,
the code should never exist at  <code>$GOPATH/src/github.com/ebuchman/tendermint</code>.
Instead, we use <code>git remote</code> to add the fork as a new remote for the original repo,
<code>$GOPATH/src/github.com/tendermint/tendermint</code>, and do all the work there.</p>
<p>For instance, to create a fork and work on a branch of it, I would:</p>
<ul>
<li>Create the fork on github, using the fork button.</li>
<li>Go to the original repo checked out locally (ie. <code>$GOPATH/src/github.com/tendermint/tendermint</code>)</li>
<li><code>git remote rename origin upstream</code></li>
<li><code>git remote add origin git@github.com:ebuchman/basecoin.git</code></li>
</ul>
<p>Now <code>origin</code> refers to my fork and <code>upstream</code> refers to the tendermint version.
So I can <code>git push -u origin master</code> to update my fork, and make pull requests to tendermint from there.
Of course, replace <code>ebuchman</code> with your git handle.</p>
<p>To pull in updates from the origin repo, run</p>
<pre><code>* `git fetch upstream`
* `git rebase upstream/master` (or whatever branch you want)
</code></pre>
<p>Please don&#x2019;t make Pull Requests to <code>master</code>.</p>
<h2 id=dependencies>Dependencies</h2>
<p>We use <a href=https://github.com/masterminds/glide>glide</a> to manage dependencies.
That said, the master branch of every Tendermint repository should just build with <code>go get</code>, which means they should be kept up-to-date with their dependencies so we can get away with telling people they can just <code>go get</code> our software.
Since some dependencies are not under our control, a third party may break our build, in which case we can fall back on <code>glide install</code>. Even for dependencies under our control, glide helps us keeps multiple repos in sync as they evolve. Anything with an executable, such as apps, tools, and the core, should use glide.</p>
<p>Run <code>bash scripts/glide/status.sh</code> to get a list of vendored dependencies that may not be up-to-date.</p>
<h2 id=testing>Testing</h2>
<p>All repos should be hooked up to circle.
If they have <code>.go</code> files in the root directory, they will be automatically tested by circle using <code>go test -v -race ./...</code>. If not, they will need a <code>circle.yml</code>. Ideally, every repo has a <code>Makefile</code> that defines <code>make test</code> and includes its continuous integration status using a badge in the <a href=http://README.md>README.md</a>.</p>
<h2 id=branching-model-and-release>Branching Model and Release</h2>
<p>User-facing repos should adhere to the branching model: <a href=http://nvie.com/posts/a-successful-git-branching-model/ >http://nvie.com/posts/a-successful-git-branching-model/</a>.
That is, these repos should be well versioned, and any merge to master requires a version bump and tagged release.</p>
<p>Libraries need not follow the model strictly, but would be wise to,
especially <code>go-p2p</code> and <code>go-rpc</code>, as their versions are referenced in tendermint core.</p>
<h3 id=development-procedure>Development Procedure:</h3>
<ul>
<li>the latest state of development is on <code>develop</code></li>
<li><code>develop</code> must never fail <code>make test</code></li>
<li>no --force onto <code>develop</code> (except when reverting a broken commit, which should seldom happen)</li>
<li>create a development branch either on <a href=http://github.com/tendermint/tendermint>github.com/tendermint/tendermint</a>, or your fork (using <code>git add origin</code>)</li>
<li>before submitting a pull request, begin <code>git rebase</code> on top of <code>develop</code></li>
</ul>
<h3 id=pull-merge-procedure>Pull Merge Procedure:</h3>
<ul>
<li>ensure pull branch is rebased on develop</li>
<li>run <code>make test</code> to ensure that all tests pass</li>
<li>merge pull request</li>
<li>the <code>unstable</code> branch may be used to aggregate pull merges before testing once</li>
<li>push master may request that pull requests be rebased on top of <code>unstable</code></li>
</ul>
<h3 id=release-procedure>Release Procedure:</h3>
<ul>
<li>start on <code>develop</code></li>
<li>run integration tests (see <code>test_integrations</code> in Makefile)</li>
<li>prepare changelog/release issue</li>
<li>bump versions</li>
<li>push to release-vX.X.X to run the extended integration tests on the CI</li>
<li>merge to master</li>
<li>merge master back to develop</li>
</ul>
<h3 id=automation-todos>Automation TODOs</h3>
<ul>
<li>Push builds: docker, AMIs</li>
<li>Update <a href=http://github.com/tendermint/tendermint-stable>github.com/tendermint/tendermint-stable</a> with latest master and vendored deps for debian releases</li>
</ul>
<p>TODO: sign releases</p>
<h2 id=docker>Docker</h2>
<p>We have loose dependencies on docker. The mintnet tool uses the <code>tendermint/tmbase</code> docker image, which is really just a fluffy Go image. The mintnet tooling runs an <code>init.sh</code> script in the container which clones the repo from github and installs it at run time, rather than building it into the image, for faster dev cycles.</p>
</div>
</template>

<script>
export default {
  mounted () {
    document.title = 'Contributing - Documentation - Tendermint'
  }
}
</script>
