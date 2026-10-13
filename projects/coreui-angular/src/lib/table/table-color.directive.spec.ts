import { inputBinding, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Colors } from '../coreui.types';
import { TableColorDirective } from './table-color.directive';

describe('TableColorDirective', () => {
  it('should create an instance', () => {
    const fixture = TestBed.createDirective(TableColorDirective, { tagName: 'tr' });
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css classes', async () => {
    const color = signal<Colors | undefined>(undefined);
    const fixture = TestBed.createDirective(TableColorDirective, {
      tagName: 'tr',
      bindings: [inputBinding('cTableColor', color)]
    });
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.length).toBe(0);
    color.set('danger');
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('table-danger')).toBe(true);
  });
});
