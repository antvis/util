/**
 * @see https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_isfunction
 */
export default (value: any): value is Function => {
  return typeof value === 'function';
};
