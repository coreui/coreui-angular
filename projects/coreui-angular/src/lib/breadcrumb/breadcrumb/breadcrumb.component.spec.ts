import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbComponent } from './breadcrumb.component';

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BreadcrumbComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('breadcrumb')).toBe(true);
  });

  it('should have aria-label attribute', () => {
    expect(fixture.nativeElement.getAttribute('aria-label')).toBe('breadcrumb');
  });

  it('should have role attribute', () => {
    expect(fixture.nativeElement.getAttribute('role')).toBe('navigation');
  });
});
