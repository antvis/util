import deepMix from '../../../src/lodash/deep-mix';

describe('deepMix', () => {
  it('merges plain objects', () => {
    const result = deepMix({}, { a: 1 }, { b: 2 });
    expect(result).toEqual({ a: 1, b: 2 });
  });

  it('deep merges nested objects', () => {
    const result = deepMix({ a: { x: 1 } }, { a: { y: 2 } });
    expect(result).toEqual({ a: { x: 1, y: 2 } });
  });

  it('does not pollute Object.prototype via __proto__', () => {
    const payload = JSON.parse('{"__proto__": {"polluted": true}}');
    deepMix({}, payload);
    expect((Object.prototype as any).polluted).toBeUndefined();
  });

  it('does not pollute via constructor.prototype', () => {
    const payload = JSON.parse('{"constructor": {"prototype": {"polluted": true}}}');
    deepMix({}, payload);
    expect((Object.prototype as any).polluted).toBeUndefined();
  });

  it('does not pollute via prototype key', () => {
    deepMix({}, { prototype: { polluted: true } });
    expect((Object.prototype as any).polluted).toBeUndefined();
  });
});
