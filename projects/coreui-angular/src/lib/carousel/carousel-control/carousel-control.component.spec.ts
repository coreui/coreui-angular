import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CarouselControlComponent } from './carousel-control.component';
import { CarouselService } from '../carousel.service';
import { CarouselState } from '../carousel-state';

describe('CarouselControlComponent', () => {
  let component: CarouselControlComponent;
  let fixture: ComponentFixture<CarouselControlComponent>;
  let service: CarouselService;
  let state: CarouselState;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CarouselControlComponent],
      providers: [CarouselService, CarouselState]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselControlComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CarouselService);
    state = TestBed.inject(CarouselState);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
