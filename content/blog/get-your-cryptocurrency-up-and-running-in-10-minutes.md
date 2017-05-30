~~~
title: "Get your cryptocurrency up and running in 10 minutes"
description: "So, your Tendermint application is finally ready and you want to distribute it and run it on several machines."
date: "2017-05-30"
author: "Anton Kaliaev"
categories:
    - "tendermint"
    - "deploy"
    - "testnet"
~~~

# Get your cryptocurrency up and running in 10 minutes

So, your Tendermint application is finally ready and you want to distribute it
and run it on several machines, or just run it locally by creating a dozen
Docker containers. We have created
[mintnet-kubernetes](https://github.com/tendermint/tools/tree/master/mintnet-kubernetes)
to help you achieve this goal as fast as possible. Note that it should be
primarily used for testing purposes or for tightly-defined chains operated by a
single stakeholder (see [the security
precautions](https://github.com/tendermint/tools/tree/master/mintnet-kubernetes#security)).
If your desire is to launch an application with many stakeholders, consider
using [our set of
Ansible](https://github.com/tendermint/tools/tree/master/ansible-tendermint)
scripts to deploy Tendermint.

`mintnet-kubernetes` is a configuration file for
[Kubernetes](https://kubernetes.io/).

_Kubernetes is an open-source system for automating deployment, scaling, and
management of containerized applications._

If you had never heard of it, it won’t hurt to read [What is
Kubernetes?](https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/)
and go through their [interactive
lessons](https://kubernetes.io/docs/tutorials/kubernetes-basics/). It won't
take long, I promise.

There are several ways to install a Kubernetes cluster:

- a local Docker-based solution using
  [Minikube](https://github.com/kubernetes/minikube)
- hosted solutions using a Web UI or CLI (e.g. GCE)
- turn-key cloud solutions (e.g. AWS using [Kubernetes
  Operations](https://github.com/kubernetes/kops/blob/master/docs/aws.md); AWS,
  Azure, GCE or bare metal using
  [Kargo](https://kubernetes.io/docs/getting-started-guides/kargo/))
- custom solutions (e.g. Linux machines using
  [kubeadm](https://kubernetes.io/docs/getting-started-guides/kubeadm/))

If you just want to play with your application, choose a local installation
with Minikube. If you want to run it in the cloud or on bare metal, refer to
[Picking the Right
Solution](https://kubernetes.io/docs/getting-started-guides), taking into
account the cost, safety, reliability, and configuration options of those
solutions.

Further, we will assume that you have a standard 64-bit Linux desktop with
[VirtualBox](https://www.virtualbox.org/wiki/Downloads) or
[KVM](http://www.linux-kvm.org/) installed.

1) Installing `kubectl`

```bash
curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl && chmod +x ./kubectl && sudo mv ./kubectl /usr/local/bin/kubectl
```

For Windows or OS X, please check out [Installing and Setting Up
kubectl](https://kubernetes.io/docs/tasks/kubectl/install/) guide.

2) Installing Minikube

```bash
curl -Lo minikube https://storage.googleapis.com/minikube/releases/v0.19.0/minikube-linux-amd64 && chmod +x minikube && sudo mv minikube /usr/local/bin/
```

For Windows or OS X, please check out
[Releases](https://github.com/kubernetes/minikube/releases)
page.

3) Starting Minikube

```shell
minikube start
```

4) Downloading a configuration template for our future cluster

```shell
curl -Lo app.yaml https://raw.githubusercontent.com/tendermint/tools/master/mintnet-kubernetes/examples/basecoin/app.yaml
```

Open it in the editor of your choice:

$EDITOR app.yaml

5) Configuring our app

https://github.com/tendermint/basecoin will help us create our own currency,
extensible with plugins. Writing plugins is out of scope of this article, but
you can read about it
[here](https://github.com/tendermint/basecoin/blob/master/docs/guide/basecoin-plugins.md).

Kubernetes DSL (Domain Specific Language) can be difficult for the beginner to
grasp. Fortunately, we will need to change only a small piece of code.

The most important thing is the application’s genesis.json file. It defines the
initial distribution of assets. We have 4 nodes by default (`replicas: 4`in
StatefulSet). Generally, it is a good idea to split assets evenly between them
and have some large number for everyone.

Let’s change denom to “MyAwesomeCoin”. You are welcome to pick any other name you like.

```yaml
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  genesis.json: |-
    {
      "chain_id": "chain-tTH4mi",
      "app_options": {
        "accounts": [
          {
            "pub_key": "tm-0",
            "coins": [
              {
                "denom": "MyAwesomeCoin",
                "amount": 1000000000
              }
            ]
          },
          {
            "pub_key": "tm-1",
            "coins": [
              {
                "denom": "MyAwesomeCoin",
                "amount": 1000000000
              }
            ]
          },
          {
            "pub_key": "tm-2",
            "coins": [
              {
                "denom": "MyAwesomeCoin",
                "amount": 1000000000
              }
            ]
          },
          {
            "pub_key": "tm-3",
            "coins": [
              {
                "denom": "MyAwesomeCoin",
                "amount": 1000000000
              }
            ]
          }
        ]
      }
    }
```

Now we are ready to launch our cryptocurrency:

```shell
kubectl create -f ./app.yaml
```

Wait until all of the nodes are running:

```shell
kubectl get pods -w -o wide -L tm
NAME      READY     STATUS    RESTARTS   AGE       IP           NODE       TM
tm-0      3/3       Running   0          3m        172.17.0.2   minikube   <none>
tm-1      3/3       Running   0          3m        172.17.0.3   minikube   <none>
tm-2      3/3       Running   1          3m        172.17.0.4   minikube   <none>
tm-3      3/3       Running   0          3m        172.17.0.7   minikube   <none>
```

Let’s check the first account:

```shell
ADDR=$(kubectl exec -c app tm-0 -- cat /app/key.json | jq ".address" | tr -d "\"")

kubectl exec -c app tm-0 -- basecoin account $ADDR
{"pub_key":[1,"9D9BB981166532214A9A0EE452F302ADD1D2C7163314CE9B4A1322329CA5750F"],"sequence":0,"coins":[{"denom":"MyAwesomeCoin","amount":1000000000}]}
```

Great! Let’s try to send a transaction from the first to the second account:

```shell
RECIPIENT=$(kubectl exec -c app tm-1 -- cat /app/key.json | jq ".address" | tr -d "\"")

kubectl exec -c app tm-0 -- basecoin tx send --to 0x$RECIPIENT --amount 5MyAwesomeCoin
Signed SendTx:
{"gas":0,"fee":{"denom":"coin","amount":0},"inputs":[{"address":"DD78A910967982FADF492BCBCFEFA237953A70E4","coins":[{"denom":"MyAwesomeCoin","amount":5}],"sequence":1,"signature":[1,"A091D998E033599471111D8D5F004C3ECB1B15570A83A829293604F107ABF3A02879FBB9DD884263CFC9B468929CB30183F66F9D4C12675E3B69064CFA713803"],"pub_key":[1,"9D9BB981166532214A9A0EE452F302ADD1D2C7163314CE9B4A1322329CA5750F"]}],"outputs":[{"address":"4FCDC7498E4F0B378757FCBD550ED40A5C14600B","coins":[{"denom":"MyAwesomeCoin","amount":5}]}]}
```

Checking the first account’s balance we should see 5 coins making their way
into the second account:

```shell
kubectl exec -c app tm-0 -- basecoin account $ADDR
{"pub_key":[1,"7E8ABCC110A15309DF7E1D2656B3CC839D66A09F08C84624C00E144C32BA1170"],"sequence":1,"coins":[{"denom":"MyAwesomeCoin","amount":995}]}
```

As you can see, it was fairly simple to launch a new cryptocurrency in a
Kubernetes cluster. Moreover, with Kubernetes you can add new nodes (pods) with
a single command. And using
[federation](https://kubernetes.io/docs/concepts/cluster-administration/federation/),
you can be sure that your currency will be alive even after loss of the entire
cluster!

Clean up:

```shell
kubectl delete -f ./app.yaml
```
