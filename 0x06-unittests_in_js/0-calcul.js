module.exports = function calculateNumber(a, b) {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw TypeError;
  }
  return Math.round(a + b);
};
