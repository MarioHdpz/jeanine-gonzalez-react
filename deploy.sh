#!/bin/bash
set -u

# Remote configuration
USER="u81005991"
HOST="home577543064.1and1-data.host"
SSH="$USER@$HOST"
STATIC_PATH="~/jeanine-gonzalez"

rm -rf build
yarn build
tar -czvf build.tar.gz build

ssh -t $SSH "rm -rf $STATIC_PATH/*"

scp build.tar.gz $USER@$HOST:$STATIC_PATH

ssh -t $SSH "cd $STATIC_PATH && tar -xzf build.tar.gz && mv build/* . && rm build.tar.gz && rm -rf build"

rm build.tar.gz





