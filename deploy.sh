#!/usr/bin/env sh

# abort on errors
set -e

yarn docs:build

cd dist
echo 'docs.frappeinsights.com' > CNAME

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages-deploy

cd -