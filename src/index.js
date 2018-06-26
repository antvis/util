
const arrayUtil = require('./array');
const eventUtil = require('./event');
const stringUtil = require('./string');
const mix = require('./mix');

module.exports = mix({
  // collections
  arrayUtil,
  eventUtil,
  stringUtil,
  // others
  augment: require('./augment'),
  clone: require('./clone'),
  deepMix: require('./deepMix'),
  each: require('./each'),
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
  uniqueId: require('./uniqueId')
}, arrayUtil, eventUtil, stringUtil);
