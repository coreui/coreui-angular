import { Component, DebugElement, ElementRef, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TableDirective } from './table.directive';
import { Colors } from '../coreui.types';
import { TableActiveDirective } from './table-active.directive';

@Component({
  template: `
    <table
      cTable
      [align]="align"
      [borderColor]="borderColor"
      [bordered]="bordered"
      [borderless]="borderless"
      [caption]="caption"
      [color]="color"
      [hover]="hover"
      [small]="small"
      [striped]="striped"
      [stripedColumns]="stripedColumns"
      [responsive]="true"
    ></table>
  `,
  imports: [TableDirective]
})
class TestComponent {
  align: 'bottom' | 'middle' | 'top' = 'middle';
  borderColor: Colors = 'primary';
  bordered: boolean = true;
  borderless: boolean = false;
  caption = 'top' as const;
  color: Colors = 'secondary';
  hover: boolean = true;
  small: boolean = true;
  striped: boolean = true;
  stripedColumns: boolean = true;
}

class MockElementRef extends ElementRef {}

describe('TableDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;
  let directive: TableDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent],
      providers: [Renderer2, { provide: ElementRef, useClass: MockElementRef }]
    });
    fixture = TestBed.createComponent(TestComponent);
    debugElement = fixture.debugElement.query(By.directive(TableDirective));
    directive = debugElement.injector.get(TableDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
    TestBed.runInInjectionContext(() => {
      const directive = new TableActiveDirective();
      expect(directive).toBeTruthy();
    });
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
    const parentElement = debugElement.nativeElement.parentElement;
    const classes = parentElement.classList;
    expect(classes).toContain('table-responsive');
  });

  it('should apply correct host classes', () => {
    const classes = debugElement.nativeElement.classList;

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
