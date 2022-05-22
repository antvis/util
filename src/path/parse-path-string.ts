const SPACES = '\\s';
const PATH_COMMAND = new RegExp(
  '([a-z])[' + SPACES + ',]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[' + SPACES + ']*,?[' + SPACES + ']*)+)',
  'ig',
);
const PATH_VALUES = new RegExp('(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[' + SPACES + ']*,?[' + SPACES + ']*', 'ig');

// Parses given path string into an array of arrays of path segments
export function parsePathString(pathString: string) {
  if (!pathString) {
    return null;
  }

  if (Array.isArray(pathString)) {
    return pathString;
  }
  const paramCounts = {
    a: 7,
    c: 6,
    o: 2,
    h: 1,
    l: 2,
    m: 2,
    r: 4,
    q: 4,
    s: 4,
    t: 2,
    v: 1,
    u: 3,
    z: 0,
  };
  const data = [];

  String(pathString).replace(PATH_COMMAND, function (a, b, c) {
    const params = [];
    let name = b.toLowerCase();
    c.replace(PATH_VALUES, function (a, b) {
      b && params.push(+b);
    });
    if (name === 'm' && params.length > 2) {
      data.push([b].concat(params.splice(0, 2)));
      name = 'l';
      b = b === 'm' ? 'l' : 'L';
    }
    if (name === 'o' && params.length === 1) {
      data.push([b, params[0]]);
    }
    if (name === 'r') {
      data.push([b].concat(params));
    } else {
      while (params.length >= paramCounts[name]) {
        data.push([b].concat(params.splice(0, paramCounts[name])));
        if (!paramCounts[name]) {
          break;
        }
      }
    }
    return '';
  });

  return data;
}
