import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { By } from '@angular/platform-browser';
import { VisibleDirective } from './visible.directive';

@Component({
  imports: [VisibleDirective],
  template: '<ng-template [cVisible]="visible()">Test Node</ng-template>'
})
class TestComponent {
  readonly visible = input(true);
}

describe('VisibleDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent],
      providers: [TemplateRef, ViewContainerRef]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.directive(VisibleDirective));
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new VisibleDirective();
      expect(directive).toBeTruthy();
    });
  });
});
