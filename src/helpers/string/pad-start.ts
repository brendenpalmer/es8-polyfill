import { StringUtility } from './../../common/utils/string-util';

export function padStart(
  str: string,
  targetLength: number = 0,
  padString: string = ' '
): string {
  if (str.length > targetLength || !padString) {
    return str;
  } else {
    const diff: number = targetLength - str.length;
    const timesToPad: number = Math.ceil(diff / padString.length);
    return `${StringUtility.repeat(padString, timesToPad).substring(
      0,
      diff
    )}${str}`;
  }
}
