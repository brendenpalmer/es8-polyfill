#!/bin/sh

set -o errexit -o nounset

if [ ${TRAVIS_PULL_REQUEST} != "false" ]
then
  echo "Skipping deploy because this is a PR build."
  exit 0
fi

if [ ${TRAVIS_BRANCH} != "travis-ci" ]
then
  echo "This commit was made against the $TRAVIS_BRANCH. We only deploy on master."
  exit 0
fi

git config user.email "$COMMIT_AUTHOR_EMAIL"
git config user.name "Travis CI"
git remote add origin-es8-polyfill https://${GH_TOKEN}@github.com/brendenpalmer/es8-polyfill.git > /dev/null 2>&1
git fetch
git checkout ${TRAVIS_BRANCH}
git commit --no-verify -a --message "Travis build: $TRAVIS_BUILD_NUMBER [skip ci]"
git push --quiet --set-upstream origin-es8-polyfill ${TRAVIS_BRANCH}

echo "TRAVIS BRANCH: $TRAVIS_BRANCH"
