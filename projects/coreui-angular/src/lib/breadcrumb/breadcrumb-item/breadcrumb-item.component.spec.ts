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
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbItemComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement).toHaveClass('breadcrumb-item');
    expect(fixture.nativeElement).not.toHaveClass('active');
  });

  it('should have active class', () => {
    componentRef.setInput('active', true);
    fixture.detectChanges();
    expect(fixture.nativeElement).toHaveClass('active');
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
