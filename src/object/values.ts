import { GlobalUtility } from './../common/utils/global-util';
import { ObjectUtility } from './../common/utils/object-util';
import { values } from './../helpers/object/values';

export function includePolyfill(): void {
  if (!ObjectUtility.get(GlobalUtility.global, 'Object.values')) {
    GlobalUtility.global.Object.values = values;
  }
}

includePolyfill();