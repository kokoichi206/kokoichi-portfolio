#!/bin/bash
#
# Description:
#   1. Setup for the blogs.sh script.
#       * install dependencies.
#
set -eu

apt install jq -y
# install xq
apt install pip -y
pip install yq
