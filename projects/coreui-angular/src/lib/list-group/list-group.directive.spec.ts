import { inputBinding, signal, WritableSignal } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { Sizes } from '../coreui.types';
import { ListGroupDirective } from './list-group.directive';

describe('ListGroupDirective', () => {
  let flush: WritableSignal<boolean>;
  let horizontal: WritableSignal<boolean | Sizes | undefined>;
  let fixture: DirectiveFixture<ListGroupDirective>;

  beforeEach(async () => {
    flush = signal(false);
    horizontal = signal<boolean | Sizes | undefined>(undefined);
    fixture = TestBed.createDirective(ListGroupDirective, {
      tagName: 'ul',
      bindings: [inputBinding('flush', flush), inputBinding('horizontal', horizontal)]
    });
    await fixture.whenStable();
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css classes', async () => {
    expect(fixture.nativeElement.classList.contains('list-group')).toBe(true);
    expect(fixture.nativeElement.classList.length).toBe(1);
    flush.set(true);
    horizontal.set(true);
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('list-group-flush')).toBe(true);
    expect(fixture.nativeElement.classList.contains('list-group-horizontal')).toBe(true);
    horizontal.set('md');
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('list-group-horizontal')).toBe(false);
    expect(fixture.nativeElement.classList.contains('list-group-horizontal-md')).toBe(true);
  });
});
