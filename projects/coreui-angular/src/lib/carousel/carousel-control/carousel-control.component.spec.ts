import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';

import { CarouselControlComponent } from './carousel-control.component';
import { CarouselService } from '../carousel.service';
import { CarouselState } from '../carousel-state';
import { ComponentRef, DebugElement } from '@angular/core';
import { take } from 'rxjs/operators';

describe('CarouselControlComponent', () => {
  let component: CarouselControlComponent;
  let componentRef: ComponentRef<CarouselControlComponent>;
  let fixture: ComponentFixture<CarouselControlComponent>;
  let service: CarouselService;
  let state: CarouselState;
  let debugElement: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CarouselControlComponent],
      providers: [CarouselService, CarouselState]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselControlComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    service = TestBed.inject(CarouselService);
    state = TestBed.inject(CarouselState);
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css class="carousel-control-next"', () => {
    expect(fixture.nativeElement).toHaveClass('carousel-control-next');
  });

  it('should have role="button"', () => {
    expect(fixture.nativeElement.getAttribute('role')).toBe('button');
  });

  it('should have caption="Next"', () => {
    expect(component.caption()).toBe('Next');
  });

  it('should have caption to be undefined', () => {
    componentRef.setInput('caption', 'Test');
    expect(component.caption()).toBe('Test');
  });

  it('should have direction="next"', () => {
    expect(component.direction()).toBe('next');
  });

  it('should have carouselControlIconClass="carousel-control-next-icon"', () => {
    expect(component.carouselControlIconClass()).toBe('carousel-control-next-icon');
  });

  it('should play on click', fakeAsync(() => {
    componentRef.setInput('direction', 'prev');
    component.onClick(new MouseEvent('click'));
    fixture.detectChanges();
    expect(component.caption()).toBe('Previous');
  }));

  it('should play on keyup', fakeAsync(() => {
    service.carouselIndex$.pipe(take(2)).subscribe((index) => {
      if (index.active === 0) {
        expect(index).toEqual({ active: 0, interval: -1, lastItemIndex: -1 });
      } else {
        expect(index).toEqual({});
      }
    });

    debugElement.nativeElement.dispatchEvent(new KeyboardEvent('keyup', { key: 'ArrowLeft' }));
    tick();
    debugElement.nativeElement.dispatchEvent(new KeyboardEvent('keyup', { key: 'ArrowRight' }));
    tick();
    debugElement.nativeElement.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));
    tick();
  }));
});
