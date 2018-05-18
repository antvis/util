function _mix(dist, obj) {
  for (var k in obj) {
    if (obj.hasOwnProperty(k) && k !== 'constructor' && obj[k] !== undefined) {
      dist[k] = obj[k];
    }
  }
}

const assign = function (dist, obj1, obj2, obj3) {
  if (obj1) {
    _mix(dist, obj1);
  }

  if (obj2) {
    _mix(dist, obj2);
  }

  if (obj3) {
    _mix(dist, obj3);
  }
  return dist;
};

module.exports = assign;