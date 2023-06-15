/* eslint-disable */
const assert = require('assert');
const calculateNumber = require('./0-calcul.js');


describe('calculateNumber', function () {
    it('Checks rounded number sum', function () {
      assert.strictEqual(calculateNumber(1, 2), 3);
      assert.strictEqual(calculateNumber(1.1, 2), 3);
      assert.strictEqual(calculateNumber(1, 2.1), 3);
      assert.strictEqual(calculateNumber(1, 2.7), 4);
      assert.strictEqual(calculateNumber(1.7, 2), 4);
      assert.strictEqual(calculateNumber(1.2, 2.2), 3);
      assert.strictEqual(calculateNumber(1.7, 2.9), 5);
    });
   it('Test negative numbers', function () {
     assert.strictEqual(calculateNumber(-1, -2), -3);
     assert.strictEqual(calculateNumber(-1, 1), 0);
     assert.strictEqual(calculateNumber(-1.6, 1), -1);
   });
   it('Throw error when Nan', function() {
     assert.throws(() => calculateNumber('a', 'b'), '[Function: TypeError]');
   });
});
