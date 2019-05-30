import parsePathString from './parse-path-string';
const REGEX_MD = /[a-z]/;
export default function pathToAbsolute(pathString: string) {
  const pathArray = parsePathString(pathString);

  if (!pathArray || !pathArray.length) {
    return [
      [ 'M', 0, 0 ],
    ];
  }
  let hasRaltive = false;
  for (let i = 0; i < pathArray.length; i++) {
    // 如果存在相对位置的命令，则中断返回
    if (REGEX_MD.test(pathArray[i][0])) {
      hasRaltive = true;
      break;
    }
  }
  // 如果不存在相对命令，则直接返回
  // 如果在业务上都写绝对路径，这种方式最快，仅做了一次检测
  if (!hasRaltive) {
    return pathArray;
  }

  let res = [];
  let x = 0;
  let y = 0;
  let mx = 0;
  let my = 0;
  let start = 0;
  let pa0;
  let dots;
  const first = pathArray[0];
  if (first[0] === 'M' || first[0] === 'm') {
    x = +first[1];
    y = +first[2];
    mx = x;
    my = y;
    start++;
    res[0] = [ 'M', x, y ];
  }

  for (let i = start, ii = pathArray.length; i < ii; i++) {
    const pa = pathArray[i];
    let r = [];
    const isRelative = REGEX_MD; 
    const cmd = pa[0];
    const upCmd = cmd.toUpperCase();
    if (cmd !== upCmd) {
      r[0] = upCmd;
      switch (upCmd) {
        case 'A':
          r[1] = pa[1];
          r[2] = pa[2];
          r[3] = pa[3];
          r[4] = pa[4];
          r[5] = pa[5];
          r[6] = +pa[6] + x;
          r[7] = +pa[7] + y;
          break;
        case 'V':
          r[1] = +pa[1] + y;
          break;
        case 'H':
          r[1] = +pa[1] + x;
          break;
        case 'M':
          mx = +pa[1] + x;
          my = +pa[2] + y;
          break; // for lint
        default:
          for (let j = 1, jj = pa.length; j < jj; j++) {
            r[j] = +pa[j] + ((j % 2) ? x : y);
          }
      }
    } else { // 如果本来已经大写，则不处理
      r = pathArray[i];
    }
    // 需要在外面统一做
    switch (upCmd) {
      case 'Z':
        x = +mx;
        y = +my;
        break;
      case 'H':
        x = r[1];
        break;
      case 'V':
        y = r[1];
        break;
      case 'M':
        mx = r[r.length - 2];
        my = r[r.length - 1];
        break; // for lint
      default:
        x = r[r.length - 2];
        y = r[r.length - 1];
    }
    res.push(r);
  }

  return res;
}
