import { GlobalUtility } from './../../common/utils/global-util';
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

  it('should be functionally equivalent to Object.values', () => {
    expect(values(GlobalUtility.global)).toEqual(
      (Object as any).values(GlobalUtility.global)
    );

    ObjectUtility.eachKey(GlobalUtility.global, (key: string) => {
      const value = GlobalUtility.global[key];

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
