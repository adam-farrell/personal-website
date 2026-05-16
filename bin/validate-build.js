#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

console.log('Building site...');
execSync('npx hexo generate', { cwd: root, stdio: 'inherit' });

const required = [
  'public/index.html',
  'public/atom.xml',
];

const searchCandidates = [
  'public/search.xml',
  'public/search.json',
  'public/content.json',
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

const searchFound = searchCandidates.find(f => fs.existsSync(path.join(root, f)));
if (searchFound) {
  console.log(`✓ ${searchFound} (search index)`);
} else {
  console.error(`✗ Missing search index (checked: ${searchCandidates.join(', ')})`);
  passed = false;
}

if (!passed) {
  process.exit(1);
}

console.log('\nAll build artifacts validated.');
