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
./src/content/blog/

# Build the edited blog posts
npm run blog

# Edit Intro Pages
./src/content/intro/

# Edit Docs Pages
./src/content/docs/

# Edit Community > Software Ecosystem
./src/store/json/software.json

# Edit Community > Team
./src/store/modules/people.js

# Edit Community > Jobs
./src/store/json/jobs.json

# Edit Community > Presentations
./src/store/modules/presentations.js
```
