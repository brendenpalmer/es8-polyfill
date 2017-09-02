import * as module from './../helpers/string/pad-start';

describe('padStart', () => {
  let prevPadStart;

  beforeEach(() => {
    prevPadStart = (String.prototype as any).padStart;
    delete (String.prototype as any).padStart;
  });

  afterEach(() => {
    (String.prototype as any).padStart = prevPadStart;
  });

  it('should be polyfilled correctly if it does not exist', async () => {
    const padStartImport = await import('./pad-start');
    padStartImport.includePolyfill();
    expect((String.prototype as any).padStart).toEqual(jasmine.any(Function));

    spyOn(module, 'padStart').and.callThrough();
    const str: any = 'test';

    str.padStart(5, 'a');

    expect(module.padStart).toHaveBeenCalledWith(str, 5, 'a');
  });
});
