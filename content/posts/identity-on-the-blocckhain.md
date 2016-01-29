---
title: "Identity on the blockchain"
description: "TODO description"
date: "2016-01-25"
categories: 
    - "identity"
---

Authentication is about determining the authenticity of identity.
But when we're dealing with digital information, there's no way to identify an individual with 100% certainty.
What we're left with is a collection of heuristics.

* There are auth consumers, users, and auth providers.
  * An auth consumer consumes auth information.  A consumer-facing website might be an auth consumer.
  * Users delegate one or more auth providers to identify them.  A user's phone can be an auth provider, but it could be a third party service provider.
* Users want to protect their identity and privacy.
  * Auth consumers should not communicate directly with auth providers.
  * Users need multiple options and failover mechanisms in case a particular auth provider option gets compromised.

A user has a pseudonumous (or identified) account on a blockchain where the user can define any set of parameters for identification.
These parameters are not published on the blockchain, but they are Merkle-ized, and the root hash is stored in the blockchain along with the account.

e.g. The blockchain contains a list of `[AccountID,AuthRootHash]` tuples, where `AuthRootHash` is the Merkle root of many options for authentication.

`AuthRootHash := MerkleRoot(AuthOption1,AuthOption2,AuthOption3...)`

So given a user with pseudonymous account `AccountID`, anyone can see that account's `AuthRootHash`, but not the associated underlying `AuthOptions`

For the sake of illustration, lets assume that `AuthOption1` is a simple Ed25519 public key, and that the private key is in your phone.

Now, say the user wishes to sign up with a service (an auth consumer). The service can challenge the user to authenticate themself by providing a challenge string.
The user can then respond with a signature of that challenge string using the public key (which is `AuthOption1`) and a Merkle proof that proves that the public key
is part of `AuthRootHash`, and thus a legitimate method of authenticating the user.  It's easy to construct the Merkle hash `AuthRootHash` in such a way that
no information about any of the other `AuthOptions` leak while authenticating with `AuthOption1`.

In practice, there will need to be more than one way to authenticate oneself.

An `[AUTH_OPTION]` encodes how this user may be identified, and options that define privileges associated with this authentication method.

`[AUTH_OPTION]` is composed of three parts: `[TYPE][DATA][PRIVILEGES]`.
`[TYPE]` is a byte or number that characterizes the following data.  For example, a byte of 0x01 may indicate that the data is a naive threshold signature scheme.

`[AUTH_OPTION]:` `[0x01][2 of 3][PUBKEY1][PUBKEY2][PUBKEY3]][PRIVILEGES]` encodes a threshold signature scheme where two of three signatures is required to authorize.
`[PUBKEY]` may similarly be typed.
