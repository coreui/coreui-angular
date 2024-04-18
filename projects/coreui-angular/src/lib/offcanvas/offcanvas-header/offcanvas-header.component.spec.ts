import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffcanvasHeaderComponent } from './offcanvas-header.component';

describe('OffcanvasHeaderComponent', () => {
  let component: OffcanvasHeaderComponent;
  let fixture: ComponentFixture<OffcanvasHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffcanvasHeaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffcanvasHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement).toHaveClass('offcanvas-header');
  });
});
