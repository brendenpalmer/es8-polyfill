import * as padEndModule from './../helpers/string/pad-end';
import { includePolyfill } from './pad-end';

describe('padEnd', () => {
  let prevPadEnd;

  beforeEach(() => {
    prevPadEnd = (String.prototype as any).padEnd;
    delete (String.prototype as any).padEnd;
  });

  afterEach(() => {
    (String.prototype as any).padEnd = prevPadEnd;
  });

  it('should be polyfilled correctly if it does not exist', () => {
    includePolyfill();
    expect((String.prototype as any).padEnd).toEqual(jasmine.any(Function));

    spyOn(padEndModule, 'padEnd').and.callThrough();
    const str: any = 'test';

    str.padEnd(5, 'a');

    expect(padEndModule.padEnd).toHaveBeenCalledWith(str, 5, 'a');
  });
});
