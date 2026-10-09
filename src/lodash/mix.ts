// FIXME: Mutable param should be forbidden in static lang.
function _mix<Base, Source>(dist: Base & Source, obj: Source): void {
  for (const key in obj) {
    // Prevent prototype pollution by skipping dangerous keys
    if (
      key === '__proto__' ||
      key === 'constructor' ||
      key === 'prototype'
    ) {
      continue;
    }
    if (obj.hasOwnProperty(key) && obj[key] !== undefined) {
      (<any>dist)[key] = obj[key];
    }
  }
}

export default function mix<Base, A, B, C>(dist: Base & A & B & C, src1?: A, src2?: B, src3?: C): Base & A & B & C {
  if (src1) _mix(dist, src1);
  if (src2) _mix(dist, src2);
  if (src3) _mix(dist, src3);
  return dist;
}
