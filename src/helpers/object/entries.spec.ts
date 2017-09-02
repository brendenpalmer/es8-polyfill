import { GlobalUtility } from './../../common/utils/global-util';
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

  it('should be functionally equivalent to Object.entries', () => {
    expect(entries(GlobalUtility.global)).toEqual(
      (Object as any).entries(GlobalUtility.global)
    );

    ObjectUtility.eachKey(GlobalUtility.global, (key: string) => {
      const value = GlobalUtility.global[key];

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
