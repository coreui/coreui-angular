import { inputBinding } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ColDirective, ColOffsetType, ColOrderType } from './col.directive';

describe('ColDirective', () => {
  it('should create an instance', () => {
    const fixture = TestBed.createDirective(ColDirective, { tagName: 'div' });
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css class for breakpoint inputs', () => {
    const fixture = TestBed.createDirective(ColDirective, {
      tagName: 'div',
      bindings: [inputBinding('cCol', () => ''), inputBinding('lg', () => 'auto'), inputBinding('xl', () => true)]
    });
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('col')).toBe(true);
    expect(fixture.nativeElement.classList.contains('col-lg-auto')).toBe(true);
    expect(fixture.nativeElement.classList.contains('col-xl')).toBe(true);
  });

  it('should have css class for order, offset and every breakpoint', () => {
    const fixture = TestBed.createDirective(ColDirective, {
      tagName: 'div',
      bindings: [
        inputBinding('cCol', () => ''),
        inputBinding('order', () => 1),
        inputBinding('offset', () => 1),
        inputBinding('xs', () => 6),
        inputBinding('sm', () => 5),
        inputBinding('md', () => 4),
        inputBinding('lg', () => 3),
        inputBinding('xl', () => 2),
        inputBinding('xxl', () => 1)
      ]
    });
    fixture.detectChanges();
    const classList = fixture.nativeElement.classList;
    expect(classList.contains('col-6')).toBe(true);
    expect(classList.contains('order-1')).toBe(true);
    expect(classList.contains('offset-1')).toBe(true);
    expect(classList.contains('col-sm-5')).toBe(true);
    expect(classList.contains('col-md-4')).toBe(true);
    expect(classList.contains('col-lg-3')).toBe(true);
    expect(classList.contains('col-xl-2')).toBe(true);
    expect(classList.contains('col-xxl-1')).toBe(true);
  });

  it('should have css class for responsive order and offset', () => {
    const offset: ColOffsetType = { md: 2, xs: 1 };
    const order: ColOrderType = { xl: 'first', xxl: 'last', md: 1, xs: 1 };
    const fixture = TestBed.createDirective(ColDirective, {
      tagName: 'div',
      bindings: [
        inputBinding('cCol', () => undefined),
        inputBinding('order', () => order),
        inputBinding('offset', () => offset)
      ]
    });
    fixture.detectChanges();
    const classList = fixture.nativeElement.classList;
    expect(classList.contains('col')).toBe(true);
    expect(classList.contains('offset-md-2')).toBe(true);
    expect(classList.contains('order-md-1')).toBe(true);
    expect(classList.contains('order-xl-first')).toBe(true);
    expect(classList.contains('order-xxl-last')).toBe(true);
  });
});
