#!/bin/bash

echo -e "\033[0;32mRunning merge script...\033[0m"
set -e # terminate when anything fails

### MERGE

echo -e "\033[0;32mMerging changes from Github...\033[0m"

git fetch -a origin
git branch -D backup || true
git checkout -b backup
git checkout sources
git merge origin/sources
echo "DONE"
