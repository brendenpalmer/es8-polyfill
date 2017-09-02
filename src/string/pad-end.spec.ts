import * as module from './../helpers/string/pad-end';

describe('padEnd', () => {
  let prevPadEnd;

  beforeEach(() => {
    prevPadEnd = (String.prototype as any).padEnd;
    delete (String.prototype as any).padEnd;
  });

  afterEach(() => {
    (String.prototype as any).padEnd = prevPadEnd;
  });

  it('should be polyfilled correctly if it does not exist', async () => {
    const padStartImport = await import('./pad-end');
    padStartImport.includePolyfill();
    expect((String.prototype as any).padEnd).toEqual(jasmine.any(Function));

    spyOn(module, 'padEnd').and.callThrough();
    const str: any = 'test';

    str.padEnd(5, 'a');

    expect(module.padEnd).toHaveBeenCalledWith(str, 5, 'a');
  });
});
