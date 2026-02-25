import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

test('public/favicon.ico exists and contains the 2x mark PNG payload', () => {
  const root = process.cwd();
  const faviconPath = path.join(root, 'public', 'favicon.ico');
  const markPath = path.join(root, 'public', '2x-mark.png');

  const favicon = fs.readFileSync(faviconPath);
  const mark = fs.readFileSync(markPath);

  assert.ok(favicon.length > 22, 'favicon.ico should not be empty');
  assert.equal(favicon.readUInt16LE(0), 0, 'ICO reserved field should be 0');
  assert.equal(favicon.readUInt16LE(2), 1, 'ICO type should be icon');
  assert.equal(favicon.readUInt16LE(4), 1, 'ICO should contain exactly one image');

  const payloadSize = favicon.readUInt32LE(14);
  const payloadOffset = favicon.readUInt32LE(18);
  const payload = favicon.subarray(payloadOffset, payloadOffset + payloadSize);

  assert.equal(payload.length, mark.length, 'ICO payload size should match 2x-mark.png');
  assert.deepEqual(payload, mark, 'ICO payload should match 2x-mark.png');
});
