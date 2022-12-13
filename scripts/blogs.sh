#!/bin/bash
#
# Description:
#   1. Get the latest articles from hatena blog.
#
# Usage:
#   0. Set the environment variable: HATENA_API_KEY
#   $ bash blogs.sh
#
set -euo pipefail

if [ -z "${HATENA_API_KEY}" ]; then
    echo "API_KEY was not set."
    exit 1
fi
OUTPUT_FILE="entries.json"

curl -u "kokoichi206:${HATENA_API_KEY}" https://blog.hatena.ne.jp/kokoichi206/koko206.hatenablog.com/atom/entry |\
    xq |\
    sed -z 's@"category": \({\n[^}]*}\)@"category": [\1]@g' |\
    jq '.feed.entry | (map({ title: .title, url: .link[1]."@href", published: .published, summary: .summary."#text", category: (.category | map(."@term") ) }))' \
    > "${OUTPUT_FILE}"
