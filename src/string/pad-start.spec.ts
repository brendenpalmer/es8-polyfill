import * as padStartModule from './../helpers/string/pad-start';
import { includePolyfill } from './pad-start';

describe('padStart', () => {
  let prevPadStart;

  beforeEach(() => {
    prevPadStart = (String.prototype as any).padStart;
    delete (String.prototype as any).padStart;
  });

  afterEach(() => {
    (String.prototype as any).padStart = prevPadStart;
  });

  it('should be polyfilled correctly if it does not exist', () => {
    includePolyfill();
    expect((String.prototype as any).padStart).toEqual(jasmine.any(Function));

    spyOn(padStartModule, 'padStart').and.callThrough();
    const str: any = 'test';

    str.padStart(5, 'a');

    expect(padStartModule.padStart).toHaveBeenCalledWith(str, 5, 'a');
  });
});
