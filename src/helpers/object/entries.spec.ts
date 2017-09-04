import { ObjectUtility } from './../../common/utils/object-util';
import { entries } from './entries';

describe('Function: entries', () => {
  it("should return an array of the object's entries", () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3
    };

    expect(entries(obj)).toEqual([['a', 1], ['b', 2], ['c', 3]]);
  });

  it('should handle primitive types correctly', () => {
    expect(entries('')).toEqual([]);
    expect(entries(5)).toEqual([]);
    expect(entries(true)).toEqual([]);
    expect(entries(false)).toEqual([]);
    expect(entries(Symbol())).toEqual([]);
  });

  it('should handle non-empty strings correctly', () => {
    expect(entries('test')).toEqual([
      ['0', 't'],
      ['1', 'e'],
      ['2', 's'],
      ['3', 't']
    ]);
  });

  it('should be functionally equivalent to Object.entries', () => {
    expect(entries(window)).toEqual((Object as any).entries(window));

    ObjectUtility.eachKey(window, (key: string) => {
      const value = window[key];

      if (value === undefined || value === null) {
        expect(() => {
          entries(value);
        }).toThrow(new TypeError('Cannot convert undefined or null to object'));

        expect(() => {
          (Object as any).entries(value);
        }).toThrow(new TypeError('Cannot convert undefined or null to object'));
      } else {
        expect(entries(value)).toEqual((Object as any).entries(value));
      }
    });
  });
});
