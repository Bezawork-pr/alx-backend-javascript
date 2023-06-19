const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');
const sinon = require('sinon');
const expect = require('chai').expect;


describe('Compare', function () {
    it('make sure the math used for sendPaymentRequestToApi(100, 20) is the same as Utils.calculateNumber', function () {
      const spyOnFunction = sinon.spy(Utils, 'calculateNumber');
      const senRequest = sendPaymentRequestToApi(100, 20);
      expect(spyOnFunction.calledOnce).to.be.true;
      expect(spyOnFunction.calledWith('SUM', 100, 20)).to.be.true;
    });
});
