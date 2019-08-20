const expect = require('chai').expect;
import { groupBy, groupToMap, group } from '../../src';

describe('group', () => {
  const a = [ {
    date: '1992-2-15',
    name: 'name1',
  }, {
    date: '1992-2-16',
    name: 'name2',
  }, {
    date: '1992-2-17',
    name: 'name3',
  }, {
    date: '1992-2-15',
    name: 'name3',
  } ];
  it('groupBy', () => {
    const data = groupBy([ 6.1, 4.2, 6.3 ], Math.floor);
    expect(typeof data).to.equal('object');
    expect(data[4].length).to.equal(1);
    expect(data[4][0]).to.equal(4.2);
    expect(data[6].length).to.equal(2);
  });

  it('groupToMap', () => {
    const data = groupToMap(a, 'date');
    expect(typeof data).to.equal('object');
    expect(data['_1992-2-15'].length).to.equal(2);
  });

  it('group', () => {
    const data = group(a, 'date');
    expect(Array.isArray(data)).to.be.true;
    expect(data.length).to.equal(3);
    expect(data[0].length).to.equal(2);
    expect(typeof data[0]).to.equal('object');
  });

  it('group function', () => {
    expect(group([ 6.1, 4.2, 6.3 ], Math.floor)).to.eql([ [ 4.2 ], [ 6.1, 6.3 ] ]);
  });

  it('groupBy function', () => {
    expect(groupBy([ 6.1, 4.2, 6.3 ], Math.floor)).to.eql({ 4: [ 4.2 ], 6: [ 6.1, 6.3 ]});
  });

  it('groupBy string', () => {
    expect(groupBy(a, 'name')).to.eql({
      name1: [ {
        date: '1992-2-15',
        name: 'name1',
      } ],
      name2: [ {
        date: '1992-2-16',
        name: 'name2',
      } ],
      name3: [ {
        date: '1992-2-17',
        name: 'name3',
      }, {
        date: '1992-2-15',
        name: 'name3',
      } ],
    });
  });
});
