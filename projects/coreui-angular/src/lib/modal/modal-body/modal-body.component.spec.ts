import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBodyComponent } from './modal-body.component';

describe('ModalBodyComponent', () => {
  let component: ModalBodyComponent;
  let fixture: ComponentFixture<ModalBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalBodyComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalBodyComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('modal-body')).toBe(true);
  });
});
