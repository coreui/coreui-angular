/// <reference types="vitest/globals" />
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ModalToggleDirective } from './modal-toggle.directive';
import { vi } from 'vitest';
import { ModalService } from '../modal.service';

class MockElementRef extends ElementRef {}

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
      imports: [TestComponent],
      providers: [{ provide: ElementRef, useClass: MockElementRef }]
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

  it('should handle click', async () => {
    const directive = debugElement.injector.get(ModalToggleDirective);
    const spy = vi.spyOn(directive, 'dismiss');
    debugElement.nativeElement.click();
    await fixture.whenStable();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(expect.any(MouseEvent));
  });

  it('should pass its host as the trigger', () => {
    const toggle = vi.spyOn(TestBed.inject(ModalService), 'toggle');
    debugElement.nativeElement.click();
    expect(toggle).toHaveBeenCalledWith({ show: 'toggle', id: '', trigger: debugElement.nativeElement });
  });
});
