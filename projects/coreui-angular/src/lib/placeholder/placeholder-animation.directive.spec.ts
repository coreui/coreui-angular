import { inputBinding, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { PlaceholderAnimationDirective } from './placeholder-animation.directive';

describe('PlaceholderAnimationDirective', () => {
  it('should create an instance', () => {
    const fixture = TestBed.createDirective(PlaceholderAnimationDirective, { tagName: 'p' });
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should not animate without a placeholder', async () => {
    const animation = signal<'glow' | 'wave' | undefined>('wave');
    const fixture = TestBed.createDirective(PlaceholderAnimationDirective, {
      tagName: 'p',
      bindings: [inputBinding('cPlaceholderAnimation', animation)]
    });
    await fixture.whenStable();
    expect(fixture.directiveInstance.animation()).toBe('wave');
    expect(fixture.nativeElement.classList.contains('placeholder-wave')).toBe(false);
  });
});
