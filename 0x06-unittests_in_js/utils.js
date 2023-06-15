const Utils = {
  calculateNumber(type, a, b) {
    if (isNaN(a) || isNaN(b)) {
      throw TypeError;
    }
    if (Math.round(b) === 0 && type === "DIVIDE") {
      return "Error";
    }
    if (type === "SUM") {
      return Math.round(a) + Math.round(b);
    } else if (type === "SUBTRACT") {
      return Math.round(a) - Math.round(b);
    } else if (type === "DIVIDE") {
      return Math.round(a) / Math.round(b);
    }
  }
}
module.exports = Utils;
