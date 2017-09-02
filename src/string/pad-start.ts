import { GlobalUtility } from './../common/utils/global-util';
import { ObjectUtility } from './../common/utils/object-util';
import { padStart } from './../helpers/string/pad-start';

export function includePolyfill(): void {
  if (!ObjectUtility.get(GlobalUtility.global, 'String.prototype.padStart')) {
    GlobalUtility.global.String.prototype.padStart = function(...args) {
      return padStart(this, ...args);
    };
  }
}

includePolyfill();
