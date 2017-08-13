#!/bin/bash
set -x
set -e
set -o pipefail

cd Drifter
git add .
git commit -am "new version $(date)" --allow-empty
git push digitalocean gh-pages:master
git push origin
