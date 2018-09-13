
const DEV = 0.001;

module.exports = (v1, v2, deviation = DEV) => Math.abs(v1 - v2) < deviation;
