import { GlobalUtility } from './../common/utils/global-util';
import { ObjectUtility } from './../common/utils/object-util';
import { entries } from './../helpers/object/entries';

export function includePolyfill(): void {
  if (!ObjectUtility.get(GlobalUtility.global, 'Object.entries')) {
    GlobalUtility.global.Object.entries = entries;
  }
}

includePolyfill();
