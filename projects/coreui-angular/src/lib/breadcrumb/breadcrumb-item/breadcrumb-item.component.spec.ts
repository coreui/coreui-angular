import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreadcrumbItemComponent } from './breadcrumb-item.component';
import { provideRouter } from '@angular/router';
import { ComponentRef } from '@angular/core';

describe('BreadcrumbItemComponent', () => {
  let component: BreadcrumbItemComponent;
  let componentRef: ComponentRef<BreadcrumbItemComponent>;
  let fixture: ComponentFixture<BreadcrumbItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbItemComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(BreadcrumbItemComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('breadcrumb-item')).toBe(true);
    expect(fixture.nativeElement.classList.contains('active')).toBe(false);
  });

  it('should have active class', () => {
    componentRef.setInput('active', true);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('active')).toBe(true);
  });

  it('should have aria-current attribute', () => {
    expect(fixture.nativeElement.getAttribute('aria-current')).toBeNull();
    componentRef.setInput('active', true);
    fixture.detectChanges();
    expect(fixture.nativeElement.getAttribute('aria-current')).toBe('page');
    componentRef.setInput('active', false);
    fixture.detectChanges();
    expect(fixture.nativeElement.getAttribute('aria-current')).toBeNull();
  });
});
