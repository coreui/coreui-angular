/// <reference types="vitest/globals" />
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { CarouselComponent } from './carousel.component';
import { CarouselService } from '../carousel.service';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;
  let service: CarouselService;

  beforeEach(async () => {
    // // Mock IntersectionObserver for jsdom
    // (globalThis as any).IntersectionObserver = class IntersectionObserver {
    //   observe = vi.fn();
    //   unobserve = vi.fn();
    //   disconnect = vi.fn();
    //   takeRecords = vi.fn().mockReturnValue([]);
    // };

    await TestBed.configureTestingModule({
      imports: [CarouselComponent],
      providers: [CarouselService]
    }).compileComponents();
    fixture = TestBed.createComponent(CarouselComponent);
    await fixture.whenStable();

    service = TestBed.inject(CarouselService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('carousel')).toBe(true);
    expect(fixture.nativeElement.classList.contains('slide')).toBe(true);
    fixture.componentRef.setInput('transition', 'crossfade');
    fixture.detectChanges();
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
