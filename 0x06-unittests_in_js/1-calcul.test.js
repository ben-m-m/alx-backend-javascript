/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const assert = require('assert');
const calc = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return 0 for empty string input', () => {
    assert.strictEqual(calc(1, 3), 0);
    assert.strictEqual(calc('', 1, 3), 0);
  });
  it('should return Error on dividing with 0', () => {
    assert.strictEqual(calc('DIVIDE', 1.4, 0), 'Error');
  });
  it('should return sum on SUM', () => {
    assert.strictEqual(calc('SUM', 1.4, 4.5), 6);
    assert.strictEqual(calc('SUM', 1, 3), 4);
    assert.strictEqual(calc('SUM', 1.8, 3.2), 5);
  });
  it('should divide if numbers not zero', () => {
    assert.strictEqual(calc('DIVIDE', 1.4, 4.5), 0.2);
    assert.strictEqual(calc('DIVIDE', 1, 3), 0.3333333333333333);
    assert.strictEqual(calc('DIVIDE', 1.8, 3.2), 0.6666666666666666);
  });
  it('should subtract the rounded off numbers', () => {
    assert.strictEqual(calc('SUBTRACT', 1.4, 4.5), -4);
    assert.strictEqual(calc('SUBTRACT', 1, 3), -2);
    assert.strictEqual(calc('SUBTRACT', 1.8, 3.2), -1);
  });
});