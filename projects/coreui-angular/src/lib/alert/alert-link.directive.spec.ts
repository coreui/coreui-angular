import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AlertLinkDirective } from './alert-link.directive';

@Component({
  template: `<a cAlertLink class="custom-class" href="#">Link</a>`,
  imports: [AlertLinkDirective]
})
class AlertLinkHostComponent {}

describe('AlertLinkDirective', () => {
  it('should create an instance', () => {
    const fixture = TestBed.createDirective(AlertLinkDirective, { tagName: 'a' });
    expect(fixture.directiveInstance).toBeTruthy();
    expect(fixture.nativeElement.classList.contains('alert-link')).toBe(true);
  });

  it('should render its content', async () => {
    const fixture = TestBed.createComponent(AlertLinkHostComponent);
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('a').textContent).toBe('Link');
  });

  it('should apply a custom class name', async () => {
    const fixture = TestBed.createComponent(AlertLinkHostComponent);
    await fixture.whenStable();
    const link: HTMLElement = fixture.nativeElement.querySelector('a');
    expect(link.classList.contains('custom-class')).toBe(true);
    expect(link.classList.contains('alert-link')).toBe(true);
  });
});
