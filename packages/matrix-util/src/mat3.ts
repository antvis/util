import * as mat3 from 'gl-matrix/mat3';

mat3.translate = function (out, a, v) {
  const transMat = new Array(9);
  mat3.fromTranslation(transMat, v);
  return mat3.multiply(out, transMat, a);
};

mat3.rotate = function (out, a, rad) {
  const rotateMat = new Array(9);
  mat3.fromRotation(rotateMat, rad);
  return mat3.multiply(out, rotateMat, a);
};

mat3.scale = function (out, a, v) {
  const scaleMat = new Array(9);
  mat3.fromScaling(scaleMat, v);
  return mat3.multiply(out, scaleMat, a);
};

mat3.transform = function (m, actions) {
  const out = [].concat(m);
  for (let i = 0, len = actions.length; i < len; i++) {
    const action = actions[i];
    switch (action[0]) {
      case 't':
        mat3.translate(out, out, [ action[1], action[2] ]);
        break;
      case 's':
        mat3.scale(out, out, [ action[1], action[2] ]);
        break;
      case 'r':
        mat3.rotate(out, out, action[1]);
        break;
      default:
        break;
    }
  }

  return out;
};

export default mat3;
