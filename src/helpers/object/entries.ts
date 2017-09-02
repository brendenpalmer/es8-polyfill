import { ObjectUtility } from './../../common/utils/object-util';

export function entries(obj = null) {
  if (obj === null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  const entriesArr = [];

  ObjectUtility.eachKey(obj, key => {
    entriesArr.push([key, obj[key]]);
  });

  return entriesArr;
}
