const expect = require('chai').expect;
import * as arrayUtil from '../../src';

describe('array', () => {
  it('contains', () => {
    expect(arrayUtil.contains([ 1, 2, 3 ], 1)).to.be.true;
    expect(arrayUtil.contains([ 1, 2, 3 ], 4)).to.be.false;
    expect(arrayUtil.contains([ 'asd', 'qwe' ], 'qwe')).to.be.true;
    expect(arrayUtil.contains([ 'a', 'b', 'c' ], 'd')).to.be.false;
    expect(arrayUtil.contains(null, 1)).to.be.false;
  });

  it('difference', () => {
    expect(arrayUtil.difference([ 1, 2, 3 ], [ 1 ])).to.eql([ 2, 3 ]);
  });

  it('find', () => {
    expect(arrayUtil.find([ 1, 2, 3 ], (a) => a % 2 === 0)).to.be.equal(2);
    expect(arrayUtil.find([
      { a: 1, b: 2 },
      { a: 2, b: 3 },
      { a: 3, b: 4 },
    ], { a: 2 })).to.be.eql({ a: 2, b: 3 });
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
    const evens = arrayUtil.remove(arr, (n) => n % 2 === 0);
    expect(arr.length).equals(2);
    expect(evens.length).equals(2);
  });

  it('uniq', () => {
    expect(arrayUtil.uniq([ 1, 2, 3, 2, 4, 1 ]).length).to.equal(4);
    expect(arrayUtil.uniq([ 'a', 'a', 'b', 'c' ]).length).to.equal(3);
  });

  it('firstValue', () => {
    expect(arrayUtil.firstValue([ { a: 1 }, { a: 2 }, { a: 3 } ], 'a')).to.equal(1);
    expect(arrayUtil.firstValue([ { x: [ 1, 2, 3 ]}, [ 3, 4 ], [ 5, 6 ] ], 'x')).to.equal(1);
  });

  it('getRange', () => {
    const range = arrayUtil.getRange([ 5, 0, -2, 1, 4, 9 ]);
    expect(range.min).to.equal(-2);
    expect(range.max).to.equal(9);

    const range2 = arrayUtil.getRange([ 5, NaN, -2, 1, 4, 9 ]);
    expect(range2.min).to.equal(-2);
    expect(range2.max).to.equal(9);
  });

  it('flatten with primitive array', () => {
    const data = [ 1, [ 2, [ 3, [ 4 ] ], 5 ] ];
    const result = arrayUtil.flatten(data);
    expect(result.length).to.equal(4);
    expect(result[1]).to.equal(2);
    expect(Array.isArray(result[2])).to.be.true;
    expect(result[2].length).to.equal(2);
  });

  it('flatten with object array', () => {
    const data = [ [ 1, [ 2, 3 ] ], [ { a: 1, b: 2 }, [ 2, 3 ] ] ];
    const result = arrayUtil.flatten(data);
    expect(result.length).to.equal(4);
    expect(result[0]).to.equal(1);
    expect(result[3].length).to.equal(2);
  });

  it('flattenDeep', () => {
    const data = [ 1, [ 2, [ 3, [ 4 ] ], 5 ] ];
    const result = arrayUtil.flattenDeep(data);
    expect(result).to.eql([ 1, 2, 3, 4, 5 ]);
  });

  it('union with plain array', () => {
    const result = arrayUtil.union([ 2 ], [ 1, 2 ], [ 1, 2, 3 ]);
    expect(result.length).to.equal(3);
    expect(result[0]).to.equal(2);
    expect(result[2]).to.equal(3);
  });

  it('union with array', () => {
    const result = arrayUtil.union([ [ 1, 2 ], 3 ], [ [ 1, 2 ], 4 ]);
    expect(result.length).to.equal(4);
  });

  it('union with object and array', () => {
    const result = arrayUtil.union([ 1, 2, 3, 'a' ], [ { a: 1 }, { b: 2 }, 'a' ]);
    expect(result.length).to.equal(6);
    expect(result[4].a).to.equal(1);
  });

  it('reduce plain array', () => {
    const result = arrayUtil.reduce([ 1, 2 ], function(sum, n) {
      return sum + n;
    }, 0);
    expect(result).to.equal(3);
  });

  it('reduce object array', () => {
    const result = arrayUtil.reduce({ a: 1, b: 2, c: 1 }, function(result, value, key) {
      (result[value] || (result[value] = [])).push(key);
      return result;
    }, {});
    expect(typeof result).to.equal('object');
    expect(result[1].length).to.equal(2);
    expect(result[2].length).to.equal(1);
  });

  it('sortBy', () => {
    expect(arrayUtil.sortBy(
      [ 1, 2, 3, 4, 5, 6 ], (num) => Math.sin(num)
    )).to.eql(
      [ 5, 4, 6, 3, 1, 2 ]
    );
    expect(arrayUtil.sortBy(
      [ { name: 'moe', age: 40 }, { name: 'larry', age: 50 }, { name: 'curly', age: 60 } ], 'name'
    )).to.eql(
      [ { name: 'curly', age: 60 }, { name: 'larry', age: 50 }, { name: 'moe', age: 40 } ]
    );
    expect(arrayUtil.sortBy(
      [
        { user: 'fred', age: 48 },
        { user: 'barney', age: 36 },
        { user: 'fred', age: 40 },
        { user: 'barney', age: 34 },
      ], [ 'user', 'age' ]
    )).to.eql(
      [
        { user: 'barney', age: 34 },
        { user: 'barney', age: 36 },
        { user: 'fred', age: 40 },
        { user: 'fred', age: 48 },
      ]
    );
  });

  it('valuesOfKey', () => {
    expect(arrayUtil.valuesOfKey(
      [
        { a: 1, b: 2 },
        { a: 2, b: 3 },
        { a: 3, b: 4 },
      ], 'a'
    )).to.eql(
      [ 1, 2, 3 ]
    );
  });
});
