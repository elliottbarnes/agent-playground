import test from 'node:test';
import assert from 'node:assert/strict';
import { refinePrompt, EXAMPLE } from '../demo/core.js';
test('preserves user text as text with a clear context fallback', () => {
  const attack = '<img src=x onerror=alert(1)> & ${notCode}';
  assert.ok(refinePrompt(attack).includes(attack));
  assert.match(refinePrompt('  build\na tool  '), /^Goal\nbuild\na tool\n/);
  assert.match(refinePrompt('Goal', '  '), /No additional context provided/);
});
test('rejects missing goals and inputs beyond the declared limit', () => {
  for (const goal of ['', ' \n ', null, undefined]) assert.throws(() => refinePrompt(goal), /Enter a goal/);
  assert.throws(() => refinePrompt('x'.repeat(5001)), /5,000/);
  assert.throws(() => refinePrompt('x', 'c'.repeat(5001)), /5,000/);
  assert.ok(refinePrompt('x'.repeat(5000), 'c'.repeat(5000)));
});
test('the example produces all five brief sections without altering its input', () => {
  const prompt = refinePrompt(EXAMPLE.goal, EXAMPLE.context);
  for (const section of ['Goal', 'Context and constraints', 'Approach', 'Deliverable', 'Quality check']) assert.ok(prompt.includes(section));
  assert.ok(prompt.includes(EXAMPLE.context));
});
