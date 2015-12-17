---
title: "Sample Tutorial"
description: "Just a placeholder tutorial."
date: "2015-12-16"
categories: 
    - "tutorial"
    - "example"
---

Sample tutorial with content.

## Just a title


Here's some HTML:

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <base href="{{ .Site.BaseURL }}">
  <title>{{ .Title }}</title>
  <link rel="canonical" href="{{ .Permalink }}">
  {{ template "chrome/head_includes.html" . }}
</head>
```

## And another title

Here's some Stylus:

```
.panel
  border 1px solid mborder
  border-bottom none
  margin 0 0 1.5em

  .panel-header
    background hsl(mhue,35%,90%)
    padding 0 0.5em
    line-height 2em
    border-bottom 1px solid mborder
    a
      color txt

  .panel-body
    li
      padding 0.5em
      border-bottom 1px solid mborder
      margin 0
      p
        margin 0
```

## And the ending

