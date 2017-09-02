export class StringUtility {
  public static repeat(str: string, timesToRepeat: number): string {
    let newStr: string = str;

    for (let i = 0; i < timesToRepeat - 1; i++) {
      newStr += str;
    }

    return newStr;
  }
}
