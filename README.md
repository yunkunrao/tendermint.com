# [tendermint.com](https://tendermint.com)

> The website for Tendermint - Blockchain Consensus.

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

## Contributing

* Edit [Documentation](http://tendermint.readthedocs.io/en/master/)
* Edit Community > [Software Ecosystem](https://github.com/tendermint/aib-data/blob/master/json/careers.json)
* Edit Community > [Team](https://github.com/tendermint/aib-data/blob/master/json/people.json)
* Edit Community > [Careers](https://github.com/tendermint/aib-data/blob/master/json/careers.json)
* Edit Community > Presentations: `./src/store/modules/presentations.js`
