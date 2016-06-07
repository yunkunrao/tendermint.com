---
title: "A Critique of Merkle's DAO Democracy: Making it Reliable"
description: "A critique of the subsection of the new DAO paper by Merkle,
specifically of the section entitled 'Making it Reliable'"
date: "2016-06-06"
categories: 
    - "consensus"
    - "DAO"
    - "prediction-market"
---

## Merkle's New DAO Paper

I've been looking for a paper that criticizes futarchy that specifically
addresses the thin-market and corresponding manipulation and feedback problems
that my gut tells me there is.  I haven't found it yet, but I did stumble upon
what may be a solution to it.

[Link to the paper](http://merkle.com/papers/DAOdemocracyDraft.pdf)

While giving it a proper read, I noticed part way through that it includes a
section that attempts to address the problem of securing a blockchain ledger
using prediction markets.

I predict that a general prediction market will find that a PoS system on
Tendermint will be favored over the BFT validator-set selection system as
proposed by Merkle. 

<blockquote>
<p>
Breaking the system requires sneaking past a fully functioning and well financed
prediction market that is actively looking for any attack and which is running
as a distributed algorithm on a set of core servers that are fully protected
from any attack. Any slightest hint of any attack that might actually be
successful on any core server <b>will result in its immediate removal from the
pool of core servers</b>, and its replacement with any one of a large number of
constantly running alternate servers. Any strategy for better protecting the
core servers, or for better detecting an attack, will be immediately adopted
(thanks to a prediction market specifically aimed at improving security which is
constantly evaluating new and better strategies). It will be hard to corrupt
even a few core servers, let alone half of them. Yet half of them (and possibly
more) would have to be corrupted before it would even be possible to gain
control of the system and corrupt the prediction market.
</p>
<footer>- Merkle in "DAOs, Democracy and Governance"</footer>
</blockquote>

The problem with futarchy, which is not the same problem with prediction
markets, is that in a futarchy, the prediction market is used to make a decision
that can have arbitrary impact.  In other words, <b>a futarchy is a prediction
market plus feedback</b>.  In order to have futarchy be a good method of
governance, not only do <b>you need a good prediction market free of noise by
virtue of being sufficiently capitalized</b>, <b>you also need to ensure the
prediction market cannot be manipulated to make a decision that yields an
undesirable result</b> (but still creates a positive ROI for the manipulator).

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a
href="https://twitter.com/paulg">@paulg</a> Noise in thin markets?</p>&mdash;
Bram Cohen (@bramcohen) <a
href="https://twitter.com/bramcohen/status/739261628303081472">June 5,
2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

I think the first part of Merkle's paper addresses this problem by giving each
person a vote of 0 to 1, assuming that bribing attacks can be mitigated.  But
the section entitled "Making it Reliable" which uses the prediction market to
decide on the validator set, does not prevent manipulation.

First, Merkle's proposal makes it impossible to determine the true outcome of
the fitness of a validator, because the outcome of the prediction market that
assesses the fitness of the validator makes a decision to remove that validator
from the validator set if it is deemed insecure.  <b>Once you make a decision to
remove a validator, you've removed the incentive for that validator to perform
correctly at all</b> -- at least if you want financially sustainable blockchain
security.  To secure a validator requires investment in internet/power/compute
infrastructure, to invest in good op-sec, to pay the bills and salaries, etc.  A
financially sustainable blockchain should only compensate those validators that
have a reasonable expectation of being secure, and if the prediction market says
otherwise, it should not be compensated.

Well, if you dis-incentivize a validator, it will fail, so letting the
prediction market dictate whether a validator should be allowed membership in
the validator-set of a blockchain opens it up to arbitrary feedback, and thus
manipulation.

Second, a secure validator shouldn't be leaking much information about its
weaknesses for the prediction market to make judgements on.  Security in
validating is about operational-security of human resources, of source-code, of
compute hardware, and of internet/power reliability.  The best judge of one's
ability should be oneself -- if a validator has resources to invest in either
improving its operational-security or bonding more stake, it should be able to
make the best judgement about where to allocate capital.  Meanwhile, it should
invest in preventing any information leaks about its weaknesses to the public!

Likely, any vulnerability in a mature validator-set will be ones that were
difficult to detect, like a needle in a haystack.  The validators are their own
best predictors of their own vulnerabilities, if additional stake can be
purchased in the market.

Fortunately, I think we can use the prediction market to help make blockchains
reliable.  You can make a prediction market based on the high-level
operational-security strategy choices made by validators (such as the
operating-system used, etc), if any such information can be compelled to be
truthfully published, and use the outcome of the prediction market to tweak the
relative sizes of quorums of the disparate strategies.  This minimizes the
effect of the decision swaying the measured outcome.

Could you also use the prediction market to practically decide on the overall
consensus strategy?  Maybe, if the prediction were about the security of the
blockchain as a whole, and that prediction weren't used to make any decisions
that might impact the incentive structure of the blockchain once the consensus
strategy is chosen. In other words, I think we just need to experiment with
self-incentivized blockchains.
