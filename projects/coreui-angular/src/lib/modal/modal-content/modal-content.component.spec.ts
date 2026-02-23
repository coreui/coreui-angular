import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalContentComponent } from './modal-content.component';

describe('ModalContentComponent', () => {
  let component: ModalContentComponent;
  let fixture: ComponentFixture<ModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalContentComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalContentComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('modal-content')).toBe(true);
  });
});
