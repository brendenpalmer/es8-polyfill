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
  padString = String(padString);
  if (str.length > targetLength || !padString) {
    return str;
  } else {
    const diff: number = targetLength - str.length;
    const timesToPad: number = Math.ceil(diff / padString.length);
    return `${str}${StringUtility.repeat(padString, timesToPad).substring(
      0,
      diff
    )}`;
  }
}
