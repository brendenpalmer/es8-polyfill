import { ObjectUtility } from './../../common/utils/object-util';
import { values } from './values';

describe('Function: values', () => {
  it("should return an array of the object's values", () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3
    };

    expect(values(obj)).toEqual([1, 2, 3]);
  });

  it('should handle primitive types correctly', () => {
    expect(values('')).toEqual([]);
    expect(values(5)).toEqual([]);
    expect(values(true)).toEqual([]);
    expect(values(false)).toEqual([]);
    expect(values(Symbol())).toEqual([]);
  });

  it('should handle non-empty strings correctly', () => {
    expect(values('test')).toEqual(['t', 'e', 's', 't']);
  });

  it('should be functionally equivalent to Object.values', () => {
    expect(values(window)).toEqual((Object as any).values(window));

    ObjectUtility.eachKey(window, (key: string) => {
      const value = window[key];

      if (value === undefined || value === null) {
        expect(() => {
          values(value);
        }).toThrow(new TypeError('Cannot convert undefined or null to object'));

        expect(() => {
          (Object as any).values(value);
        }).toThrow(new TypeError('Cannot convert undefined or null to object'));
      } else {
        expect(values(value)).toEqual((Object as any).values(value));
      }
    });
  });
});
