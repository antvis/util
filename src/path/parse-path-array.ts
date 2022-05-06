const p2s = /,?([a-z]),?/gi;

export function parsePathArray(path: any[]): string {
  return path.join(',').replace(p2s, '$1');
}
