#!/bin/sh

set -o errexit -o nounset

if [ ${TRAVIS_PULL_REQUEST} != "false" ]
then
  echo "Skipping deployment because this is a PR build"
  exit 0
fi

if [ ${TRAVIS_BRANCH} != "master" ]
then
  echo "This commit was made against $TRAVIS_BRANCH. Only builds on master will be deployed."
  exit 0
fi

git config user.email "travis@travis-ci.org"
git config user.name "Travis CI"
git remote add origin-es8-polyfill https://${GH_TOKEN}@github.com/brendenpalmer/es8-polyfill.git > /dev/null 2>&1
git fetch
git checkout ${TRAVIS_BRANCH}

if [ $(git status --untracked-files=no --porcelain) ]
then
  git commit --no-verify -a --message "Update auto-generated files, travis CI build: $TRAVIS_BUILD_NUMBER [skip ci]"
  git push --quiet --set-upstream origin-es8-polyfill ${TRAVIS_BRANCH}
else
  echo "There are no changes so there is no need to update repo"
  exit 0;
fi
