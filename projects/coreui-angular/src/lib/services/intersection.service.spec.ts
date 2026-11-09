import { ElementRef, PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { IntersectionService } from './intersection.service';

describe('IntersectionService', () => {
  let service: IntersectionService;
  let observers: {
    callback: IntersectionObserverCallback;
    options?: IntersectionObserverInit;
    observe: ReturnType<typeof vi.fn>;
    unobserve: ReturnType<typeof vi.fn>;
    disconnect: ReturnType<typeof vi.fn>;
  }[];
  const nativeIntersectionObserver = globalThis.IntersectionObserver;
  const element = document.createElement('div');
  const report = (index: number, ...values: boolean[]) =>
    observers[index].callback(
      values.map((isIntersecting) => ({ isIntersecting }) as IntersectionObserverEntry),
      {} as IntersectionObserver
    );

  beforeEach(() => {
    observers = [];
    (globalThis as any).IntersectionObserver = class IntersectionObserver {
      observe = vi.fn();
      unobserve = vi.fn();
      disconnect = vi.fn();
      constructor(
        public callback: IntersectionObserverCallback,
        public options?: IntersectionObserverInit
      ) {
        observers.push(this);
      }
    };
    TestBed.configureTestingModule({
      providers: [IntersectionService]
    });
    service = TestBed.inject(IntersectionService);
  });

  afterEach(() => {
    globalThis.IntersectionObserver = nativeIntersectionObserver;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should report the first and every later intersection of the element', () => {
    const values: boolean[] = [];
    service.observe(new ElementRef(element)).subscribe((value) => values.push(value));

    report(0, true);
    report(0, false);

    expect(observers[0].observe).toHaveBeenCalledWith(element);
    expect(values).toEqual([true, false]);
  });

  it('should report every entry of one callback in order', () => {
    const values: boolean[] = [];
    service.observe(new ElementRef(element)).subscribe((value) => values.push(value));

    report(0, true, true, false);

    expect(values).toEqual([true, true, false]);
  });

  it('should create one observer per subscription', () => {
    const elementRef = new ElementRef(element);
    const first: boolean[] = [];
    const second: boolean[] = [];
    service.observe(elementRef).subscribe((value) => first.push(value));
    service.observe(elementRef).subscribe((value) => second.push(value));

    report(1, true);

    expect(observers.length).toBe(2);
    expect(first).toEqual([]);
    expect(second).toEqual([true]);
  });

  it('should create an observer for every subscription to one observable and none before', () => {
    const intersecting = service.observe(new ElementRef(element));
    const created = observers.length;

    intersecting.subscribe();
    intersecting.subscribe();

    expect(created).toBe(0);
    expect(observers.length).toBe(2);
  });

  it('should disconnect the observer on unsubscribe', () => {
    const elementRef = new ElementRef(element);
    const subscription = service.observe(elementRef).subscribe();
    service.observe(elementRef).subscribe();

    subscription.unsubscribe();

    expect(observers[0].disconnect).toHaveBeenCalled();
    expect(observers[1].disconnect).not.toHaveBeenCalled();
  });

  it('should keep reporting when unobserve is called for the same element', () => {
    const elementRef = new ElementRef(element);
    const values: boolean[] = [];
    service.observe(elementRef).subscribe((value) => values.push(value));

    service.unobserve(elementRef);
    report(0, true);

    expect(values).toEqual([true]);
    expect(observers[0].unobserve).not.toHaveBeenCalled();
    expect(observers[0].disconnect).not.toHaveBeenCalled();
  });

  it('should merge the given options over the defaults', () => {
    service.observe(new ElementRef(element), { rootMargin: '10px' }).subscribe();

    expect(observers[0].options).toEqual({ root: null, rootMargin: '10px', threshold: 0.2 });
  });

  it('should report true once on the server without an observer', () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [IntersectionService, { provide: PLATFORM_ID, useValue: 'server' }]
    });
    const values: boolean[] = [];
    let complete = false;

    TestBed.inject(IntersectionService)
      .observe(new ElementRef(element))
      .subscribe({ next: (value) => values.push(value), complete: () => (complete = true) });

    expect(values).toEqual([true]);
    expect(complete).toBe(true);
    expect(observers.length).toBe(0);
  });
});
