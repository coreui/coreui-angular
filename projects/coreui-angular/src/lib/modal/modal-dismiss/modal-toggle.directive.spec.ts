import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ModalToggleDirective } from './modal-toggle.directive';

@Component({
  template: '<button cModalToggle>Dismiss</button>',
  imports: [ModalToggleDirective]
})
class TestComponent {}

describe('ModalDismissDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.directive(ModalToggleDirective));
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new ModalToggleDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should handle click', fakeAsync(() => {
    const directive = debugElement.injector.get(ModalToggleDirective);
    const spy = spyOn(directive, 'dismiss').and.callThrough();
    debugElement.nativeElement.click();
    tick();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(jasmine.any(MouseEvent));
  }));
});
