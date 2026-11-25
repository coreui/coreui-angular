import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PopoverComponent } from './popover.component';

@Component({
  template: `
    <c-popover />
    <c-popover [animation]="animation()" [visible]="visible()" />
  `,
  imports: [PopoverComponent]
})
class TestComponent {
  readonly animation = signal(true);
  readonly visible = signal(false);
}

describe('PopoverComponent', () => {
  let component: PopoverComponent;
  let element: HTMLElement;
  let boundElement: HTMLElement;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(TestComponent);
    await fixture.whenStable();

    const [debugElement, boundDebugElement] = fixture.debugElement.queryAll(By.directive(PopoverComponent));
    component = debugElement.componentInstance;
    element = debugElement.nativeElement;
    boundElement = boundDebugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(element.classList.contains('popover')).toBe(true);
    expect(element.classList.contains('fade')).toBe(true);
    expect(element.classList.contains('bs-popover-auto')).toBe(true);
  });

  it('should not fade without animation', async () => {
    fixture.componentInstance.animation.set(false);
    await fixture.whenStable();
    expect(boundElement.classList.contains('popover')).toBe(true);
    expect(boundElement.classList.contains('fade')).toBe(false);
  });

  it('should be hidden without animation while not visible', async () => {
    expect(boundElement.classList.contains('invisible')).toBe(false);
    fixture.componentInstance.animation.set(false);
    await fixture.whenStable();
    expect(boundElement.classList.contains('invisible')).toBe(true);
    fixture.componentInstance.visible.set(true);
    await fixture.whenStable();
    expect(boundElement.classList.contains('invisible')).toBe(false);
  });

  it('should not have the tooltip css classes', () => {
    expect(element.classList.contains('tooltip')).toBe(false);
    expect(element.classList.contains('bs-tooltip-auto')).toBe(false);
  });
});
