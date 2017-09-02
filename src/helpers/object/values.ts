import { ObjectUtility } from './../../common/utils/object-util';

export function values(obj = null) {
  if (obj === null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  const valuesArr = [];

  ObjectUtility.eachKey(obj, key => {
    valuesArr.push(obj[key]);
  });

  return valuesArr;
}
