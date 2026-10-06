#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
chrome="${CHROME_PATH:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
mkdir -p "$root/public/cv"

for locale in es en; do
  "$chrome" --headless --disable-gpu --no-pdf-header-footer \
    --print-to-pdf="$root/public/cv/ezequiel-gallardo-cv-$locale.pdf" \
    "file://$root/cv/cv-$locale.html"
done
