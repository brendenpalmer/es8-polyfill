import { StringUtility } from './string-util';

describe('Class: StringUtility', () => {
  it('should repeat the string correctly', () => {
    expect(StringUtility.repeat('ab', 3)).toEqual('ababab');
  });

  it('should be functionally equivalent to String.prototype.repeat', () => {
    const str: any = 'ab';
    expect(StringUtility.repeat(str, 3) === str.repeat(3)).toEqual(true);
  });
});
