import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PopoverComponent } from './popover.component';

@Component({
  template: '<c-popover />',
  imports: [PopoverComponent]
})
class TestComponent {}

describe('PopoverComponent', () => {
  let component: PopoverComponent;
  let element: HTMLElement;

  beforeEach(async () => {
    const fixture = TestBed.createComponent(TestComponent);
    await fixture.whenStable();

    const debugElement = fixture.debugElement.query(By.directive(PopoverComponent));
    component = debugElement.componentInstance;
    element = debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(element.classList.contains('popover')).toBe(true);
    expect(element.classList.contains('fade')).toBe(true);
    expect(element.classList.contains('bs-popover-auto')).toBe(true);
  });
});
