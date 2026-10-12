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

if (!passed) {
  process.exit(1);
}

console.log('\nAll build artifacts validated.');
