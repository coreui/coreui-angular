import { TestBed } from '@angular/core/testing';
import { Component, ElementRef, inject, Renderer2 } from '@angular/core';
import type { Mock } from 'vitest';
import { IListenersConfig, ListenersService } from './listeners.service';

describe('ListenersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Renderer2]
    });
  });

  it('should be created', () => {
    TestBed.runInInjectionContext(() => {
      const service = new ListenersService();
      expect(service).toBeTruthy();
    });
  });
});

@Component({
  template: '',
  providers: [ListenersService]
})
class ListenersHostComponent {
  readonly elementRef = inject(ElementRef);
  readonly service = inject(ListenersService);
}

describe('ListenersService listeners', () => {
  let host: HTMLElement;
  let service: ListenersService;
  let callbacks: Record<'callbackOn' | 'callbackOff' | 'callbackToggle', Mock<() => void>>;

  const listen = (trigger: IListenersConfig['trigger']) =>
    service.setListeners({ hostElement: new ElementRef(host), trigger, ...callbacks });

  const fire = (...types: string[]) => types.forEach((type) => host.dispatchEvent(new Event(type)));

  const calls = () => ({
    on: callbacks.callbackOn.mock.calls.length,
    off: callbacks.callbackOff.mock.calls.length,
    toggle: callbacks.callbackToggle.mock.calls.length
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(ListenersHostComponent);
    host = fixture.componentInstance.elementRef.nativeElement;
    service = fixture.componentInstance.service;
    callbacks = {
      callbackOn: vi.fn<() => void>(),
      callbackOff: vi.fn<() => void>(),
      callbackToggle: vi.fn<() => void>()
    };
  });

  it('should toggle on click and turn off on blur', () => {
    listen('click');
    fire('click', 'blur', 'focus', 'mouseenter');
    expect(calls()).toEqual({ on: 0, off: 1, toggle: 1 });
  });

  it('should turn on on focus and off on blur', () => {
    listen('focus');
    fire('focus', 'blur', 'click');
    expect(calls()).toEqual({ on: 1, off: 1, toggle: 0 });
  });

  it('should turn on on focusin and off on focusout', () => {
    listen('focusin');
    fire('focusin', 'focusout', 'blur');
    expect(calls()).toEqual({ on: 1, off: 1, toggle: 0 });
  });

  it('should turn on on mouseenter and off on mouseleave for a trigger list in a string', () => {
    listen('hover click' as IListenersConfig['trigger']);
    fire('mouseenter', 'mouseleave', 'click');
    expect(calls()).toEqual({ on: 1, off: 1, toggle: 1 });
  });

  it('should listen to nothing without a trigger or a callback', () => {
    const rendererListen = vi.spyOn(service.renderer, 'listen');

    listen(undefined);
    service.setListeners({ hostElement: new ElementRef(host), trigger: ['click', 'focus', 'focusin', 'hover'] });

    expect(rendererListen).not.toHaveBeenCalled();
  });

  it('should remove every listener on clear', () => {
    listen(['click', 'focus', 'focusin', 'hover']);
    service.clearListeners();
    fire('click', 'focus', 'blur', 'focusin', 'focusout', 'mouseenter', 'mouseleave');
    expect(calls()).toEqual({ on: 0, off: 0, toggle: 0 });
  });
});
