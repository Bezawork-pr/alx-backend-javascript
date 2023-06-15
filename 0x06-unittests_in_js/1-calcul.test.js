/* eslint-disable */
const assert = require('assert');
const calculateNumber = require('./1-calcul.js');


describe('calculateNumber', function () {
    it('Checks rounded number sum', function () {
      assert.strictEqual(calculateNumber("SUM", 1, 2), 3);
      assert.strictEqual(calculateNumber("SUM", 1.1, 2), 3);
      assert.strictEqual(calculateNumber("SUM", 1, 2.1), 3);
      assert.strictEqual(calculateNumber("SUM", 1, 2.7), 4);
      assert.strictEqual(calculateNumber("SUM", 1.7, 2), 4);
      assert.strictEqual(calculateNumber("SUM", 1.2, 2.2), 3);
      assert.strictEqual(calculateNumber("SUM", 1.7, 2.9), 5);
    });
    it('Test negative numbers', function () {
      assert.strictEqual(calculateNumber("SUM", -1, -2), -3);
      assert.strictEqual(calculateNumber("SUM", -1, 1), 0);
      assert.strictEqual(calculateNumber("SUM", -1.6, 1), -1);
    });
    it('Throw error when Nan', function() {
      assert.throws(() => calculateNumber("SUM", 'a', 'b'), '[Function: TypeError]');
      assert.throws(() => calculateNumber("SUBTRACT", 'a', 'b'), '[Function: TypeError]');
      assert.throws(() => calculateNumber("DIVIDE", 'a', 'b'), '[Function: TypeError]');
    });
    it('Check if it returns string Error', function() {
      assert.strictEqual(calculateNumber("DIVIDE", 1, 0), "Error");
    });
    it('Checks rounded number DIVIDE', function () {
      assert.strictEqual(calculateNumber("DIVIDE", 1, 2), 0.5);
      assert.strictEqual(calculateNumber("DIVIDE", 4, 2), 2);
      assert.strictEqual(calculateNumber("DIVIDE", 4, 2.5), 1.3333333333333333);
      assert.strictEqual(calculateNumber("DIVIDE", -1.9, 2.6), -0.6666666666666666);
    });
    it('Checks rounded number SUBTRACT', function () {
      assert.strictEqual(calculateNumber("SUBTRACT", 1, 2), -1);
      assert.strictEqual(calculateNumber("SUBTRACT", 1.9, 2.9), -1);
    });
   
});
