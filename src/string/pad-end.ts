import { ObjectUtility } from './../common/utils/object-util';
import { padEnd } from './../helpers/string/pad-end';

export function includePolyfill(): void {
  if (!ObjectUtility.get(String, 'prototype.padEnd')) {
    (String as any).prototype.padEnd = function(...args) {
      return padEnd(this, ...args);
    };
  }
}

includePolyfill();
