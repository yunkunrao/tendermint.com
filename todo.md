# Stuff done friday
* Improved the new site design for larger displays.
* Added a Media link to the header for larger displays.

Not sure what I'm doing wrong, but deploying is still not working for me. All the latest changes are merged in the `sources` branch from `new-design`. When I run `./deploy`, I now get this following error:

    ➜  tmwebsite git:(sources) ./deploy.sh
    Running deploy script...
    Initializing public/...
    From github.com:tendermint/tendermint.github.io
     * branch            master     -> FETCH_HEAD
    Switched to branch 'master'
    Your branch is up-to-date with 'origin/master'.
    fatal: Unable to read current working directory: No such file or directory

And there seems to be a problem with `.DS_Store` files too, probably because they're not in `.gitignore`

    ➜  tmwebsite git:(master) ✗ git checkout sources
    error: Your local changes to the following files would be overwritten by checkout:
            .DS_Store
    Please, commit your changes or stash them before you can switch branches.

At any rate, the new design is ready to be deployed. There's still more for me to with it, but it's an improvement over the current site atm.
