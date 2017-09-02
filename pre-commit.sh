#!/bin/sh
yarn run prettier &&
yarn run lint &&
yarn run docs &&
git add docs/\*
