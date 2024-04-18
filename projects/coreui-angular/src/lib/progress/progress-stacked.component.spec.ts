import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressStackedComponent } from './progress-stacked.component';

describe('ProgressStackedComponent', () => {
  let component: ProgressStackedComponent;
  let fixture: ComponentFixture<ProgressStackedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressStackedComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProgressStackedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
    expect(component.stacked).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement).toHaveClass('progress-stacked');
  });
});
