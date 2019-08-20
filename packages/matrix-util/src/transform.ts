import { each, clone } from '@antv/util';
import mat3 from './mat3';

export default (m, ts) => {
  m = clone(m);
  each(ts, (t) => {
    switch (t[0]) {
      case 't':
        mat3.translate(m, m, [ t[1], t[2] ]);
        break;
      case 's':
        mat3.scale(m, m, [ t[1], t[2] ]);
        break;
      case 'r':
        mat3.rotate(m, m, t[1]);
        break;
      case 'm':
        mat3.multiply(m, m, t[1]);
        break;
      default:
        return false;
    }
  });
  return m;
};
