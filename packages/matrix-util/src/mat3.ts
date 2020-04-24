export * from 'gl-matrix/mat3';
import { multiply, fromTranslation, fromRotation, fromScaling } from 'gl-matrix/mat3';

function leftTranslate(out, a, v) {
  const transMat = new Array(9);
  fromTranslation(transMat, v);
  return multiply(out, transMat, a);
}

function leftRotate(out, a, rad) {
  const rotateMat = new Array(9);
  fromRotation(rotateMat, rad);
  return multiply(out, rotateMat, a);
}

function leftScale(out, a, v) {
  const scaleMat = new Array(9);
  fromScaling(scaleMat, v);
  return multiply(out, scaleMat, a);
}

function leftMultiply(out, a, a1) {
  return multiply(out, a1, a);
}
/**
 * 根据 actions 来做 transform
 * @param m
 * @param actions
 */
export function transform(m: number[], actions: any[][]) {
  const matrix = m ? [].concat(m) : [ 1, 0, 0, 0, 1, 0, 0, 0, 1 ];

  for (let i = 0, len = actions.length; i < len; i++) {
    const action = actions[i];
    switch (action[0]) {
      case 't':
        leftTranslate(matrix, matrix, [ action[1], action[2] ]);
        break;
      case 's':
        leftScale(matrix, matrix, [ action[1], action[2] ]);
        break;
      case 'r':
        leftRotate(matrix, matrix, action[1]);
        break;
      case 'm':
        leftMultiply(matrix, matrix, action[1]);
        break;
      default:
        break;
    }
  }

  return matrix;
}
