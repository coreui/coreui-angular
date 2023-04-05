import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CarouselItemComponent } from './carousel-item.component';
import { CarouselService } from '../carousel.service';

describe('CarouselItemComponent', () => {
  let component: CarouselItemComponent;
  let fixture: ComponentFixture<CarouselItemComponent>;
  let service: CarouselService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CarouselItemComponent],
      providers: [CarouselService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselItemComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CarouselService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
