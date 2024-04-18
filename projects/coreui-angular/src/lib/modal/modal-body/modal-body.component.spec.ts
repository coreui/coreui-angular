import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBodyComponent } from './modal-body.component';

describe('ModalBodyComponent', () => {
  let component: ModalBodyComponent;
  let fixture: ComponentFixture<ModalBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalBodyComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement).toHaveClass('modal-body');
  });
});
