import { CollapseDirective } from './collapse.directive';
import { Component, DebugElement, ElementRef, Renderer2, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

class MockElementRef extends ElementRef {}

@Component({
  template: '<div cCollapse [horizontal]="horizontal()" [(visible)]="visible" [animate]="false">Test</div>',
  imports: [CollapseDirective]
})
class TestComponent {
  readonly horizontal = signal(false);
  readonly visible = signal(false);
}

describe('CollapseDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let elementRef: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent, CollapseDirective],
      providers: [{ provide: ElementRef, useClass: MockElementRef }, Renderer2]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    elementRef = fixture.debugElement.query(By.directive(CollapseDirective));
    component.visible.set(false);
    fixture.detectChanges(); // initial binding
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new CollapseDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should have css classes', () => {
    expect(elementRef.nativeElement.classList.contains('collapse-horizontal')).toBe(false);
    component.horizontal.set(true);
    component.visible.set(true);
    fixture.detectChanges();
    expect(elementRef.nativeElement.classList.contains('collapse-horizontal')).toBe(true);
    expect(elementRef.nativeElement.style.display).toBe('');
    component.horizontal.set(false);
    component.visible.set(false);
    fixture.detectChanges();
    expect(elementRef.nativeElement.classList.contains('collapse-horizontal')).toBe(false);
  });
});
