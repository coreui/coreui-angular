import { DOCUMENT } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { BackdropService } from './backdrop.service';

const holdTransition = (element: Element) => {
  let end!: () => void;
  let cancel!: () => void;
  let running = true;
  const finished = new Promise<void>((resolve, reject) => {
    end = () => {
      running = false;
      resolve();
    };
    cancel = () => {
      running = false;
      reject(new DOMException('cancelled', 'AbortError'));
    };
  });
  Object.defineProperty(element, 'getAnimations', {
    configurable: true,
    value: () => (running ? [{ transitionProperty: 'opacity', finished }] : [])
  });
  return { end, cancel };
};

describe('BackdropService', () => {
  let service: BackdropService;
  let document: Document;
  let backdrop: any;

  beforeEach(async () => {
    vi.useFakeTimers();
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackdropService);
    document = TestBed.inject(DOCUMENT);
    backdrop = null;
    backdrop = service.setBackdrop('modal');
    await vi.runAllTimersAsync();
  });

  afterEach(async () => {
    if (backdrop) {
      Reflect.deleteProperty(backdrop, 'getAnimations');
      service.clearBackdrop(backdrop);
      await vi.runAllTimersAsync();
    }
    vi.useRealTimers();
  });

  it('should be created', () => {
    expect(backdrop).toBeTruthy();
    expect(service).toBeTruthy();
  });

  it('should set backdrop', async () => {
    expect(document.querySelector('.modal-backdrop')).not.toBeNull();
    expect(backdrop.classList.contains('modal-backdrop')).toBe(true);
    expect(backdrop.classList.contains('fade')).toBe(true);
    expect(backdrop.classList.contains('show')).toBe(true);
    service.clearBackdrop(service.activeBackdrop);
    await vi.runAllTimersAsync();
    expect(backdrop.classList.contains('show')).toBe(false);
  });

  it('should hide scrollbar', () => {
    service.hideScrollbar();
    expect(document.body.style.overflow).toBe('hidden');
    expect(document.body.style.paddingRight).toContain('px');
    expect(document.body.style.paddingLeft).toBe('');
    service.resetScrollbar();
  });

  it('should hide scrollbar for rtl', async () => {
    document.body.setAttribute('dir', 'rtl');
    service.hideScrollbar();
    await vi.runAllTimersAsync();
    expect(document.body.style.overflow).toBe('hidden');
    expect(['', '0px', '15px']).toContain(document.body.style.paddingRight);
    expect(document.body.style.paddingLeft).toContain('px');
    service.resetScrollbar();
    document.body.removeAttribute('dir');
  });

  it('should reset scrollbar', () => {
    service.resetScrollbar();
    expect(document.body.style.overflow).not.toBe('hidden');
  });

  it('should release the active backdrop after it is cleared', async () => {
    const cleared = backdrop;
    service.clearBackdrop(cleared);
    await vi.runAllTimersAsync();

    expect(service.activeBackdrop).toBeUndefined();
    expect(cleared.parentElement).toBeNull();
    backdrop = null;
  });

  describe('backdrop element', () => {
    it('should share one backdrop per type between its users, with the fade of the latest call', async () => {
      expect(service.setBackdrop('modal', false)).toBe(backdrop);
      expect(backdrop.classList.contains('fade')).toBe(false);

      service.clearBackdrop(backdrop);
      await vi.runAllTimersAsync();
      expect(backdrop.isConnected).toBe(true);
      expect(backdrop.classList.contains('show')).toBe(true);
    });

    it('should keep a backdrop until its fade transition ends', async () => {
      const { end } = holdTransition(backdrop);
      service.clearBackdrop(backdrop);
      await vi.runAllTimersAsync();
      expect(backdrop.isConnected).toBe(true);
      expect(backdrop.classList.contains('show')).toBe(false);

      end();
      await vi.runAllTimersAsync();
      expect(backdrop.isConnected).toBe(false);
      backdrop = null;
    });

    it('should remove a backdrop whose fade is cancelled', async () => {
      const { cancel } = holdTransition(backdrop);
      service.clearBackdrop(backdrop);
      await Promise.resolve();
      expect(backdrop.classList.contains('show')).toBe(false);
      expect(backdrop.isConnected).toBe(true);

      cancel();
      await vi.runAllTimersAsync();
      expect(backdrop.isConnected).toBe(false);
      backdrop = null;
    });

    it('should bring a fading backdrop of the same type back', async () => {
      const { end } = holdTransition(backdrop);
      service.clearBackdrop(backdrop);
      await vi.runAllTimersAsync();

      expect(service.setBackdrop('modal')).toBe(backdrop);
      expect(backdrop.classList.contains('show')).toBe(true);
      expect(service.activeBackdrop).toBe(backdrop);
      end();
      await vi.runAllTimersAsync();
      expect(backdrop.isConnected).toBe(true);
    });

    it('should answer clicks on a backdrop that came back, not on a fading one', async () => {
      const clicks: boolean[] = [];
      service.backdropClick$.subscribe((clicked) => clicks.push(clicked));
      holdTransition(backdrop);
      service.clearBackdrop(backdrop);
      await vi.runAllTimersAsync();

      backdrop.dispatchEvent(new MouseEvent('click'));
      expect(clicks).toEqual([]);

      service.setBackdrop('modal');
      backdrop.dispatchEvent(new MouseEvent('click'));
      expect(clicks).toEqual([true]);
    });

    it('should finish only the latest fade of a backdrop that faded again after it came back', async () => {
      const first = holdTransition(backdrop);
      service.clearBackdrop(backdrop);
      await vi.runAllTimersAsync();
      service.setBackdrop('modal');
      const second = holdTransition(backdrop);
      service.clearBackdrop(backdrop);
      await vi.runAllTimersAsync();

      first.end();
      await vi.runAllTimersAsync();
      expect(backdrop.isConnected).toBe(true);

      second.end();
      await vi.runAllTimersAsync();
      expect(backdrop.isConnected).toBe(false);
      backdrop = null;
    });

    it('should replace a backdrop that was removed from the page', async () => {
      backdrop.remove();
      const replaced = service.setBackdrop('modal');
      expect(replaced).not.toBe(backdrop);
      expect(replaced.isConnected).toBe(true);

      service.clearBackdrop(replaced);
      await vi.runAllTimersAsync();
      expect(replaced.isConnected).toBe(false);
      backdrop = null;
    });

    it('should keep a replacement when the fade of a removed backdrop ends', async () => {
      const { end } = holdTransition(backdrop);
      service.clearBackdrop(backdrop);
      backdrop.remove();
      const replaced = service.setBackdrop('modal');

      end();
      await vi.runAllTimersAsync();
      expect(replaced.isConnected).toBe(true);
      expect(service.activeBackdrop).toBe(replaced);

      service.clearBackdrop(replaced);
      await vi.runAllTimersAsync();
      expect(replaced.isConnected).toBe(false);
      backdrop = null;
    });

    it('should not start the fade of a backdrop set again in the same synchronous run', async () => {
      const remove = vi.spyOn(backdrop.classList, 'remove');
      service.clearBackdrop(backdrop);
      service.setBackdrop('modal', false);
      await vi.runAllTimersAsync();
      expect(remove).not.toHaveBeenCalledWith('show');
      expect(backdrop.classList.contains('show')).toBe(true);
    });

    it('should remove a modal and an offcanvas backdrop that fade together', async () => {
      const offcanvas = service.setBackdrop('offcanvas');
      await vi.runAllTimersAsync();

      service.clearBackdrop(backdrop);
      service.clearBackdrop(offcanvas);
      await vi.runAllTimersAsync();
      expect(backdrop.isConnected).toBe(false);
      expect(offcanvas.isConnected).toBe(false);
      backdrop = null;
    });

    it('should ignore clearBackdrop for an element it does not hold in use', async () => {
      service.clearBackdrop(undefined as unknown as HTMLElement);
      service.clearBackdrop(document.createElement('div'));
      expect(backdrop.classList.contains('show')).toBe(true);

      holdTransition(backdrop);
      service.clearBackdrop(backdrop);
      service.clearBackdrop(backdrop);
      service.setBackdrop('modal');
      await vi.runAllTimersAsync();
      expect(backdrop.isConnected).toBe(true);
      expect(backdrop.classList.contains('show')).toBe(true);

      Reflect.deleteProperty(backdrop, 'getAnimations');
      service.clearBackdrop(backdrop);
      await vi.runAllTimersAsync();
      expect(backdrop.isConnected).toBe(false);
      backdrop = null;
    });

    it('should not show a backdrop released before its delayed show', async () => {
      const offcanvas = service.setBackdrop('offcanvas');
      service.clearBackdrop(offcanvas);
      await vi.runAllTimersAsync();
      expect(offcanvas.classList.contains('show')).toBe(false);
      expect(offcanvas.isConnected).toBe(false);
    });

    it('should leave the delayed show to a backdrop released and set again before it showed', async () => {
      const offcanvas = service.setBackdrop('offcanvas');
      service.clearBackdrop(offcanvas);
      expect(service.setBackdrop('offcanvas')).toBe(offcanvas);
      expect(offcanvas.classList.contains('show')).toBe(false);

      await vi.runAllTimersAsync();
      expect(offcanvas.classList.contains('show')).toBe(true);
      service.clearBackdrop(offcanvas);
      await vi.runAllTimersAsync();
      expect(offcanvas.isConnected).toBe(false);
    });

    it('should show at once a backdrop set without fade before its delayed show', () => {
      const offcanvas = service.setBackdrop('offcanvas');
      service.setBackdrop('offcanvas', false);
      expect(offcanvas.classList.contains('fade')).toBe(false);
      expect(offcanvas.classList.contains('show')).toBe(true);
      service.clearBackdrop(offcanvas);
      service.clearBackdrop(offcanvas);
    });

    it('should show a backdrop without fade at once and remove it once released', async () => {
      const offcanvas = service.setBackdrop('offcanvas', false);
      expect(offcanvas.classList.contains('fade')).toBe(false);
      expect(offcanvas.classList.contains('show')).toBe(true);

      service.clearBackdrop(offcanvas);
      await vi.runAllTimersAsync();
      expect(offcanvas.isConnected).toBe(false);
    });
  });

  it('should leave the scroll lock alone when a backdrop is cleared', async () => {
    const owner = {};
    service.lockScroll(owner);
    service.clearBackdrop(backdrop);
    await vi.runAllTimersAsync();
    backdrop = null;

    expect(document.body.style.overflow).toBe('hidden');
    service.unlockScroll(owner);
  });

  describe('scroll lock', () => {
    const first = {};
    const second = {};

    afterEach(() => {
      service.unlockScroll(first);
      service.unlockScroll(second);
      document.body.removeAttribute('dir');
      document.body.style.removeProperty('overflow');
      Reflect.deleteProperty(document.documentElement, 'clientWidth');
    });

    it('should measure the scrollbar before it hides the overflow', () => {
      Object.defineProperty(document.documentElement, 'clientWidth', {
        configurable: true,
        get: () => (document.body.style.overflow === 'hidden' ? window.innerWidth : window.innerWidth - 15)
      });
      service.lockScroll(first);

      expect(document.body.style.overflow).toBe('hidden');
      expect(document.body.style.paddingRight).toBe('15px');
      expect(service.scrollbarWidth).toBe('15px');
    });

    it('should keep scrolling locked until the last owner unlocks', () => {
      service.lockScroll(first);
      service.lockScroll(second);
      service.unlockScroll(first);
      expect(document.body.style.overflow).toBe('hidden');

      service.unlockScroll(second);
      expect(document.body.style.overflow).toBe('');
      expect(document.body.style.paddingRight).toBe('');
    });

    it('should count a second lock by the same owner once', () => {
      service.lockScroll(first);
      service.lockScroll(first);
      service.unlockScroll(first);
      expect(document.body.style.overflow).toBe('');
    });

    it('should not touch the body when an owner without a lock unlocks', () => {
      document.body.style.overflow = 'hidden';
      service.unlockScroll(first);
      expect(document.body.style.overflow).toBe('hidden');
    });

    it('should remove only the padding it set, also when the direction changes while locked', () => {
      document.body.style.paddingLeft = '7px';
      service.lockScroll(first);
      document.body.setAttribute('dir', 'rtl');
      service.unlockScroll(first);
      expect(document.body.style.paddingRight).toBe('');
      expect(document.body.style.paddingLeft).toBe('7px');
      document.body.style.removeProperty('padding-left');
    });

    it('should not restore the page padding the lock overwrote', () => {
      document.body.style.paddingRight = '20px';
      service.lockScroll(first);
      service.unlockScroll(first);
      expect(document.body.style.paddingRight).toBe('');
    });

    it('should keep a component lock when resetScrollbar is called from outside', () => {
      service.lockScroll(first);
      service.resetScrollbar();
      expect(document.body.style.overflow).toBe('hidden');
    });

    it('should lock and unlock through the deprecated methods on behalf of the service', () => {
      service.hideScrollbar();
      service.lockScroll(first);
      service.resetScrollbar();
      expect(document.body.style.overflow).toBe('hidden');

      service.unlockScroll(first);
      expect(document.body.style.overflow).toBe('');
    });
  });

  it('should react to backdrop click', async () => {
    let backdropClicked = false;
    service.backdropClick$.subscribe((value) => {
      backdropClicked = true;
      expect(value).toBe(true);
      service.clearBackdrop(service.activeBackdrop);
    });
    expect(backdropClicked).toBe(false);
    expect(backdrop.classList.contains('modal-backdrop')).toBe(true);
    expect(backdrop.classList.contains('fade')).toBe(true);
    expect(backdrop.classList.contains('show')).toBe(true);
    backdrop.dispatchEvent(new MouseEvent('click'));
    await vi.runAllTimersAsync();
    expect(backdropClicked).toBe(true);
    expect(backdrop.classList.contains('modal-backdrop')).toBe(true);
    expect(backdrop.classList.contains('fade')).toBe(true);
    expect(backdrop.classList.contains('show')).toBe(false);
  });
});
