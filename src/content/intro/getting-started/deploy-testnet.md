# Deploy a Testnet

## Tendermint Core

Now that we've seen how TMSP works, and even played with a few applications using the `tmsp-cli` tool,
let's run an actual Tendermint node.

When running a live application, a Tendermint node takes the place of the `tmsp-cli` tool by sending TMSP requests
to the application: many `append_tx` msgs to run transactions followed by a `commit` to get the application Merkle root hash, and so on.

First, we need to initialize a genesis file and a validator key in `~/.tendermint`:

```
tendermint init
```

You can change the directory by setting the `$TMROOT` environment variable.

Now,

```
tendermint node
```

Tendermint will try to connect to a tmsp appliction by default on [127.0.0.1:46658](127.0.0.1:46658), 
but you probably don't have one running yet.

So in another window, lets start the `dummy` app,

```
dummy
```

After a few seconds you should see blocks start streaming in!

Now you can send transactions through the Tendermint RPC server with curl requests, or from your browser:

```
curl http://localhost:46657/broadcast_tx?tx=\"abcd\"
```

For handling responses, we recommend you [install the `jsonpp` tool](http://jmhodges.github.io/jsonpp/) to pretty print the JSON

We can see the chain's status at the `/status` end-point:

```
curl http://localhost:46657/status |  jsonpp
```

and the `latest_app_hash` in particular:

```
curl http://localhost:46657/status |  jsonpp | grep app_hash
```

visit [http://localhost:46657](http://localhost:46657) in your browser to see the other endpoints.

For more details, see the <router-link to="/docs/guides/using-tendermint">Using Tendermint Guide</router-link>.

## Deploy a Tendermint Testnet

Now that we've run a single Tendermint node with one validator and a couple applications, 
let's deploy a testnet to run our application with four validators.

For this part of the tutorial, we assume you have an account at [DigitalOcean](https://www.digitalocean.com/) and are willing to 
pay to start some new droplets to run your nodes. You can of course stop and destroy them at any time.

First, install [`docker-machine`](https://docs.docker.com/machine/install-machine/) and get a DigitalOcean account and access token.

Then, install `mintnet`.

```
go get github.com/tendermint/mintnet
```

To provision machines on DigitalOcean:

```
mintnet create -- --driver=digitalocean --digitalocean-image=docker --digitalocean-access-token=YOUR_ACCCESS_TOKEN
```

You can leave out the `--digitalocean-access-token` flag if you set your `DIGITALOCEAN_ACCESS_TOKEN` environment variable.

By default this creates 4 new machines.  Check the help messages for more info, e.g. `mintnet create --help`.

Next, create the testnet configuration folders.

```
mintnet init chain mytest_dir/
```

This creates directories in `mytest` for the application.

```
ls mytest_dir/
  chain_config.json # list of validator pubkeys and ip:ports
  app   # Common configuration directory for your blockchain applicaiton
  core  # Common configuration directory for Tendermint core
  data  # Common configuration directory for the Merkleyes key-value store
  mach1 # Configuration directory for the Tendermint core daemon on machine 1
  mach2 # Configuration directory for the Tendermint core daemon on machine 2
  mach3 # Configuration directory for the Tendermint core daemon on machine 3
  mach4 # Configuration directory for the Tendermint core daemon on machine 4
```

You can change the files in the app folder to change which TMSP application run on your testnet.
The default script app/init.sh gets run on each node to install the TMSP application straight from Github.
Edit core/init.sh to change the Tendermint version being run.

Now start the testnet service.

```
mintnet start mytest mytest_dir/
```

You can stop and remove the application as well.

```
mintnet stop mytest; mintnet rm mytest
```

Don't forget to destroy your provisioned machines!

```
mintnet destroy --machines="mach1,mach2,mach3,mach4"
```

Note you can use the `--machines` flag on any command to specify machines,
for instance `--machines mach[1-3],mach7` will apply to mach1, mach2, mach3, and mach7.

TODO: Document tutorial on docker-machine ssh mach1, docker ps, etc, or at least link to good Docker tutorials.

## Next Steps

Done trying out the testnet? Continue <router-link to="/intro/getting-started/next-steps">onwards</router-link>.
