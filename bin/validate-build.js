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

if (!passed) {
  process.exit(1);
}

console.log('\nAll build artifacts validated.');
