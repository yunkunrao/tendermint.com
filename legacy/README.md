# Tendermint Marketing Site 
Located live at [http://tendermint.com](http://tendermint.com)

## Workflow

1. Work in a local branch, i.e. `local-design`
2. Before making any edits, pull in changes from the `sources` branch by running `git merge sources`.
3. Fix any merge conflicts, then start editing in `local-design`
4. When you're done for the day, run `git merge sources` again in case there have been changes by other developers on your team. Fix merge conflicts.
5. Run `git checkout sources && git pull origin sources`. Fix merge conflicts.
6. In the `sources` branch, run `git merge local-design`. Fix merge conflicts.
7. Run `hugo server` once and check it out. If everything looks good...
7. Commit your changes and push them to GitHub.
8. Run `./deploy.sh` in the project root directory. Tada, published.

## Useful Commands 

### Running the local server

In the project root directory, run `hugo server`. The visit `localhost:1313` in your browser.

### Watching CSS for changes

To change the site styles, edit the `.styl` files in `./static/styles`. To compile the Stylus files into CSS, run `npm run bcss`.  To continually watch for Stylus changes, run `npm run wcss` in the project root directory. 

### Watching JS for changes

```
// watch js
npm run wjs

// build js
npm run bjs
```

### Build for production

```
// builds both CSS and JS
npm run build
```
