import { StringUtility } from './../../common/utils/string-util';

/**
 * Pads the end of a string to the target
 * length with a given padString
 * 
 * @param {string} str
 * @param {number} targetLength 
 * @param {string} padString 
 */
export function padEnd(
  str: string,
  targetLength: number = 0,
  padString: string = ' '
): string {
  const padStringToString: string = String(padString);
  if (
    str.length > targetLength ||
    !padStringToString ||
    padString === undefined
  ) {
    return str;
  } else {
    const diff: number = targetLength - str.length;
    const timesToPad: number = Math.ceil(diff / padStringToString.length);
    return `${str}${StringUtility.repeat(
      padStringToString,
      timesToPad
    ).substring(0, diff)}`;
  }
}
