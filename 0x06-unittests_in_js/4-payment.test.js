const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const spyUtils = sinon.spy(console, 'log');
    const spyStub = sinon.stub(Utils, 'calculateNumber');

    spyStub.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(spyStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(spyStub.callCount).to.be.equal(1);
    expect(spyUtils.log.calledWith('The total is: 10')).to.be.true;
    expect(spyUtils.log.callCount).to.be.equal(1);

    Utils.calculateNumber.restore();
    spyUtils.log.restore();
  });
});