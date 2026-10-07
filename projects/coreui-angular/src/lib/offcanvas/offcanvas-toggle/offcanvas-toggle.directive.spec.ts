import { Component, DebugElement, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { take } from 'rxjs/operators';

import { OffcanvasToggleDirective } from './offcanvas-toggle.directive';
import { OffcanvasService } from '../offcanvas.service';

class MockElementRef extends ElementRef {}

@Component({
  template: ` <button cOffcanvasToggle="OffcanvasEnd">OffcanvasToggle Test</button>`,
  imports: [OffcanvasToggleDirective]
})
class TestComponent {}

describe('OffcanvasToggleDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;
  let service: OffcanvasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OffcanvasToggleDirective, TestComponent],
      providers: [OffcanvasService, { provide: ElementRef, useClass: MockElementRef }]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('button'));
    service = TestBed.inject(OffcanvasService);
    fixture.detectChanges(); // initial binding
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new OffcanvasToggleDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should toggle offcanvas on click', async () => {
    let action;
    service.offcanvasState$.pipe(take(1)).subscribe((value) => (action = value));
    debugElement.nativeElement.dispatchEvent(new MouseEvent('click'));
    expect(action).toEqual({ show: 'toggle', id: 'OffcanvasEnd', trigger: debugElement.nativeElement });
  });
});
