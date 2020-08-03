#!/bin/bash
# Exit when any of the commands fail
set -e
watchman watch-del-all &&
rm -rf node_modules &&
yarn install &&
rm -rf /tmp/metro-* &&
yarn start --reset-cache

