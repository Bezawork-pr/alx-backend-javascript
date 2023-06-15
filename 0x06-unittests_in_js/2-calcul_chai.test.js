/* eslint-disable */
const chai = require('chai');
const calculateNumber = require('./2-calcul_chai.js');


describe('calculateNumber', function () {
    it('Checks rounded number sum', function () {
      chai.expect(calculateNumber("SUM", 1, 2)).to.equal(3);
      chai.expect(calculateNumber("SUM", 1.1, 2)).to.equal(3);
      chai.expect(calculateNumber("SUM", 1, 2.1)).to.equal(3);
      chai.expect(calculateNumber("SUM", 1, 2.7)).to.equal(4);
      chai.expect(calculateNumber("SUM", 1.7, 2)).to.equal(4);
      chai.expect(calculateNumber("SUM", 1.2, 2.2)).to.equal(3);
      chai.expect(calculateNumber("SUM", 1.7, 2.9)).to.equal(5);
    });
    it('Test negative numbers', function () {
      chai.expect(calculateNumber("SUM", -1, -2)).to.equal(-3);
      chai.expect(calculateNumber("SUM", -1, 1)).to.equal(0);
      chai.expect(calculateNumber("SUM", -1.6, 1)).to.equal(-1);
    });
    it('Throw error when Nan', function() {
      chai.expect(() => calculateNumber("SUM", 'a', 'b')).to.throw();
      chai.expect(() => calculateNumber("SUBTRACT", 'a', 'b')).to.throw();
      chai.expect(() => calculateNumber("DIVIDE", 'a', 'b')).to.throw();
    });
    it('Check if it returns string Error', function() {
      chai.expect(calculateNumber("DIVIDE", 1, 0)).to.equal("Error");
    });
    it('Checks rounded number DIVIDE', function () {
      chai.expect(calculateNumber("DIVIDE", 1, 2)).to.equal(0.5);
      chai.expect(calculateNumber("DIVIDE", 4, 2)).to.equal(2);
      chai.expect(calculateNumber("DIVIDE", 4, 2.5)).to.equal(1.3333333333333333);
      chai.expect(calculateNumber("DIVIDE", -1.9, 2.6)).to.equal( -0.6666666666666666);
    });
    it('Checks rounded number SUBTRACT', function () {
      chai.expect(calculateNumber("SUBTRACT", 1, 2)).to.equal(-1);
      chai.expect(calculateNumber("SUBTRACT", 1.9, 2.9)).to.equal(-1);
    });
   
});
