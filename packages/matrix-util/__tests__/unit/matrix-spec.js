const expect = require('chai').expect;
import * as All from '../../src';
import {isNumberEqual} from '@antv/util';

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
