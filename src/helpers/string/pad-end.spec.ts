import { padEnd } from './pad-end';

function getRandomString(): string {
  return Math.random()
    .toString(36)
    .substring(2);
}

describe('Function: padEnd', () => {
  it('should pad the start correctly', () => {
    const str: string = 'test';
    expect(padEnd(str, 6, 'test')).toEqual('testte');
  });

  it('should handle null correctly', () => {
    const str: string = 'test';
    const expected: string = 'testnull';
    expect(padEnd(str, 8, null)).toEqual(expected);
    expect((str as any).padEnd(8, null)).toEqual(expected);
  });

  it('should handle undefined correctly', () => {
    const str: string = 'test';
    const expected: string = 'test    ';
    expect(padEnd(str, 8, undefined)).toEqual(expected);
    expect(padEnd(str, 8, void 0)).toEqual(expected);
    expect((str as any).padEnd(8, undefined)).toEqual(expected);
    expect((str as any).padEnd(8, void 0)).toEqual(expected);
  });

  it('should handle an object correctly', () => {
    const str: string = 'test';
    const expected: string = 'test[object Object][';
    expect(padEnd(str, 20, {} as any)).toEqual(expected);
    expect((str as any).padEnd(20, {})).toEqual(expected);
  });

  it('should handle an array correctly', () => {
    const str: string = 'test';
    const expected: string = 'test';
    expect(padEnd(str, 20, [] as any)).toEqual(expected);
    expect((str as any).padEnd(20, [])).toEqual(expected);
  });

  it('should handle a function correctly', () => {
    const str: string = 'test';
    const expected: string = 'testfunction test() ';
    const fn = function test() {
      /* for testing */
    };
    expect(padEnd(str, 20, fn as any)).toEqual(expected);
    expect((str as any).padEnd(20, fn)).toEqual(expected);
  });

  it('should return the same string if it cannot be padded', () => {
    const str: string = 'test';
    expect(padEnd(str, 4, 'test')).toEqual(str);
  });

  it('should return the same string the padString is empty', () => {
    const str: string = 'test';
    expect(padEnd(str, 100, '')).toEqual(str);
  });

  it('should be equivalent to String.prototype.padEnd', () => {
    for (let i = 0; i < 99; i++) {
      const str: any = getRandomString();
      const padStr = getRandomString();
      const targetLength = Math.round(Math.random() * 9999);
      const native = str.padEnd(targetLength, padStr);
      const polyfilled = padEnd(str, targetLength, padStr);
      expect(native).toEqual(polyfilled);
      expect(polyfilled.length).toEqual(
        str.length > targetLength ? str.length : targetLength
      );
    }
  });
});
