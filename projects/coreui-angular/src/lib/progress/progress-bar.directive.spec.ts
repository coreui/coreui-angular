import { inputBinding, signal, WritableSignal } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { Colors } from '../coreui.types';
import { ProgressBarDirective } from './progress-bar.directive';
import { ProgressService } from './progress.service';

describe('ProgressBarDirective', () => {
  let value: WritableSignal<number | undefined>;
  let color: WritableSignal<Colors>;
  let directive: ProgressBarDirective;
  let fixture: DirectiveFixture<ProgressBarDirective>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [ProgressService]
    });
    value = signal<number | undefined>(42);
    color = signal<Colors>('success');
    fixture = TestBed.createDirective(ProgressBarDirective, {
      tagName: 'div',
      bindings: [
        inputBinding('value', value),
        inputBinding('color', color),
        inputBinding('variant', () => 'striped'),
        inputBinding('animated', () => '')
      ]
    });
    directive = fixture.directiveInstance;
    await fixture.whenStable();
  });

  it('should create an instance', () => {
    expect(directive).toBeDefined();
  });

  it('should have color value', () => {
    expect(directive.color()).toBe('success');
  });

  it('should have max value', () => {
    expect(directive.max()).toBe(100);
  });

  it('should have variant value', () => {
    expect(directive.variant()).toBe('striped');
  });

  it('should have role value', () => {
    expect(directive.role()).toBe('progressbar');
  });

  it('should have precision value', () => {
    expect(directive.precision()).toBe(0);
  });

  it('should have animated value', () => {
    expect(directive.animated()).toBe(true);
  });

  it('should have aria-* attributes', async () => {
    const element = fixture.nativeElement;
    expect(element.getAttribute('aria-valuenow')).toBe('42');
    expect(element.getAttribute('aria-valuemin')).toBe('0');
    expect(element.getAttribute('aria-valuemax')).toBe('100');
    expect(element.getAttribute('role')).toBe('progressbar');
    value.set(undefined);
    await fixture.whenStable();
    expect(element.getAttribute('aria-valuenow')).toBeNull();
    expect(element.getAttribute('aria-valuemin')).toBeNull();
    expect(element.getAttribute('aria-valuemax')).toBeNull();
    expect(element.getAttribute('role')).toBeNull();
  });
});
