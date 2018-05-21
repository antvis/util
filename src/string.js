
function toString(value) {
  return value.toString();
}

function upperCase(value) {
  return toString(value).toUpperCase();
}

function lowerCase(value) {
  return toString(value).toLowerCase();
}

const strUtil = {
  lc: lowerCase,
  lowerCase,
  lowerFirst(value) {
    value = toString(value);
    return lowerCase(value.charAt(0)) + value.substring(1);
  },
  uc: upperCase,
  upperCase,
  upperFirst(value) {
    value = toString(value);
    return upperCase(value.charAt(0)) + value.substring(1);
  }
};

module.exports = strUtil;
