#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

console.log('Building site...');
execSync('npx astro build', { cwd: root, stdio: 'inherit' });

const required = [
  'dist/index.html',
  'dist/blog/index.html',
  'dist/resume/index.html',
  'dist/404.html',
  'dist/rss.xml',
  'dist/sitemap-index.xml',
  'dist/robots.txt',
];

let passed = true;

for (const file of required) {
  const fullPath = path.join(root, file);
  if (fs.existsSync(fullPath)) {
    console.log(`✓ ${file}`);
  } else {
    console.error(`✗ Missing: ${file}`);
    passed = false;
  }
}

// The analytics beacon must ship in release builds and nowhere else (see CloudflareAnalytics.astro).
const analyticsExpected = process.env.PUBLIC_ENABLE_ANALYTICS === 'true';
const homepagePath = path.join(root, 'dist/index.html');
if (fs.existsSync(homepagePath)) {
  const hasBeacon = fs.readFileSync(homepagePath, 'utf8').includes('static.cloudflareinsights.com');
  if (hasBeacon === analyticsExpected) {
    console.log(`✓ analytics beacon ${hasBeacon ? 'present (release build)' : 'absent (local build)'}`);
  } else {
    console.error(
      `✗ analytics beacon ${hasBeacon ? 'present' : 'missing'} but expected ${analyticsExpected ? 'present' : 'absent'}`
    );
    passed = false;
  }
}

// Every JSON-LD block must be a single object with an "@context" string. Cloudflare's analytics
// beacon throws on arrays and on objects without one (see StructuredData.astro).
function findHtmlFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return findHtmlFiles(fullPath);
    return entry.name.endsWith('.html') ? [fullPath] : [];
  });
}

const jsonLdPattern = /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
let jsonLdBlocks = 0;
for (const htmlFile of findHtmlFiles(path.join(root, 'dist'))) {
  const html = fs.readFileSync(htmlFile, 'utf8');
  for (const [, json] of html.matchAll(jsonLdPattern)) {
    jsonLdBlocks += 1;
    const data = JSON.parse(json);
    if (Array.isArray(data) || typeof data['@context'] !== 'string') {
      console.error(
        `✗ Invalid JSON-LD in ${path.relative(root, htmlFile)}: must be one object with an "@context" string`
      );
      passed = false;
    }
  }
}
console.log(`✓ ${jsonLdBlocks} JSON-LD blocks are objects with an @context`);

if (!passed) {
  process.exit(1);
}

console.log('\nAll build artifacts validated.');
