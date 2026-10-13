import { inputBinding, signal, WritableSignal } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { CardImgDirective } from './card-img.directive';

describe('CardImgDirective', () => {
  let orientation: WritableSignal<'top' | 'bottom' | 'start' | 'end' | undefined>;
  let fixture: DirectiveFixture<CardImgDirective>;

  beforeEach(async () => {
    orientation = signal<'top' | 'bottom' | 'start' | 'end' | undefined>(undefined);
    fixture = TestBed.createDirective(CardImgDirective, {
      tagName: 'img',
      bindings: [inputBinding('cCardImg', orientation)]
    });
    await fixture.whenStable();
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css classes', async () => {
    orientation.set('start');
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('rounded-start')).toBe(true);
    orientation.set('end');
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('rounded-end')).toBe(true);
    orientation.set('top');
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('card-img-top')).toBe(true);
    orientation.set('bottom');
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('card-img-bottom')).toBe(true);
  });
});
