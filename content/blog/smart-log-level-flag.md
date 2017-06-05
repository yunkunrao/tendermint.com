~~~
title: "Smart --log_level flag"
description: "One of the exiting new features in 0.10.0 release is smart `--log_level` flag"
date: "2017-05-30"
author: "Anton Kaliaev"
categories:
    - "logging"
    - "tendermint"
~~~

# Smart --log_level flag
One of the exiting new features in 0.10.0 release is smart `--log_level` flag,
which now can accept complex queries.

Before, one only could set logging level to either notice, info, warning, debug
or error, and we got rid of the notice and warning levels in the new release.

Now, you are able to set different log level for modules:

```
--log_level=”mempool:error”
--log_level=”state:info,mempool:error”
```

It will work for any `module=...`. Some of the most important are: consensus,
state, p2p, mempool, proxy, node.

Info level (default) is used for all other modules. To change that you
can use * symbol:

```
--log_level=”state:info,mempool:error,*:error”
```

These are equivalent:

```
--log_level=”info”
--log_level=”*:info”
```

There is a new `none` level, which can be used to suppress the output for some
or all modules.

```
--log_level=”mempool:error,*:none”
```

Have fun playing with them! Hope you like it.
