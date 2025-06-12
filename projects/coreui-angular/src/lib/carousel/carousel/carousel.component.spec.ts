import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';

import { CarouselComponent } from './carousel.component';
import { CarouselService } from '../carousel.service';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;
  let service: CarouselService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CarouselComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CarouselComponent],
      providers: [CarouselService]
    }).compileComponents();
    fixture = TestBed.createComponent(CarouselComponent);
    service = TestBed.inject(CarouselService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement).toHaveClass('carousel');
    expect(fixture.nativeElement).toHaveClass('slide');
    fixture.componentRef.setInput('transition', 'crossfade');
    fixture.detectChanges();
    expect(fixture.nativeElement).toHaveClass('carousel-fade');
  });

  it('should have default values', () => {
    expect(component.activeIndex()).toBe(0);
    expect(component.animate()).toBe(true);
    expect(component.direction()).toBe('next');
    expect(component.interval()).toBe(-1);
  });

  it('should call timer functions', fakeAsync(() => {
    const spySet = spyOn(component, 'setTimer');
    const spyReset = spyOn(component, 'resetTimer');
    fixture.nativeElement.dispatchEvent(new Event('mouseenter'));
    fixture.nativeElement.dispatchEvent(new Event('mouseleave'));
    expect(spySet).toHaveBeenCalled();
    expect(spyReset).toHaveBeenCalled();
  }));
});
