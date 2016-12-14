# Install Tendermint

## Install Go

Make sure you have installed Go and [set the GOPATH](https://github.com/tendermint/tendermint/wiki/Setting-GOPATH).

## Install Tendermint

You should be able to install the latest with a simple `go get -u github.com/tendermint/tendermint/cmd/tendermint`.
The `-u` makes sure all dependencies are updated as well. 

See `tendermint version` and `tendermint --help` for more.

If it does not work, see Troubleshooting below.

To start a one-node blockchain with a simple in-process application: 

```
tendermint init
tendermint node --proxy_app=dummy
```

See the 
[App Development](/docs/guides/app-development)
guide for more details on building applications,
and the 
[Using Tendermint](/docs/guides/using-tendermint) 
guide for more details about using the `tendermint` program.

### Reinstall

If you already have Tendermint installed, then you can either set a new `$GOPATH` and run the previous `go get` command,
or else fetch and checkout the latest master branch in `$GOPATH/src/github.com/tendermint/tendermint`,
and from that directory run

```
go install ./cmd/tendermint
```

### Vendored dependencies

If updated dependencies break builds, install the vendored commits using `glide`.

Fist, install `glide`:

```
go get github.com/Masterminds/glide
```

Now, fetch the dependencies and install them with `glide` and `go`:

```
cd $GOPATH/src/github.com/tendermint/tendermint
glide install
go install ./cmd/tendermint
```

The latest Tendermint Core version is now installed. Check by running `tendermint version`.

### Troubleshooting

If `go get` failing bothers you, fetch the code using `git`:

```
mkdir -p $GOPATH/src/github.com/tendermint
git clone https://github.com/tendermint/tendermint $GOPATH/src/github.com/tendermint/tendermint
```

## Next Step

Learn how to [create your first TMSP app](/intro/getting-started/first-tmsp).
