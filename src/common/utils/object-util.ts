export class ObjectUtility {
  public static get(obj, path, defaultValue = void 0) {
    const split = path.split('.');
    let current = obj;

    // tslint:disable-next-line prefer-for-of
    for (let i = 0; i < split.length; i++) {
      if (current.hasOwnProperty(split[i])) {
        current = current[split[i]];
      } else {
        return defaultValue;
      }
    }

    return current;
  }

  public static eachKey(obj, fn): void {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        fn(key);
      }
    }
  }
}
