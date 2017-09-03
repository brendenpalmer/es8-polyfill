#!/bin/sh

set -o errexit -o nounset

if [[ ${TRAVIS_PULL_REQUEST} != "false" ]]
then
  echo "Skipping deploy because this is a PR build."
  exit 0
fi

if [ ${TRAVIS_BRANCH} != "travis-ci" ]
then
  echo "This commit was made against the $TRAVIS_BRANCH. We only deploy on master."
  exit 0
fi

git add lib/\*
git add docs/\*
git commit --message "Travis build $TRAVIS_BUILD_NUMBER"
git push origin
