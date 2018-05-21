const upperFirst = function(value) {
  value += '';
  return value.charAt(0).toUpperCase() + value.substring(1);
};

module.exports = upperFirst;
