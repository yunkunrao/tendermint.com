#!/bin/bash

echo -e "\033[0;32mRunning mergecommit script...\033[0m"
set -e # terminate when anything fails

### MERGE

echo -e "\033[0;32mMerging changes from Github...\033[0m"

git fetch -a origin
git branch -D backup || true
git checkout -b backup
git checkout sources
git merge origin/sources
echo "DONE"


### COMMIT SOURCES

echo -e "\033[0;32mPushing sources to Github...\033[0m"

hugo
git add -A
msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg" || true # Ignore message about public folder
git push origin sources
