/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const { expect } = require('chai');
const calc = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('should return 0 for empty string input', () => {
    expect(calc(1, 3)).to.equal(0);
    expect(calc('', 1, 3)).to.equal(0);
  });
  it('should return Error on dividing with 0', () => {
    expect(calc('DIVIDE', 1.4, 0)).to.equal('Error');
  });
  it('should return sum on SUM', () => {
    expect(calc('SUM', 1.4, 4.5)).to.equal(6);
    expect(calc('SUM', 1, 3)).to.equal(4);
    expect(calc('SUM', 1.8, 3.2)).to.equal(5);
  });
  it('should divide if numbers not zero', () => {
    expect(calc('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    expect(calc('DIVIDE', 1, 3)).to.equal(0.3333333333333333);
    expect(calc('DIVIDE', 1.8, 3.2)).to.equal(0.6666666666666666);
  });
  it('should subtract the rounded off numbers', () => {
    expect(calc('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    expect(calc('SUBTRACT', 1, 3)).to.equal(-2);
    expect(calc('SUBTRACT', 1.8, 3.2)).to.equal(-1);
  });
});