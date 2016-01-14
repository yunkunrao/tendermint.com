#!/bin/bash

echo -e "\033[0;32mRunning deploy script...\033[0m"
set -e # terminate when anything fails

### INIT

echo -e "\033[0;32mInitializing public/...\033[0m"

if [ ! -d "public" ]; then
  git submodule update --init
fi
cd public
rm -rf public/*
git fetch origin master
git reset --hard origin/master
cd ..

### MERGE

echo -e "\033[0;32mMerging changes from Github...\033[0m"

git fetch -a origin
git branch -D backup || true
git checkout -b backup
git checkout sources
echo "DONE"


### SOURCES

echo -e "\033[0;32mPushing sources to Github...\033[0m"

hugo
git add -A
msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg" || true # Ignore message about public folder
git push origin sources


### PUBLIC (master)

echo -e "\033[0;32mPushing compiled files to Github...\033[0m"

cd public
git add -A
git commit -m "$msg"
git push origin master
