import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TooltipComponent } from './tooltip.component';

@Component({
  template: `
    <c-tooltip />
    <c-tooltip [animation]="animation()" [visible]="visible()" />
  `,
  imports: [TooltipComponent]
})
class TestComponent {
  readonly animation = signal(true);
  readonly visible = signal(false);
}

describe('TooltipComponent', () => {
  let component: TooltipComponent;
  let element: HTMLElement;
  let boundElement: HTMLElement;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(TestComponent);
    await fixture.whenStable();

    const [debugElement, boundDebugElement] = fixture.debugElement.queryAll(By.directive(TooltipComponent));
    component = debugElement.componentInstance;
    element = debugElement.nativeElement;
    boundElement = boundDebugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(element.classList.contains('tooltip')).toBe(true);
    expect(element.classList.contains('fade')).toBe(true);
  });

  it('should not fade without animation', async () => {
    fixture.componentInstance.animation.set(false);
    await fixture.whenStable();
    expect(boundElement.classList.contains('tooltip')).toBe(true);
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

  it('should not have the popover css classes', () => {
    expect(element.classList.contains('popover')).toBe(false);
    expect(element.classList.contains('bs-popover-auto')).toBe(false);
  });
});
