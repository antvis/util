const numColorCache = {};

function numberToColor(num: number): string {
  // 增加缓存
  let color = numColorCache[num];
  if (!color) {
    let str = num.toString(16);
    for (let i = str.length; i < 6; i++) {
      str = '0' + str;
    }
    color = '#' + str;
    numColorCache[num] = color;
  }
  return color;
}

export default numberToColor;
