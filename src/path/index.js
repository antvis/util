
const pathIntersection = require('./path-intersection');
const path2absolute = require('./path2absolute');
const path2curve = require('./path2curve');

module.exports = {
  catmullRomToBezier: require('./catmull-rom2bezier'),
  fillPath: require('./fill-path'),
  fillPathByDiff: require('./fill-path-by-diff'),
  formatPath: require('./format-path'),
  intersection: pathIntersection,
  pathIntersection,
  parsePathArray: require('./parse-path-array'),
  parsePathString: require('./parse-path-string'),
  pathToAbsolute: path2absolute,
  path2absolute,
  pathTocurve: path2curve,
  path2curve,
  rectPath: require('./rect-path')
};
