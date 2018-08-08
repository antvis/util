
const arrayUtil = require('./array');
const eventUtil = require('./event');
const mathUtil = require('./math');
const objectUtil = require('./object');
const stringUtil = require('./string');
const typeUtil = require('./type');
const each = require('./each');
const mix = require('./mix');

const util = {
  // collections
  arrayUtil,
  eventUtil,
  mathUtil,
  objectUtil,
  stringUtil,
  typeUtil,
  // others
  augment: require('./augment'),
  clone: require('./clone'),
  deepMix: require('./deepMix'),
  each,
  extend: require('./extend'),
  filter: require('./filter'),
  group: require('./group'),
  groupBy: require('./groupBy'),
  groupToMap: require('./groupToMap'),
  indexOf: require('./indexOf'),
  isEmpty: require('./isEmpty'),
  isEqual: require('./isEqual'),
  isEqualWith: require('./isEqualWith'),
  map: require('./map'),
  mix,
  pick: require('./pick'),
  toArray: require('./toArray'),
  toString: require('./toString'),
  uniqueId: require('./uniqueId')
};

each([
  arrayUtil,
  eventUtil,
  mathUtil,
  objectUtil,
  stringUtil,
  typeUtil
], collection => {
  mix(util, collection);
});

module.exports = util;
