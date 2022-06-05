#!/bin/bash
#
# Description:
#   1. download grass(contributions) from github.
#   2. paint the color as you want.
#
# Usage:
#   0. Fill your account below.
#   $ bash grass.sh
#
set -euo pipefail

# ============ TODO ===========
# You HAVE TO SET YOUR GitHub Accouunt
ACCOUNT="kokoichi206"
# =============================

if [ -z "${ACCOUNT}" ]; then
    echo "variable ACCOUNT was not set."
    exit 1
fi

BASE_FILE="grass.svg"
OUTPUT_FILE="grass_color.svg"

# create 5 colors using: https://colordesigner.io/gradient-generator
LEVEL0=" fill=\"rgb(219, 234, 223)\""
LEVEL1=" fill=\"rgb(175, 220, 184)\""
LEVEL2=" fill=\"rgb(132, 204, 143)\""
LEVEL3=" fill=\"rgb(90, 187, 99)\""
LEVEL4=" fill=\"rgb(36, 169, 49)\""

# download grass from github
curl https://github.com/"${ACCOUNT}" |\
    awk '/<svg.+class="js-calendar-graph-svg"/,/svg>/' |\
    sed -e 's/<svg/<svg xmlns="http:\/\/www.w3.org\/2000\/svg"/' > "${BASE_FILE}"

if [[ -f "${OUTPUT_FILE}" ]]; then
    echo "${OUTPUT_FILE} exists."
    rm "${OUTPUT_FILE}"
    echo "Removed ${OUTPUT_FILE}"
fi

# paint it
while read -r line
do
    if [[ "${line: -22}" == 'data-level="0"></rect>' ]]; then
        echo "$(echo ${line} | rev | cut -c 9- | rev)${LEVEL0}${line: -8}" >> "${OUTPUT_FILE}"
    elif [[ "${line: -22}" == 'data-level="1"></rect>' ]]; then
        echo "$(echo ${line} | rev | cut -c 9- | rev)${LEVEL1}${line: -8}" >> "${OUTPUT_FILE}"
    elif [[ "${line: -22}" == 'data-level="2"></rect>' ]]; then
        echo "$(echo ${line} | rev | cut -c 9- | rev)${LEVEL2}${line: -8}" >> "${OUTPUT_FILE}"
    elif [[ "${line: -22}" == 'data-level="3"></rect>' ]]; then
        echo "$(echo ${line} | rev | cut -c 9- | rev)${LEVEL3}${line: -8}" >> "${OUTPUT_FILE}"
    elif [[ "${line: -22}" == 'data-level="4"></rect>' ]]; then
        echo "$(echo ${line} | rev | cut -c 9- | rev)${LEVEL4}${line: -8}" >> "${OUTPUT_FILE}"
    elif [[ "${line}" =~ .*(Sun|Mon|Tue|Wed|Thu|Fri|Sat).* ]]; then
        # 横の曜日は記載しない！
        echo "Skipped"
        # 必要なら付け加える
        # echo "${line}" >> "${OUTPUT_FILE}"
    else
        echo "${line}" >> "${OUTPUT_FILE}"
    fi
done < "${BASE_FILE}"
