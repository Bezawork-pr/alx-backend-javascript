const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');
const sinon = require('sinon');
const expect = require('chai').expect;


describe('Compare', function () {
    it('make sure the math used for sendPaymentRequestToApi(100, 20) is the same as Utils.calculateNumber', function () {
      const spyOnConsole = sinon.spy(console, 'log');
      const stub = sinon.stub(Utils, 'calculateNumber');
      const senRequest = stub.withArgs("SUM", 100, 20).returns(10);
      sendPaymentRequestToApi(100, 20);
      expect(spyOnConsole.calledWith('The total is: 10')).to.be.true;
    });
});
