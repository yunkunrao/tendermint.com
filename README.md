# Tendermint Website

> The one and only website for Tendermint.

## Production

Please ask the team for deployment privileges.

``` bash
# add the production server if you haven't already
git remote add production ubuntu@cosmos.network:~/tendermint.git
```

``` bash
# deploy it!
git checkout master
git merge develop
git push production master
```

## Development

Make sure you're running Node 6 LTS or higher.

``` bash
# install dependencies
npm install

# write some required files
npm run build

# serve with hot reload at localhost:8800
npm run dev
```

## Content Editing

``` bash

# Edit Blog > Posts
./content/blog/
npm run blog

# Edit Intro or Docs Pages
./content/intro/
./content/docs/
npm run docs

# Edit Community > Software Ecosystem
./src/store/json/software.json

# Edit Community > Team
./src/store/modules/people.js

# Edit Community > Jobs
./src/store/json/jobs.json

# Edit Community > Presentations
./src/store/modules/presentations.js
```

## Content Editing Tips

## Markdown Links
If you want to link to internal pages in Markdown, use the full path. For example:

    # won't work
    [block hash](./tendermint-types#block-hash)

    # will work
    [block hash](/docs/internals/tendermint-types#block-hash)

## Markdown Link to Hash
HTML IDs are automatically generated for Markdown pages. They use the slug case format.

    # won't work
    [block hash](./tendermint-types#Block.Hash)

    # will work
    [block hash](/docs/internals/tendermint-types#block-hash)


