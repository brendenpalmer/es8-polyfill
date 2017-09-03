import { ObjectUtility } from './../common/utils/object-util';
import { padStart } from './../helpers/string/pad-start';

export function includePolyfill(): void {
  if (!ObjectUtility.get(String, 'prototype.padStart')) {
    (String as any).prototype.padStart = function(...args) {
      return padStart(this, ...args);
    };
  }
}

includePolyfill();
