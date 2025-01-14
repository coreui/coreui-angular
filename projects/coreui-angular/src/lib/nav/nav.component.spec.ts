import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { ComponentRef } from '@angular/core';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let componentRef: ComponentRef<NavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NavComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement).toHaveClass('nav');
  });

  it('should have css classes for layout', () => {
    componentRef.setInput('layout', 'fill');
    fixture.detectChanges();
    expect(fixture.nativeElement).toHaveClass('nav-fill');
    componentRef.setInput('layout', 'justified');
    fixture.detectChanges();
    expect(fixture.nativeElement).not.toHaveClass('nav-fill');
    expect(fixture.nativeElement).toHaveClass('nav-justified');
    componentRef.setInput('layout', undefined);
    fixture.detectChanges();
    expect(fixture.nativeElement).not.toHaveClass('nav-fill');
    expect(fixture.nativeElement).not.toHaveClass('nav-justified');
  });

  it('should have css classes for variant', () => {
    expect(fixture.nativeElement).not.toHaveClass('nav-tabs');
    expect(fixture.nativeElement).not.toHaveClass('nav-pills');
    expect(fixture.nativeElement).not.toHaveClass('nav-underline');
    expect(fixture.nativeElement).not.toHaveClass('nav-underline-border');

    componentRef.setInput('variant', 'tabs');
    fixture.detectChanges();
    expect(fixture.nativeElement).toHaveClass('nav-tabs');
    expect(fixture.nativeElement).not.toHaveClass('nav-pills');
    expect(fixture.nativeElement).not.toHaveClass('nav-underline');
    expect(fixture.nativeElement).not.toHaveClass('nav-underline-border');

    componentRef.setInput('variant', 'pills');
    fixture.detectChanges();
    expect(fixture.nativeElement).not.toHaveClass('nav-tabs');
    expect(fixture.nativeElement).toHaveClass('nav-pills');
    expect(fixture.nativeElement).not.toHaveClass('nav-underline');
    expect(fixture.nativeElement).not.toHaveClass('nav-underline-border');

    componentRef.setInput('variant', 'underline');
    fixture.detectChanges();
    expect(fixture.nativeElement).not.toHaveClass('nav-tabs');
    expect(fixture.nativeElement).not.toHaveClass('nav-pills');
    expect(fixture.nativeElement).toHaveClass('nav-underline');
    expect(fixture.nativeElement).not.toHaveClass('nav-underline-border');

    componentRef.setInput('variant', 'underline-border');
    fixture.detectChanges();
    expect(fixture.nativeElement).not.toHaveClass('nav-tabs');
    expect(fixture.nativeElement).not.toHaveClass('nav-pills');
    expect(fixture.nativeElement).not.toHaveClass('nav-underline');
    expect(fixture.nativeElement).toHaveClass('nav-underline-border');

    componentRef.setInput('variant', undefined);
    fixture.detectChanges();
    expect(fixture.nativeElement).not.toHaveClass('nav-tabs');
    expect(fixture.nativeElement).not.toHaveClass('nav-pills');
    expect(fixture.nativeElement).not.toHaveClass('nav-underline');
    expect(fixture.nativeElement).not.toHaveClass('nav-underline-border');
  });
});
