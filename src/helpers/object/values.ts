import { ObjectUtility } from './../../common/utils/object-util';

/**
 * Returns an array of values from a
 * given object
 * 
 * @name values
 * @param {*} obj 
 * @returns {any[]}
 */
export function values(obj: any = null): any[] {
  if (obj === null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  const valuesArr = [];

  ObjectUtility.eachKey(obj, key => {
    valuesArr.push(obj[key]);
  });

  return valuesArr;
}
