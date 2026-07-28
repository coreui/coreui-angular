import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { ComponentRef } from '@angular/core';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let componentRef: ComponentRef<NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NavComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('nav')).toBe(true);
  });

  it('should have css classes for layout', () => {
    componentRef.setInput('layout', 'fill');
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('nav-fill')).toBe(true);
    componentRef.setInput('layout', 'justified');
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('nav-fill')).toBe(false);
    expect(fixture.nativeElement.classList.contains('nav-justified')).toBe(true);
    componentRef.setInput('layout', undefined);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('nav-fill')).toBe(false);
    expect(fixture.nativeElement.classList.contains('nav-justified')).toBe(false);
  });

  it('should have css classes for variant', () => {
    expect(fixture.nativeElement.classList.contains('nav-tabs')).toBe(false);
    expect(fixture.nativeElement.classList.contains('nav-pills')).toBe(false);
    expect(fixture.nativeElement.classList.contains('nav-underline')).toBe(false);
    expect(fixture.nativeElement.classList.contains('nav-underline-border')).toBe(false);

    componentRef.setInput('variant', 'tabs');
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('nav-tabs')).toBe(true);
    expect(fixture.nativeElement.classList.contains('nav-pills')).toBe(false);
    expect(fixture.nativeElement.classList.contains('nav-underline')).toBe(false);
    expect(fixture.nativeElement.classList.contains('nav-underline-border')).toBe(false);

    componentRef.setInput('variant', 'pills');
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('nav-tabs')).toBe(false);
    expect(fixture.nativeElement.classList.contains('nav-pills')).toBe(true);
    expect(fixture.nativeElement.classList.contains('nav-underline')).toBe(false);
    expect(fixture.nativeElement.classList.contains('nav-underline-border')).toBe(false);

    componentRef.setInput('variant', 'underline');
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('nav-tabs')).toBe(false);
    expect(fixture.nativeElement.classList.contains('nav-pills')).toBe(false);
    expect(fixture.nativeElement.classList.contains('nav-underline')).toBe(true);
    expect(fixture.nativeElement.classList.contains('nav-underline-border')).toBe(false);

    componentRef.setInput('variant', 'underline-border');
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('nav-tabs')).toBe(false);
    expect(fixture.nativeElement.classList.contains('nav-pills')).toBe(false);
    expect(fixture.nativeElement.classList.contains('nav-underline')).toBe(false);
    expect(fixture.nativeElement.classList.contains('nav-underline-border')).toBe(true);

    componentRef.setInput('variant', undefined);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('nav-tabs')).toBe(false);
    expect(fixture.nativeElement.classList.contains('nav-pills')).toBe(false);
    expect(fixture.nativeElement.classList.contains('nav-underline')).toBe(false);
    expect(fixture.nativeElement.classList.contains('nav-underline-border')).toBe(false);
  });
});
