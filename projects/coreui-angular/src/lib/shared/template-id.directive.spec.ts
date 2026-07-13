import { NgTemplateOutlet } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, computed, DebugElement, TemplateRef, viewChild } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TemplateIdDirective } from './template-id.directive';

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

  readonly id = computed(() => this.templateId()?.templateRef ?? null);
}

describe('TemplateIdDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    debugElement = fixture.debugElement.query(By.css('.test'));
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create a template with innerText', () => {
    expect(debugElement.nativeElement.innerText).toBe('Inner Text');
  });

  it('should return the correct id when cTemplateId is set', () => {
    expect(component.templateId()?.id).toBe('test');
  });

  it('should correctly bind the templateRef to the directive', () => {
    expect(component.templateId()?.templateRef).toBeInstanceOf(TemplateRef);
  });

  it('should handle multiple instances of the directive with unique ids', () => {
    const secondFixture = TestBed.createComponent(TestComponent);
    const secondComponent = secondFixture.componentInstance;
    secondFixture.detectChanges();

    expect(component.templateId()?.id).toBe('test');
    expect(secondComponent.templateId()?.id).toBe('test');
  });
});
