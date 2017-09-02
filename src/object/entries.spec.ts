import { entries } from './../helpers/object/entries';

describe('entries', () => {
  let prevEntries;

  beforeEach(() => {
    prevEntries = (Object as any).entries;
    delete (Object as any).entries;
  });

  afterEach(() => {
    (Object as any).entries = prevEntries;
  });

  it('should be polyfilled correctly if it does not exist', async () => {
    const entriesImport = await import('./entries');
    entriesImport.includePolyfill();
    expect((Object as any).entries).toEqual(entries);
  });
});
