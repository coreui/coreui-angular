import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColComponent } from './col.component';

describe('ColComponent', () => {
  let component: ColComponent;
  let fixture: ComponentFixture<ColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ColComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('col')).toBe(true);
  });
});
