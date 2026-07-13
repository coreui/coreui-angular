import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ComponentRef, DebugElement, input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormFloatingDirective } from './form-floating.directive';
import { FormControlDirective } from '../form-control/form-control.directive';
import { FormLabelDirective } from '../form-label/form-label.directive';

@Component({
  imports: [FormFloatingDirective, FormControlDirective, FormLabelDirective],
  template: `
    <div [cFormFloating]="floating()">
      <textarea cFormControl id="floatingTextarea" placeholder="Leave a comment here"></textarea>
      <label cLabel for="floatingTextarea">Comments</label>
    </div>
  `
})
class TestComponent {
  readonly floating = input(false);
}

describe('FormFloatingDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;
  let componentRef: ComponentRef<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    debugElement = fixture.debugElement.query(By.directive(FormFloatingDirective));
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new FormFloatingDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should have css classes', () => {
    expect(debugElement.nativeElement).not.toHaveClass('form-floating');
    componentRef.setInput('floating', true);
    fixture.detectChanges();
    expect(debugElement.nativeElement).toHaveClass('form-floating');
    componentRef.setInput('floating', false);
    fixture.detectChanges();
    expect(debugElement.nativeElement).not.toHaveClass('form-floating');
  });
});
