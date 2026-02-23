import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionComponent } from './accordion.component';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AccordionComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('accordion')).toBe(true);
  });
});
