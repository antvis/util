const regexTags = /[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/ig;
const regexDot = /[^\s\,]+/ig;

export function parsePath(p: string): string[] {
  let path = p || [] as string | string[];
  if (Array.isArray(path)) {
    return path;
  }

  if (typeof path === 'string') {
    path = path.match(regexTags);
    path.forEach((item, index) => {
      // @ts-ignore
      item = item.match(regexDot);
      if (item[0].length > 1) {
        const tag = item[0].charAt(0);
        // @ts-ignore
        item.splice(1, 0, item[0].substr(1));
        // @ts-ignore
        item[0] = tag;
      }
      // @ts-ignore
      item.forEach(function (sub, i) {
        if (!isNaN(sub)) {
          // @ts-ignore
          item[i] = +sub;
        }
      });
      // @ts-ignore
      path[index] = item;
    });
    return path;
  }
}
