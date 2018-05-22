function isNull(value) {
  return value === null;
}

function isUndefined(value) {
  return value === undefined;
}

// isFinite,
const isNil = function(value) {
    /**
     * isNil(null) => true
     * isNil() => true
     */
  return isUndefined(value) || isNull(value);
};

module.exports = isNil;
