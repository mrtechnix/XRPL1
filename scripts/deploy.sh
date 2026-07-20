#!/usr/bin/env bash
set -e

echo "🔨 Building Astro site..."
bun run build

echo "📦 Deploying to gh-pages branch..."
cd dist
git init
git checkout -b gh-pages
git add -A
git commit -m "Deploy $(date +'%Y-%m-%d %H:%M:%S')"
git remote add origin https://github.com/mrtechnix/XRPL1.git
git push -f origin gh-pages
cd ..
rm -rf dist
echo "✅ Deployed successfully!"