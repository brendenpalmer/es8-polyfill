#!/bin/sh
yarn run prettier &&
yarn run build

files=$(git diff --cached --name-only --diff-filter=ACM | grep '^\(lib/\)'| tr '\n' ' ')

# Add built library
git add lib/\*.js

# Add docs
git add docs/\*

exit 0
