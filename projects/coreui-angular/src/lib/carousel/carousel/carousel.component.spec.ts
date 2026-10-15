import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { expect, vi } from 'vitest';

import { CarouselComponent } from './carousel.component';
import { CarouselService } from '../carousel.service';
import { CarouselIndicatorsComponent } from '../carousel-indicators/carousel-indicators.component';
import { CarouselInnerComponent } from '../carousel-inner/carousel-inner.component';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;
  let service: CarouselService;

  beforeEach(async () => {
    // Mock IntersectionObserver
    (globalThis as any).IntersectionObserver = class IntersectionObserver {
      constructor() {
        // Mock implementation
      }
      observe = vi.fn();
      unobserve = vi.fn();
      disconnect = vi.fn();
      takeRecords = vi.fn(() => []);
      root = null;
      rootMargin = '';
      thresholds = [];
    };

    await TestBed.configureTestingModule({
      imports: [CarouselComponent],
      providers: [CarouselService]
    }).compileComponents();
    fixture = TestBed.createComponent(CarouselComponent);
    await fixture.whenStable();

    service = TestBed.inject(CarouselService);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', async () => {
    expect(fixture.nativeElement.classList.contains('carousel')).toBe(true);
    expect(fixture.nativeElement.classList.contains('slide')).toBe(true);
    fixture.componentRef.setInput('transition', 'crossfade');
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('carousel-fade')).toBe(true);
  });

  it('should have default values', () => {
    expect(component.activeIndex()).toBe(0);
    expect(component.animate()).toBe(true);
    expect(component.direction()).toBe('next');
    expect(component.interval()).toBe(-1);
  });

  it('should call timer functions', async () => {
    const spySet = vi.spyOn(component, 'setTimer');
    const spyReset = vi.spyOn(component, 'resetTimer');
    fixture.nativeElement.dispatchEvent(new Event('mouseenter'));
    fixture.nativeElement.dispatchEvent(new Event('mouseleave'));
    expect(spySet).toHaveBeenCalled();
    expect(spyReset).toHaveBeenCalled();
  });
});

@Component({
  template: `
    <c-carousel
      [activeIndex]="activeIndex()"
      [interval]="interval()"
      [touch]="touch()"
      [wrap]="wrap()"
      (itemChange)="changes.push($event)"
    >
      <c-carousel-indicators />
      <c-carousel-inner>
        <c-carousel-item>A</c-carousel-item>
        <c-carousel-item>B</c-carousel-item>
        <c-carousel-item>C</c-carousel-item>
      </c-carousel-inner>
    </c-carousel>
  `,
  imports: [CarouselComponent, CarouselIndicatorsComponent, CarouselInnerComponent, CarouselItemComponent]
})
class CarouselHostComponent {
  readonly activeIndex = signal(0);
  readonly interval = signal(-1);
  readonly touch = signal(true);
  readonly wrap = signal(true);
  changes: number[] = [];
}

describe('CarouselComponent with items', () => {
  let fixture: ComponentFixture<CarouselHostComponent>;
  let carousel: HTMLElement;
  let service: CarouselService;
  let items: CarouselItemComponent[];
  let intersect: IntersectionObserverCallback;

  const render = async (setup: (host: CarouselHostComponent) => void = () => undefined) => {
    fixture = TestBed.createComponent(CarouselHostComponent);
    setup(fixture.componentInstance);
    await fixture.whenStable();
    const carouselRef = fixture.debugElement.query(By.directive(CarouselComponent));
    carousel = carouselRef.nativeElement;
    service = carouselRef.injector.get(CarouselService);
    items = fixture.debugElement.queryAll(By.directive(CarouselItemComponent)).map((item) => item.componentInstance);
    fixture.componentInstance.changes = [];
  };

  const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const touch = (type: string, clientX?: number) => {
    const event = Object.assign(new Event(type, { bubbles: true }), {
      touches: clientX === undefined ? [] : [{ clientX }]
    });
    carousel.dispatchEvent(event);
  };

  const swipe = async (from: number, to: number) => {
    touch('touchstart', from);
    touch('touchmove', to);
    touch('touchend');
    await fixture.whenStable();
  };

  beforeEach(() => {
    (globalThis as any).IntersectionObserver = class IntersectionObserver {
      constructor(callback: IntersectionObserverCallback) {
        intersect = callback;
      }
      observe = vi.fn();
      unobserve = vi.fn();
      disconnect = vi.fn();
    };
  });

  it('should move to the next item after the interval', async () => {
    await render((host) => host.interval.set(20));
    await vi.waitFor(() => expect(fixture.componentInstance.changes).toContain(1), { timeout: 3000 });
    const active = fixture.componentInstance.changes.at(-1) ?? -1;
    expect(items.map((item) => item.active())).toEqual(items.map((_, index) => index === active));
  });

  it('should stop cycling on the last item without wrap', async () => {
    await render((host) => {
      host.activeIndex.set(1);
      host.interval.set(20);
      host.wrap.set(false);
    });
    await vi.waitFor(() => expect(items[2].active()).toBe(true), { timeout: 3000 });
    await wait(80);
    expect(items.map((item) => item.active())).toEqual([false, false, true]);
    expect(fixture.componentInstance.changes).not.toContain(0);
  });

  it('should pause cycling out of the viewport and resume in it', async () => {
    await render((host) => host.interval.set(20));
    intersect([{ isIntersecting: false }] as IntersectionObserverEntry[], {} as IntersectionObserver);
    const paused = fixture.componentInstance.changes.length;
    await wait(80);
    expect(fixture.componentInstance.changes.length).toBe(paused);

    intersect([{ isIntersecting: true }] as IntersectionObserverEntry[], {} as IntersectionObserver);
    await vi.waitFor(() => expect(fixture.componentInstance.changes.length).toBeGreaterThan(paused), {
      timeout: 3000
    });
  });

  it('should swipe to the next and the previous item past 30% of its width', async () => {
    await render();
    Object.defineProperty(carousel, 'clientWidth', { configurable: true, value: 400 });

    await swipe(300, 200);
    expect(fixture.componentInstance.changes).toEqual([]);

    await swipe(300, 100);
    await swipe(100, 300);
    expect(fixture.componentInstance.changes).toEqual([1, 0]);
  });

  it('should ignore a swipe while an item animates or with touch off', async () => {
    await render();
    service.animating.set(true);
    await swipe(300, 100);
    expect(fixture.componentInstance.changes).toEqual([]);

    await render((host) => host.touch.set(false));
    await swipe(300, 100);
    expect(fixture.componentInstance.changes).toEqual([]);
  });

  it('should go to the item of a clicked indicator', async () => {
    await render();
    const indicators = (): HTMLButtonElement[] =>
      Array.from(fixture.nativeElement.querySelectorAll('.carousel-indicators button'));
    expect(indicators().length).toBe(3);

    indicators()[0].click();
    expect(fixture.componentInstance.changes).toEqual([]);

    indicators()[2].click();
    await fixture.whenStable();
    expect(fixture.componentInstance.changes).toEqual([2]);
    expect(indicators()[2].getAttribute('aria-current')).toBe('true');

    service.animating.set(true);
    indicators()[1].click();
    expect(fixture.componentInstance.changes).toEqual([2]);
  });

  it('should mark the carousel animating during the item transition and settle the classes after it', async () => {
    await render();
    const [first, second] = fixture.debugElement
      .queryAll(By.directive(CarouselItemComponent))
      .map((item) => item.nativeElement as HTMLElement);

    service.state = { direction: 'next', activeItemIndex: 1 };
    await fixture.whenStable();
    await new Promise((resolve) => requestAnimationFrame(resolve));
    await fixture.whenStable();
    expect(second.classList.contains('carousel-item-next')).toBe(true);
    expect(second.classList.contains('carousel-item-start')).toBe(true);

    second.dispatchEvent(new Event('transitionstart'));
    expect(service.animating()).toBe(true);

    second.dispatchEvent(new Event('transitionend'));
    first.dispatchEvent(new Event('transitionend'));
    await fixture.whenStable();
    expect(service.animating()).toBe(false);
    expect(second.className).toBe('carousel-item active');
    expect(first.classList.contains('active')).toBe(false);
    expect(first.classList.contains('d-none')).toBe(true);
  });
});
