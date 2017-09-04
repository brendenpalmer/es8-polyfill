import { ObjectUtility } from './../common/utils/object-util';
import { values } from './../helpers/object/values';

export function includePolyfill(): void {
  if (!ObjectUtility.get(Object, 'values')) {
    (Object as any).values = values;
  }
}

includePolyfill();
