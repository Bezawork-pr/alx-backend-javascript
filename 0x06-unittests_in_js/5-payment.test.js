const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');
const sinon = require('sinon');
const expect = require('chai').expect;


describe('Compare', function () {
    beforeEach(function callSpy() { 
      spyOnConsole = sinon.spy(console, 'log');
      spyOnFunction = sinon.spy(Utils, 'calculateNumber');
    });

    afterEach(function restore(){ 
      spyOnConsole.restore();
      spyOnFunction.restore();
    });
    it('call sendPaymentRequestToAPI with 100, and 20', function () {
      sendPaymentRequestToApi(100, 20);
      expect(spyOnConsole.calledWith('The total is: 120')).to.be.true;
      expect(spyOnFunction.calledOnce).to.be.true;
    });
    it('call sendPaymentRequestToAPI with 10, and 20', function () {
      sendPaymentRequestToApi(10, 20);
      expect(spyOnConsole.calledWith('The total is: 30')).to.be.true;
      expect(spyOnFunction.calledOnce).to.be.true;
    });
})
