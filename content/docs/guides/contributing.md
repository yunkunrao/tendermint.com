# Contributing

Thanks for considering making contributions to Tendermint!

Please follow standard github best practices: fork the repo, branch from the tip of develop, make some commits, and submit a pull request to develop. See the [open issues](https://github.com/tendermint/tendermint/issues) for things we need help with!

Please make sure to use `gofmt` before every commit - the easiest way to do this is have your editor run it for you upon saving a file.

## Forking

Please note that Go requires absolute paths. So to work on a fork of tendermint, you have to still work in `$GOPATH/src/github.com/tendermint/tendermint`. But you can check out a branch from your fork in that directory. For instance, to work on a branch from my fork, I would:

```
cd $GOPATH/src/github.com/tendermint/tendermint
git remote add ebuchman https://github.com/ebuchman/tendermint
git fetch -a ebuchman
git checkout -b mybranch ebuchman/mybranch
```

Now I will have the branch `mybranch` from my fork at `github.com/ebuchman/tendermint` checked out, but locally it's in `$GOPATH/src/github.com/tendermint/tendermint`, rather than `$GOPATH/src/github.com/ebuchman/tendermint`, which should actually never exist. 

Now I can make changes, commit, and push to my fork:

```
< make some changes >
git add -u
git commit -m "... changes ..."
git push ebuchman mybranch
```

Then I can submit pull requests from my fork!

## Dependencies

We use [glide](https://github.com/masterminds/glide) to manage dependencies.
That said, the master branch of every Tendermint repository should just build with `go get`, which means they should be kept up-to-date with their dependencies so we can get away with telling people they can just `go get` our software.
Since some dependencies are not under our control, a third party may break our build, in which case we can fall back on `glide install`. Even for dependencies under our control, glide helps us keeps multiple repos in sync as they evolve. Anything with an executable, such as apps, tools, and the core, should use glide.

Run `bash scripts/glide/status.sh` to get a list of vendored dependencies that may not be up-to-date. 

## Testing

All repos should be hooked up to circle. 
If they have `.go` files in the root directory, they will be automatically tested by circle using `go test -v -race ./...`. If not, they will need a `circle.yml`. Ideally, every repo has a `Makefile` that defines `make test` and includes its continuous integration status using a badge in the README.md.

## Branching Model and Release

User-facing repos should adhere to the branching model: http://nvie.com/posts/a-successful-git-branching-model/.
That is, these repos should be well versioned, and any merge to master requires a version bump and tagged release.

Libraries need not follow the model strictly, but would be wise to,
especially `go-p2p` and `go-rpc`, as their versions are referenced in tendermint core.

### Development Procedure:
- the latest state of development is on `develop`
- `develop` must never fail `make test`
- no --force onto `develop` (except when reverting a broken commit, which should seldom happen)
- create a development branch either on github.com/tendermint/tendermint, or your fork (using `git add origin`)
- before submitting a pull request, begin `git rebase` on top of `develop`

### Pull Merge Procedure:
- ensure pull branch is rebased on develop
- run `make test` to ensure that all tests pass
- merge pull request
- the `unstable` branch may be used to aggregate pull merges before testing once
- push master may request that pull requests be rebased on top of `unstable`

### Release Procedure:
- start on `develop`
- run integration tests (see `test_integrations` in Makefile)
- prepare changelog/release issue
- bump versions
- push to release-vX.X.X to run the extended integration tests on the CI
- merge to master
- merge master back to develop


### Automation TODOs

- Push builds: docker, AMIs
- Update github.com/tendermint/tendermint-stable with latest master and vendored deps for debian releases

TODO: sign releases

## Docker

We have loose dependencies on docker. The mintnet tool uses the `tendermint/tmbase` docker image, which is really just a fluffy Go image. The mintnet tooling runs an `init.sh` script in the container which clones the repo from github and installs it at run time, rather than building it into the image, for faster dev cycles.
