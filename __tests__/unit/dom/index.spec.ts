import { createDOM, modifyCSS } from '../../../src';

describe('dom', function () {
  it('createDOM', () => {
    const dom = createDOM(`<div id="test">createDOM by string</div>`);
    expect(dom).not.toBeUndefined();
    expect(dom.innerHTML).toBe('createDOM by string');
  });

  it('modifyCSS', () => {
    const dom = createDOM(`<div id="test">modifyCSS dom</div>`);

    expect(dom.style.color).toBe('');
    expect(dom.style.fontSize).toBe('');

    modifyCSS(dom, {
      color: 'red',
      fontSize: '20px',
    });

    expect(dom.style.color).toBe('red');
    expect(dom.style.fontSize).toBe('20px');

    expect(modifyCSS(null, { color: 'red' })).toBeUndefined();
  });
});
