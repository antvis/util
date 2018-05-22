const isNumber = require('./type/isNumber');
const PRECISION = 0.00001; // numbers less than this is considered as 0
const RADIAN = Math.PI / 180;
const DEGREE = 180 / Math.PI;

function toInteger(str, radix) {
  return parseInt(str, radix || 10);
}

const mathUtil = {
  clamp(a, min, max) {
    if (a < min) {
      return min;
    } else if (a > max) {
      return max;
    }
    return a;
  },
  isDecimal(num) {
    return isNumber(num) && num % 1 !== 0;
  },
  isEven(num) {
    return isNumber(num) && num % 2 === 0;
  },
  isFinite,
  isInteger: Number.isInteger ? Number.isInteger : function(num) {
    return isNumber(num) && num % 1 === 0;
  },
  isNaN,
  isNegative(num) {
    return isNumber(num) && num < 0;
  },
  isNumberEqual(a, b) {
    return Math.abs((a - b)) < PRECISION;
  },
  isOdd(num) {
    return isNumber(num) && num % 2 !== 0;
  },
  isPositive(num) {
    return isNumber(num) && num > 0;
  },
  mod(n, m) {
    return ((n % m) + m) % m;
  },
  toFloat(str) {
    return parseFloat(str);
  },
  toDegree(radian) {
    return DEGREE * radian;
  },
  toInt: toInteger,
  toInteger,
  toRadian(degree) {
    return RADIAN * degree;
  },
  fixedBase(v, base) {
    const str = base.toString();
    const index = str.indexOf('.');
    if (index === -1) {
      return Math.round(v);
    }
    let length = str.substr(index + 1).length;
    if (length > 20) {
      length = 20;
    }
    return parseFloat(v.toFixed(length));
  }
};

module.exports = mathUtil;
