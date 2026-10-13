import { inputBinding } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { TableDirective } from './table.directive';

describe('TableDirective', () => {
  let fixture: DirectiveFixture<TableDirective>;
  let directive: TableDirective;

  beforeEach(async () => {
    fixture = TestBed.createDirective(TableDirective, {
      bindings: [
        inputBinding('align', () => 'middle'),
        inputBinding('borderColor', () => 'primary'),
        inputBinding('bordered', () => true),
        inputBinding('borderless', () => false),
        inputBinding('caption', () => 'top'),
        inputBinding('color', () => 'secondary'),
        inputBinding('hover', () => true),
        inputBinding('small', () => true),
        inputBinding('striped', () => true),
        inputBinding('stripedColumns', () => true),
        inputBinding('responsive', () => true)
      ]
    });
    directive = fixture.directiveInstance;
    await fixture.whenStable();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should apply align input', () => {
    expect(directive.align()).toBe('middle');
  });

  it('should apply borderColor input', () => {
    expect(directive.borderColor()).toBe('primary');
  });

  it('should apply bordered input', () => {
    expect(directive.bordered()).toBe(true);
  });

  it('should apply borderless input', () => {
    expect(directive.borderless()).toBe(false);
  });

  it('should apply caption input', () => {
    expect(directive.caption()).toBe('top');
  });

  it('should apply color input', () => {
    expect(directive.color()).toBe('secondary');
  });

  it('should have responsive wrapper', () => {
    expect(fixture.nativeElement.parentElement?.classList).toContain('table-responsive');
  });

  it('should apply correct host classes', () => {
    const classes = fixture.nativeElement.classList;

    expect(classes).toContain('table');
    expect(classes).toContain('align-middle');
    expect(classes).toContain('caption-top');
    expect(classes).toContain('border-primary');
    expect(classes).toContain('table-bordered');
    expect(classes).toContain('table-secondary');
    expect(classes).toContain('table-hover');
    expect(classes).toContain('table-sm');
    expect(classes).toContain('table-striped');
    expect(classes).toContain('table-striped-columns');
  });
});
