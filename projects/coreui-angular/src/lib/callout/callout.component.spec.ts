import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalloutComponent } from './callout.component';

describe('CalloutComponent', () => {
  let component: CalloutComponent;
  let fixture: ComponentFixture<CalloutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalloutComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CalloutComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('callout')).toBe(true);
  });
});
