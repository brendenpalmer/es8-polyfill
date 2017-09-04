import { ObjectUtility } from './../../common/utils/object-util';

/**
 * Returns an array of key value pairs
 * for a given object
 * 
 * @name entries
 * @param {*} obj 
 * @returns {Array<[string, any]>}
 */
export function entries(obj: any = null): Array<[string, any]> {
  if (obj === null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  const entriesArr = [];

  ObjectUtility.eachKey(obj, key => {
    entriesArr.push([key, obj[key]]);
  });

  return entriesArr;
}
