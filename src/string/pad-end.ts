import { GlobalUtility } from './../common/utils/global-util';
import { ObjectUtility } from './../common/utils/object-util';
import { padEnd } from './../helpers/string/pad-end';

export function includePolyfill(): void {
  if (!ObjectUtility.get(GlobalUtility.global, 'String.prototype.padEnd')) {
    GlobalUtility.global.String.prototype.padEnd = function(...args) {
      return padEnd(this, ...args);
    };
  }
}

includePolyfill();
