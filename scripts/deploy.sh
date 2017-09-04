#!/bin/sh
if [ $(git status --untracked-files=no --porcelain) ]
then
  echo "There are no changes so there is no need to update repo"
  exit 0;
else
  git commit --no-verify -a --message "Update auto-generated files, travis CI build: $TRAVIS_BUILD_NUMBER [skip ci]"
  git push --quiet --set-upstream origin-es8-polyfill ${TRAVIS_BRANCH}
fi
