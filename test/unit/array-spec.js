const expect = require('chai').expect;
const arrayUtil = require('../../src/array');

describe('array', () => {
  it('contains', () => {
    expect(arrayUtil.contains([ 1, 2, 3 ], 1)).to.be.true;
    expect(arrayUtil.contains([ 1, 2, 3 ], 4)).to.be.false;
    expect(arrayUtil.contains([ 'asd', 'qwe' ], 'qwe')).to.be.true;
    expect(arrayUtil.contains([ 'a', 'b', 'c' ], 'd')).to.be.false;
    expect(arrayUtil.contains(null, 1)).to.be.false;
  });

  it('pull & pullAll', () => {
    expect(arrayUtil.pull([ 1, 1, 2, 3 ], 1, 2).length).to.equal(1);
    expect(arrayUtil.pull([ 'a', 'b', 'c', 'a', 'b', 'c' ], 'a', 'c').length).to.equal(2);
  });

  it('pullAt', () => {
    expect(arrayUtil.pullAt([ 1, 1, 2, 3, 1 ], [ 1, 2 ]).length).to.equal(3);
    expect(arrayUtil.pullAt([], [ 1 ]).length).to.equal(0);
    expect(arrayUtil.pullAt(null, []).length).to.equal(0);
  });

  it('remove', () => {
    const arr = [ 1, 2, 3, 4 ];
    const evens = arrayUtil.remove(arr, n => n % 2 === 0);
    expect(arr.length).equals(2);
    expect(evens.length).equals(2);
  });

  it('uniq', () => {
    expect(arrayUtil.uniq([ 1, 2, 3, 2, 4, 1 ]).length).to.equal(4);
    expect(arrayUtil.uniq([ 'a', 'a', 'b', 'c' ]).length).to.equal(3);
  });
});
