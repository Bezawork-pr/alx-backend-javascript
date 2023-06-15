const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');
const sinon = require('sinon');
const expect = require('expect');


describe('Compare', function () {
    it('make sure the math used for sendPaymentRequestToApi(100, 20) is the same as Utils.calculateNumber', function () {
      const spyOnFunction = Sinon.spy(Utils, 'calculateNumber');
	
      const senRequest = sendPaymentRequestToApi(100, 20);
      expect(spyOnFunction.calledOnceWithExactly('SUM', 100, 20)).to.equal(120);
      expect(Utils.calculateNumber('SUM', 100, 20)).to.equal(senRequest);
    });
});
