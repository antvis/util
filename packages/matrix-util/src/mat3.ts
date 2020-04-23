export * from 'gl-matrix/mat3';
import { translate, scale, rotate, multiply } from 'gl-matrix/mat3';

/**
 * 根据 actions 来做 transform
 * @param m 
 * @param actions 
 */
export function transform(m: number[], actions: string[]) {
  const matrix = m ? [].concat(m) : [ 1, 0, 0, 0, 1, 0, 0, 0, 1 ];

  for (let i = 0, len = actions.length; i < len; i++) {
    const action = actions[i];
    switch (action[0]) {
      case 't':
        translate(matrix, matrix, [ action[1], action[2] ]);
        break;
      case 's':
        scale(matrix, matrix, [ action[1], action[2] ]);
        break;
      case 'r':
        rotate(matrix, matrix, action[1]);
        break;
      case 'm':
        multiply(matrix, matrix, action[1]);
        break;
      default:
        break;
    }
  }

  return matrix;
}