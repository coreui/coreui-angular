import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TooltipComponent } from './tooltip.component';

@Component({
  template: '<c-tooltip />',
  imports: [TooltipComponent]
})
class TestComponent {}

describe('TooltipComponent', () => {
  let component: TooltipComponent;
  let element: HTMLElement;

  beforeEach(async () => {
    const fixture = TestBed.createComponent(TestComponent);
    await fixture.whenStable();

    const debugElement = fixture.debugElement.query(By.directive(TooltipComponent));
    component = debugElement.componentInstance;
    element = debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(element.classList.contains('tooltip')).toBe(true);
    expect(element.classList.contains('fade')).toBe(true);
  });
});
