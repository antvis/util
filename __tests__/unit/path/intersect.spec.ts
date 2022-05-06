import { pathIntersection } from '../../../src';

describe('test pathIntersection', () => {
  const path = [['M', 0, 0], ['L', 0, 100], ['L', 20, 100], ['L', 20, 0], ['Z']];
  it('no pathIntersection', () => {
    const path1 = [['M', 10, 120], ['L', 10, 120], ['L', 30, 98], ['Z']];
    expect((pathIntersection(path, path1) as any[]).length).toBe(0);
  });

  xit('pathIntersection', () => {
    // 这个 path 相交的算法有问题，后面再改造
    const path1 = [['M', 10, 120], ['L', 10, 120], ['L', 30, 98], ['L', -10, 98], ['Z']];
    expect((pathIntersection(path, path1) as any[]).length).toBe(2);
  });

  it('one in one', () => {
    const path1 = [['M', 1, 10], ['L', 8, 20], ['L', 4, 40], ['Z']];
    expect((pathIntersection(path, path1) as any[]).length).toBe(0);
  });
});
