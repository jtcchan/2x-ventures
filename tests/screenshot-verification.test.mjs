import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

test('screenshot verification script captures required viewport widths', () => {
  const scriptPath = path.join(process.cwd(), 'scripts', 'verify-screenshots.sh');
  const source = fs.readFileSync(scriptPath, 'utf8');

  assert.match(source, /capture_url "\$BASE_URL" 1440 1800 "staging"/);
  assert.match(source, /capture_url "\$BASE_URL" 768 1600 "staging"/);
  assert.match(source, /capture_url "\$BASE_URL" 390 1800 "staging"/);
});

test('package exposes a qa screenshot command', () => {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  assert.equal(
    packageJson.scripts['qa:screenshots'],
    'bash scripts/verify-screenshots.sh',
    'qa:screenshots script should run the screenshot verification workflow',
  );
});
