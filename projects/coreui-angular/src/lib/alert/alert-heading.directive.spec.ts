import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AlertHeadingDirective } from './alert-heading.directive';

@Component({
  template: `<h4 cAlertHeading class="custom-class">Heading</h4>`,
  imports: [AlertHeadingDirective]
})
class AlertHeadingHostComponent {}

describe('AlertHeadingDirective', () => {
  it('should create an instance', () => {
    const fixture = TestBed.createDirective(AlertHeadingDirective, { tagName: 'h4' });
    expect(fixture.directiveInstance).toBeTruthy();
    expect(fixture.nativeElement.classList.contains('alert-heading')).toBe(true);
  });

  it('should render its content', async () => {
    const fixture = TestBed.createComponent(AlertHeadingHostComponent);
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('h4').textContent).toBe('Heading');
  });

  it('should apply a custom class name', async () => {
    const fixture = TestBed.createComponent(AlertHeadingHostComponent);
    await fixture.whenStable();
    const heading: HTMLElement = fixture.nativeElement.querySelector('h4');
    expect(heading.classList.contains('custom-class')).toBe(true);
    expect(heading.classList.contains('alert-heading')).toBe(true);
  });
});
