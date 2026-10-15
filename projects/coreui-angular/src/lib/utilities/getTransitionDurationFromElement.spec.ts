import getTransitionDurationFromElement from './getTransitionDurationFromElement';

describe('getTransitionDurationFromElement', () => {
  const styled = (transitionDuration: string, transitionDelay = '0s') => {
    const element = document.createElement('div');
    Object.assign(element.style, { transitionDuration, transitionDelay });
    return element;
  };

  it('should return 0 without an element or a transition', () => {
    expect(getTransitionDurationFromElement(null as unknown as HTMLElement)).toBe(0);
    expect(getTransitionDurationFromElement(document.createElement('div'))).toBe(0);
  });

  it('should add the delay to the duration in milliseconds', () => {
    expect(getTransitionDurationFromElement(styled('0.3s', '0.1s'))).toBeCloseTo(400);
    expect(getTransitionDurationFromElement(styled('0s', '0.2s'))).toBeCloseTo(200);
  });

  it('should take the first of multiple durations and delays', () => {
    expect(getTransitionDurationFromElement(styled('0.15s, 1s', '0.05s, 2s'))).toBeCloseTo(200);
  });
});
