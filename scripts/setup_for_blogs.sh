#!/bin/bash
#
# Description:
#   1. Setup for the blogs.sh script.
#       * install dependencies.
#
set -eu

sudo apt install jq -y
# install xq
sudo apt install pip -y
pip install yq
