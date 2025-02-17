import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplateIdDirective } from './template-id.directive';
import { Component, computed, DebugElement, TemplateRef, viewChild } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  imports: [TemplateIdDirective, NgTemplateOutlet],
  template: `
    <ng-template cTemplateId="test">Inner Text</ng-template>
    <div class="test">
      <ng-container *ngTemplateOutlet="id()" />
    </div>
  `
})
class TestComponent {
  readonly templateId = viewChild(TemplateIdDirective);

  readonly id = computed(() => this.templateId()?.templateRef);
}

describe('TemplateIdDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent],
      providers: [TemplateRef]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    debugElement = fixture.debugElement.query(By.css('.test'));
    component = fixture.componentInstance;

    fixture.detectChanges();
  });
  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new TemplateIdDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should create a template with innerText', () => {
    expect(debugElement.nativeElement.innerText).toBe('Inner Text');
  });

  it('should get the template id', () => {
    expect(component.templateId()?.id).toBe('test');
    expect(component.templateId()?.templateRef).toEqual(jasmine.any(TemplateRef));
  });
});
