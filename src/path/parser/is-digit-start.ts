/**
 * Checks if the character is or belongs to a number.
 * [0-9]|+|-|.
 */
export function isDigitStart(code: number) {
  return (
    (code >= 48 && code <= 57) /* 0..9 */ || code === 0x2b /* + */ || code === 0x2d /* - */ || code === 0x2e
  ); /* . */
}

export function isDigit(code: number) {
  return code >= 48 && code <= 57; // 0..9
}
