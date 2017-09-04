import { ObjectUtility } from './../common/utils/object-util';
import { entries } from './../helpers/object/entries';

export function includePolyfill(): void {
  if (!ObjectUtility.get(Object, 'entries')) {
    (Object as any).entries = entries;
  }
}

includePolyfill();
