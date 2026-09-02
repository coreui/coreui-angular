import { Component, DebugElement, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ChangeDetectorRef } from '@angular/core';
import { TabContentRefDirective } from './tab-content-ref.directive';

@Component({
  template: '<a [cTabContent]="undefined" [disabled]="disabled()"></a>',
  imports: [TabContentRefDirective]
})
class TestComponent {
  readonly disabled = signal(false);
}

describe('TabContentRefDirective', () => {
  it('should create an instance', () => {
    TestBed.configureTestingModule({
      providers: [ChangeDetectorRef]
    });
    TestBed.runInInjectionContext(() => {
      const directive = new TabContentRefDirective();
      expect(directive).toBeTruthy();
    });
  });

  describe('on a host element', () => {
    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;
    let elementRef: DebugElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
      elementRef = fixture.debugElement.query(By.directive(TabContentRefDirective));
      fixture.detectChanges();
    });

    it('should not set tabindex when enabled', () => {
      expect(elementRef.nativeElement.getAttribute('tabindex')).toBeNull();
    });

    it('should set tabindex to -1 when disabled', () => {
      component.disabled.set(true);
      fixture.detectChanges();
      expect(elementRef.nativeElement.getAttribute('tabindex')).toBe('-1');
    });
  });
});
