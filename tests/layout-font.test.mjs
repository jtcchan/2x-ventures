import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

test('root layout uses DM Sans for body text and does not load Montserrat', () => {
  const layoutPath = path.join(process.cwd(), 'app', 'layout.tsx');
  const layoutSource = fs.readFileSync(layoutPath, 'utf8');

  assert.match(
    layoutSource,
    /<body className=\{`\$\{dmSans\.className\} antialiased`\}>/,
    'body should use dmSans.className',
  );
  assert.doesNotMatch(
    layoutSource,
    /Montserrat/,
    'layout should not import or configure Montserrat',
  );
  assert.doesNotMatch(
    layoutSource,
    /--font-montserrat/,
    'layout should not reference Montserrat CSS variable',
  );
});

test('font audit: target sections and global styles contain no Montserrat references', () => {
  const sectionFiles = [
    path.join(process.cwd(), 'components', 'Hero.tsx'),
    path.join(process.cwd(), 'components', 'HowItWorks.tsx'),
    path.join(process.cwd(), 'components', 'InvestmentCriteria.tsx'),
    path.join(process.cwd(), 'components', 'InvestmentFocus.tsx'),
    path.join(process.cwd(), 'components', 'Portfolio.tsx'),
    path.join(process.cwd(), 'components', 'CTA.tsx'),
    path.join(process.cwd(), 'components', 'Footer.tsx'),
    path.join(process.cwd(), 'app', 'globals.css'),
  ];

  for (const filePath of sectionFiles) {
    const source = fs.readFileSync(filePath, 'utf8');
    assert.doesNotMatch(source, /montserrat/i, `${path.basename(filePath)} should not reference Montserrat`);
  }

  const cssPath = path.join(process.cwd(), 'app', 'globals.css');
  const css = fs.readFileSync(cssPath, 'utf8');
  assert.match(
    css,
    /body\s*\{[\s\S]*font-family:\s*var\(--font-dm-sans\),/m,
    'global body font-family should be based on DM Sans',
  );
});
