#!/bin/bash

echo -e "\033[0;32mRunning deploy script...\033[0m"
set -e # terminate when anything fails

### INIT PUBLIC (master)

echo -e "\033[0;32mInitializing public/...\033[0m"

if [ ! -d "public_master" ]; then
  mkdir public_master
  cd public_master
  git init
  git remote add origin git@github.com:tendermint/tendermint.github.io.git
  cd ..
fi


### DEPLOY PUBLIC (master)

echo -e "\033[0;32mPushing compiled files to Github...\033[0m"

hugo
rm -rf public_master/*
cp -r public/* public_master/
cd public_master
git add -A
git commit -m "deploying website"
git push origin master --force
