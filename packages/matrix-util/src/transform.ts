import { each, clone } from '@antv/util';
import mat3 from './mat3';

export default (m, ts) => {
  const matrix = m ? clone(m) : [ 1, 0, 0, 0, 1, 0, 0, 0, 1 ];
  each(ts, (t) => {
    switch (t[0]) {
      case 't':
        mat3.translate(matrix, matrix, [ t[1], t[2] ]);
        break;
      case 's':
        mat3.scale(matrix, matrix, [ t[1], t[2] ]);
        break;
      case 'r':
        mat3.rotate(matrix, matrix, t[1]);
        break;
      case 'm':
        mat3.multiply(matrix, matrix, t[1]);
        break;
      default:
        return false;
    }
  });
  return matrix;
};
