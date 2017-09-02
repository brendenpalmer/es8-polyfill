import { values } from './../helpers/object/values';

describe('values', () => {
  let prevValues;

  beforeEach(() => {
    prevValues = (Object as any).values;
    delete (Object as any).values;
  });

  afterEach(() => {
    (Object as any).values = prevValues;
  });

  it('should be polyfilled correctly if it does not exist', async () => {
    const valuesImport = await import('./values');
    valuesImport.includePolyfill();
    expect((Object as any).values).toEqual(values);
  });
});
