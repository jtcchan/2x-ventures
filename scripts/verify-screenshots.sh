#!/usr/bin/env bash
set -euo pipefail

if ! command -v agent-browser >/dev/null 2>&1; then
  echo "agent-browser is required but not installed."
  exit 1
fi

BASE_URL="${1:-https://2x-ventures.netlify.app}"
OUT_DIR="${2:-reference-screenshots/qa-$(date +%F)}"
COMPARE_URL="${3:-}"

mkdir -p "$OUT_DIR"

capture_url() {
  local url="$1"
  local width="$2"
  local height="$3"
  local label="$4"
  local output_file="$OUT_DIR/${label}-${width}.png"

  echo "Capturing ${label} at ${width}px -> ${output_file}"
  agent-browser open "$url"
  agent-browser set viewport "$width" "$height"
  agent-browser wait 1500
  agent-browser screenshot "$output_file" --full
}

capture_url "$BASE_URL" 1440 1800 "staging"
capture_url "$BASE_URL" 768 1600 "staging"
capture_url "$BASE_URL" 390 1800 "staging"

if [[ -n "$COMPARE_URL" ]]; then
  capture_url "$COMPARE_URL" 1440 1800 "compare"
  capture_url "$COMPARE_URL" 768 1600 "compare"
  capture_url "$COMPARE_URL" 390 1800 "compare"
fi

agent-browser close || true
echo "Screenshot verification capture complete."
