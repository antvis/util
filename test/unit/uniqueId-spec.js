const expect = require('chai').expect;
const uniqueId = require('../../src').uniqueId;

describe('uniqueId', () => {
  it('uniqueId', () => {
    const id1 = uniqueId('g');
    const id2 = uniqueId('g');
    const id3 = uniqueId('g');
    expect(id1).not.to.equal(id2);
    expect(id1).not.to.equal(id3);
    expect(id3).not.to.equal(id2);
  });
});
