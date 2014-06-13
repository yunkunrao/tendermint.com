#!/bin/bash

echo -e "\033[0;32mDeploying updates to Github...\033[0m"

### SOURCES

hugo
git add -A
msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"
git push origin sources


### PUBLIC (master)

cd public
git add -A
git commit -m "$msg"
git push origin master
