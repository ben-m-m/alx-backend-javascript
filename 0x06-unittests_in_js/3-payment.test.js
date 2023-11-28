const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const spyUtils = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(spyUtils.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(spyUtils.calculateNumber.alwaysReturned(120)).to.be.true;
    expect(spyUtils.calculateNumber.callCount).to.be.equal(1);
    spyUtils.calculateNumber.restore();
  });
});