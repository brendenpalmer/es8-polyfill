import { GlobalUtility } from './global-util';

describe('Class: GlobalUtility', () => {
  it('should set the global property correctly', () => {
    expect(GlobalUtility.global).toEqual(global || self || window);
  });
});
