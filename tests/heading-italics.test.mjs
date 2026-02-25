import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

function collectTsxFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectTsxFiles(fullPath));
      continue;
    }

    if (entry.isFile() && fullPath.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }

  return files;
}

test('h1/h2/h3 do not apply Tailwind italic utility classes', () => {
  const root = process.cwd();
  const tsxFiles = [
    ...collectTsxFiles(path.join(root, 'app')),
    ...collectTsxFiles(path.join(root, 'components')),
  ];

  for (const filePath of tsxFiles) {
    const source = fs.readFileSync(filePath, 'utf8');
    assert.doesNotMatch(
      source,
      /<h[1-3][^>]*className="[^"]*\bitalic\b[^"]*"/g,
      `Heading in ${path.relative(root, filePath)} should not include italic class`,
    );
  }
});

test('global heading styles enforce non-italic defaults', () => {
  const cssPath = path.join(process.cwd(), 'app', 'globals.css');
  const css = fs.readFileSync(cssPath, 'utf8');

  assert.match(
    css,
    /h1,\s*h2,\s*h3\s*\{[\s\S]*font-family:\s*var\(--font-dm-serif\),\s*Georgia,\s*serif;[\s\S]*font-style:\s*normal;/,
    'h1/h2/h3 should use DM Serif with a normal font style',
  );
});
