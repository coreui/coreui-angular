import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFooterComponent } from './modal-footer.component';

describe('ModalFooterComponent', () => {
  let component: ModalFooterComponent;
  let fixture: ComponentFixture<ModalFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalFooterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalFooterComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('modal-footer')).toBe(true);
  });
});
