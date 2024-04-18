import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InputGroupComponent } from './input-group.component';

describe('InputGroupComponent', () => {
  let component: InputGroupComponent;
  let fixture: ComponentFixture<InputGroupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [InputGroupComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement).toHaveClass('input-group');
  });
});
