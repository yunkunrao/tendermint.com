~~~
title: "Abstracting the logger interface in Go"
description: "This article describes the evolution of logging in Tendermint."
date: "2017-05-30"
author: "Anton Kaliaev"
categories:
    - "logging"
    - "golang"
    - "tendermint"
~~~

# Abstracting the logger interface in Go

This article describes the evolution of logging in Tendermint. We went from
having a static [log15](https://github.com/inconshreveable/log15/) logger to a
transparent interface and implementation that uses [go-kit’s
log](https://github.com/go-kit/kit/tree/master/log) package under the hood, but
can be easily swapped with any other available package.

## The old way

We were using package level log variables to set the logger for each package.
For instance, for the `mempool` package:

```go
package mempool

import (
    "github.com/tendermint/tmlibs/logger"
)

var log = logger.New("module", "mempool")

/*
func init() {
    log.SetHandler(
        logger.LvlFilterHandler(
            logger.LvlDebug,
            logger.BypassHandler(),
        ),
    )
}
*/
```

Here, `logger.New` returns “something” with a `log15.Logger` interface.

Although it was simple and required almost no time to setup, this approach has
some downsides:

1. Tight coupling between the `mempool` and `logger` packages. The `mempool`
   package now directly depends on `logger` at compile time. Also, it’s
   transitive, which means that any package that consumes `mempool` is itself
   dependent on `logger` at compile time. Read [Dave Chaney’s
   post](https://dave.cheney.net/2017/01/23/the-package-level-logger-anti-pattern)
   for details.
2. Even though `log15` is hidden inside the `logger` package, we are using its
   interface. When we decided to make changes to the interface, we had to fork
   the `logger` repo.
3. If somebody wanted to change the log level just for that package, they would
   need to uncomment the `init` function. This did not scale very well, as you
   can imagine.
4. There is no way to implement custom coloring when using `log15` (for
   example, if I want different colors depending on whenever key-values contain
   `err` key)

## The new way

### Our own interface

We started by creating an interface:

```go
type Logger interface {
    Debug(msg string, keyvals ...interface{}) error
    Info(msg string, keyvals ...interface{}) error
    Error(msg string, keyvals ...interface{}) error

    With(keyvals ...interface{}) Logger
}
```

It is very simple and does not tie us to any existing logging package. Also, we
wanted to avoid having many log levels, as many people advocate against it:

<blockquote class="twitter-tweet">
Avoid fine-grained log levels — info and debug are probably enough (<a href="https://peter.bourgon.org/go-best-practices-2016/#logging-and-instrumentation">Peter Bourgon</a>)
</blockquote>

<blockquote class="twitter-tweet">
Nobody needs a warning log level. (<a href="https://dave.cheney.net/2015/11/05/lets-talk-about-logging">Dave Cheney</a>)
</blockquote>

This fixed the second issue (`log15` interface).

### Writing an adapter for the interface

Then we proceeded by picking a logging library and implementing an adapter.

The requirements for the logging library were as follows:

a) supports coloring output<br>
b) is moderately fast (buffering)<br>
c) is somewhat configurable<br>

In the end, we were choosing between
[logrus](https://github.com/sirupsen/logrus) and
[go-kit/log](https://github.com/go-kit/kit/tree/master/log).

`go-kit/log` is flexible and modular, but the default formatter uses [`logfmt`
format](https://brandur.org/logfmt), which is more computer friendly than human
friendly.

`logrus` is popular and feature rich, but not as flexible.

Some people say having too many features is bad:

<blockquote class="twitter-tweet">
I want to take a contradictory position. I think that all logging libraries are bad because the offer too many features; a bewildering array of choice that dazzles the programmer right at the point they must be thinking clearly about how to communicate with the reader from the future; the one who will be consuming their logs. (<a href="https://dave.cheney.net/2015/11/05/lets-talk-about-logging">Dave Cheney</a>)
</blockquote>

So we chose `go-kit/log`.

```go
package log

import (
    "fmt"
    "io"

    kitlog "github.com/go-kit/kit/log"
    kitlevel "github.com/go-kit/kit/log/level"
    "github.com/go-kit/kit/log/term"
)

const (
    msgKey    = "_msg" // "_" prefixed to avoid collisions
)

type tmLogger struct {
    srcLogger kitlog.Logger
}

// Interface assertions
var _ Logger = (*tmLogger)(nil)

// NewTMTermLogger returns a logger that encodes msg and keyvals to the Writer
// using go-kit's log as an underlying logger and our custom formatter. Note
// that the underlying logger could be swapped with something else.
func NewTMLogger(w io.Writer) Logger {
    // Color by level value
    colorFn := func(keyvals ...interface{}) term.FgBgColor {
        if keyvals[0] != kitlevel.Key() {
            panic(fmt.Sprintf("expected level key to be first, got %v", keyvals[0]))
        }
        switch keyvals[1].(kitlevel.Value).String() {
        case "debug":
            return term.FgBgColor{Fg: term.DarkGray}
        case "error":
            return term.FgBgColor{Fg: term.Red}
        default:
            return term.FgBgColor{}
        }
    }

    return &tmLogger{term.NewLogger(w, NewTMFmtLogger, colorFn)}
}

// Info logs a message at level Info.
func (l *tmLogger) Info(msg string, keyvals ...interface{}) error {
    lWithLevel := kitlevel.Info(l.srcLogger)
    return kitlog.With(lWithLevel, msgKey, msg).Log(keyvals...)
}

// Debug logs a message at level Debug.
func (l *tmLogger) Debug(msg string, keyvals ...interface{}) error {
    lWithLevel := kitlevel.Debug(l.srcLogger)
    return kitlog.With(lWithLevel, msgKey, msg).Log(keyvals...)
}

// Error logs a message at level Error.
func (l *tmLogger) Error(msg string, keyvals ...interface{}) error {
    lWithLevel := kitlevel.Error(l.srcLogger)
    return kitlog.With(lWithLevel, msgKey, msg).Log(keyvals...)
}

// With returns a new contextual logger with keyvals prepended to those passed
// to calls to Info, Debug or Error.
func (l *tmLogger) With(keyvals ...interface{}) Logger {
    return &tmLogger{kitlog.With(l.srcLogger, keyvals...)}
}
```

The full code can be found on
[Github](https://github.com/tendermint/tmlibs/tree/master/log).

The code is self explanatory. We implement our interface by proxying to the
underlying logger (`srcLogger`) with level and message keys prepended to
keyvals.

TMFmtFormatter’s format is very similar to
[logfmt](https://brandur.org/logfmt), except it gives the level, timestamp and
message a special treatment. We inherited this format from
[log15](https://github.com/inconshreveable/log15/). It provides a nice balance
between readability and computer friendliness.

```
I[05-12|21:34:04.160] Received complete proposal block            module=consensus height=98 hash=CFFA01937128BA0417C9AECC0A4F5D54BE79657A
```

The new scheme enabled us to remove all our `log.go` files, but required us to
add `log log.Logger` fields to the structs that do any logging. This was a
worth-while trade-off, since it relieves the tight-coupling (ie. the first
issue mentioned earlier).

### Log levels per package

First, we implemented generic filtering based on [go-kit/log
filter](https://github.com/go-kit/kit/blob/master/log/level/level.go#L25).
Then, we added a few new options:

- `AllowDebugWith`
- `AllowInfoWith`
- `AllowErrorWith`
- `AllowNoneWith`

```go
logger = log.NewFilter(logger, log.AllowError(), log.AllowInfoWith("module", "crypto"))
logger.With("module", "crypto").Info("Hello") # produces "I... Hello module=crypto"
```

The API is straightforward and easy to understand. In the example above, we are
saying: “use info level if key-values contain “module/crypto” pair; otherwise,
use error level”.

That said, there are some corner cases, which we describe
[here](https://github.com/tendermint/tmlibs/blob/master/log/filter.go#L73).

### Custom coloring

Custom coloring is easy with `go-kit/log`. The only thing you need is to
provide the coloring function:

```go
// NewTMLoggerWithColorFn allow you to provide your own color function. See
// NewTMLogger for documentation.
func NewTMLoggerWithColorFn(w io.Writer, colorFn func(keyvals ...interface{}) term.FgBgColor) Logger {
	return &tmLogger{term.NewLogger(w, NewTMFmtLogger, colorFn)}
}

Logger := log.NewTMLoggerWithColorFn(log.NewSyncWriter(os.Stdout), func(keyvals ...interface{}) term.FgBgColor {
		for i := 0; i < len(keyvals)-1; i += 2 {
			if keyvals[i] == "validator" {
				return term.FgBgColor{Fg: term.Color(keyvals[i+1].(uint8) + 1)}
			}
		}
		return term.FgBgColor{}
}
```

There are many other things you can do with such adapters. If you are curious,
here is how we [implemented our own
formatter](https://github.com/tendermint/tmlibs/blob/master/log/tmfmt_logger.go).
Also, it is a nice thing to have a [nil logger (or nop
logger)](https://github.com/tendermint/tmlibs/blob/master/log/nop_logger.go) to
discard the output.

## Conclusion

By replacing the old static logging system with a new abstract interface and
adapter, we archived greater flexibility, lower coupling (one could use
Tendermint’s package and their own logger, if it conforms to our interface) and
avoided vendor lock-in (we now can swap the implementations very easily).

Thanks to the new implementation we now have consensus tests where each
instance has its own color, smart `--log_level` flag which allows disabling
output for one package and allowing some level for others. Stay tuned for more
updates!
