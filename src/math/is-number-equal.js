const PRECISION = 0.00001; // numbers less than this is considered as 0

const isNumberEqual = function(a, b) {
  return Math.abs((a - b)) < PRECISION;
};

module.exports = isNumberEqual;
