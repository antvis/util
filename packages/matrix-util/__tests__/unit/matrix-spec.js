const expect = require('chai').expect;
import * as All from '../../src';
import { isNumberEqual } from '@antv/util';

const mat3 = All.mat3;
const vec3 = All.vec3;
const vec2 = All.vec2;

describe('Matrix', () => {
  it('vec2.direction(v1, v2)', () => {
    const v1 = vec2.fromValues(0, 1);
    const v2 = vec2.fromValues(1, 0);
    const direction = vec2.direction(v1, v2);
    expect(direction < 0).to.be.true;
  });
  it('vec2.angle(v1, v2)', () => {
    const v1 = vec2.fromValues(0, 1);
    const v2 = vec2.fromValues(1, 0);
    const angle = vec2.angle(v1, v2);
    expect(isNumberEqual(angle, Math.PI / 2)).to.be.true;
  });
  it('vec2.angleTo(v1, v2)', () => {
    const v1 = vec2.fromValues(0, -1);
    const v2 = vec2.fromValues(1, 0);
    expect(isNumberEqual(vec2.angleTo(v1, v2), Math.PI / 2)).to.be.true;
  });
  it('vec2.angleTo(v1, v2, true)', () => {
    const v1 = vec2.fromValues(0, 1);
    const v2 = vec2.fromValues(-1, 0);
    expect(isNumberEqual(vec2.angleTo(v1, v2, true), Math.PI / 2 * 3)).to.be.true;
  });

  it('mat3.translate(out, a, v)', () => {
    const m = mat3.create();
    mat3.translate(m, m, [ 30, 40 ]);
    const v = vec3.fromValues(50, 50, 1);
    vec3.transformMat3(v, v, m);
    expect(isNumberEqual(v[0], 80)).to.be.true;
    expect(isNumberEqual(v[1], 90)).to.be.true;
  });

  it('mat3.rotate(out, a, v)', () => {
    const m = mat3.create();
    mat3.rotate(m, m, Math.PI / 2);
    const v = vec3.fromValues(100, 0, 1);
    vec3.transformMat3(v, v, m);
    expect(isNumberEqual(v[0], 0)).to.be.true;
    expect(isNumberEqual(v[1], 100)).to.be.true;
  });

  it('mat3.scale(out, a, v)', () => {
    const m = mat3.create();
    mat3.scale(m, m, [ 2, 2 ]);
    const v = vec3.fromValues(50, 50, 1);
    vec3.transformMat3(v, v, m);
    expect(isNumberEqual(v[0], 100)).to.be.true;
    expect(isNumberEqual(v[1], 100)).to.be.true;
  });
});

describe('transform', () => {
  const m = [ 1, 0, 0, 0, 1, 0, 0, 0, 1 ];
  it('translate', () => {
    const matrix = mat3.transform(m, [
      [ 't', 100, 100 ]
    ]);
    expect(matrix).eqls([ 1, 0, 0, 0, 1, 0, 100, 100, 1 ]);
    const matrix1 = mat3.transform(null, [
      [ 't', 100, 100 ]
    ]);
    expect(matrix1).eqls([ 1, 0, 0, 0, 1, 0, 100, 100, 1 ]);
  });

  it('rotate', () => {
    const matrix = mat3.transform(m, [
      [ 'r', Math.PI ]
    ]);
    expect(matrix[0]).eqls(-1);
    expect(matrix[4]).eqls(-1);
  });

  it('scale', () => {
    const matrix = mat3.transform(m, [
      [ 's', 2, 3 ]
    ]);
    expect(matrix).eqls([ 2, 0, 0, 0, 3, 0, 0, 0, 1 ]);
  });

  it('matrix', () => {
    const m1 = [ 2, 0, 0, 0, 3, 0, 0, 0, 1 ];
    const matrix = mat3.transform(m, [
      [ 'm', m1 ]
    ]);
    expect(matrix).eqls(m1);
  });

  it('center rotate', () => {
    const radian = Math.PI / 4;
    const matrix = mat3.transform(null, [
      [ 't', -40, -40 ],
      [ 'r', radian ],
      [ 't', 50, 50 ]
    ]);

    let out = [];
    out = mat3.translate(out, m, [ 50, 50 ]);
    out = mat3.rotate(out, out, radian);
    out = mat3.translate(out, out, [ -40, -40 ]);

    expect(matrix).eqls(out);

    const m1 = [ 2, 0, 0, 0, 3, 0, 0, 0, 1 ];
    const matrix1 = mat3.transform(null, [
      [ 'm', m1 ],
      [ 'm', matrix ]
    ]);

    let out1 = [];
    out1 = mat3.multiply(out1, matrix, m1);

    expect(matrix1).eqls(out1);
  });
});
