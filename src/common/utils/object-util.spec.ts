import { ObjectUtility } from './object-util';

describe('Class: ObjectUtility', () => {
  it('should execute a function for each key on the object', () => {
    const obj = {
      a: 1,
      b: 2
    };

    ObjectUtility.eachKey(obj, (key: string) => {
      expect(key === 'a' || key === 'b').toEqual(true);
    });
  });

  it('should get the value pertaining to a certain path', () => {
    const obj = {
      a: {
        a: 1
      }
    };

    expect(ObjectUtility.get(obj, 'a.a')).toEqual(1);
  });

  it('should return the default value if the specified key does not exist', () => {
    const obj = {};
    expect(ObjectUtility.get(obj, 'a.a', true)).toEqual(true);
  });

  it('should return undefined if the specified key does not exist', () => {
    const obj = {};
    expect(ObjectUtility.get(obj, 'a.a')).toEqual(void 0);
  });
});
