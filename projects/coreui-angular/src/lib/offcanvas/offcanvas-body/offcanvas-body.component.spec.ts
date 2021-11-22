import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffcanvasBodyComponent } from './offcanvas-body.component';

describe('OffcanvasBodyComponent', () => {
  let component: OffcanvasBodyComponent;
  let fixture: ComponentFixture<OffcanvasBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffcanvasBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffcanvasBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
