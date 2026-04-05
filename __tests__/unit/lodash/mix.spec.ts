import mix from '../../../src/lodash/mix';

describe('mix', () => {
  it('merges plain objects', () => {
    const result = mix({} as any, { a: 1 }, { b: 2 });
    expect(result).toEqual({ a: 1, b: 2 });
  });

  it('does not pollute Object.prototype via __proto__', () => {
    const payload = JSON.parse('{"__proto__": {"polluted": true}}');
    mix({}, payload);
    expect((Object.prototype as any).polluted).toBeUndefined();
  });

  it('does not pollute via constructor key', () => {
    const payload = JSON.parse('{"constructor": {"prototype": {"polluted": true}}}');
    mix({}, payload);
    expect((Object.prototype as any).polluted).toBeUndefined();
  });

  it('does not pollute via prototype key', () => {
    mix({} as any, { prototype: { polluted: true } } as any);
    expect((Object.prototype as any).polluted).toBeUndefined();
  });
});
