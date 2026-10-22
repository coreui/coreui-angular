/// <reference types="vitest/globals" />
import { afterTransitions } from './transition.utils';

const fakeAnimations = (element: Element) => {
  const running: Animation[] = [];
  Object.defineProperty(element, 'getAnimations', { configurable: true, value: () => [...running] });
  return (kind: 'transition' | 'animation' = 'transition') => {
    let end!: () => void;
    let cancel!: () => void;
    const finished = new Promise<void>((resolve, reject) => {
      end = () => {
        running.splice(running.indexOf(animation), 1);
        resolve();
      };
      cancel = () => {
        running.splice(running.indexOf(animation), 1);
        reject(new DOMException('cancelled', 'AbortError'));
      };
    });
    const animation = (
      kind === 'transition' ? { transitionProperty: 'opacity', finished } : { animationName: 'spin', finished }
    ) as unknown as Animation;
    running.push(animation);
    return { end, cancel };
  };
};

const flush = () => new Promise((resolve) => setTimeout(resolve));

describe('afterTransitions', () => {
  let element: HTMLDivElement;
  let done: boolean;

  const track = (promise: Promise<void>) => {
    done = false;
    promise.then(() => (done = true));
  };

  beforeEach(() => {
    element = document.createElement('div');
  });

  it('should resolve when the element has no getAnimations', async () => {
    Object.defineProperty(element, 'getAnimations', { value: undefined });
    await expect(afterTransitions(element)).resolves.toBeUndefined();
  });

  it('should resolve in a microtask, not synchronously, when nothing transitions', async () => {
    fakeAnimations(element);
    track(afterTransitions(element));
    expect(done).toBe(false);
    await Promise.resolve();
    await Promise.resolve();
    expect(done).toBe(true);
  });

  it('should wait for every running transition', async () => {
    const start = fakeAnimations(element);
    const first = start();
    const second = start();
    track(afterTransitions(element));

    first.end();
    await flush();
    expect(done).toBe(false);

    second.end();
    await flush();
    expect(done).toBe(true);
  });

  it('should resolve when a transition is cancelled and nothing replaces it', async () => {
    const start = fakeAnimations(element);
    const transition = start();
    track(afterTransitions(element));

    transition.cancel();
    await flush();
    expect(done).toBe(true);
  });

  it('should follow the transition that replaces a cancelled one', async () => {
    const start = fakeAnimations(element);
    const cancelled = start();
    track(afterTransitions(element));

    const replacement = start();
    cancelled.cancel();
    await flush();
    expect(done).toBe(false);

    replacement.end();
    await flush();
    expect(done).toBe(true);
  });

  it('should not wait for a transition that starts after the others finished', async () => {
    const start = fakeAnimations(element);
    const first = start();
    track(afterTransitions(element));

    start();
    first.end();
    await flush();
    expect(done).toBe(true);
  });

  it('should ignore script animations', async () => {
    let end!: () => void;
    const finished = new Promise<void>((resolve) => (end = resolve));
    Object.defineProperty(element, 'getAnimations', { value: () => [{ finished }] });
    await expect(afterTransitions(element)).resolves.toBeUndefined();
    end();
  });

  it('should read the animations of the element itself, not of its subtree', async () => {
    const getAnimations = vi.fn(() => []);
    Object.defineProperty(element, 'getAnimations', { value: getAnimations });
    await afterTransitions(element);
    expect(getAnimations).toHaveBeenCalledWith();
  });

  it('should ignore animations that are not transitions', async () => {
    fakeAnimations(element)('animation');
    await expect(afterTransitions(element)).resolves.toBeUndefined();
  });
});
