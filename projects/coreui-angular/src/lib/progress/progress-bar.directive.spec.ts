import { Component, ComponentRef, DebugElement, ElementRef, input, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressBarDirective } from './progress-bar.directive';
import { By } from '@angular/platform-browser';
import { ProgressService } from './progress.service';

class MockElementRef extends ElementRef {}

@Component({
  template: `<div cProgressBar [value]="value()" [color]="color()" variant="striped" animated></div>`,
  selector: 'c-test',
  imports: [ProgressBarDirective]
})
export class TestComponent {
  readonly value = input(42);
  readonly color = input('success');
}

describe('ProgressBarDirective', () => {
  let directive: ProgressBarDirective;
  let debugElement: DebugElement;
  let fixture: ComponentFixture<TestComponent>;
  let componentRef: ComponentRef<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Renderer2, { provide: ElementRef, useClass: MockElementRef }, ProgressService],
      imports: [TestComponent]
    });
    fixture = TestBed.createComponent(TestComponent);
    componentRef = fixture.componentRef;
    debugElement = fixture.debugElement.query(By.directive(ProgressBarDirective));
    directive = debugElement.injector.get(ProgressBarDirective);
    fixture.detectChanges();

    // TestBed.runInInjectionContext(() => {
    //   directive = new ProgressBarDirective();
    // });
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

  it('should have aria-* attributes', () => {
    expect(debugElement.nativeElement.getAttribute('aria-valuenow')).toBe('42');
    expect(debugElement.nativeElement.getAttribute('aria-valuemin')).toBe('0');
    expect(debugElement.nativeElement.getAttribute('aria-valuemax')).toBe('100');
    expect(debugElement.nativeElement.getAttribute('role')).toBe('progressbar');
    componentRef.setInput('value', undefined);
    fixture.detectChanges();
    expect(debugElement.nativeElement.getAttribute('aria-valuenow')).toBeNull();
    expect(debugElement.nativeElement.getAttribute('aria-valuemin')).toBeNull();
    expect(debugElement.nativeElement.getAttribute('aria-valuemax')).toBeNull();
    expect(debugElement.nativeElement.getAttribute('role')).toBeNull();
  });
});
