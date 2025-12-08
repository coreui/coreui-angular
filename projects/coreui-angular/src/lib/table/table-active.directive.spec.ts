import { Component, DebugElement, input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TableActiveDirective } from './table-active.directive';

@Component({
  imports: [TableActiveDirective],
  template: ` <tr [cTableActive]="active()"></tr>`
})
class TestComponent {
  readonly active = input(false);
}

describe('TableActiveDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;
  let directive: TableActiveDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent]
    });
    fixture = TestBed.createComponent(TestComponent);
    debugElement = fixture.debugElement.query(By.directive(TableActiveDirective));
    directive = debugElement.injector.get(TableActiveDirective);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
    TestBed.runInInjectionContext(() => {
      const directive = new TableActiveDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should add class "table-active" when active is true', () => {
    fixture.componentRef.setInput('active', true);
    fixture.detectChanges();
    expect(debugElement.nativeElement.classList).toContain('table-active');
  });

  it('should not add class "table-active" when active is false', () => {
    fixture.componentRef.setInput('active', false);
    fixture.detectChanges();
    expect(debugElement.nativeElement.classList).not.toContain('table-active');
  });
});
