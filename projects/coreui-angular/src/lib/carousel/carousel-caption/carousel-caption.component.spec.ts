import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CarouselCaptionComponent } from './carousel-caption.component';

describe('CarouselCaptionComponent', () => {
  let component: CarouselCaptionComponent;
  let fixture: ComponentFixture<CarouselCaptionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CarouselCaptionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselCaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
