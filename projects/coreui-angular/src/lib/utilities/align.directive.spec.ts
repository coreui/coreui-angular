import { inputBinding, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Alignment } from '../coreui.types';
import { AlignDirective } from './align.directive';

describe('AlignDirective', () => {
  it('should create an instance', () => {
    const fixture = TestBed.createDirective(AlignDirective, { tagName: 'span' });
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css classes', async () => {
    const align = signal<Alignment | undefined>(undefined);
    const fixture = TestBed.createDirective(AlignDirective, {
      tagName: 'span',
      bindings: [inputBinding('cAlign', align)]
    });
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.length).toBe(0);
    align.set('middle');
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('align-middle')).toBe(true);
  });
});
