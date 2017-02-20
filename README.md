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

# Edit Documenation
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

## Documentation Editing Guide

### Creating a New Page
To add a new page, create a markdown file in `./content/docs/` or './content/intro/. The title of the page is based on its filename. For example, 'this-is-awesome.md' will have a title of 'This is Awesome'.

By default, pages are ordered alphabetically based on filename. If you want to have a custom order for your documentation, label the files with numbers. Like this:

    ▾ getting-started/
        #01-download-tendermint.md
        #02-first-abci-app.md
        #03-deploy-testnet.md
        #04-next-steps.md

### Creating a New Section
To add a new section to documentation, add a new directory under `.content/docs/`.

### Markdown Links
If you want to link to other pages in the Tendermint site, please use the full path. This will prevent the user's browser from reloading the entire website. For example:

    # won't work
    [block hash](./tendermint-types#block-hash)

    # will work
    [block hash](/docs/internals/tendermint-types#block-hash)

### Markdown Link to Hash
HTML IDs are automatically generated for headings. You can link to them, but please remember to use the slug case format. 'this-is-slug-case'

    # won't work
    [block hash](./tendermint-types#Block.Hash)

    # will work
    [block hash](/docs/internals/tendermint-types#block-hash)


### Building for Production

Please run the following command to build all documentation.

    npm run docs
