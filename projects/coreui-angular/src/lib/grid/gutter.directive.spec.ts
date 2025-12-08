import { Component, DebugElement, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GutterDirective } from './gutter.directive';
import { GutterBreakpoints, Gutters, IGutterObject } from './gutter.type';

@Component({
  imports: [GutterDirective],
  template: '<div [gutter]="gutter()"></div>'
})
export class TestComponent {
  readonly gutter = signal<IGutterObject | GutterBreakpoints | Gutters>(5);
}

describe('GutterDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent]
    });
    fixture = TestBed.createComponent(TestComponent);
    debugElement = fixture.debugElement.query(By.directive(GutterDirective));
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new GutterDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should have css class', () => {
    expect(debugElement.nativeElement).toHaveClass('g-5');
    fixture.componentInstance.gutter.set({ gx: 2, gy: 1 });
    fixture.detectChanges();
    expect(debugElement.nativeElement).toHaveClass('gx-2');
    expect(debugElement.nativeElement).toHaveClass('gy-1');
    fixture.componentInstance.gutter.set({ md: { g: 3 } });
    fixture.detectChanges();
    expect(debugElement.nativeElement).toHaveClass('g-md-3');
  });
});
