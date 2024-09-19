import { isElement } from '../../../src/lodash';

describe('isElement', () => {
  it('element', () => {
    expect(isElement(document.createElement('div'))).toBe(true);
    expect(isElement(document.createElement('span'))).toBe(true);
    expect(isElement(document.createElement('a'))).toBe(true);
    expect(isElement(document)).toBe(true);
  });

  it('not element', () => {
    expect(isElement(window)).toBe(false);
    expect(isElement(0)).toBe(false);
    expect(isElement(123)).toBe(false);
    expect(isElement('')).toBe(false);
    expect(isElement('abc')).toBe(false);
    expect(isElement([])).toBe(false);
    expect(isElement({})).toBe(false);
    expect(isElement(null)).toBe(false);
    expect(isElement(undefined)).toBe(false);
  });
});
