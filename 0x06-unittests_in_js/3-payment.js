const Utils = require('./utils.js');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  console.log(typeof totalAmount);
  const result = Utils.calculateNumber("SUM", totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}
sendPaymentRequestToApi(100, 20);
