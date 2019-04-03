const expect = require('chai').expect;
import { each } from '../../src';

describe('each', () => {
  it('each null', () => {
    let i = 0;
    each(null, () => {
      i++;
    });
    expect(i).to.equal(0);
  });

  it('each array', () => {
    let i = 0;
    const a = [ 1, 2, 3, 4 ];
    each(a, (item, j) => {
      expect(item).to.equal(a[j]);
      i++;
    });
    expect(i).to.equal(a.length);
  });

  it('each object', () => {
    let i = 0;
    const a = { a: 1, b: 2, c: 3, d: 4, e: 5 };
    each(a, (item, j) => {
      expect(item).to.equal(a[j]);
      i++;
    });
    expect(i).to.equal(5);
  });

  it('each break', () => {
    const a = [ 1, 2, 3, 4, 5 ];
    let j = 0;
    each(a, (item, i) => {
      if (i === 2) {
        return false;
      }
      j++;
    });
    expect(j).to.equal(2);

    const b = { a: 1, b: 2, c: 3 };
    j = 0;
    each(b, (v, k) => {
      if (k === 'b') {
        return false;
      }
      j++;
    });
    expect(j).to.equal(1);
  });
});
