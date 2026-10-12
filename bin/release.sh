#!/usr/bin/env bash
set -euo pipefail

today=$(date +%Y.%m.%d)

# Find the next available tag for today
tag="$today"
counter=0
while git rev-parse "$tag" >/dev/null 2>&1; do
  counter=$((counter + 1))
  tag="${today}.${counter}"
done

echo "Running tests before tagging..."
npm test

echo ""
echo "Proposed release tag: $tag"
read -r -p "Create and push tag '$tag'? [y/N] " confirm
if [[ "$confirm" != "y" && "$confirm" != "Y" ]]; then
  echo "Release cancelled."
  exit 0
fi

git tag "$tag"
git push origin "$tag"

echo ""
echo "Released: $tag"
echo "GitHub Actions will deploy to adamfarrell.org shortly."
