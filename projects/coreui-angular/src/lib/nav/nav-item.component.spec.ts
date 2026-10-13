import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentRef } from '@angular/core';

import { NavItemComponent } from './nav-item.component';

describe('NavItemComponent', () => {
  let component: NavItemComponent;
  let fixture: ComponentFixture<NavItemComponent>;
  let componentRef: ComponentRef<NavItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavItemComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NavItemComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('nav-item')).toBe(true);
  });

  it('should not render nav link without href', () => {
    expect(fixture.nativeElement.querySelector('.nav-link')).toBeNull();
  });

  it('should render nav link for href', async () => {
    componentRef.setInput('href', '/test');
    await fixture.whenStable();
    const link = fixture.nativeElement.querySelector('.nav-link');
    expect(link.getAttribute('href')).toBe('/test');
    expect(link.classList.contains('active')).toBe(false);
    expect(link.classList.contains('disabled')).toBe(false);
  });

  it('should not set tabindex on the nav link when not given', async () => {
    componentRef.setInput('href', '/test');
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('.nav-link').getAttribute('tabindex')).toBeNull();
  });

  it('should pass tabindex to the nav link', async () => {
    componentRef.setInput('href', '/test');
    componentRef.setInput('tabindex', 2);
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('.nav-link').getAttribute('tabindex')).toBe('2');
  });

  it('should pass active and disabled to the nav link', async () => {
    componentRef.setInput('href', '/test');
    componentRef.setInput('active', true);
    componentRef.setInput('disabled', true);
    await fixture.whenStable();
    const link = fixture.nativeElement.querySelector('.nav-link');
    expect(link.classList.contains('active')).toBe(true);
    expect(link.classList.contains('disabled')).toBe(true);
    expect(link.getAttribute('aria-current')).toBe('page');
    expect(link.getAttribute('tabindex')).toBe('-1');
  });
});
