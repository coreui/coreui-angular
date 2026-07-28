import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffcanvasBodyComponent } from './offcanvas-body.component';

describe('OffcanvasBodyComponent', () => {
  let component: OffcanvasBodyComponent;
  let fixture: ComponentFixture<OffcanvasBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffcanvasBodyComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OffcanvasBodyComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('offcanvas-body')).toBe(true);
  });
});
