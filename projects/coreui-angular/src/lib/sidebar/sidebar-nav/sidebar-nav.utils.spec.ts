import { classMap } from './sidebar-nav.utils';

describe('classMap', () => {
  it('should map each class of the string', () => {
    expect(classMap(' first  second ')).toEqual({ first: true, second: true });
  });

  it('should split on ASCII whitespace only, like the class attribute', () => {
    expect(classMap('first\tsecond\nthird\u00a0fourth')).toEqual({
      first: true,
      second: true,
      'third\u00a0fourth': true
    });
  });

  it('should return an empty map without classes', () => {
    expect(classMap(undefined)).toEqual({});
    expect(classMap('')).toEqual({});
  });
});
