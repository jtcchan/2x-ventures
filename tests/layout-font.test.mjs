import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

test('root layout body uses dmSans className instead of montserrat className', () => {
  const layoutPath = path.join(process.cwd(), 'app', 'layout.tsx');
  const layoutSource = fs.readFileSync(layoutPath, 'utf8');

  assert.match(
    layoutSource,
    /<body className=\{`\$\{dmSans\.className\} antialiased`\}>/,
    'body should use dmSans.className',
  );
  assert.doesNotMatch(
    layoutSource,
    /<body className=\{`\$\{montserrat\.className\} antialiased`\}>/,
    'body should not use montserrat.className',
  );
});
