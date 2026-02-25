import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

test('hero component uses CSS module for responsive background control', () => {
  const heroPath = path.join(process.cwd(), 'components', 'Hero.tsx');
  const heroSource = fs.readFileSync(heroPath, 'utf8');

  assert.match(heroSource, /import styles from '\.\/Hero\.module\.css'/);
  assert.match(heroSource, /className=\{`\$\{styles\.hero\}/);
  assert.match(heroSource, /pb-\[220px\]/, 'hero should reserve bottom space for backdrop');
});

test('hero css has explicit breakpoint rules to avoid text-image overlap', () => {
  const cssPath = path.join(process.cwd(), 'components', 'Hero.module.css');
  const css = fs.readFileSync(cssPath, 'utf8');

  assert.match(css, /\.hero\s*\{[\s\S]*background:[\s\S]*url\('\/backdrop\.png'\)/);
  assert.match(css, /@media \(max-width: 1440px\)/);
  assert.match(css, /@media \(max-width: 1024px\)/);
  assert.match(css, /@media \(max-width: 768px\)/);
  assert.match(css, /@media \(max-width: 390px\)/);
  assert.match(css, /background-position:\s*50% 100%,\s*0 0;/);
  assert.match(css, /background-size:\s*min\(760px,\s*210%\) auto,\s*auto;/);
});
