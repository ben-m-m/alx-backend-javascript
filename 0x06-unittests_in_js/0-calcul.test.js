const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
  it('should return the correct sum for integers', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round and return the sum for mixed numbers', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });


});
