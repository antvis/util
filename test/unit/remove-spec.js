const expect = require('chai').expect;
const remove = require('../../src/remove');

describe('remove', () => {
  it('remove', () => {
    const a = [{ a: 1 }, [ 1, 2 ], 3, '4' ];
    remove(a, 3);
    expect(a.length).to.equal(3);
  });
});
