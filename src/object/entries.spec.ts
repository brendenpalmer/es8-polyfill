import { entries } from './../helpers/object/entries';
import { includePolyfill } from './entries';

describe('entries', () => {
  let prevEntries;

  beforeEach(() => {
    prevEntries = (Object as any).entries;
    delete (Object as any).entries;
  });

  afterEach(() => {
    (Object as any).entries = prevEntries;
  });

  it('should be polyfilled correctly if it does not exist', () => {
    includePolyfill();
    expect((Object as any).entries).toEqual(entries);
  });
});
